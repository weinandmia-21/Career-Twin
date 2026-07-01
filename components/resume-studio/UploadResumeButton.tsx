"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

type Props = {
  applicationId: string;
};

export default function UploadResumeButton({
  applicationId,
}: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        `/api/applications/${applicationId}/resume`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.error ?? "Upload failed.");
        return;
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Unable to upload resume.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      <input
  id="resume-upload-input"
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            upload(file);
          }
        }}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-cyan-500/30 bg-slate-900 px-6 font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Upload className="h-5 w-5" />

        {uploading ? "Uploading..." : "Upload Resume"}
      </button>
    </>
  );
}