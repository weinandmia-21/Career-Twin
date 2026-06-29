"use client";

import { useState } from "react";

import type { CareerTwinProfile } from "@/lib/ai/schemas";
import type { InterviewPrep } from "@/lib/ai/interview/generateInterviewPrep";

export function useInterviewPrep() {
  const [loading, setLoading] = useState(false);

  const [prep, setPrep] =
    useState<InterviewPrep | null>(null);

  async function generate(
    profile: CareerTwinProfile,
    jobDescription: string
  ) {
    setLoading(true);

    try {
      const response = await fetch(
        "/api/interview/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            profile,
            jobDescription,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setPrep(result.prep);
      } else {
        alert(result.error);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    prep,
    generate,
  };
}