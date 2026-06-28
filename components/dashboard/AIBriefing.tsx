"use client";

import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

import { useCareerTwinStore } from "@/lib/store/careerTwinStore";

export default function AIBriefing() {
  const profile = useCareerTwinStore(
    (state) => state.profile
  );

  if (!profile) {
    return (
      <Card>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          AI Briefing
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Upload your resume to receive your personalized AI career briefing.
        </p>
      </Card>
    );
  }

  const topStrength =
    profile.topStrengths?.[0] ?? "Strategic Communication";

  const topIndustry =
    profile.industries?.[0] ?? "Technology";

  const idealRole =
    profile.idealRoles?.[0] ??
    "Senior Communications Manager";

  const totalSkills =
    profile.skills?.length ?? 0;

  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        Today's AI Briefing
      </p>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        Your Career Twin identified a strong combination of{" "}
        <span className="font-semibold text-white">
          {profile.careerThemes?.slice(0, 3).join(", ")}
        </span>
        . This blend of experience positions you well for senior leadership
        opportunities that combine communication, strategy, and emerging AI
        initiatives.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="text-sm font-medium text-cyan-300">
            Strongest Capability
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            {topStrength}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="text-sm font-medium text-cyan-300">
            Best Next Role
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            {idealRole}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="text-sm font-medium text-cyan-300">
            Primary Industry
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            {topIndustry}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="text-sm font-medium text-cyan-300">
            Skills Identified
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            {totalSkills}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
          Recommended Next Step
        </p>

        <p className="mt-3 text-slate-200">
          Focus your upcoming applications on{" "}
          <span className="font-semibold text-white">
            {idealRole}
          </span>{" "}
          positions. Your combination of{" "}
          <span className="font-semibold text-white">
            {profile.skills?.slice(0, 3).join(", ")}
          </span>{" "}
          is a strong differentiator that should be highlighted throughout your
          resume, LinkedIn profile, and interview stories.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="secondary">
          Tailor Resume
        </Button>

        <Button variant="secondary">
          Find Matching Jobs
        </Button>

        <Button variant="secondary">
          Practice Interview
        </Button>
      </div>
    </Card>
  );
}