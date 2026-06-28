"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function JobDescriptionInput({
  value,
  onChange,
}: Props) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste a job description here..."
      className="min-h-[300px] w-full rounded-2xl border border-white/10 bg-slate-900 p-6 text-white outline-none"
    />
  );
}