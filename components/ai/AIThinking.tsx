"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Loader2,
  CheckCircle2,
} from "lucide-react";

type Props = {
  title?: string;
  steps?: string[];
};

export default function AIThinking({
  title = "Career Twin AI",
  steps = [
    "Loading your Career Twin profile...",
    "Analyzing the job description...",
    "Matching your experience...",
    "Building personalized recommendations...",
  ],
}: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((step) =>
        step < steps.length - 1 ? step + 1 : step
      );
    }, 1400);

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 p-8">

      <div className="flex items-center gap-3">

        <Brain className="h-8 w-8 animate-pulse text-cyan-300" />

        <div>

          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

          <p className="text-slate-400">
            Career Twin is thinking...
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-5">

        {steps.map((step, index) => (

          <div
            key={step}
            className="flex items-center gap-3"
          >

            {index < currentStep ? (

              <CheckCircle2 className="h-5 w-5 text-emerald-400" />

            ) : index === currentStep ? (

              <Loader2 className="h-5 w-5 animate-spin text-cyan-300" />

            ) : (

              <div className="h-5 w-5 rounded-full border border-slate-600" />

            )}

            <span
              className={
                index <= currentStep
                  ? "text-white"
                  : "text-slate-500"
              }
            >
              {step}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}