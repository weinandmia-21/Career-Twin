import { requireUser } from "@/lib/auth/requireUser";
import ResumeUploader from "@/components/upload/ResumeUploader";

export default async function UploadPage() {
  await requireUser();
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-20">
      <div className="mx-auto mb-12 max-w-5xl">
        <h1 className="text-5xl font-bold text-white">
          Resume Intelligence
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Upload your resume and Career Twin will analyze your experience,
          skills, and career history to build your AI profile.
        </p>
      </div>

      <ResumeUploader />
    </main>
  );
}