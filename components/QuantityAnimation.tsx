"use client";
import { useState, useEffect, useRef } from "react";

export default function QuantityAnimation({ autoPlay = false }: { autoPlay?: boolean }) {
  const [count, setCount] = useState(0);
  
  // 自動再生の「増える(+1)」「減る(-1)」の方向を記憶
  const direction = useRef(1);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 3) direction.current = -1;
        if (prev <= 0) direction.current = 1;
        return prev + direction.current;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const isExpanded = count > 0;

  return (
    <div className="flex items-center justify-center w-full h-full">
      
      <div
        className={`relative flex items-center h-10 rounded-full bg-neutral-800 text-white shadow-sm transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
          isExpanded ? "w-32" : "w-10"
        }`}
      >
        <button
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          disabled={!isExpanded}
          className={`absolute left-0 w-10 h-10 flex items-center justify-center transition-all duration-500 ${
            isExpanded ? "opacity-100 rotate-0" : "opacity-0 -rotate-90 scale-50"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </button>

        <div
          className={`absolute left-1/2 -translate-x-1/2 w-8 h-[24px] overflow-hidden transition-all duration-500 ${
            isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div
            className="absolute top-0 left-0 w-full flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateY(-${count * 24}px)` }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <span key={num} className="flex items-center justify-center h-[24px] font-bold">
                {num}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setCount((c) => Math.min(9, c + 1))}
          className="absolute right-0 w-10 h-10 flex items-center justify-center transition-transform active:scale-90"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}