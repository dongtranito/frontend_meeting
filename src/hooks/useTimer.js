// useTimer.js
import { useRef, useState } from "react";


export const useTimer = () => {
    const [elapsedTime, setElapsedTime] = useState(0);       // Hiển thị đồng hồ
    const elapsedTimeRef = useRef(0);                         // Giá trị thực tế (dùng ngoài render)
    const timerRef = useRef(null);                            // Lưu interval

    // Bắt đầu đếm
    const start = () => {
        if (timerRef.current) return; // tránh double interval
        timerRef.current = setInterval(() => {
            elapsedTimeRef.current += 1000;
            setElapsedTime(elapsedTimeRef.current);
        }, 1000);
    };

    // Tạm dừng đếm
    const pause = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    // Reset thời gian về 0 và dừng lại
    const reset = () => {
        pause(); // đảm bảo timer đã dừng
        elapsedTimeRef.current = 0;
        setElapsedTime(0);
    };

    return {
        elapsedTime,
        elapsedTimeRef,
        start,
        pause,
        reset,
    };
};
