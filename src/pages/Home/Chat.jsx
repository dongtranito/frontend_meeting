import { useState, useRef, useEffect } from "react";
import { Send, Plus } from "lucide-react";

const Chat = ({ onClick }) => {
    const [input, setInput] = useState("");
    const textareaRef = useRef(null);

    // Tự động điều chỉnh chiều cao textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height =
                textareaRef.current.scrollHeight + "px";
        }
    }, [input]);

    const handleSend = () => {
        onClick(input); // 👈 Truyền text nhập vào
        setInput("");
        console.log("đang gửi:", input);
    };

    return (
        <div className="flex items-end border rounded-3xl px-4 py-2 shadow-xl bg-white w-[80%] mx-auto">
            {/* Nút Plus */}
            <button className="p-2 rounded-full hover:bg-gray-200 transition">
                <Plus size={19} />
            </button>

            {/* Vùng nhập và nút Send */}
            <div className="flex flex-1 items-end mx-2 space-x-2 h-full pb-1.5">
                <textarea
                    ref={textareaRef}
                    rows={1}
                    className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400 resize-none overflow-hidden max-h-[200px] overflow-y-auto"
                    placeholder="Ask anything"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
            </div>

            {/* Nút Send */}
            <button
                className="p-2 rounded-full hover:bg-gray-200 transition self-end"
                onClick={handleSend}
            >
                <Send size={18} />
            </button>
        </div>
    );
};

export default Chat;
