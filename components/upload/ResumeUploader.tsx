"use client";

import { useState } from "react";

import { Upload, CheckCircle2 } from "lucide-react";

import { uploadResumeAction } from "@/lib/actions/uploadResume";

export default function ResumeUploader() {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  async function handleFile(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setUploading(true);

    try {
      await uploadResumeAction(file);

      setUploaded(true);
      setFileName(file.name);
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }

    setUploading(false);
  }

  return (
    <section className="mx-auto max-w-3xl rounded-[32px] border border-white/5 bg-slate-900/70 p-10">

      <div className="text-center">

        <Upload className="mx-auto h-12 w-12 text-cyan-400" />

        <h1 className="mt-6 text-4xl font-bold text-white">
          Upload Your Resume
        </h1>

        <p className="mt-4 text-slate-400">
          Career Twin will analyze your resume and personalize every recommendation.
        </p>

      </div>

      <label className="mt-10 flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-cyan-400/20 p-12 transition hover:border-cyan-400/40">

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFile}
        />

        {!uploading && !uploaded && (
          <>
            <p className="font-semibold text-white">
              Click to choose a resume
            </p>

            <p className="mt-2 text-sm text-slate-500">
              PDF or Word document
            </p>
          </>
        )}

        {uploading && (
          <p className="text-cyan-300">
            Uploading...
          </p>
        )}

        {uploaded && (
          <div className="text-center">

            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />

            <p className="mt-4 font-semibold text-white">
              {fileName}
            </p>

            <p className="mt-2 text-emerald-400">
              Resume uploaded successfully
            </p>

          </div>
        )}

      </label>

    </section>
  );
}