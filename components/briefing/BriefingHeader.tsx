export default function BriefingHeader() {
  const userName = "Mia";

  return (
    <section className="mb-10">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        Career Briefing
      </p>

      <h1 className="mt-4 text-5xl font-bold text-white">
        Good evening, {userName}.
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
        While you were away, I reviewed new opportunities, updated your
        strongest application materials, and prepared today's priorities.
      </p>
    </section>
  );
}