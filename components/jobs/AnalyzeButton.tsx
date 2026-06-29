"use client";

type Props = {
  onClick: () => void;
  loading: boolean;
};

export default function AnalyzeButton({
  onClick,
  loading,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60"
    >
      {loading ? "Analyzing..." : "Analyze Match"}
    </button>
  );
}