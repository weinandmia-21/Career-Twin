"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/auth/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-white disabled:opacity-50"
    >
      <LogOut className="h-5 w-5 text-slate-400 group-hover:text-cyan-300" />

      <span className="font-medium tracking-tight">
        {loading ? "Signing Out..." : "Sign Out"}
      </span>
    </button>
  );
}