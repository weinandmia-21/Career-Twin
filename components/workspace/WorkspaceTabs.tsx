"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  applicationId: string;
};

const tabs = [
  {
    label: "Overview",
    href: "",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Interview",
    href: "/interview",
  },
  {
    label: "Cover Letter",
    href: "/cover-letter",
  },
];

export default function WorkspaceTabs({
  applicationId,
}: Props) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-10 border-b border-white/5">
      {tabs.map((tab) => {
        const href = `/applications/${applicationId}${tab.href}`;

        const active = pathname === href;

        return (
          <Link
            key={tab.label}
            href={href}
            className={`relative pb-5 text-base font-medium transition-colors duration-200 ${
              active
                ? "text-cyan-300"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {tab.label}

            {active && (
              <span className="absolute bottom-0 left-0 h-1 rounded-full w-full rounded-full bg-cyan-300" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}