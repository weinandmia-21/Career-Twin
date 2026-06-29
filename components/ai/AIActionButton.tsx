"use client";

import type { ReactNode } from "react";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";

type Props = {
  children: ReactNode;
  loading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function AIActionButton({
  children,
  loading = false,
  loadingText = "Career Twin is thinking...",
  onClick,
  disabled,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading || disabled}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-cyan-500/20
        bg-gradient-to-r
        from-cyan-500/10
        via-cyan-400/5
        to-slate-900
        px-6
        py-5
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />

      <div className="relative flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">

            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin text-cyan-300" />
            ) : (
              <Sparkles className="h-5 w-5 text-cyan-300" />
            )}

          </div>

          <div className="text-left">

            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Career Twin AI
            </p>

            <h3 className="mt-1 text-xl font-semibold text-white">
              {loading ? loadingText : children}
            </h3>

            {!loading && (
              <p className="mt-1 text-sm text-slate-400">
                Personalized using your Career Twin profile
              </p>
            )}

          </div>

        </div>

        <ArrowRight className="h-6 w-6 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />

      </div>

    </button>
  );
}