import React, { useState, useEffect, useRef } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import BoardScript from "./BoardScript";
import { formatMilliseconds } from "../../utils/time";
import { useTimer } from "../../hooks/useTimer";
import SpeechControls from "./SpeechControls";
import Chat from "./Chat";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import { useParams, useNavigate } from "react-router-dom";

const SpeechToText = ({ onTranscriptProcessed }) => {
    const [status, setStatus] = useState("idle"); // "idle" | "recording" | "paused"
    const [currentText, setCurrentText] = useState("");
    const [transcript, setTranscript] = useState([]);
    const [speakerMap, setSpeakerMap] = useState({});
    const [summaryData, setSummaryData] = useState(null);
    const [bienbanData, setBienbanData] = useState("chưa có biên bản cũ");
    const [thoiGianNop, setThoiGianNop] = useState(null);
    const [meetingId, setMeetingId] = useState(null);

    const navigate = useNavigate();
    const { meetingID } = useParams();  // khi mà không có cái meetingID này thì ta lấy dữ liệu từ local. ngược lại thì fetch dữ liệu
    // console.log(meetingID)

    const transcriberRef = useRef(null);
    const speakerMapRef = useRef({});
    const {
        elapsedTime,
        elapsedTimeRef,
        start: startTimer,
        pause: pauseTimer,
        reset: resetTimer,
    } = useTimer();

    // Load transcript từ localStorage khi vào trang
    useEffect(() => {

        if (meetingID) {
            fetchWithAuth(`http://localhost:3001/getMeetingDetail/${meetingID}`, {
                method: "GET"
            })
                .then(res => res.json())
                .then(data => {

                    // console.log(data)
                    onTranscriptProcessed(data);
                    setBienbanData(data.bienBanData);
                    setSummaryData(data.summaryData);
                    setMeetingId(data.meetingId);
                    setTranscript(data.transcript);     
                    // Cập nhật dữ liệu vào localStorage (khi nhận được sumaryData)
                    localStorage.setItem("transcriptRaw", JSON.stringify(data));

                });
        } else {
            const transcriptRaw = localStorage.getItem("transcriptRaw");
            if (transcriptRaw) {
                const parsed = JSON.parse(transcriptRaw);
                setTranscript(parsed.transcript);
                setThoiGianNop(parsed.thoiGianKetThuc);
                setBienbanData(parsed.bienBanData);
                setSummaryData(parsed.summaryData);
                setMeetingId(parsed.meetingId || null);
                onTranscriptProcessed({
                    transcriptRaw: parsed,
                    summaryData: parsed.summaryData,
                    bienBanData: parsed.bienBanData,
                });
            }
        }
    }, []);


    const updateSpeakerName = (oldName, newName) => {
        const newMap = { ...speakerMap, [oldName]: newName };
        const updatedTranscript = transcript.map((line) =>
            line.speaker === oldName ? { ...line, speaker: newName } : line
        );
        setTranscript(updatedTranscript);
        setSpeakerMap(newMap);
        speakerMapRef.current = newMap;
    };

    const startRecognition = async () => {
        navigate("/");
        setStatus("recording");
        setCurrentText("🎤 Đang nghe...");
        setTranscript([]);
        setBienbanData("chưa có biên bản cũ");
        setMeetingId(null);
        setSummaryData(null);    // có set lại trạng thái của các biến này nhưng mà màn hình không thay đổi là tại vì không có truyền trạng thái đi, nhưng mà được cái là làm giá trị của nó thay đổi khi ta bắt đầu ghi âm lại 
        startTimer();

        localStorage.removeItem("transcriptRaw");
        try {
            const res = await fetchWithAuth("http://localhost:3001/api/token",
            );
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

            transcriber.transcribing = (s, e) => {
                setCurrentText(e.result.text);
            };

            transcriber.transcribed = (s, e) => {
                if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {
                    const parsed = JSON.parse(e.result.json);
                    const speakerId = parsed.SpeakerId || "Không rõ người nói";
                    const displayText = parsed.DisplayText || "";

                    if (
                        speakerId.toLowerCase() === "unknown" ||
                        displayText.trim().split(/\s+/).length < 5
                    ) return;

                    const speaker = speakerMapRef.current[speakerId] || speakerId;
                    const durationInMs = parsed.Duration / 10000;
                    const speechStartTime = elapsedTimeRef.current - durationInMs;
                    const time = formatMilliseconds(speechStartTime);

                    setTranscript((prev) => [
                        ...prev,
                        { speaker, text: displayText, time },
                    ]);
                    setCurrentText("");
                }
            };

            transcriber.canceled = (s, e) => {
                console.error("Canceled", e.errorDetails);
                setCurrentText("⛔ Nhận diện bị hủy");
                setStatus("idle");
                resetTimer();
            };

            transcriber.startTranscribingAsync(
                () => console.log("🎙️ Bắt đầu transcribe..."),
                (err) => {
                    console.error("Lỗi transcribe:", err);
                    setCurrentText("❌ Không thể bắt đầu nhận diện");
                    setStatus("idle");
                    resetTimer();
                }
            );
        } catch (err) {
            console.error("Speech error:", err);
            setCurrentText("❌ Lỗi khi nhận diện");
            setStatus("idle");
            resetTimer();
        }
    };

    const pauseRecognition = () => {
        transcriberRef.current?.stopTranscribingAsync(
            () => {
                setStatus("paused");
                setCurrentText("⏸️ Đã tạm dừng");
                pauseTimer();
            },
            (err) => console.error("Lỗi pause:", err)
        );
    };

    const resumeRecognition = () => {
        transcriberRef.current?.startTranscribingAsync(
            () => {
                setStatus("recording");
                setCurrentText("▶️ Đang tiếp tục...");
                startTimer();
            },
            (err) => {
                console.error("Lỗi resume:", err);
                setCurrentText("❌ Không thể tiếp tục.");
                resetTimer();
            }
        );
    };

    const stopRecognition = () => {
        transcriberRef.current?.stopTranscribingAsync(
            () => {
                transcriberRef.current = null;
                const thoiGian = new Date().toLocaleString("vi-VN");
                setThoiGianNop(thoiGian);
                setStatus("idle");
                setCurrentText("⏹️ Đã dừng hoàn toàn");
                resetTimer();
                localStorage.setItem("transcriptRaw", JSON.stringify({
                    transcript,
                    thoiGianKetThuc: thoiGianNop,
                }));
            },
            (err) => console.error("Lỗi stop:", err)
        );
    };


    // ở hàm này thì mình có thể gắn biến trạng thái đã gởi, hoặc đã gởi xong, xong rôi rồi truyền xuống component con cũng được, mà mình lỡ làm ở component con rồi thì thôi
    const handleSubmitTranscript = (transcriptChat) => {
        if (transcript.length === 0) {
            alert("Chưa có nội dung để gửi.");
            return;
        }

        return fetchWithAuth("http://localhost:3001/submitTranscript", {  // cái này là mình return về một promise, nếu muốn dễ nhìn thì viết bằng async 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                transcript,
                transcriptChat,
                thoiGianKetThuc: thoiGianNop,
                bienBanData: bienbanData,
                summaryData: summaryData,
                meetingId: meetingId,
            }),
            credentials: "include"
        })
            .then((res) => {
                if (!res.ok) throw new Error("HTTP error " + res.status);
                return res.json();
            })
            .then((data) => {
                onTranscriptProcessed(data);
                setBienbanData(data.bienBanData);
                setSummaryData(data.summaryData);
                setMeetingId(data.meetingId);
                // Cập nhật dữ liệu vào localStorage (khi nhận được sumaryData)
                localStorage.setItem("transcriptRaw", JSON.stringify(data));
            })
            .catch((err) => {
                console.error("Lỗi gửi:", err);
            });
    };

    return (
        <div className="w-full mx-auto py-4 px-6 bg-white rounded text-center relative h-full">
            {status === "idle" && transcript.length > 0 && (
                <div className="absolute bottom-4 w-full left-0">
                    <Chat onClick={handleSubmitTranscript} />
                </div>
            )}

            <SpeechControls
                status={status}
                onStart={startRecognition}
                onPause={pauseRecognition}
                onResume={resumeRecognition}
                onStop={stopRecognition}
                time={formatMilliseconds(elapsedTimeRef.current)}
            />

            <BoardScript
                scripts={transcript}
                currentText={currentText}
                onRenameSpeaker={updateSpeakerName}
            />
        </div>
    );
};

export default SpeechToText;
