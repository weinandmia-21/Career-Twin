import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { analyzeMission } from "@/lib/actions/analyzeMission";

export default function MissionAnalysis() {
  const analysis = analyzeMission();

  return (
    <section className="mx-auto max-w-4xl rounded-[32px] border border-cyan-500/10 bg-slate-900/70 p-8 backdrop-blur-xl">
      
      {/* Back Button */}

      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      {/* Header */}

      <div className="mt-8 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-cyan-400" />

        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          AI Analysis
        </p>
      </div>

      <h1 className="mt-6 text-4xl font-bold text-white">
        {analysis.company}
      </h1>

      <p className="mt-2 text-xl text-slate-400">
        {analysis.role}
      </p>

      <p className="mt-8 text-lg leading-8 text-slate-300">
        {analysis.summary}
      </p>

      {/* Reasoning */}

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-white">
          Why this is today's best opportunity
        </h2>

        <div className="mt-6 space-y-5">
          {analysis.reasoning.map((reason) => (
            <div
              key={reason}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-400" />

              <span className="text-slate-300">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}

      <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
          Recommended Action
        </p>

        <p className="mt-3 text-lg text-white">
          {analysis.recommendedAction}
        </p>
      </div>

      {/* Continue Button */}

      <Link
  href="/resume"
  className="group mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/15"
>
  Tailor Resume

  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>
    </section>
  );
}