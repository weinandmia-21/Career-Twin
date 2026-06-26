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
    <div className="group rounded-[28px] border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-3 text-sm text-cyan-300">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/5 transition-colors duration-300 group-hover:border-cyan-400/25 group-hover:bg-cyan-400/10">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>

      </div>

    </div>
  );
}