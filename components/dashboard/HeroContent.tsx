import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { careerTwinState } from "@/data/careerTwinState";

export default function HeroContent() {
  const { profile, dashboard } = careerTwinState;

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          AI Briefing Ready
        </span>
      </div>

      <h1 className="mt-8 text-6xl font-bold tracking-tight text-white">
        {dashboard.greeting}
      </h1>

      <p className="mt-6 max-w-xl text-xl leading-9 text-slate-300">
        Your Career Twin analyzed today's market and prepared your highest-impact
        opportunity based on your goals and active applications.
      </p>

      <Link
  href="/mission"
  className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
>
  Review Today's Mission

  <ArrowRight className="h-5 w-5" />
</Link>
    </div>
  );
}