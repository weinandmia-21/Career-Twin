import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { dashboard } from "@/data/dashboard";

export default function AIBriefing() {
  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {dashboard.briefing.title}
      </p>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        {dashboard.briefing.summary}
      </p>

      <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
        <p className="text-sm font-medium text-cyan-300">
          Recommended Next Step
        </p>

        <p className="mt-2 text-slate-200">
          {dashboard.briefing.recommendation}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {dashboard.briefing.actions.map((action) => (
          <Button key={action} variant="secondary">
            {action}
          </Button>
        ))}
      </div>
    </Card>
  );
}