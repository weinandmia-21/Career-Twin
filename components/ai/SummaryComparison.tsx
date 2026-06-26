import { ArrowRight, Check } from "lucide-react";

import { generatedResume } from "@/data/generatedResume";

type SummaryComparisonProps = {
  accepted: boolean;
  onAccept: () => void;
};

export default function SummaryComparison({
  accepted,
  onAccept,
}: SummaryComparisonProps) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-white">
        Professional Summary
      </h2>

      <p className="mt-2 text-slate-400">
        Compare your current summary with Career Twin's AI rewrite.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {/* Current */}

        <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Current
          </p>

          <p className="mt-6 leading-9 text-slate-300">
            {accepted
              ? generatedResume.aiSummary
              : generatedResume.originalSummary}
          </p>
        </div>

        {/* AI */}

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
            AI Suggested
          </p>

          <p className="mt-6 leading-9 text-white">
            {generatedResume.aiSummary}
          </p>
        </div>

      </div>

      <div className="mt-8 flex gap-4">

        <button
          onClick={onAccept}
          disabled={accepted}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
            accepted
              ? "cursor-default bg-emerald-500 text-white"
              : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
          }`}
        >
          {accepted ? (
            <>
              <Check className="h-5 w-5" />
              Summary Applied
            </>
          ) : (
            <>
              Accept Summary
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>

        <button
          className="rounded-full border border-white/10 px-6 py-3 text-white transition hover:border-cyan-400/30 hover:text-cyan-300"
        >
          Regenerate
        </button>

      </div>
    </section>
  );
}