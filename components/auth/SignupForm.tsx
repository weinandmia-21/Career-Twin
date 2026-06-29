"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const result = await response.json();

    setLoading(false);

    if (!result.success) {
      setError(result.message);
      return;
    }

    router.push("/auth/login");
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-10">
      <h1 className="text-3xl font-bold text-white">
        Create your Career Twin
      </h1>

      <p className="mt-2 text-slate-400">
        Start building your AI career operating system.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          name="fullName"
          placeholder="Full name"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-950 p-4 text-white"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-950 p-4 text-white"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-950 p-4 text-white"
        />

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          disabled={loading}
          className="w-full rounded-xl bg-cyan-400 py-4 font-semibold text-slate-950 disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-cyan-400"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}