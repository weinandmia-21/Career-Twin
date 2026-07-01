import type { Resume } from "../schema";
import type { ResumeTailoringResult } from "../types";

/**
 * Temporary mock.
 *
 * This will call OpenAI in the next sprint.
 */
export async function tailorResume(
  resume: Resume,
  jobDescription: string
): Promise<ResumeTailoringResult> {
  return {
    original: resume,

    tailored: resume,

    originalScore: 63,

    tailoredScore: 84,

    improvements: [
      "Rewrote Professional Summary",
      "Strengthened Executive Messaging",
      "Added measurable business outcomes",
      "Expanded leadership experience",
    ],

    keywordsAdded: [
      "Strategic Communications",
      "Executive Leadership",
      "Stakeholder Engagement",
    ],
  };
}