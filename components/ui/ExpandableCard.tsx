"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function ExpandableCard({
  title,
  subtitle,
  icon,
  defaultOpen = false,
  children,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
        open
          ? "border-cyan-500/30 bg-slate-900 shadow-[0_0_40px_rgba(34,211,238,.08)]"
          : "border-white/5 bg-slate-900 hover:border-cyan-500/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-7 py-6 text-left transition-colors hover:bg-white/[0.02]"
      >
        <div className="flex items-center gap-4">
          {icon && (
            <div
              className={`rounded-2xl border p-3 transition-all duration-300 ${
                open
                  ? "border-cyan-500/30 bg-cyan-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {icon}
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-white">
              {title}
            </h3>

            {subtitle && (
              <p className="mt-1 text-sm text-slate-400">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <ChevronDown
          className={`h-6 w-6 text-cyan-300 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/5 px-7 pb-7 pt-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}