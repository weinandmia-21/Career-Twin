"use client";

import { useState } from "react";

import JobDescriptionInput from "./JobDescriptionInput";
import AnalyzeButton from "./AnalyzeButton";
import JobMatchResults from "./JobMatchResults";

import { useJobMatch } from "@/hooks/useJobMatch";

export default function JobAnalyzer() {
  const [jobDescription, setJobDescription] = useState("");

  const {
    analyze,
    loading,
    match,
  } = useJobMatch();

  async function handleAnalyze() {
    if (!jobDescription.trim()) return;

    await analyze(jobDescription);
  }

  return (
    <div className="mt-10 space-y-6">
      <JobDescriptionInput
        value={jobDescription}
        onChange={setJobDescription}
      />

      <AnalyzeButton
        onClick={handleAnalyze}
        loading={loading}
      />

      <JobMatchResults
        match={match}
      />
    </div>
  );
}