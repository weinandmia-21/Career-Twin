import {
  FileText,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import ResumeDocument from "./document/ResumeDocument";
import UploadResumeButton from "./UploadResumeButton";
import type { ResumeReviewItem } from "@/lib/resume/review/buildResumeReview";

import type { JobApplication } from "@/lib/applications/types";
import type { Resume } from "@/lib/resume/schema";

type Props = {
  application: JobApplication;
  resume: Resume | null;
  draftResume: Resume | null;

  reviewMode: boolean;

  reviewItems: ResumeReviewItem[];

  selectedReviewItem: string | null;
};

export default function ResumePreview({
  application,
  resume,
  draftResume,
  reviewMode,
  reviewItems,
  selectedReviewItem,
}: Props) {
  const activeResume =
    reviewMode && draftResume
      ? draftResume
      : resume;

  if (!activeResume) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#0D1528] shadow-[0_10px_40px_rgba(0,0,0,.18)]">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">

          <div className="flex items-center gap-3">

            <FileText className="h-5 w-5 text-cyan-300" />

            <div>
              <p className="font-semibold text-white">
                Resume Preview
              </p>

              <p className="text-sm text-slate-500">
                Live Document Preview
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2">

            <button
              disabled
              className="rounded-xl border border-white/10 p-2 text-slate-600"
            >
              <ZoomOut className="h-4 w-4" />
            </button>

            <span className="w-12 text-center text-sm text-slate-500">
              100%
            </span>

            <button
              disabled
              className="rounded-xl border border-white/10 p-2 text-slate-600"
            >
              <ZoomIn className="h-4 w-4" />
            </button>

          </div>

        </div>

        {/* Preview */}

        <div className="flex h-[900px] justify-center overflow-y-auto bg-[#09111F] p-10">

          <div className="w-full max-w-[8.5in] rounded-md bg-white px-14 py-16 text-slate-900 shadow-[0_20px_60px_rgba(0,0,0,.25)]">

            {/* Header */}

            <div>

              <div className="h-10 w-72 rounded bg-slate-100" />

              <div className="mt-4 h-4 w-56 rounded bg-slate-50" />

              <div className="mt-6 border-b border-slate-300 pb-6">

                <div className="h-3 w-full rounded bg-slate-50" />

              </div>

            </div>

            {/* Professional Summary */}

            <section className="mt-10">

              <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide">
                Professional Summary
              </h2>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-8">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div className="max-w-xl">

                    <h3 className="text-xl font-semibold text-slate-900">
                      Upload your master resume
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Start with your existing resume. Career Twin will parse
                      it into an editable document that you can tailor for this
                      application.
                    </p>

                  </div>

                  <div className="shrink-0">

                    <UploadResumeButton
                      applicationId={application.id}
                    />

                  </div>

                </div>

              </div>

            </section>

            {/* Experience */}

            <section className="mt-8">

              <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide">
                Experience
              </h2>

              <div className="mt-6 space-y-4">

                <div className="h-4 w-64 rounded bg-slate-100" />

                <div className="h-3 w-full rounded bg-slate-50" />

                <div className="h-3 w-5/6 rounded bg-slate-50" />

                <div className="h-3 w-4/5 rounded bg-slate-50" />

              </div>

            </section>

            {/* Education */}

            <section className="mt-8">

              <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide">
                Education
              </h2>

              <div className="mt-6">

                <div className="h-4 w-52 rounded bg-slate-100" />

                <div className="mt-4 h-3 w-80 rounded bg-slate-50" />

              </div>

            </section>

            {/* Skills */}

            <section className="mt-8">

              <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide">
                Skills
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">

                <div className="h-9 w-24 rounded-full bg-slate-100" />
                <div className="h-9 w-20 rounded-full bg-slate-100" />
                <div className="h-9 w-28 rounded-full bg-slate-100" />
                <div className="h-9 w-24 rounded-full bg-slate-100" />
                <div className="h-9 w-20 rounded-full bg-slate-100" />

              </div>

            </section>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0D1528] shadow-[0_10px_40px_rgba(0,0,0,.18)]">

      <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">

        <div className="flex items-center gap-3">

          <FileText className="h-5 w-5 text-cyan-300" />

          <div>

            <p className="font-semibold text-white">
              Resume Preview
            </p>

            <p className="text-sm text-slate-500">
              Live Document Preview
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2">

          <button className="rounded-xl border border-white/10 p-2 text-slate-400 transition hover:border-white/20 hover:text-white">
            <ZoomOut className="h-4 w-4" />
          </button>

          <span className="w-12 text-center text-sm text-slate-400">
            100%
          </span>

          <button className="rounded-xl border border-white/10 p-2 text-slate-400 transition hover:border-white/20 hover:text-white">
            <ZoomIn className="h-4 w-4" />
          </button>

        </div>

      </div>

      <div className="h-[900px] overflow-y-auto bg-[#09111F] p-10">

       <ResumeDocument
  resume={activeResume}
  reviewItems={reviewItems}
  reviewMode={reviewMode}
  selectedReviewItem={selectedReviewItem}
/>

      </div>

    </div>
  );
}