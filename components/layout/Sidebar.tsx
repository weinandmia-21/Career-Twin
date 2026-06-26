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

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Career Twin", href: "/career-twin", icon: Sparkles },
  { name: "Jobs", href: "/jobs", icon: Target },
  { name: "Applications", href: "/applications", icon: Briefcase },
  { name: "Documents", href: "/documents", icon: FolderOpen },
  { name: "Interview Prep", href: "/interview", icon: FileText },
  { name: "Insights", href: "/insights", icon: Target },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-cyan-500/20 bg-slate-950 text-slate-100">
      <div className="border-b border-cyan-500/20 p-6">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
          Career Twin
        </h1>

        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
          AI Core Online
        </p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
               <Link
  href={item.href}
  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
    pathname === item.href
      ? "bg-cyan-500/20 text-cyan-300"
      : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300"
  }`}
>
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-cyan-500/20 p-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-400">
            Neural Engine Active
          </span>
        </div>
      </div>
    </aside>
  );
}