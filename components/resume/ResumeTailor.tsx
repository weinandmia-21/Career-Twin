"use client";

import { Sparkles, Brain } from "lucide-react";

import ExpandableCard from "@/components/ui/ExpandableCard";
import AIActionButton from "@/components/ai/AIActionButton";

import AIThinking from "@/components/ai/AIThinking";

import { useResumeTailor } from "@/hooks/useResumeTailor";

import type { CareerTwinProfile } from "@/lib/ai/schemas";
import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
  profile: CareerTwinProfile;
};

export default function ResumeTailor({
  application,
  profile,
}: Props) {
  const {
    loading,
    resume,
    generate,
  } = useResumeTailor();

  return (
    <div className="space-y-8">

      {/* Generator */}

      <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

        <div className="flex items-center gap-3">

          <Sparkles className="h-7 w-7 text-cyan-300" />

          <div>

            <h2 className="text-3xl font-bold text-white">
              AI Resume Tailoring
            </h2>

            <p className="mt-2 text-slate-400">
              Career Twin analyzes your experience and this job
              description to maximize ATS performance.
            </p>

          </div>

        </div>
<div className="mt-10">
  <AIActionButton
    loading={loading}
    loadingText="Building Resume Intelligence..."
    onClick={() =>
      generate(
        profile,
        application.jobDescription ?? ""
      )
    }
  >
    Generate Resume Intelligence
  </AIActionButton>
</div>
      </div>

      {loading && (
        <AIThinking
          title="Building Your Resume"
          steps={[
            "Loading Career Twin profile...",
            "Analyzing the job description...",
            "Matching your experience...",
            "Ranking ATS keywords...",
            "Writing tailored recommendations...",
          ]}
        />
      )}

      {resume && (

        <div className="space-y-6">

          {/* Resume Intelligence */}

          <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 p-8">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <Brain className="h-7 w-7 text-cyan-300" />

                  <div>

                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                      Career Twin
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-white">
                      Resume Intelligence
                    </h2>

                  </div>

                </div>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
                  Your resume has been optimized specifically for this role.
                  Review the recommendations below before submitting.
                </p>

              </div>

              <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-10 py-8 text-center">

                <p className="text-6xl font-bold text-cyan-300">
                  {resume.atsScore}%
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cyan-200">
                  ATS Match
                </p>

              </div>

            </div>

          </div>
                    <ExpandableCard
            title="Professional Summary"
            subtitle="AI-tailored executive summary"
            icon={<Brain className="h-5 w-5 text-cyan-300" />}
    
          >
            <p className="leading-8 text-slate-300">
              {resume.summary.tailored}
            </p>
          </ExpandableCard>

          <ExpandableCard
            title="Skills to Emphasize"
            subtitle={`${resume.skillsToEmphasize.length} recommended skills`}
            icon={<Sparkles className="h-5 w-5 text-cyan-300" />}
          >
            <ul className="space-y-3">
              {resume.skillsToEmphasize.map((skill) => (
                <li
                  key={skill}
                  className="rounded-xl border border-white/5 bg-slate-950 p-4 text-slate-300"
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </ExpandableCard>

          <ExpandableCard
            title="Keywords to Add"
            subtitle={`${resume.keywordsToAdd.length} ATS keywords`}
            icon={<Sparkles className="h-5 w-5 text-cyan-300" />}
          >
            <ul className="space-y-3">
              {resume.keywordsToAdd.map((keyword) => (
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
            title="Experience Highlights"
            subtitle={`${resume.experienceHighlights.length} experiences to emphasize`}
            icon={<Brain className="h-5 w-5 text-cyan-300" />}
          >
            <ul className="space-y-3">
              {resume.experienceHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-xl border border-white/5 bg-slate-950 p-4 text-slate-300"
                >
                  • {highlight}
                </li>
              ))}
            </ul>
          </ExpandableCard>

          <ExpandableCard
            title="Career Twin Recommendations"
            subtitle={`${resume.resumeRecommendations.length} personalized improvements`}
            icon={<Sparkles className="h-5 w-5 text-emerald-300" />}

          >
            <ul className="space-y-3">
              {resume.resumeRecommendations.map((recommendation) => (
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