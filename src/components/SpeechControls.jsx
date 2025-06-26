// SpeechControls.jsx file này là các component các nút điều khiển bắt đầu tạm dừng ghi âm ... 
import React from "react";

const SpeechControls = ({ status, onStart, onPause, onResume, onStop }) => {
    return (
        <div className="mt-4 space-x-2">
            {status === "idle" && (
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition"
                    onClick={onStart}
                >
                    🎙️ Bắt đầu nói
                </button>
            )}

            {status === "recording" && (
                <>
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl transition"
                        onClick={onPause}
                    >
                        ⏸️ Tạm dừng
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
                        onClick={onStop}
                    >
                        ⏹️ Dừng
                    </button>
                </>
            )}

            {status === "paused" && (
                <>
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition"
                        onClick={onResume}
                    >
                        ▶️ Tiếp tục
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
                        onClick={onStop}
                    >
                        ⏹️ Dừng
                    </button>
                </>
            )}
        </div>
    );
};

export default SpeechControls;
