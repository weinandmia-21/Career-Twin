import { Sparkles } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  badge?: string;
};

export default function WorkspaceHeader({
  eyebrow,
  title,
  subtitle,
  badge,
}: Props) {
  return (
    <div className="mb-10">

      <div className="flex items-start justify-between gap-6">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight text-white">
            {title}
          </h1>

          <p className="mt-3 max-w-3xl text-xl text-slate-300">
            {subtitle}
          </p>

        </div>

        {badge && (

          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

            <div className="flex items-center gap-2">

              <Sparkles className="h-4 w-4 text-cyan-300" />

              <span className="font-medium text-cyan-200">
                {badge}
              </span>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}