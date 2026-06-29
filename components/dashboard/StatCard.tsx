import { LucideIcon, TrendingUp } from "lucide-react";

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
    <div className="group relative overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_0_40px_rgba(34,211,238,.08)]">

      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">
            {title}
          </p>

          <h2 className="mt-5 text-6xl font-bold tracking-tight text-white">
            {value}
          </h2>

          {subtitle && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">
              <TrendingUp className="h-3.5 w-3.5 text-cyan-300" />

              <span className="text-sm text-cyan-200">
                {subtitle}
              </span>
            </div>
          )}

        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
          <Icon className="h-7 w-7 text-cyan-300" />
        </div>

      </div>
    </div>
  );
}