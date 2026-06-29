"use client";

import {
  Sparkles,
  Brain,
  PenSquare,
} from "lucide-react";

import AIActionButton from "@/components/ai/AIActionButton";
import AIThinking from "@/components/ai/AIThinking";
import ExpandableCard from "@/components/ui/ExpandableCard";

import { useCoverLetter } from "@/hooks/useCoverLetter";

import type { CareerTwinProfile } from "@/lib/ai/schemas";
import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
  profile: CareerTwinProfile;
};

export default function CoverLetterWorkspace({
  application,
  profile,
}: Props) {
  const {
    loading,
    coverLetter,
    generate,
  } = useCoverLetter();

  return (
    <div className="space-y-8">

      {/* Generator */}

      <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

        <div className="flex items-center gap-3">

          <PenSquare className="h-7 w-7 text-cyan-300" />

          <div>

            <h2 className="text-3xl font-bold text-white">
              AI Cover Letter
            </h2>

            <p className="mt-2 text-slate-400">
              Career Twin writes a personalized, ATS-friendly cover
              letter using your profile and this job description.
            </p>

          </div>

        </div>

        <div className="mt-10">

          <AIActionButton
            loading={loading}
            loadingText="Writing Cover Letter..."
            onClick={() =>
              generate(
                profile,
                application.jobDescription ?? ""
              )
            }
          >
            Generate Cover Letter
          </AIActionButton>

        </div>

      </div>

      {loading && (
        <AIThinking
          title="Writing Your Cover Letter"
          steps={[
            "Loading Career Twin profile...",
            "Analyzing the job description...",
            "Matching your experience...",
            "Writing a personalized cover letter...",
            "Optimizing for ATS keywords...",
          ]}
        />
      )}

      {coverLetter && (
        <div className="space-y-6">

          {/* Intelligence */}

          <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 p-8">

            <div className="flex items-center gap-3">

              <Brain className="h-7 w-7 text-cyan-300" />

              <div>

                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Career Twin
                </p>

                <h2 className="mt-2 text-4xl font-bold text-white">
                  Cover Letter Intelligence
                </h2>

              </div>

            </div>

          </div>

          <ExpandableCard
            title="Cover Letter"
            subtitle="AI-generated draft"
            icon={<PenSquare className="h-5 w-5 text-cyan-300" />}
          >
            <div className="whitespace-pre-wrap leading-8 text-slate-300">
              {coverLetter.coverLetter}
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Opening Hook"
            subtitle="Why this opening works"
            icon={<Sparkles className="h-5 w-5 text-cyan-300" />}
          >
            <p className="leading-8 text-slate-300">
              {coverLetter.openingHook}
            </p>
          </ExpandableCard>

          <ExpandableCard
            title="Strengths Highlighted"
            subtitle={`${coverLetter.strengthsHighlighted.length} strengths`}
            icon={<Brain className="h-5 w-5 text-cyan-300" />}
          >
            <ul className="space-y-3">
              {coverLetter.strengthsHighlighted.map((strength) => (
                <li
                  key={strength}
                  className="rounded-xl border border-white/5 bg-slate-950 p-4 text-slate-300"
                >
                  • {strength}
                </li>
              ))}
            </ul>
          </ExpandableCard>

          <ExpandableCard
            title="Keywords Included"
            subtitle={`${coverLetter.keywordsIncluded.length} ATS keywords`}
            icon={<Sparkles className="h-5 w-5 text-cyan-300" />}
          >
            <ul className="space-y-3">
              {coverLetter.keywordsIncluded.map((keyword) => (
                <li
                  key={keyword}
                  className="rounded-xl border border-white/5 bg-slate-950 p-4 text-slate-300"
                >
                  • {keyword}
                </li>
              ))}
            </ul>
          </ExpandableCard>

          <ExpandableCard
            title="Career Twin Recommendations"
            subtitle={`${coverLetter.recommendations.length} suggestions`}
            icon={<Sparkles className="h-5 w-5 text-emerald-300" />}
          >
            <ul className="space-y-3">
              {coverLetter.recommendations.map((recommendation) => (
                <li
                  key={recommendation}
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-slate-200"
                >
                  ✓ {recommendation}
                </li>
              ))}
            </ul>
          </ExpandableCard>

        </div>
      )}

    </div>
  );
}