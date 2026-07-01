"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Loader2,
  Sparkles,
} from "lucide-react";

type Props = {
  applicationId: string;
  disabled: boolean;
  hasDraft: boolean;
  onReview?: () => void;
};

export default function GenerateResumeButton({
  applicationId,
  disabled,
  hasDraft,
  onReview,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function tailorResume() {
    try {
      setLoading(true);

      const response = await fetch(
        `/api/applications/${applicationId}/tailor`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.error ?? "Unable to tailor resume.");
        return;
      }

      router.refresh();

    } catch (error) {
      console.error(error);

      alert("Unable to tailor resume.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={() => {
  if (hasDraft) {
    onReview?.();
    return;
  }

  tailorResume();
}}
      className={[
  "flex h-14 items-center justify-center gap-3 rounded-2xl px-8 font-semibold transition-all",

  disabled
    ? "cursor-not-allowed bg-cyan-400/40 text-slate-900 opacity-50"

    : "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,.25)]",
].join(" ")}
    >
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Sparkles className="h-5 w-5" />
      )}

      {loading
        ? "Tailoring..."
        : hasDraft
        ? "Review Draft"
        : "Tailor Resume"}
    </button>
  );
}