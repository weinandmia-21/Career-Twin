"use client";

import type { JobMatch } from "@/lib/ai/analyzeJobMatch";
import SaveApplicationButton from "@/components/applications/SaveApplicationButton";
import { Button } from "@/components/ui/button";

type Props = {
  match: JobMatch | null;
  jobDescription: string;
};

export default function JobMatchResults({
  match,
  jobDescription,
}: Props) {
  if (!match) {
    return (
      <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold text-white">
          Job Match Results
        </h2>

        <p className="mt-2 text-slate-400">
          Results will appear here after analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Job Match
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          {match.overallMatch}% Match
        </h2>

        <p className="mt-4 text-xl text-cyan-300">
          {match.job.title}
        </p>

        <p className="mt-1 text-slate-400">
          {match.job.company}
          {match.job.location &&
            ` • ${match.job.location}`}
        </p>
      </div>

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
          AI Summary
        </p>

        <p className="mt-3 leading-7 text-slate-300">
          {match.summary ??
  "Your Career Twin analyzed this opportunity and identified a strong overall fit based on your experience and skills."}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-white">
          Strengths
        </h3>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
          {match.strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </div>

           <div className="mt-8">
        <h3 className="font-semibold text-white">
          Missing Skills
        </h3>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
          {match.missingSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="secondary">
          Tailor Resume
        </Button>

        <SaveApplicationButton
  company={match.job.company}
  role={match.job.title}
  matchScore={match.overallMatch}
  location={match.job.location}
  jobDescription={jobDescription}
        />
      </div>
    </div>
  );
}