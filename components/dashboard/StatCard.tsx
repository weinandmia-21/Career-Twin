interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
      <p className="text-sm uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-cyan-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}