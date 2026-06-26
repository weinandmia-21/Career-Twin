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
      ? `
        bg-blue-500
        text-white
        hover:bg-blue-400
      `
      : `
        border
        border-white/10
        bg-white/5
        text-white
        hover:bg-white/10
      `;

  return (
    <button
      className={`
        rounded-xl
        px-6
        py-3
        font-medium
        transition-all
        duration-200
        hover:scale-[1.02]
        active:scale-[0.98]
        ${styles}
      `}
    >
      {children}
    </button>
  );
}