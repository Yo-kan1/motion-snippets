"use client";
import { useState, useEffect } from "react";

// autoPlayに変更、デフォルトはfalse
export default function TabAnimation({ autoPlay = false }: { autoPlay?: boolean }) {
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  // 自動再生のロジック（useEffect）
  useEffect(() => {
    // autoPlayがオフならここで処理をストップ
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "A" ? "B" : "A"));
    }, 2000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="relative flex w-48 bg-gray-100 p-1 rounded-lg shadow-inner">
      
      <div
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] bg-white rounded-md shadow-sm transition-transform duration-300 ease-out ${
          activeTab === "B" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* タブ A */}
      <button
        onClick={() => setActiveTab("A")}
        className={`relative z-10 flex-1 py-2 text-sm font-bold transition-colors duration-300 ${
          activeTab === "A" ? "text-slate-800" : "text-gray-400 hover:text-gray-600"
        }`}
      >
        A
      </button>

      {/* タブ B */}
      <button
        onClick={() => setActiveTab("B")}
        className={`relative z-10 flex-1 py-2 text-sm font-bold transition-colors duration-300 ${
          activeTab === "B" ? "text-slate-800" : "text-gray-400 hover:text-gray-600"
        }`}
      >
        B
      </button>
    </div>
  );
}