import { useEffect } from "react";

import type { Resume } from "@/lib/resume/schema";
import type { ResumeReviewItem } from "@/lib/resume/review/buildResumeReview";

type Props = {
  resume: Resume;
  reviewItems?: ResumeReviewItem[];
  reviewMode?: boolean;
  selectedReviewItem?: string | null;
};

export default function ResumeDocument({
  resume,
  reviewItems = [],
  reviewMode = false,
  selectedReviewItem = null,
}: Props) {
  function getReviewItem(id: string) {
    return reviewItems.find(
      (item) => item.id === id
    );
  }
  function isSelected(id: string) {
  return selectedReviewItem === id;
}
useEffect(() => {
  if (!selectedReviewItem) return;

  const element =
    document.getElementById(
      selectedReviewItem
    );

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}, [selectedReviewItem]);

  function paragraphHighlight(changed?: boolean) {
    if (!reviewMode || !changed) {
      return "";
    }

    return "border-l-2 border-cyan-400 pl-3";
  }

  function bulletHighlight(
    changedBullets: number[] | undefined,
    index: number
  ) {
    if (!reviewMode) {
      return "";
    }

    if (!changedBullets?.includes(index)) {
      return "";
    }

    return "border-l-2 border-cyan-400 pl-3";
  }

  return (
    <div className="mx-auto w-full max-w-[8.5in] bg-white px-14 py-16 text-slate-900 shadow-[0_20px_80px_rgba(0,0,0,.35)]">

      {/* Header */}

      <div className="border-b border-slate-300 pb-6">

        <h1 className="text-4xl font-bold tracking-tight">
          {resume.basics.name}
        </h1>

        <p className="mt-2 text-lg text-slate-600">
          {resume.basics.title}
        </p>

        <p className="mt-4 text-sm text-slate-500">
          {resume.basics.email} • {resume.basics.phone} •{" "}
          {resume.basics.location}
        </p>

        {resume.basics.linkedin && (
          <p className="mt-1 text-sm text-slate-500">
            {resume.basics.linkedin}
          </p>
        )}

      </div>

      {/* Summary */}

      <section
  id="summary"
  className={[
    "mt-10 rounded-xl transition-all duration-300",
    isSelected("summary")
      ? "ring-2 ring-cyan-300 bg-cyan-50/20 px-4 py-3"
      : "",
  ].join(" ")}
>

        <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide">
          Professional Summary
        </h2>

        <p
          className={[
            "mt-4 leading-7",
            paragraphHighlight(
              getReviewItem("summary")
                ?.changedFields?.summary
            ),
          ].join(" ")}
        >
          {resume.basics.summary}
        </p>

      </section>

      {/* Experience */}

      <section className="mt-10">

        <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide">
          Experience
        </h2>

        <div className="mt-6 space-y-8">

          {resume.experience.map((job) => {

            const review =
              getReviewItem(job.id);

            return (

              <div
  id={job.id}
  key={job.id}
  className={[
    "rounded-xl transition-all duration-300",
    isSelected(job.id)
      ? "ring-2 ring-cyan-300 bg-cyan-50/20 px-4 py-3"
      : "",
  ].join(" ")}
>

                <div className="flex items-start justify-between">

                  <div>

                    <h3 className="text-lg font-semibold">
                      {job.title}
                    </h3>

                    <p className="text-slate-600">
                      {job.company}
                    </p>

                  </div>

                  <p className="text-sm text-slate-500">
                    {job.startDate} — {job.endDate}
                  </p>

                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5">

                  {job.bullets.map((bullet, index) => (

                    <li
                      key={bullet}
                      className={[
                        "leading-7",
                        bulletHighlight(
                          review?.changedFields?.bullets,
                          index
                        ),
                      ].join(" ")}
                    >
                      {bullet}
                    </li>

                  ))}

                </ul>

              </div>

            );

          })}

        </div>

      </section>

      {/* Skills */}

      <section
  id="skills"
  className={[
    "mt-10 rounded-xl transition-all duration-300",
    isSelected("skills")
      ? "ring-2 ring-cyan-300 bg-cyan-50/20 px-4 py-3"
      : "",
  ].join(" ")}
>

        <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide">
          Skills
        </h2>

        <p className="mt-4 leading-7">

          {resume.skills.map((skill, index) => {

            const changed =
              getReviewItem("skills")
                ?.changedFields
                ?.skills
                ?.includes(index);

function isSelected(id: string) {
  return selectedReviewItem === id;
}
            return (

              <span
                key={skill}
                className={
                  changed && reviewMode
                    ? "border-b-2 border-cyan-400"
                    : ""
                }
              >
                {skill}
                {index < resume.skills.length - 1
                  ? " • "
                  : ""}
              </span>

            );

          })}

        </p>

      </section>

    </div>
  );
}