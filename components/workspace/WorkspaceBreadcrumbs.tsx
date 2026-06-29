"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  company: string;
  current: string;
};

export default function WorkspaceBreadcrumbs({
  company,
  current,
}: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex items-center gap-3 text-base"
    >
      <Link
        href="/applications"
        className="font-medium text-slate-300 transition-colors hover:text-cyan-300"
      >
        Applications
      </Link>

      <ChevronRight className="h-4 w-4 text-slate-500" />

      <span className="font-medium text-slate-300">
        {company}
      </span>

      <ChevronRight className="h-4 w-4 text-slate-500" />

      <span className="font-semibold text-white">
        {current}
      </span>
    </nav>
  );
}