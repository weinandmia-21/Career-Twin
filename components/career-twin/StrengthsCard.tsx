import { careerTwin } from "@/data/careerTwin";

export default function StrengthsCard() {
  return (
    <section className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Core Strengths
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {careerTwin.strengths.map((strength) => (
          <span
            key={strength}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
          >
            {strength}
          </span>
        ))}
      </div>
    </section>
  );
}