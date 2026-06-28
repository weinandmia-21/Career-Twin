"use client";

type Props = {
  match: any;
};

export default function JobMatchResults({
  match,
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
      <h2 className="text-3xl font-bold text-white">
        {match.overallMatch}% Match
      </h2>

      <p className="mt-2 text-cyan-400">
        {match.recommendedRole}
      </p>

      <div className="mt-8">
        <h3 className="font-semibold text-white">
          Strengths
        </h3>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
          {match.strengths.map((strength: string) => (
            <li key={strength}>
              {strength}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-white">
          Missing Skills
        </h3>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
          {match.missingSkills.map((skill: string) => (
            <li key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}