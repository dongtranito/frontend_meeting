// ScriptLine.jsx  file này là component hiển thị transcript của từng dòng nói
import React, { useState } from "react";

const ScriptLine = ({ speaker, text, isCurrent, onRename, time }) => {
    const [editing, setEditing] = useState(false);
    const [nameInput, setNameInput] = useState(speaker);

    const handleBlur = () => {
        setEditing(false);
        if (nameInput !== speaker && onRename) {
            onRename(nameInput);
        }
    };

    return (
        <div
            className={`p-3 rounded-md shadow-sm border transition-all duration-200 ${isCurrent ? "bg-yellow-100 border-yellow-400" : "bg-gray-100"
                }`}
        >
            <div className="text-sm text-gray-600 mb-1">
                {editing ? (
                    <input
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        onBlur={handleBlur}
                        autoFocus
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.target.blur(); // 👈 gọi blur giống như khi click ra ngoài
                            }
                        }}
                        className="border rounded px-1 text-sm"
                    />
                ) : (
                    <span
                        onClick={() => setEditing(true)}
                        className="font-semibold text-blue-600 cursor-pointer"
                    >
                        {time}  {speaker}
                    </span>
                )}
            </div>
            <div className="text-gray-800 text-sm whitespace-pre-line">{text}</div>
        </div>
    );
};

export default ScriptLine;
