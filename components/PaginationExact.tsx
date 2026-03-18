"use client";
import { useState, useEffect } from "react";

export default function PaginationExact({ autoPlay = false }: { autoPlay?: boolean }) {
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

        <div className="flex items-center justify-center gap-3 h-12">
            {pages.map((page, index) => {
                const isActive = activeIndex === index;
                return (
                    <button
                        key={page}
                        onClick={() => setActiveIndex(index)}

                        className={`flex items-center justify-center rounded-full font-bold transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive
                            ? "w-10 h-10 bg-neutral-800 text-white shadow-sm" // アクティブ時（大きく、濃く）
                            : "w-8 h-8 bg-neutral-200/80 text-neutral-500 hover:bg-neutral-300" // 非アクティブ時（小さく、薄く）
                            }`}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
}