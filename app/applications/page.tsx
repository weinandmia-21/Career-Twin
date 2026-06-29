import { requireUser } from "@/lib/auth/requireUser";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ApplicationList from "@/components/applications/ApplicationList";

import { getApplications } from "@/lib/applications/applicationService";

export default async function ApplicationsPage() {
  await requireUser();

  const applications = await getApplications();

  return (
    <DashboardLayout>
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Career Workspace
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Applications
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          Track every opportunity from discovery through offer.
          Your Career Twin will use this history to provide
          personalized guidance throughout your job search.
        </p>
      </div>

      <ApplicationList applications={applications} />
    </DashboardLayout>
  );
}