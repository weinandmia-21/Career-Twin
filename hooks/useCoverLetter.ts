"use client";

import { useState } from "react";

import type { CareerTwinProfile } from "@/lib/ai/schemas";
import type { CoverLetter } from "@/lib/ai/cover-letter/generateCoverLetter";

export function useCoverLetter() {
  const [loading, setLoading] = useState(false);

  const [coverLetter, setCoverLetter] =
    useState<CoverLetter | null>(null);

  async function generate(
    profile: CareerTwinProfile,
    jobDescription: string
  ) {
    setLoading(true);

    try {
      const response = await fetch(
        "/api/cover-letter/generate",
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
        setCoverLetter(result.coverLetter);
      } else {
        alert(result.error);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    coverLetter,
    generate,
  };
}