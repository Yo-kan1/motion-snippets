"use client";
import { useState, useEffect } from "react";

export default function PaginationAnimation({ autoPlay = false }: { autoPlay?: boolean }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const pages = [1, 2, 3, 4];

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % pages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [autoPlay, pages.length]);

    return (
        <div className="relative flex items-center bg-neutral-200/60 p-1 rounded-full">
            <div
                className="absolute left-1 top-1 bottom-1 w-10 bg-neutral-800 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ transform: `translateX(${activeIndex * 40}px)` }}
            />

            {pages.map((page, index) => (
                <button
                    key={page}
                    onClick={() => setActiveIndex(index)}
                    className={`relative z-10 w-10 h-10 flex items-center justify-center text-sm font-bold transition-colors duration-300 ${activeIndex === index
                        ? "text-white"
                        : "text-neutral-500 hover:text-neutral-700"
                        }`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
}