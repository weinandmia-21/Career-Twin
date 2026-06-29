"use client";

import { useState } from "react";

import type { CareerTwinProfile } from "@/lib/ai/schemas";
import type { TailoredResume } from "@/lib/ai/tailorResume";

export function useResumeTailor() {
  const [loading, setLoading] = useState(false);

  const [resume, setResume] =
    useState<TailoredResume | null>(null);

  async function generate(
    profile: CareerTwinProfile,
    jobDescription: string
  ) {
    setLoading(true);

    try {
      const response = await fetch(
        "/api/resume/tailor",
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
        setResume(result.resume);
      } else {
        alert(result.error);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    resume,
    generate,
  };
}