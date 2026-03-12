"use client";
import { useState, useEffect } from "react";

export default function FollowButtonAnimation({ autoPlay = false }: { autoPlay?: boolean }) {
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        if (!autoPlay)
            return;
        const interval = setInterval(() => {
            setIsFollowing((prev) => !prev);
        }, 2500);
        return () => clearInterval(interval);
    }, [autoPlay]);

    return (
        <button

            onClick={() => setIsFollowing(!isFollowing)}
            className={`relative flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 w-36 overflow-hidden ${isFollowing
                ? "bg-neutral-300/80 text-neutral-700"
                : "bg-neutral-200/60 text-neutral-500 hover:bg-neutral-200/80"
                }`}
        >
            <div className="relative w-4 h-4 flex items-center justify-center">

                <svg
                    className={`absolute transition-all duration-300 ease-out ${isFollowing ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>

                <svg
                    className={`absolute transition-all duration-300 ease-out ${isFollowing ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>

            <span className="w-16 text-left transition-colors duration-300">
                {isFollowing ? "フォロー中" : "フォロー"}
            </span>
        </button>
    );
}