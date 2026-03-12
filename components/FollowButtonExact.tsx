"use client";
import { useState, useEffect } from "react";

export default function FollowButtonExact({ autoPlay = false }: { autoPlay?: boolean }) {
    const [isFollowing, setIsFollowing] = useState(false);


    const [phase, setPhase] = useState<'idle' | 'expanding' | 'stretched'>('idle');

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            setIsFollowing((prev) => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, [autoPlay]);

    useEffect(() => {
        if (isFollowing) {
            setPhase('expanding');

            const timer = setTimeout(() => setPhase('stretched'), 300);
            return () => clearTimeout(timer);
        } else {
            setPhase('expanding');
            const timer = setTimeout(() => setPhase('idle'), 300);
            return () => clearTimeout(timer);
        }
    }, [isFollowing]);

    return (
        <button
            onClick={() => setIsFollowing(!isFollowing)}
            className="relative flex items-center w-32 h-10 rounded-full bg-neutral-200/60 overflow-hidden cursor-pointer"
        >

            <span
                className={`absolute left-10 text-sm font-bold text-neutral-500 transition-opacity duration-300 ${isFollowing ? "opacity-0" : "opacity-100"
                    }`}
            >
                フォロー
            </span>


            <div
                className={`absolute bg-neutral-700 rounded-full flex items-center overflow-hidden transition-all ease-[cubic-bezier(0.4,0,0.2,1)] ${phase === 'idle'
                    ? "left-1 top-1 w-8 h-8 duration-150"
                    : phase === 'expanding'
                        ? "left-0 top-0 w-10 h-10 duration-150"
                        : "left-0 top-0 w-full h-10 duration-300"
                    }`}
            >

                <div
                    className={`absolute left-0 flex items-center justify-center flex-shrink-0 transition-all ${phase === 'idle' ? "w-8 h-8 duration-150" : "w-10 h-10 duration-150"
                        }`}
                >

                    <svg
                        className={`absolute w-4 h-4 text-white transition-transform duration-300 ${isFollowing ? "scale-0 rotate-90" : "scale-100 rotate-0"
                            }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>

                    <svg
                        className={`absolute w-4 h-4 text-white transition-transform duration-300 ${isFollowing ? "scale-100 rotate-0" : "scale-0 -rotate-90"
                            }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <span
                    className={`absolute left-10 text-sm font-bold text-white whitespace-nowrap transition-opacity duration-300 ${phase === 'stretched' ? "opacity-100" : "opacity-0"
                        }`}
                >
                    フォロー中
                </span>
            </div>
        </button>
    );
}