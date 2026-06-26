import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { dashboard } from "@/data/dashboard";

export default function RecommendationCard() {
  const recommendation = dashboard.recommendation;

  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        Recommended Opportunity
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white">
        {recommendation.company}
      </h2>

      <p className="mt-2 text-lg text-slate-400">
        {recommendation.role}
      </p>

      <p className="mt-5 leading-7 text-slate-300">
        {recommendation.description}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Briefcase className="h-5 w-5 text-cyan-300" />

        <span className="font-medium text-white">
          {recommendation.match} Match
        </span>
      </div>

      <div className="mt-8 space-y-4">
        {recommendation.checklist.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-slate-300"
          >
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />

            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button>
          Review Opportunity

          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}