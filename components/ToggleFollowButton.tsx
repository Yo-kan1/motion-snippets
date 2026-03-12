"use client";
import { useState, useEffect } from "react";

export default function ToggleFollowButton({ autoPlay = false }: { autoPlay?: boolean }) {
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            setIsFollowing((prev) => !prev);
        }, 3000); // 少し長めに3秒間隔で切り替え
        return () => clearInterval(interval);
    }, [autoPlay]);

    return (
        <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`relative flex items-center h-10 px-1.5 rounded-full text-sm font-bold transition-colors duration-300 w-32 overflow-hidden ${isFollowing
                ? "bg-neutral-300/80 text-neutral-700"
                : "bg-neutral-200/60 text-neutral-500 hover:bg-neutral-200/80"
                }`}
        >
            <div
                className={`absolute z-10 w-7 h-7 bg-white rounded-full shadow-sm flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isFollowing ? "translate-x-[88px]" : "translate-x-0"
                    }`}
            >
                <div className="relative w-full h-full flex items-center justify-center">

                    <svg
                        className={`absolute w-4 h-4 text-neutral-500 transition-all duration-300 transform origin-center ${isFollowing ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"
                            }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>

                    <svg
                        className={`absolute w-4 h-4 text-neutral-700 transition-all duration-300 transform origin-center ${isFollowing ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
                            }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <span className={`absolute left-3 transition-opacity duration-300 ${isFollowing ? "opacity-100" : "opacity-0"}`}>
                フォロー中
            </span>
            <span className={`absolute right-3.5 transition-opacity duration-300 ${isFollowing ? "opacity-0" : "opacity-100"}`}>
                フォロー
            </span>
        </button>
    );
}