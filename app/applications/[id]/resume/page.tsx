import { notFound } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ApplicationWorkspace from "@/components/workspace/ApplicationWorkspace";
import ResumeTailor from "@/components/resume/ResumeTailor";

import { requireUser } from "@/lib/auth/requireUser";
import { getApplication } from "@/lib/applications/applicationService";
import { loadProfile } from "@/lib/career/loadProfile";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ResumeWorkspace({
  params,
}: Props) {
  await requireUser();

  const { id } = await params;

  const [application, profile] = await Promise.all([
    getApplication(id),
    loadProfile(),
  ]);

  if (!application || !profile) {
    notFound();
  }

  return (
    <DashboardLayout>
      <ApplicationWorkspace
        application={application}
        current="Resume"
      >
        <ResumeTailor
          application={application}
          profile={profile}
        />
      </ApplicationWorkspace>
    </DashboardLayout>
  );
}