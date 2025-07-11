import React, { useState, useRef } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import BoardScript from "./BoardScript";
import { formatMilliseconds } from "../../utils/time";
import { useTimer } from "../../hooks/useTimer";
import SpeechControls from "./SpeechControls";



const SpeechToText = ({ onTranscriptProcessed }) => {
    const [status, setStatus] = useState("idle"); // "idle" | "recording" | "paused"
    const [currentText, setCurrentText] = useState("");
    const transcriberRef = useRef(null);
    const transcriptRef = useRef([]);
    const [speakerMap, setSpeakerMap] = useState({});
    const speakerMapRef = useRef({});
    console.log("hi")
    const {
        elapsedTime,
        elapsedTimeRef,
        start: startTimer,
        pause: pauseTimer,
        reset: resetTimer
    } = useTimer();


    const updateSpeakerName = (oldName, newName) => {
        const newMap = { ...speakerMap, [oldName]: newName };
        transcriptRef.current = transcriptRef.current.map(line =>
            line.speaker === oldName ? { ...line, speaker: newName } : line
        );
        setSpeakerMap(newMap);
        speakerMapRef.current = newMap;
    };




    const startRecognition = async () => {
        setStatus("recording");
        setCurrentText("🎤 Đang nghe...");
        transcriptRef.current = [];

        startTimer();
        try {
            const res = await fetch("http://localhost:3001/api/token");
            const { token, region } = await res.json();

            const speechConfig = sdk.SpeechConfig.fromAuthorizationToken(token, region);
            speechConfig.speechRecognitionLanguage = "vi-VN";

            speechConfig.setProperty(
                sdk.PropertyId.SpeechServiceConnection_EnableSpeakerDiarization,
                "true"
            );
            speechConfig.setProperty(
                sdk.PropertyId.SpeechServiceResponse_DiarizeSpeakerSegments,
                "true"
            );

            let audioConfig;
            try {
                audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
            } catch (err) {
                console.error("Không thể lấy mic:", err);
                setCurrentText("❌ Không thể truy cập micro");
                setStatus("idle");
                return;
            }
            const transcriber = new sdk.ConversationTranscriber(speechConfig, audioConfig);
            transcriberRef.current = transcriber;

            transcriber.transcribing = (s, e) => {
                setCurrentText(e.result.text);
            };

            transcriber.transcribed = (s, e) => {
                if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {

                    const parsed = JSON.parse(e.result.json);
                    const id = parsed.Id;
                    const displayText = parsed.DisplayText || "";
                    const speakerId = parsed.SpeakerId || "Không rõ người nói";
                    if (
                        speakerId.toLowerCase() === "unknown" ||
                        displayText.trim().split(/\s+/).length < 5
                    ) {
                        return; // bỏ qua vòng lặp
                    }
                    const speaker = speakerMapRef.current[speakerId] || speakerId;


                    const durationInMs = parsed.Duration / 10000; // Azure trả về đơn vị 100-nanoseconds => chia 10,000 để ra milliseconds
                    const speechStartTime = elapsedTimeRef.current - durationInMs;
                    let time = formatMilliseconds(speechStartTime);

                    transcriptRef.current.push({ speaker, text: displayText, time: time });
                    setCurrentText("");
                }
            };

            transcriber.canceled = (s, e) => {
                console.error("Canceled Event", e);
                const errorMsg = e.errorDetails || "Không rõ lỗi";
                setCurrentText(`⛔ Nhận diện bị hủy: ${errorMsg}`);
                setStatus("idle");
                resetTimer();
            };

            transcriber.startTranscribingAsync(
                () => console.log("🎙️ Bắt đầu transcribe..."),
                err => {
                    console.error("Lỗi startTranscribingAsync:", err);
                    setCurrentText("❌ Không thể bắt đầu nhận diện.");
                    setStatus("idle");
                    resetTimer()
                }
            );
        } catch (err) {
            console.error("Speech error:", err);
            setCurrentText("❌ Lỗi khi nhận diện.");
            setStatus("idle");
            resetTimer();
        }
    };

    const pauseRecognition = () => {
        if (transcriberRef.current) {
            transcriberRef.current.stopTranscribingAsync(
                () => {
                    setStatus("paused");
                    setCurrentText("⏸️ Đã tạm dừng");
                    pauseTimer();
                },
                err => console.error("Lỗi khi tạm dừng:", err)
            );
        }
    };

    const resumeRecognition = () => {
        if (transcriberRef.current) {
            transcriberRef.current.startTranscribingAsync(
                () => {
                    setStatus("recording");
                    setCurrentText("▶️ Đang tiếp tục...");
                    startTimer();

                },
                err => {
                    console.error("Lỗi khi tiếp tục:", err);
                    setCurrentText("❌ Không thể tiếp tục.");
                    resetTimer();
                }
            );
        }
    };

    const stopRecognition = () => {
        if (transcriberRef.current) {
            transcriberRef.current.stopTranscribingAsync(
                () => {
                    transcriberRef.current = null;
                    setStatus("idle");
                    setCurrentText("⏹️ Đã dừng hoàn toàn");
                    resetTimer();

                    // ❌ Không gửi về backend ở đây nữa
                },
                err => console.error("Lỗi khi dừng:", err)
            );
        }
    };


    const handleSubmitTranscript = () => {
        if (transcriptRef.current.length === 0) {
            alert("Chưa có nội dung để gửi.");
            return;
        }

        fetch("http://localhost:3001/api/submitTranscript", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ transcript: transcriptRef.current })
        })
            .then(res => {
                if (!res.ok) throw new Error("HTTP error " + res.status);
                return res.json();
            })
            .then(data => {
                console.log("Backend response:", data);
                onTranscriptProcessed(data);

                alert("✅ Gửi biên bản thành công!");
                // Nếu muốn xoá transcript sau khi gửi:
                // transcriptRef.current = [];
            })
            .catch(err => {
                console.error("Gửi về backend lỗi:", err);
                alert("❌ Gửi thất bại.");
            });
    };


    return (
        <div className="w-full mx-auto py-4 px-6 bg-white rounded text-center relative h-full">

            {status === "idle" && transcriptRef.current.length > 0 && (
                <button
                    onClick={handleSubmitTranscript}
                    className="absolute bottom-4 right-10 px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
                >
                    📄 Tạo biên bản
                </button>)}

            <SpeechControls
                status={status}
                onStart={startRecognition}
                onPause={pauseRecognition}
                onResume={resumeRecognition}
                onStop={stopRecognition}
                time={formatMilliseconds(elapsedTimeRef.current)}
            />
            <BoardScript
                scripts={transcriptRef.current}
                currentText={currentText}
                onRenameSpeaker={updateSpeakerName}
            />

        </div>
    );
};

export default SpeechToText;
