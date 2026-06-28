export interface CareerTwinProfile {
  name: string;

  professionalTitle: string;

  executiveSummary: string;

  yearsExperience: number;

  currentCompany: string;

  leadershipLevel:
    | "Individual Contributor"
    | "Lead"
    | "Manager"
    | "Senior Manager"
    | "Director"
    | "Executive"
    | "Unknown";

  skills: string[];

  tools: string[];

  industries: string[];

  companies: string[];

  jobTitles: string[];

  topStrengths: string[];

  topAchievements: string[];

  certifications: string[];

  education: string[];

  careerThemes: string[];

  writingStyle: string;

  idealRoles: string[];

  keywords: string[];
}