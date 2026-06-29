import Link from "next/link";
import { ArrowRight, Sparkles, Target } from "lucide-react";
import { generateBriefing } from "@/lib/dashboard/generateBriefing";

import { getDashboardData } from "@/lib/dashboard/dashboardService";

export default async function MissionControlServer() {
  const dashboard = await getDashboardData();
  const briefing = generateBriefing(dashboard);

  const top = dashboard.topApplication;

  return (
    <section className="rounded-[32px] border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Mission Control
          </p>

         <h2 className="mt-3 text-4xl font-bold text-white">
  {top ? "Today's Mission" : "Analyze Your First Job"}
</h2>

<p className="mt-2 text-xl text-cyan-300">
  {top ? `${top.company} • ${top.role}` : "Your Career Twin is waiting for its first mission."}
</p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-5 text-center">
          <p className="text-4xl font-bold text-cyan-300">
            {top ? `${top.matchScore}%` : "--"}
          </p>

          <p className="mt-1 text-xs uppercase tracking-wider text-cyan-200">
            Best Match
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-300" />

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-300">
  Daily AI Briefing
</p>
        </div>

        <div className="mt-5 space-y-5">
  <div>
    <p className="text-2xl font-semibold text-white">
      {briefing.title}
    </p>

    <p className="mt-3 leading-8 text-slate-300">
      {briefing.message}
    </p>
  </div>

  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
      Recommended Next Action
    </p>

    <p className="mt-3 text-lg text-white">
      {briefing.recommendation}
    </p>
  </div>
</div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-white/5 bg-slate-900 p-5">
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Saved
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {dashboard.saved}
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-slate-900 p-5">
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Applied
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {dashboard.applied}
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-slate-900 p-5">
          <p className="text-sm uppercase tracking-wider text-slate-400">
            Interviews
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {dashboard.interviews}
          </p>
        </div>
      </div>

      <Link
        href={top ? `/applications/${top.id}` : "/jobs"}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        <Target className="h-5 w-5" />

        {top ? "Open Workspace" : "Analyze Job"}

        <ArrowRight className="h-5 w-5" />
      </Link>
    </section>
  );
}