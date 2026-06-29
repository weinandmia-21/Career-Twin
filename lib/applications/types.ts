export type ApplicationStatus =
  | "Saved"
  | "Applied"
  | "Interview"
  | "Offer"
  | "Accepted"
  | "Rejected"
  | "Archived";

export interface JobApplication {
  id: string;

  userId: string;

  company: string;

  role: string;

  status: ApplicationStatus;

  matchScore: number;

  location: string;

  salary?: string;

  appliedDate?: string;

  interviewDate?: string;

  notes?: string;

  jobDescription?: string;

  resumeVersion?: string;

  coverLetter?: string;

  createdAt: string;

  updatedAt: string;
}