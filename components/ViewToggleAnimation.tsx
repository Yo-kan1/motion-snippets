"use client";
import { useState, useEffect } from "react";

export default function ViewToggleAnimation({ autoPlay = false }: { autoPlay?: boolean }) {
    const [isGrid, setIsGrid] = useState(false);

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            setIsGrid((prev) => !prev);
        }, 2500);
        return () => clearInterval(interval);
    }, [autoPlay]);

    return (
        <div className="flex items-center justify-center w-full h-full">
            <button
                onClick={() => setIsGrid(!isGrid)}
                className="relative flex items-center justify-center gap-3 w-40 h-14 bg-white rounded-xl transition-colors duration-300 shadow-sm active:scale-95"
            >
                <div className="relative w-5 h-5 flex-shrink-0">
                    <span
                        className={`absolute bg-neutral-700 rounded-[1.5px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isGrid ? "top-0 left-0 w-[9px] h-[9px]" : "top-0 left-0 w-5 h-[2px]"
                            }`}
                    />
                    <span
                        className={`absolute bg-neutral-700 rounded-[1.5px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isGrid ? "top-0 right-0 w-[9px] h-[9px]" : "top-[9px] left-0 w-5 h-[2px]"
                            }`}
                    />
                    <span
                        className={`absolute bg-neutral-700 rounded-[1.5px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isGrid ? "bottom-0 left-0 w-[9px] h-[9px]" : "bottom-0 left-0 w-5 h-[2px]"
                            }`}
                    />
                    <span
                        className={`absolute bg-neutral-700 rounded-[1.5px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isGrid ? "bottom-0 right-0 w-[9px] h-[9px] opacity-100" : "bottom-0 right-0 w-0 h-[2px] opacity-0"
                            }`}
                    />
                </div>

                <div className="relative w-16 h-6 overflow-hidden">
                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 text-base font-medium text-neutral-800 transition-opacity duration-300 ${isGrid ? "opacity-100" : "opacity-0"}`}>
                        カラム
                    </span>
                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 text-base font-medium text-neutral-800 transition-opacity duration-300 ${isGrid ? "opacity-0" : "opacity-100"}`}>
                        リスト
                    </span>
                </div>

            </button>
        </div>
    );
}