import type {
  Resume,
  ResumeCertification,
  ResumeEducation,
  ResumeExperience,
  ResumeProject,
} from "../schema";

export type ResumeReviewType =
  | "summary"
  | "experience"
  | "education"
  | "skills"
  | "project"
  | "certification";

export type ResumeReviewItem = {
  id: string;
  label: string;
  type: ResumeReviewType;

  changed: boolean;

  changedFields?: {
    summary?: boolean;
    title?: boolean;
    bullets?: number[];
    skills?: number[];
  };

  before:
    | string
    | string[]
    | ResumeExperience
    | ResumeEducation
    | ResumeProject
    | ResumeCertification
    | null;

  after:
    | string
    | string[]
    | ResumeExperience
    | ResumeEducation
    | ResumeProject
    | ResumeCertification
    | null;
};

export function buildResumeReview(
  current: Resume,
  draft: Resume
): ResumeReviewItem[] {
  const review: ResumeReviewItem[] = [];

  //
  // Summary
  //

  const summaryChanged =
    current.basics.summary !== draft.basics.summary;

  review.push({
    id: "summary",
    label: "Professional Summary",
    type: "summary",

    changed: summaryChanged,

    changedFields: {
      summary: summaryChanged,
    },

    before: current.basics.summary,
    after: draft.basics.summary,
  });

  //
  // Experience
  //

  for (const experience of draft.experience) {
    const previous =
      current.experience.find(
        (item) => item.id === experience.id
      ) ?? null;

    const changedBullets: number[] = [];

    experience.bullets.forEach((bullet, index) => {
      if (bullet !== previous?.bullets[index]) {
        changedBullets.push(index);
      }
    });

    const titleChanged =
      experience.title !== previous?.title;

    review.push({
      id: experience.id,

      label: experience.company,

      type: "experience",

      changed:
        titleChanged ||
        changedBullets.length > 0,

      changedFields: {
        title: titleChanged,
        bullets: changedBullets,
      },

      before: previous,
      after: experience,
    });
  }

  //
  // Education
  //

  for (const education of draft.education) {
    const previous =
      current.education.find(
        (item) => item.id === education.id
      ) ?? null;

    review.push({
      id: education.id,

      label: education.school,

      type: "education",

      changed:
        JSON.stringify(previous) !==
        JSON.stringify(education),

      before: previous,
      after: education,
    });
  }

  //
  // Projects
  //

  for (const project of draft.projects) {
    const previous =
      current.projects.find(
        (item) => item.id === project.id
      ) ?? null;

    review.push({
      id: project.id,

      label: project.title,

      type: "project",

      changed:
        JSON.stringify(previous) !==
        JSON.stringify(project),

      before: previous,
      after: project,
    });
  }

  //
  // Certifications
  //

  for (const cert of draft.certifications) {
    const previous =
      current.certifications.find(
        (item) => item.id === cert.id
      ) ?? null;

    review.push({
      id: cert.id,

      label: cert.name,

      type: "certification",

      changed:
        JSON.stringify(previous) !==
        JSON.stringify(cert),

      before: previous,
      after: cert,
    });
  }

  //
  // Skills
  //

  const changedSkills: number[] = [];

  draft.skills.forEach((skill, index) => {
    if (skill !== current.skills[index]) {
      changedSkills.push(index);
    }
  });

  review.push({
    id: "skills",

    label: "Skills",

    type: "skills",

    changed:
      changedSkills.length > 0,

    changedFields: {
      skills: changedSkills,
    },

    before: current.skills,
    after: draft.skills,
  });

  return review.filter((item) => item.changed);
}