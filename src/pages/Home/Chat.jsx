import { useState, useRef, useEffect } from "react";
import { Send, Plus, Loader2 } from "lucide-react";

const Chat = ({ onClick }) => {
    const [input, setInput] = useState("");
    const [isSending, setIsSending] = useState(false);
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height =
                textareaRef.current.scrollHeight + "px";
        }
    }, [input]);

    useEffect (()=>{
        if (!isSending){
             textareaRef.current?.focus();
        }
    },[isSending])

    const handleSend = async () => {
        setIsSending(true);
        await onClick(input);
        setIsSending(false);
        
        setInput("");

    };

    return (
        <div className="relative w-[80%] mx-auto">
            {/* Overlay khi đang gửi */}
            {isSending && (
                <div className="absolute inset-1 bg-white/70 backdrop-blur-sm flex items-center justify-center z-10 rounded-3xl">
                    <Loader2 className="animate-spin text-gray-600" size={28} />
                </div>
            )}

            {/* Khung nhập chat */}
            <div className="flex items-end border rounded-3xl px-4 py-2 shadow-xl bg-white relative z-0">
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                    <Plus size={19} />
                </button>

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
                        disabled={isSending}
                    />
                </div>

                <button
                    className="p-2 rounded-full hover:bg-gray-200 transition self-end disabled:opacity-50"
                    onClick={handleSend}
                    disabled={isSending}
                >
                    <Send size={18} />
                </button>
            </div>
        </div>
    );
};

export default Chat;
