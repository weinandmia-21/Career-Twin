import GenerateResumeButton from "./GenerateResumeButton";

import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
  hasResume: boolean;
  hasDraft: boolean;
  onReview?: () => void;
};

export default function ResumeToolbar({
  application,
  hasResume,
  hasDraft,
  onReview,
}: Props) {
  return (
    <div className="mb-2 flex items-end justify-between">

      <div>

        <h1 className="text-[3.25rem] font-bold tracking-tight text-white">
          Resume Studio
        </h1>

        <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
          Tailor your resume to maximize your match and land more interviews.
        </p>

      </div>

      <GenerateResumeButton
  applicationId={application.id}
  disabled={!hasResume}
  hasDraft={hasDraft}
  onReview={onReview}
/>

    </div>
  );
}