// SpeechToText.jsx
import React, { useState, useRef } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import BoardScript from "./BoardScript";
import { formatMilliseconds } from "../utils/time";
const SpeechToText = () => {
    const [recognizing, setRecognizing] = useState(false);
    const [pauseRecognizing, setPauseRecognizing] = useState(false);
    const [currentText, setCurrentText] = useState("");
    const transcriberRef = useRef(null);
    const transcriptRef = useRef([]);
    const [speakerMap, setSpeakerMap] = useState({});  // dòng này là để tạo ra ánh xạ giữa tên người nói và id của azure
    const speakerMapRef = useRef({});
const startTimeRef = useRef(null);

    const updateSpeakerName = (oldName, newName) => {
        const newMap = { ...speakerMap, [oldName]: newName };

        // cập nhật lại transcript đã có
        transcriptRef.current = transcriptRef.current.map(line =>
            line.speaker === oldName ? { ...line, speaker: newName } : line
        );
        setSpeakerMap(newMap); // dùng để render các dòng mới
        speakerMapRef.current = newMap; // cập nhật ref thủ công

    };

    const startRecognition = async () => {
        setRecognizing(true);
        setPauseRecognizing(false);
        setCurrentText("🎤 Đang nghe...");
        transcriptRef.current = [];

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

            const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
            const transcriber = new sdk.ConversationTranscriber(speechConfig, audioConfig);
            transcriberRef.current = transcriber;
startTimeRef.current = Date.now();

            transcriber.transcribing = (s, e) => {
                setCurrentText(e.result.text);
            };

            transcriber.transcribed = (s, e) => {
                if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {
const now = Date.now();
const elapsedMs = now - startTimeRef.current;
const relativeTime = formatMilliseconds(elapsedMs); // 👉 định dạng kiểu 00:01:23


                    const parsed = JSON.parse(e.result.json);
                    const id = parsed.Id;
                    // const time = formatMicroseconds(parsed.Offset);
                    const displayText = parsed.DisplayText || "";
                    const speakerId = parsed.SpeakerId || "Không rõ người nói"; // chỗ này nó hiện ra id
                    const speaker = speakerMapRef.current[speakerId] || speakerId;
                    console.log("day là speaker", speaker);
                    console.log("day là speakerMap", speakerMapRef.current);
                    console.log("cai thu 3", speakerMapRef.current[speakerId]);


                    transcriptRef.current.push({ speaker, text: displayText, id, time:relativeTime  });
                    setCurrentText("");
                }
            };

            transcriber.canceled = () => {
                setCurrentText("⛔ MIC bị mất");
                setRecognizing(false);
                setPauseRecognizing(false);
            };

            transcriber.startTranscribingAsync(
                () => console.log("🎙️ Bắt đầu transcribe..."),
                err => {
                    console.error("Lỗi startTranscribingAsync:", err);
                    setCurrentText("❌ Không thể bắt đầu nhận diện.");
                    setRecognizing(false);
                }
            );
        } catch (err) {
            console.error("Speech error:", err);
            setCurrentText("❌ Lỗi khi nhận diện.");
            setRecognizing(false);
        }
    };

    const pauseRecognition = () => {
        if (transcriberRef.current) {
            transcriberRef.current.stopTranscribingAsync(
                () => {
                    setPauseRecognizing(true);
                    setCurrentText("⏸️ Đã tạm dừng");
                },
                err => console.error("Lỗi khi tạm dừng:", err)
            );
        }
    };

    const resumeRecognition = () => {
        if (transcriberRef.current) {
            transcriberRef.current.startTranscribingAsync(
                () => {
                    setPauseRecognizing(false);
                    setCurrentText("▶️ Đang tiếp tục...");
                },
                err => {
                    console.error("Lỗi khi tiếp tục:", err);
                    setCurrentText("❌ Không thể tiếp tục.");
                }
            );
        }
    };

    const stopRecognition = () => {
        
        if (transcriberRef.current) {
            transcriberRef.current.stopTranscribingAsync(
                () => {
                    transcriberRef.current = null;
                    setRecognizing(false);
                    setPauseRecognizing(false);
                    setCurrentText("⏹️ Đã dừng hoàn toàn");

                    fetch("http://localhost:3001/api/receiveSpeech", {
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
                            transcriptRef.current = [];
                        })
                        .catch(err => console.error("Gửi về backend lỗi:", err));
                },
                err => console.error("Lỗi khi dừng:", err)
            );
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl text-center">
            {!recognizing ? (
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition"
                    onClick={startRecognition}
                >
                    🎙️ Bắt đầu nói
                </button>
            ) : (
                <div className="mt-4 space-x-2">
                    {!pauseRecognizing ? (
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl transition"
                            onClick={pauseRecognition}
                        >
                            ⏸️ Tạm dừng
                        </button>
                    ) : (
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition"
                            onClick={resumeRecognition}
                        >
                            ▶️ Tiếp tục
                        </button>
                    )}
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
                        onClick={stopRecognition}
                    >
                        ⏹️ Dừng
                    </button>
                </div>
            )}

            <h1 className="text-xl font-bold mb-4">🎙 Nhận diện giọng nói với Azure</h1>
            <BoardScript scripts={transcriptRef.current} currentText={currentText} onRenameSpeaker={updateSpeakerName} />
        </div>
    );
};

export default SpeechToText;
