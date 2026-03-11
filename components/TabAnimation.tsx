"use client";
import { useState, useEffect } from "react";

export default function TabAnimation({ autoPlay = false }: { autoPlay?: boolean }) {
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "A" ? "B" : "A"));
    }, 2000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="relative flex w-48 bg-neutral-200/80 p-1.5 rounded-xl">

      <div
        className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-0.375rem)] bg-white rounded-lg shadow-sm transition-transform duration-300 ease-out ${activeTab === "B" ? "translate-x-full" : "translate-x-0"
          }`}
      />

      <button
        onClick={() => setActiveTab("A")}
        className={`relative z-10 flex-1 py-1.5 text-sm font-bold transition-colors duration-300 ${activeTab === "A" ? "text-neutral-700" : "text-neutral-400 hover:text-neutral-500"
          }`}
      >
        A
      </button>

      <button
        onClick={() => setActiveTab("B")}
        className={`relative z-10 flex-1 py-1.5 text-sm font-bold transition-colors duration-300 ${activeTab === "B" ? "text-neutral-700" : "text-neutral-400 hover:text-neutral-500"
          }`}
      >
        B
      </button>
    </div>
  );
}