"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

import SummaryComparison from "./SummaryComparison";
import { tailorResume } from "@/lib/actions/tailorResume";

export default function ResumeTailor() {
  const { mission, analysis } = tailorResume();

  const [matchScore, setMatchScore] = useState(analysis.score);
  const [summaryAccepted, setSummaryAccepted] = useState(false);
  const [progress, setProgress] = useState(60);

  const [completedRecommendations, setCompletedRecommendations] =
    useState<string[]>([]);

  function acceptSummary() {
    if (summaryAccepted) return;

    setSummaryAccepted(true);

    setMatchScore(96);

    setProgress(75);

    setCompletedRecommendations((current) => [
      ...current,
      "Rewrite Professional Summary",
    ]);
  }

  return (
    <section className="mx-auto max-w-6xl">
      <Link
        href="/mission"
        className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Mission
      </Link>

      <div className="mt-8 rounded-[32px] border border-white/5 bg-slate-900/70 p-8 backdrop-blur-xl">
        {/* Header */}

        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Resume Workspace
          </p>
        </div>

        <h1 className="mt-6 text-4xl font-bold text-white">
          Tailor Resume for {mission.company}
        </h1>

        <p className="mt-2 text-slate-400">
          {mission.role}
        </p>

        {/* Top Cards */}

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Match */}

          <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              Overall Match
            </p>

            <h2 className="mt-4 text-6xl font-bold text-white transition-all duration-500">
              {matchScore}%
            </h2>

            {!summaryAccepted && (
              <p className="mt-4 text-sm text-cyan-300">
                +2% after applying summary
              </p>
            )}

            {summaryAccepted && (
              <p className="mt-4 text-sm text-emerald-400">
                ✓ Summary applied
              </p>
            )}
          </div>

          {/* Strengths */}

          <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6">
            <h3 className="font-semibold text-white">
              Strengths
            </h3>

            <div className="mt-5 space-y-3">
              {analysis.strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Missing Keywords */}

          <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6">
            <h3 className="font-semibold text-white">
              Missing Keywords
            </h3>

            <div className="mt-5 space-y-3">
              {analysis.missingKeywords.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <TriangleAlert className="h-5 w-5 text-amber-400" />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Progress */}

        <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-white">
              Resume Optimization Progress
            </h2>

            <span className="text-cyan-300">
              {progress}%
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <p className={summaryAccepted ? "text-emerald-400" : "text-slate-400"}>
              {summaryAccepted ? "✓" : "○"} Professional Summary
            </p>

            <p className="text-slate-500">
              ○ Experience
            </p>

            <p className="text-slate-500">
              ○ Skills
            </p>

            <p className="text-slate-500">
              ○ Keywords
            </p>
          </div>
        </div>

        {/* Recommendations */}

        <div className="mt-8 rounded-2xl border border-white/5 bg-slate-950/40 p-6">
          <h2 className="text-xl font-semibold text-white">
            AI Recommendations
          </h2>

          <div className="mt-6 space-y-6">
            {analysis.recommendations.map((item) => {
              const completed = completedRecommendations.includes(item.title);

              return (
                <div key={item.title}>
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-semibold ${
                        completed
                          ? "text-emerald-400"
                          : "text-white"
                      }`}
                    >
                      {completed
                        ? `✓ ${item.title}`
                        : item.title}
                    </h3>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                      {completed
                        ? "Completed"
                        : `${item.impact} Impact`}
                    </span>
                  </div>

                  <p className="mt-2 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Comparison */}

        <SummaryComparison
          accepted={summaryAccepted}
          onAccept={acceptSummary}
        />
      </div>
    </section>
  );
}