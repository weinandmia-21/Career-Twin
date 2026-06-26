export default function AIBriefing() {
  return (
    <section className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          AI Briefing
        </p>
      </div>

      <h2 className="mt-5 text-3xl font-bold text-white">
        Good evening, Mia.
      </h2>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
        I analyzed <span className="font-semibold text-white">31 new opportunities</span>{" "}
        overnight and found{" "}
        <span className="font-semibold text-cyan-300">3 roles</span> that closely
        match your experience. Microsoft viewed your application yesterday, and I
        recommend applying to Stripe before Friday to maximize your chances.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          Tailor Resume
        </button>

        <button className="rounded-full border border-cyan-500/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/10">
          Apply Now
        </button>

        <button className="rounded-full border border-cyan-500/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/10">
          Practice Interview
        </button>
      </div>
    </section>
  );
}