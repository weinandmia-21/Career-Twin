import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/5
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,.25)]
        transition-all
        duration-300
        hover:border-white/10
        ${className}
      `}
    >
      <div className="p-8">
        {children}
      </div>
    </div>
  );
}