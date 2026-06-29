import Link from "next/link";

import {
  Calendar,
  MapPin,
  Target,
  Building2,
} from "lucide-react";

import type { JobApplication } from "@/lib/applications/types";

import StatusDropdown from "./StatusDropdown";
import ApplicationMenu from "./ApplicationMenu";

type Props = {
  application: JobApplication;
};

function getMatchColor(score: number) {
  if (score >= 90) return "text-emerald-300";
  if (score >= 75) return "text-cyan-300";
  if (score >= 60) return "text-amber-300";

  return "text-red-300";
}

export default function ApplicationCard({
  application,
}: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-[#0D1528] border-white/10 px-8 py-8 transition-all duration-300 hover:-translate-y-[2px] hover:border-cyan-400/20 hover:bg-white/[0.045] hover:shadow-[0_12px_45px_rgba(34,211,238,0.05)]">

      {/* Header */}

      <div className="flex items-start justify-between gap-4">

        <Link
          href={`/applications/${application.id}`}
          className="group block"
        >
          <div className="flex items-center gap-3">

            <Building2 className="h-6 w-6 text-cyan-300 transition-colors group-hover:text-cyan-200" />

            <h3 className="text-[1.65rem] font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-300">
              {application.company}
            </h3>

          </div>

          <p className="mt-2 text-[17px] text-slate-400 transition-colors group-hover:text-slate-200">
            {application.role}
          </p>

        </Link>

        <div className="flex items-center gap-3">

          <StatusDropdown
            applicationId={application.id}
            status={application.status}
          />

          <ApplicationMenu
            applicationId={application.id}
          />

        </div>

      </div>

      {/* Metrics */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-5 backdrop-blur-sm">

          <div className="flex items-center gap-2">

            <Target className="h-4 w-4 text-cyan-300" />

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
              Match Score
            </p>

          </div>

          <p
  className={`mt-2 text-2xl font-semibold ${getMatchColor(
    application.matchScore
  )}`}
>
  {application.matchScore}%
</p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">

          <div className="flex items-center gap-2">

            <MapPin className="h-4 w-4 text-slate-400" />

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Location
            </p>

          </div>

          <p className="mt-3 text-white">
            {application.location ?? "Not specified"}
          </p>

        </div>

        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm">

          <div className="flex items-center gap-2">

            <Calendar className="h-4 w-4 text-slate-400" />

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Last Updated
            </p>

          </div>

          <p className="mt-3 text-white">
            {new Date(application.updatedAt).toLocaleDateString()}
          </p>

        </div>

      </div>

      {/* Notes */}

      {application.notes && (
        <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.045] p-5 backdrop-blur-sm">

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Career Twin Notes
          </p>

          <p className="mt-3 leading-7 text-slate-300">
            {application.notes}
          </p>

        </div>
      )}

      {/* Quick Actions */}

      <div className="mt-8 flex items-center gap-8 border-t border-white/10 pt-6 text-sm">

        <Link
          href={`/applications/${application.id}/resume`}
          className="font-medium text-cyan-300 transition-colors hover:text-cyan-200"
        >
          Resume
        </Link>

        <Link
          href={`/applications/${application.id}/interview`}
          className="font-medium text-cyan-300 transition-colors hover:text-cyan-200"
        >
          Interview
        </Link>

        <Link
          href={`/applications/${application.id}/cover-letter`}
          className="font-medium text-cyan-300 transition-colors hover:text-cyan-200"
        >
          Cover Letter
        </Link>

      </div>

    </div>
  );
}