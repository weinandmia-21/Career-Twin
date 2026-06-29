"use client";

import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

import { useCareerTwinStore } from "@/lib/store/careerTwinStore";

export default function AIBriefing() {
  const profile = useCareerTwinStore((state) => state.profile);

  if (!profile) {
    return (
      <Card>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          AI Briefing
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Upload your resume to activate your Career Twin and receive
          personalized career intelligence.
        </p>
      </Card>
    );
  }

  const strongestCapability =
    profile.topStrengths[0] ?? "Strategic Communication";

  const bestRole =
    profile.idealRoles[0] ?? "Senior Communications Manager";

  const primaryIndustry =
    profile.industries[0] ?? "Technology";

  const skills = profile.skills ?? [];

  const hasAI = skills.some((skill) =>
    skill.toLowerCase().includes("ai")
  );

  const hasProduct = skills.some((skill) =>
    skill.toLowerCase().includes("product")
  );

  const hasLeadership =
    profile.leadershipLevel !== "Unknown" &&
    profile.leadershipLevel !== "Individual Contributor";

  let opportunity =
    "Continue strengthening measurable business impact across your resume.";

  if (!hasAI) {
    opportunity =
      "Develop hands-on AI product experience to strengthen your competitive advantage.";
  } else if (!hasProduct) {
    opportunity =
      "Building deeper product strategy experience will unlock additional leadership opportunities.";
  } else if (!hasLeadership) {
    opportunity =
      "Seek opportunities to lead initiatives and mentor teammates to strengthen your leadership profile.";
  }

  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        Today's AI Briefing
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Career Intelligence Report
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        Based on your Career Twin, your strongest differentiator is{" "}
        <span className="font-semibold text-white">
          {strongestCapability}
        </span>
        . Your background combines{" "}
        <span className="font-semibold text-white">
          {profile.careerThemes.slice(0, 3).join(", ")}
        </span>
        , positioning you well for strategic leadership opportunities.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="text-sm uppercase tracking-wide text-cyan-300">
            Best Next Role
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            {bestRole}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="text-sm uppercase tracking-wide text-cyan-300">
            Primary Industry
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            {primaryIndustry}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="text-sm uppercase tracking-wide text-cyan-300">
            Skills Identified
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            {skills.length}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="text-sm uppercase tracking-wide text-cyan-300">
            Leadership Level
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            {profile.leadershipLevel}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
          Biggest Growth Opportunity
        </p>

        <p className="mt-3 text-slate-200">
          {opportunity}
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
          AI Recommendation
        </p>

        <p className="mt-3 text-slate-200">
          Focus upcoming applications on{" "}
          <span className="font-semibold text-white">
            {bestRole}
          </span>
          . Tailor your resume to emphasize{" "}
          <span className="font-semibold text-white">
            {profile.topStrengths.slice(0, 3).join(", ")}
          </span>{" "}
          and quantify the measurable business impact of your accomplishments.
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