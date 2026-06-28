"use client";

import Card from "@/components/ui/Card";
import { useCareerTwinStore } from "@/lib/store/careerTwinStore";

export default function CareerDNA() {
  const profile = useCareerTwinStore(
    (state) => state.profile
  );

  if (!profile) {
    return null;
  }

  const scores = [
    {
      label: "Communication",
      value: 98,
    },
    {
      label: "Leadership",
      value: profile.leadershipLevel === "Manager" ? 84 : 70,
    },
    {
      label: "Strategy",
      value: 92,
    },
    {
      label: "Product Thinking",
      value: profile.skills.some((skill) =>
        skill.toLowerCase().includes("product")
      )
        ? 90
        : 70,
    },
    {
      label: "Technical Depth",
      value: profile.tools.length * 25 + 30,
    },
    {
      label: "AI Readiness",
      value: profile.skills.some((skill) =>
        skill.toLowerCase().includes("ai")
      )
        ? 95
        : 65,
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
          Your Career Twin analyzed your resume and identified the
          strengths that define your professional identity.
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

      <div className="mt-12 grid gap-5 md:grid-cols-2">
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
      </div>
    </Card>
  );
}