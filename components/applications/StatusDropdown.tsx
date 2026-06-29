"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import {
  APPLICATION_STATUSES,
  STATUS_MAP,
} from "@/lib/applications/status";

import type { ApplicationStatus } from "@/lib/applications/types";

type Props = {
  applicationId: string;
  status: ApplicationStatus;
};

const DOT_COLORS: Record<ApplicationStatus, string> = {
  Saved: "bg-slate-400",
  Applied: "bg-blue-400",
  Interview: "bg-amber-400",
  Offer: "bg-emerald-400",
  Accepted: "bg-green-400",
  Rejected: "bg-red-400",
  Archived: "bg-slate-500",
};

export default function StatusDropdown({
  applicationId,
  status,
}: Props) {
  const router = useRouter();

  const [value, setValue] =
    useState<ApplicationStatus>(status);

  const [loading, setLoading] = useState(false);

  async function updateStatus(
    nextStatus: ApplicationStatus
  ) {
    setLoading(true);
    setValue(nextStatus);

    try {
      const response = await fetch(
        "/api/applications/status",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: applicationId,
            status: nextStatus,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.error);
        setValue(status);
        return;
      }

      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  const current = STATUS_MAP[value];

  return (
    <Select
      value={value}
      disabled={loading}
      onValueChange={(value) =>
        updateStatus(value as ApplicationStatus)
      }
    >
      <SelectTrigger
  className="
    h-10
    min-w-[170px]
    max-w-[210px]
    rounded-full
    border
    border-white/10
    bg-slate-900/80
    pl-5
    pr-10
    shadow-none
    transition-all
    duration-200
    hover:border-white/20
    hover:bg-slate-900
    focus:ring-0
    focus:ring-offset-0
  "
>
  <div className="flex w-full items-center justify-between">

    <div className="flex min-w-0 items-center gap-3">

      <span
        className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${DOT_COLORS[value]}`}
      />

      <span className="truncate text-[15px] font-semibold text-white">
        {current.label}
      </span>

    </div>

  </div>

</SelectTrigger>

      <SelectContent
  position="popper"
  sideOffset={8}
  align="end"
  className="w-[250px] rounded-2xl border border-white/10 bg-slate-950 p-2"
>

        {APPLICATION_STATUSES.map((status) => (
          <SelectItem
            key={status.value}
            value={status.value}
            className="rounded-lg py-2.5 text-white focus:bg-white/5"
          >

            <div className="flex items-center gap-3">

              <span
                className={`h-2 w-2 rounded-full ${DOT_COLORS[status.value]}`}
              />

              <span className="text-sm">
                {status.label}
              </span>

            </div>

          </SelectItem>
        ))}

      </SelectContent>
    </Select>
  );
}