"use client";

import { useState } from "react";

import { useCareerTwinStore } from "@/lib/store/careerTwinStore";
import type { JobMatch } from "@/lib/ai/analyzeJobMatch";

export function useJobMatch() {
  const profile = useCareerTwinStore(
    (state) => state.profile
  );

  const [loading, setLoading] = useState(false);

  const [match, setMatch] = useState<JobMatch | null>(null);

  async function analyze(jobDescription: string) {
    if (!profile) {
      alert("Please upload your resume first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/jobs/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profile,
          jobDescription,
        }),
      });

      const result = await response.json();

      console.log("🎯 Job Match", result);

      if (result.success) {
        setMatch(result.match as JobMatch);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    analyze,
    loading,
    match,
  };
}