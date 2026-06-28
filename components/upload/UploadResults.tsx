type UploadResultsProps = {
  fileName: string;
};

const stats = [
  {
    label: "Skills Found",
    value: "94",
  },
  {
    label: "ATS Readiness",
    value: "91%",
  },
  {
    label: "Leadership Score",
    value: "High",
  },
  {
    label: "Career Level",
    value: "Senior",
  },
];

export default function UploadResults({
  fileName,
}: UploadResultsProps) {
  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-slate-900 p-16">
      <div className="mb-8 text-6xl">🎉</div>

      <h2 className="text-4xl font-bold text-white">
        Career Twin Ready
      </h2>

      <p className="mt-3 text-slate-400">
        We've finished analyzing your resume.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <p className="text-sm uppercase tracking-widest text-cyan-400">
          Uploaded Resume
        </p>

        <p className="mt-2 text-lg text-white">
          {fileName}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-slate-950 p-6"
          >
            <p className="text-cyan-400">
              {stat.label}
            </p>

            <p className="mt-2 text-3xl font-bold text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}