const steps = [
  "Upload Resume",
  "Review Information",
  "Build Career Twin",
];

export default function ProgressSteps() {
  return (
    <div className="mb-12 flex items-center justify-center gap-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
              index === 0
                ? "bg-cyan-500 text-slate-950"
                : "border border-slate-700 text-slate-400"
            }`}
          >
            {index + 1}
          </div>

          <span className="text-sm text-slate-300">
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}