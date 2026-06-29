"use client";

import Card from "@/components/ui/Card";
import { useCareerTwinStore } from "@/lib/store/careerTwinStore";

export default function CareerDNA() {
  const profile = useCareerTwinStore((state) => state.profile);

  if (!profile) {
    return null;
  }

  const clamp = (value: number) => Math.min(100, Math.max(35, value));

  const scores = [
    {
      label: "Communication",
      value: clamp(75 + profile.topStrengths.length * 4),
    },
    {
      label: "Leadership",
      value:
        {
          "Individual Contributor": 65,
          Lead: 78,
          Manager: 86,
          "Senior Manager": 91,
          Director: 95,
          Executive: 99,
          Unknown: 70,
        }[profile.leadershipLevel],
    },
    {
      label: "Strategy",
      value: clamp(
        65 +
          profile.careerThemes.length * 5 +
          profile.idealRoles.length * 2
      ),
    },
    {
      label: "Product Thinking",
      value: profile.skills.some((skill) =>
        skill.toLowerCase().includes("product")
      )
        ? 92
        : 72,
    },
    {
      label: "Technical Depth",
      value: clamp(40 + profile.tools.length * 8),
    },
    {
      label: "AI Readiness",
      value:
        profile.skills.some((skill) =>
          skill.toLowerCase().includes("ai")
        ) ||
        profile.tools.some((tool) =>
          tool.toLowerCase().includes("openai")
        )
          ? 96
          : 68,
    },
  ];

  return (
    <Card className="mt-10">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Career DNA
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Your Professional Profile
        </h2>

        <p className="mt-3 max-w-3xl text-slate-400">
          Your Career Twin continuously analyzes your experience,
          strengths, and career trajectory to understand what makes
          you unique.
        </p>
      </div>

      <div className="space-y-8">
        {scores.map((score) => (
          <div key={score.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-white">
                {score.label}
              </span>

              <span className="font-bold text-cyan-300">
                {score.value}
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-1000"
                style={{
                  width: `${score.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
          <p className="text-sm uppercase tracking-wider text-cyan-300">
            Top Strengths
          </p>

          <ul className="mt-5 space-y-3">
            {profile.topStrengths.slice(0, 5).map((strength) => (
              <li
                key={strength}
                className="flex items-center gap-3 text-slate-200"
              >
                <span className="text-cyan-400">●</span>

                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
          <p className="text-sm uppercase tracking-wider text-cyan-300">
            Career Themes
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {profile.careerThemes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
          <p className="text-sm uppercase tracking-wider text-cyan-300">
            Ideal Roles
          </p>

          <ul className="mt-5 space-y-3">
            {profile.idealRoles.slice(0, 5).map((role) => (
              <li
                key={role}
                className="flex items-center gap-3 text-slate-200"
              >
                <span className="text-cyan-400">◆</span>

                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}