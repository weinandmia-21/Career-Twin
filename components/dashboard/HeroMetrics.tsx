import { Briefcase, TrendingUp, Users } from "lucide-react";
import { hero } from "@/data/hero";

const icons = [
  Briefcase,
  Users,
  TrendingUp,
];

export default function HeroMetrics() {
  return (
    <div className="mt-14 flex flex-wrap gap-10">
      {hero.metrics.map((metric, index) => {
        const Icon = icons[index];

        return (
          <div
            key={metric.label}
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/10 bg-cyan-500/10 text-cyan-300">
              <Icon className="h-5 w-5" />
            </div>

            <div>
              <p className="text-3xl font-semibold text-white">
                {metric.value}
              </p>

              <p className="text-sm text-slate-400">
                {metric.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}