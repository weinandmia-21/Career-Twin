import { ArrowRight, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RecommendationCard() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Today's Mission
      </p>

      <h2 className="mt-5 text-3xl font-bold text-white">
        Stripe
      </h2>

      <p className="mt-2 text-slate-400">
        Senior Communications Manager
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Briefcase className="h-5 w-5 text-cyan-400" />
        <span className="text-white font-medium">94% Match</span>
      </div>

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-emerald-400 h-5 w-5" />
          Resume Optimized
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-emerald-400 h-5 w-5" />
          Cover Letter Ready
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-emerald-400 h-5 w-5" />
          Interview Brief Ready
        </div>

      </div>

      <Button className="mt-8 w-full">
        Review Mission
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}