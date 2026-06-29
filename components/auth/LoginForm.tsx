"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
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

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-10">
      <h1 className="text-3xl font-bold text-white">
        Welcome Back
      </h1>

      <p className="mt-2 text-slate-400">
        Sign in to your Career Twin.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
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
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-400">
        Need an account?{" "}
        <Link
          href="/auth/signup"
          className="text-cyan-400"
        >
          Create one
        </Link>
      </p>
    </div>
  );
}