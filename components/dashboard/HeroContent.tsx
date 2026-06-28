"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useCareerTwinStore } from "@/lib/store/careerTwinStore";

export default function HeroContent() {
  const profile = useCareerTwinStore(
    (state) => state.profile
  );
  console.log("📊 Dashboard profile:", profile);

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Career Twin Active
        </span>
      </div>

      <h1 className="mt-8 text-6xl font-bold tracking-tight text-white">
        Welcome back
        {profile?.name ? `, ${profile.name}` : ""}.
      </h1>

      <p className="mt-6 text-3xl font-semibold text-cyan-300">
        {profile?.professionalTitle ??
          "Building your Career Twin..."}
      </p>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
        {profile?.executiveSummary ??
          "Upload your resume to begin creating your AI-powered Career Twin."}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {profile?.currentCompany && (
          <div className="rounded-full border border-cyan-500/20 bg-slate-900 px-5 py-2 text-cyan-300">
            🏢 {profile.currentCompany}
          </div>
        )}

        {profile?.yearsExperience !== undefined && (
          <div className="rounded-full border border-cyan-500/20 bg-slate-900 px-5 py-2 text-cyan-300">
            📈 {profile.yearsExperience}+ Years
          </div>
        )}

        {profile?.leadershipLevel && (
          <div className="rounded-full border border-cyan-500/20 bg-slate-900 px-5 py-2 text-cyan-300">
            👤 {profile.leadershipLevel}
          </div>
        )}
      </div>

      <Link
        href="/mission"
        className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
      >
        Review Today's Mission

        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}