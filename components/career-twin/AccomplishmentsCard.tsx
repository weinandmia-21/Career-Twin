import { careerTwin } from "@/data/careerTwin";

export default function AccomplishmentsCard() {
  return (
    <section className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Recent Accomplishments
      </h2>

      <ul className="mt-6 space-y-3 text-slate-300">
        {careerTwin.accomplishments.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}