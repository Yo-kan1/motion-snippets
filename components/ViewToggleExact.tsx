"use client";
import { useState, useEffect, useRef } from "react";

export default function ViewToggleExact({ autoPlay = false }: { autoPlay?: boolean }) {
    // アニメーションの段階（フェーズ）を管理します
    // 0 = 3本線（リスト）
    // 1 = 2本線（中間状態）
    // 2 = 4つの四角（カラム）
    const [step, setStep] = useState<0 | 1 | 2>(0);

    const [isGrid, setIsGrid] = useState(false);
    const isInteracted = useRef(false);


    useEffect(() => {
        if (!autoPlay) return;
        let isActive = true;
        let currentStep = 0;
        let direction = 1; // 1: リスト→カラム, -1: カラム→リスト

        const runLoop = async () => {
            while (isActive && !isInteracted.current) {
                if (currentStep === 0) {
                    await new Promise((r) => setTimeout(r, 2000));
                    if (!isActive || isInteracted.current) break;
                    setStep(1); currentStep = 1; setIsGrid(true);

                } else if (currentStep === 1) {
                    await new Promise((r) => setTimeout(r, 250));
                    if (!isActive || isInteracted.current) break;
                    if (direction === 1) {
                        setStep(2); currentStep = 2;

                    } else {
                        setStep(0); currentStep = 0;
                    }
                } else if (currentStep === 2) {
                    await new Promise((r) => setTimeout(r, 2000));
                    if (!isActive || isInteracted.current) break;
                    direction = -1;
                    setStep(1); currentStep = 1; setIsGrid(false);
                }
                if (currentStep === 0) direction = 1;
            }
        };
        runLoop();
        return () => { isActive = false; };
    }, [autoPlay]);

    const handleClick = () => {
        isInteracted.current = true;
        if (step === 0 || (step === 1 && !isGrid)) {
            // リスト → カラム
            setIsGrid(true);
            setStep(1);
            setTimeout(() => setStep(2), 250);
        } else {
            // カラム → リスト
            setIsGrid(false);
            setStep(1);
            setTimeout(() => setStep(0), 250);
        }
    };


    const baseSpan = "absolute top-1/2 left-1/2 bg-neutral-700 rounded-[1.5px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]";

    return (
        <div className="flex items-center justify-center w-full h-full">
            <button
                onClick={handleClick}
                className="relative flex items-center justify-center gap-3 w-40 h-14 bg-white rounded-xl transition-colors duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
                <div className="relative w-[18px] h-[18px] flex-shrink-0">


                    <span className={`${baseSpan} ${step === 0 ? "w-[9px] h-[2px] -translate-x-[9px] -translate-y-[8px]" :
                        step === 1 ? "w-[9px] h-[2px] -translate-x-[9px] -translate-y-[5px]" :
                            "w-[8px] h-[8px] -translate-x-[9px] -translate-y-[9px]"
                        }`} />


                    <span className={`${baseSpan} ${step === 0 ? "w-[9px] h-[2px] translate-x-[0px] -translate-y-[8px]" :
                        step === 1 ? "w-[9px] h-[2px] translate-x-[0px] -translate-y-[5px]" :
                            "w-[8px] h-[8px] translate-x-[1px] -translate-y-[9px]"
                        }`} />


                    <span className={`${baseSpan} ${step === 0 ? "w-[9px] h-[2px] -translate-x-[9px] -translate-y-[1px]" :
                        step === 1 ? "w-[9px] h-[2px] -translate-x-[9px] translate-y-[3px]" :
                            "w-[8px] h-[8px] -translate-x-[9px] translate-y-[1px]"
                        }`} />


                    <span className={`${baseSpan} ${step === 0 ? "w-[9px] h-[2px] translate-x-[0px] -translate-y-[1px]" :
                        step === 1 ? "w-[9px] h-[2px] translate-x-[0px] translate-y-[3px]" :
                            "w-[8px] h-[8px] translate-x-[1px] translate-y-[1px]"
                        }`} />




                    <span className={`${baseSpan} ${step === 0 ? "w-[18px] h-[2px] -translate-x-[9px] translate-y-[6px] opacity-100" :
                        "w-[18px] h-[2px] -translate-x-[9px] translate-y-[14px] opacity-0"
                        }`} />

                </div>


                <div className="relative w-16 h-6 overflow-hidden">
                    <span className={`absolute left-0 text-base font-medium text-neutral-800 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isGrid ? "top-1/2 -translate-y-1/2 opacity-100" : "top-full opacity-0"
                        }`}>
                        カラム
                    </span>
                    <span className={`absolute left-0 text-base font-medium text-neutral-800 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isGrid ? "-top-full opacity-0" : "top-1/2 -translate-y-1/2 opacity-100"
                        }`}>
                        リスト
                    </span>
                </div>

            </button>
        </div>
    );
}