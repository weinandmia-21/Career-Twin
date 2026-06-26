import { careerTwin } from "@/data/careerTwin";

export default function ProfessionalSummary() {
  return (
    <section className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Professional Summary
      </p>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        {careerTwin.summary}
      </p>
    </section>
  );
}