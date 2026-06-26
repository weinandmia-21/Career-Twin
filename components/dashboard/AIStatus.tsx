import { ai } from "@/data/ai";

export default function AIStatus() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
      {/* Header */}

      <div className="flex items-center gap-3">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

        <h2 className="text-xl font-semibold text-white">
          {ai.status.current}
        </h2>
      </div>

      <p className="mt-2 text-slate-400">
        Last analysis {ai.status.updated}
      </p>

      {/* Metrics */}

      <div className="mt-8 grid grid-cols-2 gap-4">
        {ai.status.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/5 bg-white/[0.03] p-4"
          >
            <p className="text-2xl font-semibold text-cyan-300">
              {metric.value}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div className="mt-8 border-t border-white/5 pt-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Model</span>

          <span className="text-cyan-400">
            Career Twin Core
          </span>
        </div>
      </div>
    </div>
  );
}