import { AlertCircle } from "lucide-react";

type Props = {
  suggestions: number;
};

export default function DraftBanner({
  suggestions,
}: Props) {
  return (
    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-6 py-5">

      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/20">

          <AlertCircle className="h-6 w-6 text-amber-300" />

        </div>

        <div>

          <p className="font-semibold text-white">
            AI Draft Ready
          </p>

          <p className="text-sm text-slate-400">
            {suggestions} AI improvements are waiting for your review.
          </p>

        </div>

      </div>

    </div>
  );
}