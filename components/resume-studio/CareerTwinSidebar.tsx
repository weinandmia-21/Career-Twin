import {
  Download,
  Target,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

import type { CareerTwinProfile } from "@/lib/ai/schemas";
import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
  profile: CareerTwinProfile;
};

export default function CareerTwinSidebar({
  application,
}: Props) {
  return (
    <div className="space-y-6">

      {/* Career Twin */}

      <div className="rounded-3xl border border-white/10 bg-[#0D1528] p-7">

        <div className="flex items-center gap-3">

          <Target className="h-5 w-5 text-cyan-300" />

          <h2 className="text-xl font-semibold text-white">
            Career Twin
          </h2>

        </div>

        <div className="mt-8 text-center">

          <p className="text-5xl font-bold text-cyan-300">
            {application.matchScore}%
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Career Match
          </p>

        </div>

        <div className="my-8 border-t border-white/5" />

        <div className="space-y-6">

          <div>

            <div className="flex items-center gap-2">

              <TrendingUp className="h-4 w-4 text-cyan-300" />

              <p className="font-semibold text-white">
                Top Opportunity
              </p>

            </div>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              Quantify executive-level business outcomes and
              emphasize measurable impact throughout your
              experience.
            </p>

          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">

            <p className="text-sm font-medium text-emerald-300">
              Potential Improvement
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {application.matchScore}% → 84%
            </p>

          </div>

          <div>

            <div className="mb-4 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <CheckCircle2 className="h-4 w-4 text-cyan-300" />

                <p className="font-semibold text-white">
                  Keywords Matched
                </p>

              </div>

              <span className="text-sm text-slate-400">
                18 / 28
              </span>

            </div>

            <div className="flex flex-wrap gap-2">

              {[
                "Strategic Communications",
                "Executive Messaging",
                "Content Strategy",
                "Stakeholder Engagement",
                "Cross-functional Leadership",
                "Change Management",
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
                >
                  {keyword}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Downloads */}

      <div className="rounded-3xl border border-white/10 bg-[#0D1528] p-7">

        <h2 className="text-xl font-semibold text-white">
          Actions
        </h2>

        <div className="mt-6 space-y-4">

          <button
            disabled
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 px-5 py-4 text-slate-500"
          >

            <Download className="h-5 w-5" />

            Download DOCX

          </button>

          <button
            disabled
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 px-5 py-4 text-slate-500"
          >

            <Download className="h-5 w-5" />

            Download PDF

          </button>

        </div>

      </div>

    </div>
  );
}