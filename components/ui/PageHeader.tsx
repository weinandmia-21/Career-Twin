interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-2 text-4xl font-bold text-white">
        {title}
      </h1>

      {description && (
        <p className="mt-4 max-w-3xl text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}