"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type Props = {
  company: string;
  role: string;
  matchScore: number;
  location?: string;
  jobDescription: string;
};

export default function SaveApplicationButton({
  company,
  role,
  matchScore,
  location,
  jobDescription,
}: Props) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleClick() {
    setLoading(true);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
          role,
          matchScore,
          location,
          jobDescription,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Application saved!");

        router.refresh();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);

      alert("Unable to save application.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      variant="secondary"
    >
      {loading ? "Saving..." : "Save Application"}
    </Button>
  );
}