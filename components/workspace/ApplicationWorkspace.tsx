import type { ReactNode } from "react";
import { MapPin, Calendar, Target } from "lucide-react";

import WorkspaceBreadcrumbs from "./WorkspaceBreadcrumbs";
import WorkspaceTabs from "./WorkspaceTabs";

import MetricCard from "@/components/ui/MetricCard";

import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
  current: string;
  children: ReactNode;
};

export default function ApplicationWorkspace({
  application,
  current,
  children,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl">

      <WorkspaceBreadcrumbs
        company={application.company}
        current={current}
      />

      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <h1 className="text-5xl font-bold tracking-tight text-white">
            {application.company}
          </h1>

          <p className="mt-3 text-2xl text-slate-300">
            {application.role}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-400">

            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-cyan-300" />
              <span>{application.status}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-300" />
              <span>{application.location || "Remote"}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan-300" />
              <span>
                Updated{" "}
                {new Date(application.updatedAt).toLocaleDateString()}
              </span>
            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 px-10 py-8 text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Match Score
          </p>

          <h2 className="mt-3 text-6xl font-bold text-white">
            {application.matchScore}%
          </h2>

          <p className="mt-2 text-sm text-cyan-200">
            AI Match
          </p>

        </div>

      </div>

      <div className="mb-10 grid gap-5 md:grid-cols-3">

        <MetricCard
          label="Status"
          value={application.status}
        />

        <MetricCard
          label="Location"
          value={application.location || "Remote"}
        />

        <MetricCard
          label="Last Updated"
          value={new Date(application.updatedAt).toLocaleDateString()}
        />

      </div>

      <div className="mb-10">
  <WorkspaceTabs applicationId={application.id} />
</div>

      {children}

    </div>
  );
}