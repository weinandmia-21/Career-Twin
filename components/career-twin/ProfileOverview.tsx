export default function ProfileOverview() {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Career Twin
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Mia Weinand
          </h1>

          <p className="mt-3 text-slate-400">
            Strategic Communications • Product Strategy • AI Experience
          </p>
        </div>

        <div className="rounded-xl bg-emerald-500/10 px-6 py-4 text-center">
          <p className="text-xs uppercase tracking-wider text-emerald-300">
            Confidence
          </p>

          <p className="mt-2 text-3xl font-bold text-emerald-400">
            92%
          </p>
        </div>
      </div>
    </div>
  );
}