import { Calendar, MapPin, Target } from "lucide-react";

import type { JobApplication } from "@/lib/applications/types";

type Props = {
  application: JobApplication;
};

export default function WorkspaceHeader({
  application,
}: Props) {
  return (
    <div className="mb-8">

      <h1 className="text-5xl font-bold tracking-tight text-white">
        {application.company}
      </h1>

      <p className="mt-2 text-2xl text-slate-300">
        {application.role}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-slate-400">

        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-cyan-300" />
          <span>{application.status}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-cyan-300" />
          <span>{application.location || "Not specified"}</span>
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
  );
}