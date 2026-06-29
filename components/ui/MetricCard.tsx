type Props = {
  label: string;
  value: React.ReactNode;
  accent?: boolean;
};

export default function MetricCard({
  label,
  value,
  accent = false,
}: Props) {
  return (
    <div
      className={`rounded-2xl border p-5 transition-all ${
        accent
          ? "border-cyan-500/20 bg-cyan-500/5"
          : "border-white/5 bg-slate-900"
      }`}
    >
      <p
        className={`text-xs uppercase tracking-[0.3em] ${
          accent
            ? "text-cyan-300"
            : "text-slate-400"
        }`}
      >
        {label}
      </p>

      <div className="mt-3 text-3xl font-bold text-white">
        {value}
      </div>
    </div>
  );
}