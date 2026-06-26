import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/button";

export default function WelcomeCard() {
  return (
    <Card>
      <div className="mx-auto max-w-2xl py-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Welcome
        </p>

        <h1 className="mt-4 text-5xl font-bold text-white">
          Build Your Career Twin
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Upload your resume and let AI build a living profile that powers
          resumes, interview prep, career coaching, and job recommendations.
        </p>

        <div className="mt-10">
          <Button>Upload Resume</Button>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          PDF • DOCX • Maximum 10 MB
        </p>
      </div>
    </Card>
  );
}