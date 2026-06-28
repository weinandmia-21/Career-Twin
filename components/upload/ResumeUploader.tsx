"use client";

import { useEffect, useRef, useState } from "react";

import UploadDropzone from "./UploadDropzone";
import UploadAnalysis from "./UploadAnalysis";
import UploadResults from "./UploadResults";

import { useCareerTwinStore } from "@/lib/store/careerTwinStore";

type UploadState =
  | "idle"
  | "analyzing"
  | "complete";

export default function ResumeUploader() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");
  const [uploadState, setUploadState] =
    useState<UploadState>("idle");

  const [progress, setProgress] = useState(0);

  const [discoveries, setDiscoveries] = useState<string[]>([]);

  const setProfile = useCareerTwinStore(
    (state) => state.setProfile
  );

  async function handleFile(file: File) {
    setFileName(file.name);
    setProgress(0);
    setDiscoveries([]);
    setUploadState("analyzing");

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch(
        "/api/resume/process",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        setProfile(result.profile);

        setDiscoveries([
          result.profile.currentCompany ||
            "Company identified",

          result.profile.professionalTitle,

          `${result.profile.yearsExperience}+ years of experience`,

          `${result.profile.skills.length} skills identified`,

          `Leadership: ${result.profile.leadershipLevel}`,
        ]);
      } else {
        setDiscoveries([
          "Unable to process resume.",
        ]);
      }
    } catch (error) {
      console.error("Upload failed:", error);

      setDiscoveries([
        "Upload failed.",
      ]);
    }
  }

  useEffect(() => {
    if (uploadState !== "analyzing") return;

    let progressValue = 0;

    const interval = setInterval(() => {
      progressValue += 25;

      setProgress(progressValue);

      if (progressValue >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setUploadState("complete");
        }, 800);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [uploadState]);

  return (
    <div className="mx-auto max-w-5xl">

      {uploadState === "idle" && (
        <UploadDropzone
          inputRef={inputRef}
          onClick={() => inputRef.current?.click()}
          onDrop={handleFile}
        />
      )}

      {uploadState === "analyzing" && (
        <UploadAnalysis
          fileName={fileName}
          progress={progress}
          discoveries={discoveries}
        />
      )}

      {uploadState === "complete" && (
        <UploadResults
          fileName={fileName}
        />
      )}

    </div>
  );
}