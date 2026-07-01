import type { Resume } from "./schema";

export type ResumeTailoringResult = {
  original: Resume;
  tailored: Resume;

  originalScore: number;
  tailoredScore: number;

  improvements: string[];
  keywordsAdded: string[];
};