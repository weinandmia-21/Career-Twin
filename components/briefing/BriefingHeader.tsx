import { dashboard } from "@/data/dashboard";

export default function BriefingHeader() {
  return (
    <section className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {dashboard.greeting.eyebrow}
      </p>

      <h1 className="mt-3 text-6xl font-bold tracking-tight text-white">
        {dashboard.greeting.title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-400">
        {dashboard.greeting.description}
      </p>
    </section>
  );
}