const goals = [
  "Senior Product Manager",
  "AI Product Lead",
  "Director of Product Design",
];

export default function GoalsCard() {
  return (
    <section className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Career Goals
      </h2>

      <ul className="mt-6 space-y-3 text-slate-300">
        {goals.map((goal) => (
          <li key={goal}>• {goal}</li>
        ))}
      </ul>
    </section>
  );
}