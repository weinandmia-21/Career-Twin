import ResumeStudioClient from "./ResumeStudioClient";

import { loadResume } from "@/lib/resume/loadResume";
import { loadResumeDraft } from "@/lib/resume/loadResumeDraft";

import type { CareerTwinProfile } from "@/lib/ai/schemas";
import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
  profile: CareerTwinProfile;
};

export default async function ResumeStudio({
  application,
  profile,
}: Props) {
  const resume = await loadResume(application.id);

  const draftResume = await loadResumeDraft(
    application.id
  );

  return (
    <ResumeStudioClient
      application={application}
      profile={profile}
      resume={resume}
      draftResume={draftResume}
    />
  );
}