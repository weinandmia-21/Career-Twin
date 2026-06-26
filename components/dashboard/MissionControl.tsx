import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { getMission } from "@/lib/careerTwin";

const activity = [
  {
    title: "Resume optimized for Stripe",
    time: "2 minutes ago",
  },
  {
    title: "Microsoft viewed your application",
    time: "18 minutes ago",
  },
  {
    title: "3 high-match opportunities discovered",
    time: "1 hour ago",
  },
];

export default function MissionControl() {
  const mission = getMission();

  return (
    <section className="rounded-[32px] border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Mission Control
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {mission.company}
          </h2>

          <p className="mt-2 text-slate-400">
            {mission.role}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-6 py-5 text-center">
          <p className="text-4xl font-bold text-cyan-300">
            {mission.match}%
          </p>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
            Match
          </p>
        </div>
      </div>

      {/* Confidence */}

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />

            <span className="font-medium text-white">
              AI Confidence
            </span>
          </div>

          <span className="font-semibold text-cyan-300">
            {mission.confidence}%
          </span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 transition-all duration-500"
            style={{ width: `${mission.confidence}%` }}
          />
        </div>
      </div>

      {/* Why */}

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-white">
          Why I recommended this
        </h3>

        <div className="mt-5 space-y-4">
          {mission.reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />

              <span className="text-slate-300">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}

      <div className="mt-10 border-t border-white/5 pt-8">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-cyan-400" />

          <h3 className="text-lg font-semibold text-white">
            Recent AI Activity
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

      {/* CTA */}

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