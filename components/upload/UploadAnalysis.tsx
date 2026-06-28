"use client";

import AIOrb from "@/components/ai/AIOrb";

type UploadAnalysisProps = {
  fileName: string;
  progress: number;
  discoveries: string[];
};

export default function UploadAnalysis({
  fileName,
  progress,
  discoveries,
}: UploadAnalysisProps) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-12">

      <div className="flex flex-col items-center">

        <AIOrb
          size="lg"
          status={progress === 100 ? "success" : "thinking"}
        />

        <h2 className="mt-8 text-4xl font-bold text-white">
          Building Your Career Twin
        </h2>

        <p className="mt-3 max-w-xl text-center text-lg text-slate-400">
          AI is learning about your career, experience,
          accomplishments, and writing style.
        </p>

      </div>

      <div className="mt-12">

        <div className="mb-3 flex items-center justify-between text-sm">

          <span className="text-slate-400">
            Analyzing Resume
          </span>

          <span className="font-semibold text-cyan-400">
            {progress}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-12 rounded-2xl bg-slate-950/60 p-8">

        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-cyan-400">
          Live Analysis
        </p>

        <div className="space-y-5">

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-400">
              📄
            </div>

            <p className="text-slate-300">
              Reading <span className="font-semibold">{fileName}</span>
            </p>

          </div>

          {discoveries.map((item, index) => (
  <div
    key={`${index}-${item}`}
    className="flex items-center gap-3 animate-pulse"
  >
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
      ✓
    </div>

    <p className="text-slate-300">
      {item}
    </p>
  </div>
))}

        </div>

      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        This usually takes 5–10 seconds.
      </p>

    </div>
  );
}