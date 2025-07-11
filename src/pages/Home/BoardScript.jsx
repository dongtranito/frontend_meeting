// BoardScript.jsx
import React, { useEffect, useRef, useState } from "react";
import ScriptLine from "./ScriptLine";

const BoardScript = ({ scripts, currentText, onRenameSpeaker }) => {
  const scrollRef = useRef(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    if (autoScrollEnabled && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scripts.length, currentText, autoScrollEnabled]);

  return (
    <div>
      <div className="flex justify-end mb-2 px-4 ">
        <button
          onClick={() => setAutoScrollEnabled((prev) => !prev)}
          className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
        >
          {autoScrollEnabled ? "🔒 Tự cuộn: Bật" : "🔓 Tự cuộn: Tắt"}
        </button>
      </div>

      <div className="p-4 space-y-3 max-h-[515px] overflow-y-auto bg-white  mt-2">
        {scripts.map((line, index) => (
          <ScriptLine
            key={line.id || index}
            speaker={line.speaker}
            text={line.text}
            isCurrent={false}
            time={line.time}
            onRename={(newName) => onRenameSpeaker(line.speaker, newName)}
          />
        ))}
        {currentText && (
          <ScriptLine
            speaker="🎤 Đang nói..."
            text={currentText}
            isCurrent={true}
          />
        )}
        <div ref={scrollRef} />
      </div>
    </div>
  );
};

export default BoardScript;
