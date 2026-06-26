"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  FileText,
  FolderOpen,
  Home,
 Settings,
  Sparkles,
  Target,
} from "lucide-react";

const sections = [
  {
    title: "WORKSPACE",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: Home },
      { name: "Career Twin", href: "/career-twin", icon: Sparkles },
    ],
  },
  {
    title: "CAREER",
    items: [
      { name: "Jobs", href: "/jobs", icon: Target },
      { name: "Applications", href: "/applications", icon: Briefcase },
      { name: "Documents", href: "/documents", icon: FolderOpen },
      { name: "Interview Prep", href: "/interview", icon: FileText },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { name: "Insights", href: "/insights", icon: Target },
      { name: "Settings", href: "/settings", icon: Settings },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/5 bg-[#0B1120]/95 backdrop-blur-2xl">
      {/* Logo */}

      <div className="border-b border-white/5 px-8 py-6">
        <h1 className="text-[2rem] font-bold leading-none tracking-tight text-white">
          Career Twin
        </h1>

        <p className="mt-4 text-xs uppercase tracking-[0.35em] text-slate-500">
          AI CORE ONLINE
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-5 py-6">
        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-600">
              {section.title}
            </p>

            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`group relative flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 ${
                        active
                          ? "bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-white shadow-[0_0_20px_rgba(59,130,246,.12)]"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {active && (
                        <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-gradient-to-b from-cyan-300 to-blue-500" />
                      )}

                      <Icon
                        className={`h-5 w-5 transition-colors ${
                          active
                            ? "text-cyan-300"
                            : "text-slate-400 group-hover:text-cyan-300"
                        }`}
                      />

                      <span className="font-medium tracking-tight">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Status */}

      <div className="border-t border-white/5 p-5">
        <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-50" />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-100">
                AI Engine Online
              </p>

              <p className="text-xs text-slate-500">
                All systems operational
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}