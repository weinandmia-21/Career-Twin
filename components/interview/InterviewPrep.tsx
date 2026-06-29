"use client";

import {
  Sparkles,
  Brain,
  CircleHelp,
  MessageSquare,
  ShieldAlert,
  Trophy,
} from "lucide-react";

import ExpandableCard from "@/components/ui/ExpandableCard";
import AIThinking from "@/components/ai/AIThinking";
import AIActionButton from "@/components/ai/AIActionButton";

import { useInterviewPrep } from "@/hooks/useInterviewPrep";

import type { CareerTwinProfile } from "@/lib/ai/schemas";
import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
  profile: CareerTwinProfile;
};

export default function InterviewPrep({
  application,
  profile,
}: Props) {
  const {
    loading,
    prep,
    generate,
  } = useInterviewPrep();

  return (
    <div className="space-y-8">

      {/* Generate Card */}

      <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

        <div className="flex items-center gap-3">

          <Sparkles className="h-7 w-7 text-cyan-300" />

          <div>

            <h2 className="text-3xl font-bold text-white">
              AI Interview Prep
            </h2>

            <p className="mt-2 text-slate-400">
              Career Twin combines your resume and this job description
              to build a personalized interview strategy.
            </p>

          </div>

        </div>


       <div className="mt-10">
  <AIActionButton
  loading={loading}
  loadingText="Preparing Interview Intelligence..."
  onClick={() =>
    generate(
      profile,
      application.jobDescription ?? ""
    )
  }
>
  Generate Interview Intelligence
  </AIActionButton>
</div>

      </div>
{loading && (
  <AIThinking
    title="Preparing Your Interview"
    steps={[
      "Loading your Career Twin profile...",
      "Analyzing the job description...",
      "Identifying likely interview questions...",
      "Selecting your strongest STAR stories...",
      "Preparing personalized coaching...",
    ]}
  />
)}
      {prep && (

        <div className="space-y-6">

          {/* Intelligence */}

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
                      Interview Intelligence
                    </h2>

                  </div>

                </div>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
                  {prep.overallAssessment}
                </p>

              </div>

              <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-10 py-8 text-center">

                <p className="text-6xl font-bold text-cyan-300">
                  {prep.readinessScore}%
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cyan-200">
                  Interview Ready
                </p>

              </div>

            </div>

          </div>
                    <div className="space-y-6">

            <ExpandableCard
              title="Likely Questions"
              subtitle={`${prep.likelyQuestions.length} personalized interview questions`}
              icon={<CircleHelp className="h-5 w-5 text-cyan-300" />}
    
            >
              <div className="space-y-4">
                {prep.likelyQuestions.map((question) => (
                  <div
                    key={question}
                    className="rounded-2xl border border-white/5 bg-slate-950 p-5"
                  >
                    <p className="leading-7 text-slate-300">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </ExpandableCard>

            <ExpandableCard
              title="Questions To Ask"
              subtitle={`${prep.questionsToAsk.length} thoughtful questions`}
              icon={<MessageSquare className="h-5 w-5 text-cyan-300" />}
            >
              <div className="space-y-4">
                {prep.questionsToAsk.map((question) => (
                  <div
                    key={question}
                    className="rounded-2xl border border-white/5 bg-slate-950 p-5"
                  >
                    <p className="leading-7 text-slate-300">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </ExpandableCard>

          </div>

          <ExpandableCard
            title="Best STAR Stories"
            subtitle={`${prep.starStories.length} stories Career Twin recommends`}
            icon={<Trophy className="h-5 w-5 text-cyan-300" />}
          >
            <div className="space-y-5">

              {prep.starStories.map((story) => (

                <div
                  key={story.question}
                  className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6"
                >

                  <h3 className="text-lg font-semibold text-white">
                    {story.question}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">
                    {story.story}
                  </p>

                </div>

              ))}

            </div>
          </ExpandableCard>

          <div className="space-y-6">

            <ExpandableCard
              title="Company Research"
              subtitle={`${prep.companyResearch.length} insights to review`}
              icon={<Brain className="h-5 w-5 text-cyan-300" />}
            >
              <div className="space-y-4">
                {prep.companyResearch.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/5 bg-slate-950 p-5"
                  >
                    <p className="leading-7 text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </ExpandableCard>

            <ExpandableCard
              title="Biggest Risks"
              subtitle={`${prep.biggestRisks.length} areas to strengthen`}
              icon={<ShieldAlert className="h-5 w-5 text-amber-300" />}
            >
              <div className="space-y-4">
                {prep.biggestRisks.map((risk) => (
                  <div
                    key={risk}
                    className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5"
                  >
                    <p className="leading-7 text-slate-300">
                      {risk}
                    </p>
                  </div>
                ))}
              </div>
            </ExpandableCard>

          </div>

          <ExpandableCard
            title="Career Twin Coaching"
            subtitle={`${prep.recommendations.length} personalized recommendations`}
            icon={<Sparkles className="h-5 w-5 text-emerald-300" />}
          >
            <div className="space-y-4">

              {prep.recommendations.map((recommendation) => (
                <div
                  key={recommendation}
                  className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5"
                >
                  <p className="leading-7 text-slate-200">
                    ✓ {recommendation}
                  </p>
                </div>
              ))}

            </div>
          </ExpandableCard>

        </div>

      )}

    </div>
  );
}