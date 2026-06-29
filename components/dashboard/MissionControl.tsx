"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { useCareerTwinStore } from "@/lib/store/careerTwinStore";
import { generateMission } from "@/lib/mission/generateMission";

export default function MissionControl() {
  const profile = useCareerTwinStore(
    (state) => state.profile
  );

  if (!profile) {
    return null;
  }

  const mission = generateMission(profile);

  const activity = [
    {
      title: `Career Twin analyzed ${profile.skills.length} skills.`,
      time: "Just now",
    },
    {
      title: `Recommended role: ${mission.objective}`,
      time: "Today",
    },
    {
      title: `${profile.topStrengths.length} professional strengths identified.`,
      time: "Today",
    },
  ];

  const confidence = Math.min(
    98,
    70 +
      profile.skills.length +
      profile.topStrengths.length +
      profile.careerThemes.length
  );

  return (
    <section className="rounded-[32px] border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Mission Control
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {mission.objective}
          </h2>

          <p className="mt-2 text-slate-400">
            Priority: {mission.priority}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-6 py-5 text-center">
          <p className="text-4xl font-bold text-cyan-300">
            {confidence}%
          </p>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
            AI Confidence
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />

            <span className="font-medium text-white">
              Today's Mission
            </span>
          </div>

          <span className="font-semibold text-cyan-300">
            {mission.estimatedImpact}
          </span>
        </div>

        <div className="mt-6 space-y-4">
          {mission.tasks.map((task) => (
            <div
              key={task}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />

              <span className="text-slate-300">
                {task}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-white/5 pt-8">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-cyan-400" />

          <h3 className="text-lg font-semibold text-white">
            Career Twin Activity
          </h3>
        </div>

        <div className="mt-6 space-y-5">
          {activity.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4"
            >
              <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

              <div>
                <p className="text-slate-200">
                  {item.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/mission"
        className="group mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/15"
      >
        <span className="font-medium">
          Review Mission
        </span>

        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </section>
  );
}