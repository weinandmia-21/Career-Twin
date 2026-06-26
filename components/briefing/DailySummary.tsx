import { CheckCircle2 } from "lucide-react";

const updates = [
  "Reviewed 31 new opportunities",
  "Found 3 exceptional matches",
  "Updated your Stripe resume",
  "Drafted your cover letter",
  "Prepared interview briefing",
];

export default function DailySummary() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
      <h2 className="text-xl font-semibold text-white">
        While you were away...
      </h2>

      <div className="mt-6 space-y-4">
        {updates.map((update) => (
          <div key={update} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <span className="text-slate-300">{update}</span>
          </div>
        ))}
      </div>
    </div>
  );
}