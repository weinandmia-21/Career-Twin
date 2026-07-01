import type { Resume } from "./schema";

export type ResumeVersion = {
  id: string;

  applicationId: string;

  name: string;

  source:
    | "uploaded"
    | "tailored";

  createdAt: string;

  resume: Resume;
};