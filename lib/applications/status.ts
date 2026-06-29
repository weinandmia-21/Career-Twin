import type { ApplicationStatus } from "./types";

export type ApplicationStatusConfig = {
  value: ApplicationStatus;
  label: string;
  color: string;
  dot: string;
};

export const APPLICATION_STATUSES: ApplicationStatusConfig[] = [
  {
    value: "Saved",
    label: "Saved",
    color: "border-slate-500/20 bg-slate-700/20 text-slate-200",
    dot: "bg-slate-400",
  },
  {
    value: "Applied",
    label: "Applied",
    color: "border-blue-500/20 bg-blue-500/10 text-blue-300",
    dot: "bg-blue-400",
  },
  {
    value: "Interview",
    label: "Interview",
    color: "border-amber-500/20 bg-amber-500/10 text-amber-300",
    dot: "bg-amber-400",
  },
  {
    value: "Offer",
    label: "Offer",
    color: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
    dot: "bg-emerald-400",
  },
  {
    value: "Accepted",
    label: "Accepted",
    color: "border-green-500/20 bg-green-500/10 text-green-300",
    dot: "bg-green-400",
  },
  {
    value: "Rejected",
    label: "Rejected",
    color: "border-red-500/20 bg-red-500/10 text-red-300",
    dot: "bg-red-400",
  },
  {
    value: "Archived",
    label: "Archived",
    color: "border-slate-500/20 bg-slate-700/20 text-slate-300",
    dot: "bg-slate-400",
  },
];

export const STATUS_MAP = Object.fromEntries(
  APPLICATION_STATUSES.map((status) => [status.value, status])
) as Record<ApplicationStatus, ApplicationStatusConfig>;