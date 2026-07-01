import { notFound } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ApplicationWorkspace from "@/components/workspace/ApplicationWorkspace";

import { requireUser } from "@/lib/auth/requireUser";
import { getApplication } from "@/lib/applications/applicationService";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ApplicationDetailsPage({
  params,
}: Props) {
  await requireUser();

  const { id } = await params;

  const application = await getApplication(id);

  if (!application) {
    notFound();
  }

  return (
    <DashboardLayout>
      <ApplicationWorkspace
        application={application}
        current="Overview"
      >
        <div className="space-y-8">

          <div className="space-y-6">

  <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 p-8">

    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
      Career Twin Assessment
    </p>

    <h2 className="mt-4 text-3xl font-bold text-white">
      Strong Match for This Opportunity
    </h2>

    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
      Based on your Career Twin profile, this role aligns well with your
      presentation design, executive communications, and visual storytelling
      experience. Your strongest opportunity is highlighting measurable
      business impact and executive-facing work throughout your application.
    </p>

  </div>

  <div className="grid gap-6 lg:grid-cols-2">

    <div className="rounded-3xl border border-white/5 bg-slate-900 p-8">

      <h3 className="text-xl font-semibold text-white">
        Application Progress
      </h3>

      <div className="mt-6 space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-slate-300">Resume Intelligence</span>
          <span className="text-emerald-300">✓ Available</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-300">Interview Intelligence</span>
          <span className="text-cyan-300">Ready</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-300">Cover Letter</span>
          <span className="text-cyan-300">Ready</span>
        </div>

      </div>

    </div>

    <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
        Recommended Next Step
      </p>

      <h3 className="mt-4 text-2xl font-bold text-white">
        Prepare for Interviews
      </h3>

      <p className="mt-4 leading-8 text-slate-300">
        Your resume and application materials are ready. Generate Interview
        Intelligence to practice likely questions and identify your strongest
        STAR stories before applying.
      </p>

    </div>

  </div>

  <div className="rounded-3xl border border-white/5 bg-slate-900 p-8">

    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
      Career Twin Notes
    </p>

    <p className="mt-5 leading-8 text-slate-300">
      {application.notes ??
        "No Career Twin notes have been saved yet."}
    </p>

  </div>

</div>

        </div>
      </ApplicationWorkspace>
    </DashboardLayout>
  );
}