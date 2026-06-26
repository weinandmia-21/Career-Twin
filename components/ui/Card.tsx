import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">
      {children}
    </div>
  );
}