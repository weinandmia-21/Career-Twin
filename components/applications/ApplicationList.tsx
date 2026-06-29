import type { JobApplication } from "@/lib/applications/types";
import ApplicationCard from "./ApplicationCard";

type Props = {
  applications: JobApplication[];
};

export default function ApplicationList({
  applications,
}: Props) {
  if (applications.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-cyan-500/20 bg-slate-900 p-16 text-center">
        <h2 className="text-2xl font-semibold text-white">
          No applications yet
        </h2>

        <p className="mt-4 text-slate-400">
          Analyze a job and save it to your tracker to begin
          building your application history.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
        />
      ))}
    </div>
  );
}