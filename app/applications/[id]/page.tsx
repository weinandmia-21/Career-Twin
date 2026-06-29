import Link from "next/link";
import { notFound } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";
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
      <div className="space-y-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Application Workspace
          </p>

          <h1 className="mt-3 text-5xl font-bold text-white">
            {application.company}
          </h1>

          <p className="mt-3 text-xl text-slate-300">
            {application.role}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-wider text-cyan-300">
              Match Score
            </p>

            <p className="mt-4 text-5xl font-bold text-white">
              {application.matchScore}%
            </p>
          </div>

          <div className="rounded-3xl border border-white/5 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-wider text-slate-400">
              Status
            </p>

            <p className="mt-4 text-2xl font-semibold text-white">
              {application.status}
            </p>
          </div>

          <div className="rounded-3xl border border-white/5 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-wider text-slate-400">
              Location
            </p>

            <p className="mt-4 text-2xl font-semibold text-white">
              {application.location || "Not specified"}
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/5 bg-slate-900 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Career Twin Notes
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            {application.notes ??
              "No Career Twin notes have been saved yet."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Tailor Resume */}
          <Link
            href={`/applications/${application.id}/resume`}
            className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6 transition hover:bg-cyan-500/20"
          >
            <p className="text-xl font-semibold text-white">
              Tailor Resume
            </p>

            <p className="mt-2 text-slate-400">
              Generate a resume tailored to this role.
            </p>
          </Link>

          {/* Interview Prep */}
          <button className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6 text-left transition hover:bg-cyan-500/20">
            <p className="text-xl font-semibold text-white">
              Interview Prep
            </p>

            <p className="mt-2 text-slate-400">
              Practice questions and STAR stories.
            </p>
          </button>

          {/* Cover Letter */}
          <button className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6 text-left transition hover:bg-cyan-500/20">
            <p className="text-xl font-semibold text-white">
              Generate Cover Letter
            </p>

            <p className="mt-2 text-slate-400">
              Build a customized cover letter.
            </p>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}