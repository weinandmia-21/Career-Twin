export default function AIStatus() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
      <h2 className="text-xl font-semibold text-white">AI Status</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300">Neural engine active</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Model</span>
          <span className="text-cyan-400">Career Twin Core</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Last sync</span>
          <span className="text-slate-300">Just now</span>
        </div>
      </div>
    </div>
  );
}
