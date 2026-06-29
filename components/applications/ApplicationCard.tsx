import type { JobApplication } from "@/lib/applications/types";
import Link from "next/link";

import {
  Calendar,
  MapPin,
  Target,
  Building2,
  ArrowRight,
} from "lucide-react";

type Props = {
  application: JobApplication;
};

const statusColors: Record<string, string> = {
  Saved:
    "border-slate-500/20 bg-slate-700/20 text-slate-200",

  Applied:
    "border-blue-500/20 bg-blue-500/10 text-blue-300",

  Interview:
    "border-amber-500/20 bg-amber-500/10 text-amber-300",

  Offer:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",

  Rejected:
    "border-red-500/20 bg-red-500/10 text-red-300",

  Archived:
    "border-slate-500/20 bg-slate-700/20 text-slate-300",
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
    <div className="group rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-950 p-7 transition-all duration-300 hover:border-cyan-500/20 hover:shadow-[0_0_40px_rgba(34,211,238,.08)]">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-cyan-300" />

            <h3 className="text-2xl font-bold text-white">
              {application.company}
            </h3>
          </div>

          <p className="mt-2 text-lg text-slate-300">
            {application.role}
          </p>
        </div>

        <span
          className={`rounded-full border px-4 py-2 text-sm font-semibold ${
            statusColors[application.status]
          }`}
        >
          {application.status}
        </span>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-cyan-300" />

            <p className="text-xs uppercase tracking-wider text-cyan-300">
              Match Score
            </p>
          </div>

          <p
            className={`mt-3 text-3xl font-bold ${getMatchColor(
              application.matchScore
            )}`}
          >
            {application.matchScore}%
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-slate-400" />

            <p className="text-xs uppercase tracking-wider text-slate-400">
              Location
            </p>
          </div>

          <p className="mt-3 text-white">
            {application.location ?? "Not specified"}
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-slate-400" />

            <p className="text-xs uppercase tracking-wider text-slate-400">
              Last Updated
            </p>
          </div>

          <p className="mt-3 text-white">
            {new Date(
              application.updatedAt
            ).toLocaleDateString()}
          </p>
        </div>
      </div>

      {application.notes && (
        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Career Twin Notes
          </p>

          <p className="mt-3 leading-7 text-slate-300">
            {application.notes}
          </p>
        </div>
      )}

      <div className="mt-8 flex items-center gap-6 text-sm">
  <Link
    href={`/applications/${application.id}/resume`}
    className="font-medium text-cyan-300 transition hover:text-cyan-200"
  >
    Tailor Resume
  </Link>

  <Link
    href={`/applications/${application.id}/interview`}
    className="font-medium text-cyan-300 transition hover:text-cyan-200"
  >
    Interview Prep
  </Link>

  <Link
    href={`/applications/${application.id}`}
    className="group ml-auto flex items-center gap-2 font-medium text-cyan-300 transition hover:text-cyan-200"
  >
    View Details

    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </Link>
</div>
    </div>
  );
}