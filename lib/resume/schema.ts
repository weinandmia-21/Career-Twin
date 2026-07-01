/**
 * Career Twin Resume Schema
 *
 * This is the source of truth for every resume inside Career Twin.
 *
 * Uploaded PDFs are parsed into this format.
 * AI tailors this format.
 * Resume Preview renders this format.
 * DOCX/PDF exports are generated from this format.
 */

export type ResumeBasics = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;

  linkedin?: string;
  portfolio?: string;
  website?: string;

  summary: string;
};

export type ResumeExperience = {
  id: string;

  company: string;
  title: string;

  location?: string;

  startDate: string;
  endDate: string;

  bullets: string[];
};

export type ResumeEducation = {
  id: string;

  school: string;

  degree: string;

  field?: string;

  graduationDate?: string;
};

export type ResumeProject = {
  id: string;

  title: string;

  description?: string;

  bullets: string[];
};

export type ResumeCertification = {
  id: string;

  name: string;

  issuer?: string;

  date?: string;
};

export type Resume = {
  basics: ResumeBasics;

  experience: ResumeExperience[];

  education: ResumeEducation[];

  skills: string[];

  certifications: ResumeCertification[];

  projects: ResumeProject[];
};