"use client";

import {
  Briefcase,
  TrendingUp,
  Users,
} from "lucide-react";

import { useCareerTwinStore } from "@/lib/store/careerTwinStore";

export default function HeroMetrics() {
  const profile = useCareerTwinStore(
    (state) => state.profile
  );

  const metrics = [
    {
      label: "Skills",
      value: profile?.skills?.length ?? "--",
      icon: Briefcase,
    },
    {
      label: "Industries",
      value: profile?.industries?.length ?? "--",
      icon: Users,
    },
    {
      label: "Leadership",
      value: profile?.leadershipLevel ?? "--",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="mt-14 flex flex-wrap gap-10">
      {metrics.map((metric) => {
        const Icon = metric.icon;

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