"use client";

import { useState } from "react";

export default function AITestPage() {
  const [response, setResponse] = useState("");

  async function analyzeResume() {
    const res = await fetch("/api/resume/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resumeText: `
Strategic Communications Manager with 6+ years of experience leading UX design, proposal development, executive communications, AI product strategy, and federal consulting at Booz Allen Hamilton.

Expert in Figma, Adobe Creative Suite, content strategy, and product storytelling.
        `,
      }),
    });

    const data = await res.json();

    setResponse(JSON.stringify(data, null, 2));
  }

  return (
    <main className="mx-auto max-w-5xl p-12">
      <h1 className="text-4xl font-bold">
        AI Resume Test
      </h1>

      <button
        onClick={analyzeResume}
        className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 text-white"
      >
        Analyze Resume
      </button>

      <pre className="mt-10 overflow-auto rounded-xl bg-slate-900 p-6 text-sm text-green-300">
        {response}
      </pre>
    </main>
  );
}