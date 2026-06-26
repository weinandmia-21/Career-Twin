interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
      : "border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/10";

  return (
    <button
      className={`rounded-xl px-5 py-3 font-semibold transition ${styles}`}
    >
      {children}
    </button>
  );
}