import {
  Check,
  X,
  FileText,
  ChevronRight,
} from "lucide-react";

import type { ResumeReviewItem } from "@/lib/resume/review/buildResumeReview";

type Props = {
  items: ResumeReviewItem[];
  selectedItem: string | null;
  onSelect: (id: string) => void;
  resumeMatch: number;
};

function matchLabel(score: number) {
  if (score >= 90) return "Excellent Match";
  if (score >= 75) return "Strong Match";
  if (score >= 60) return "Moderate Match";
  return "Needs Improvement";
}

function changeDescription(item: ResumeReviewItem) {
  switch (item.type) {
    case "summary":
      return "Professional summary improved";

    case "experience": {
      const bullets =
        item.changedFields?.bullets?.length ?? 0;

      const title =
        item.changedFields?.title;

      if (title && bullets > 0) {
        return `${bullets} bullet${bullets === 1 ? "" : "s"} updated • Title refined`;
      }

      if (bullets > 0) {
        return `${bullets} bullet${bullets === 1 ? "" : "s"} updated`;
      }

      if (title) {
        return "Job title refined";
      }

      return "Experience updated";
    }

    case "skills": {
      const count =
        item.changedFields?.skills?.length ?? 0;

      return `${count} skill${count === 1 ? "" : "s"} updated`;
    }

    case "education":
      return "Education updated";

    case "project":
      return "Project updated";

    case "certification":
      return "Certification updated";

    default:
      return "Updated";
  }
}

export default function DraftReviewSidebar({
  items,
  selectedItem,
  onSelect,
  resumeMatch,
}: Props) {
  return (
    <div className="space-y-5">

      {/* Resume Match */}

      <div className="rounded-3xl border border-cyan-500/20 bg-[#0D1528] p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">

            <FileText className="h-5 w-5 text-cyan-300" />

          </div>

          <div>

            <p className="text-sm text-slate-400">
              Resume Match
            </p>

            <h2 className="text-xl font-semibold text-white">
              {matchLabel(resumeMatch)}
            </h2>

          </div>

        </div>

        <div className="mt-6">

          <p className="text-5xl font-bold text-cyan-300">
            {resumeMatch}%
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

            <div
              className="h-full rounded-full bg-cyan-400 transition-all duration-700"
              style={{
                width: `${resumeMatch}%`,
              }}
            />

          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            AI estimate based on your resume,
            skills, and this job description.
          </p>

        </div>

      </div>

      {/* Review */}

      <div className="rounded-3xl border border-white/10 bg-[#0D1528] p-6">

        <div className="mb-6">

          <h2 className="text-xl font-semibold text-white">
            AI Draft Review
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            {items.length} suggested change{items.length === 1 ? "" : "s"}
          </p>

        </div>

        <div className="space-y-2">

          {items.map((item, index) => {

            const active =
              selectedItem === item.id;
console.log(
  items.map((item) => ({
    id: item.id,
    label: item.label,
    type: item.type,
  }))
);
            return (

              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={[
                  "group w-full rounded-2xl border p-4 text-left transition-all",
                  active
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-white/5 hover:border-cyan-400/40 hover:bg-white/[0.03]",
                ].join(" ")}
              >

                <div className="flex items-start gap-3">

                  <div
                    className={[
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold",
                      active
                        ? "bg-cyan-400 text-slate-950"
                        : "bg-cyan-400/10 text-cyan-300",
                    ].join(" ")}
                  >
                    {index + 1}
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="font-medium text-white">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {changeDescription(item)}
                    </p>

                  </div>

                  <ChevronRight
                    className={[
                      "mt-1 h-4 w-4 transition",
                      active
                        ? "text-cyan-300"
                        : "text-slate-600 group-hover:text-cyan-300",
                    ].join(" ")}
                  />

                </div>

              </button>

            );

          })}

        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">

          <button className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">

            <Check className="h-4 w-4" />

            Accept All

          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-red-500/20 py-3 text-red-300 transition hover:bg-red-500/10">

            <X className="h-4 w-4" />

            Reject All

          </button>

        </div>

      </div>

    </div>
  );
}