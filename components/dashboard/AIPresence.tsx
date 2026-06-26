import AIOrb from "@/components/ai/AIOrb";
import AIStatus from "./AIStatus";

export default function AIPresence() {
  return (
    <div className="flex h-full flex-col items-center justify-center">

      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        AI Core
      </p>

      <div className="my-10 scale-125">
        <AIOrb size="lg" />
      </div>

      <AIStatus />

      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

        <span className="text-sm text-emerald-300">
          Neural Engine Active
        </span>
      </div>

    </div>
  );
}