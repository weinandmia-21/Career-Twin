"use client";

import Link from "next/link";

import {
  MoreHorizontal,
  FolderOpen,
  Archive,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  applicationId: string;
};

export default function ApplicationMenu({
  applicationId,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-xl p-3 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <MoreHorizontal className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-52"
      >
        <DropdownMenuItem asChild>
  <Link
    href={`/applications/${applicationId}`}
    className="flex items-center gap-2"
  >
    <FolderOpen className="h-4 w-4" />
    Open Workspace
  </Link>
</DropdownMenuItem>

<DropdownMenuItem className="flex items-center gap-2">
  <Archive className="h-4 w-4" />
  Archive
</DropdownMenuItem>

<DropdownMenuItem className="flex items-center gap-2 text-red-400 focus:text-red-300">
  <Trash2 className="h-4 w-4" />
  Delete…
</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}