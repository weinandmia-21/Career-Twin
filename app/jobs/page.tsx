import { requireUser } from "@/lib/auth/requireUser";
import DashboardLayout from "@/components/layout/DashboardLayout";
import JobAnalyzer from "@/components/jobs/JobAnalyzer";

export default async function JobsPage() {
  await requireUser();
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl py-10">
        <h1 className="text-5xl font-bold text-white">
          Career Match
        </h1>

        <p className="mt-4 text-slate-400">
          Paste a job description and let your Career Twin analyze how well you match.
        </p>

        <JobAnalyzer />
      </div>
    </DashboardLayout>
  );
}