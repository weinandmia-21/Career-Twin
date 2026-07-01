"use client";

import { useState } from "react";

import ResumeToolbar from "./ResumeToolbar";
import ResumePreview from "./ResumePreview";
import CareerTwinSidebar from "./CareerTwinSidebar";
import DraftBanner from "./DraftBanner";
import DraftReviewSidebar from "./DraftReviewSidebar";

import { buildResumeReview } from "@/lib/resume/review/buildResumeReview";

import type { Resume } from "@/lib/resume/schema";
import type { ResumeReviewItem } from "@/lib/resume/review/buildResumeReview";
import type { CareerTwinProfile } from "@/lib/ai/schemas";
import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
  profile: CareerTwinProfile;
  resume: Resume | null;
  draftResume: Resume | null;
};

export default function ResumeStudioClient({
  application,
  profile,
  resume,
  draftResume,
}: Props) {
  const [reviewMode, setReviewMode] =
    useState(false);

  const [selectedReviewItem, setSelectedReviewItem] =
    useState<string | null>(null);

  const hasResume = !!resume;
  const hasDraft = !!draftResume;

  const reviewItems: ResumeReviewItem[] =
    hasResume && hasDraft
      ? buildResumeReview(resume, draftResume)
      : [];

  function openReview() {
    setReviewMode(true);

    if (
      reviewItems.length > 0 &&
      !selectedReviewItem
    ) {
      setSelectedReviewItem(
        reviewItems[0].id
      );
    }
  }

  return (
    <div className="space-y-4">

      <ResumeToolbar
        application={application}
        hasResume={hasResume}
        hasDraft={hasDraft}
        onReview={openReview}
      />

      {hasDraft && !reviewMode && (
        <DraftBanner
          suggestions={reviewItems.length}
        />
      )}

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">

        <ResumePreview
          application={application}
          resume={resume}
          draftResume={draftResume}
          reviewMode={reviewMode}
          reviewItems={reviewItems}
          selectedReviewItem={
            selectedReviewItem
          }
        />

        {reviewMode ? (
          <DraftReviewSidebar
            items={reviewItems}
            selectedItem={
              selectedReviewItem
            }
            onSelect={
              setSelectedReviewItem
            }
            resumeMatch={
              application.resumeMatch ??
              application.matchScore
            }
          />
        ) : (
          <CareerTwinSidebar
            application={application}
            profile={profile}
          />
        )}

      </div>

    </div>
  );
}