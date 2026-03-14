"use client";
import { useState, useEffect } from "react";

export default function QuantityAnimation({ autoPlay = false }: { autoPlay?: boolean }) {
  const [isMerged, setIsMerged] = useState(false);
  const [count, setCount] = useState(1);


  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setIsMerged((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (

    <div className="flex items-center justify-center w-full h-full">
      

      <div
        className={`relative flex items-center justify-between p-1 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMerged
            ? "w-32 rounded-full bg-neutral-800 shadow-md" // 合体時：幅が狭まり、背景が黒いピル型になる
            : "w-40 rounded-full bg-transparent"           // 分離時：幅が広がり、背景は透明
        }`}
      >

        <div
          className={`absolute left-1 top-1 bottom-1 rounded-full bg-neutral-200/80 transition-all duration-500 ${
            isMerged ? "w-8 opacity-0" : "w-10 opacity-100"
          }`}
        />


        <div
          className={`absolute right-1 top-1 bottom-1 rounded-full bg-neutral-200/80 transition-all duration-500 ${
            isMerged ? "w-8 opacity-0" : "w-10 opacity-100"
          }`}
        />


        <div
          className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-500 ${
            isMerged ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </div>


        <span
          className={`relative z-10 font-bold transition-all duration-500 ${
            isMerged ? "text-white opacity-100 scale-100" : "text-neutral-800 opacity-0 scale-50"
          }`}
        >
          {count}
        </span>


        <div
          className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-500 ${
            isMerged ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
    </div>
  );
}