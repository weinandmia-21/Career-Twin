import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6 transition-all hover:border-cyan-400/40 hover:bg-slate-900/80">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-cyan-300">
              {subtitle}
            </p>
          )}
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>
      </div>
    </div>
  );
}