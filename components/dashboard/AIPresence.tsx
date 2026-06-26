import AIOrb from "@/components/ai/AIOrb";

export default function AIPresence() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        AI Core
      </p>

      <div className="my-10 scale-125">
        <AIOrb size="lg" />
      </div>

      <h3 className="text-xl font-semibold text-white">
        Monitoring Opportunities
      </h3>

      <p className="mt-3 max-w-xs text-slate-400 leading-7">
        Continuously analyzing new roles, recruiter activity,
        application progress, and market signals.
      </p>

      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

        <span className="text-sm font-medium text-emerald-300">
          Neural Engine Active
        </span>
      </div>
    </div>
  );
}