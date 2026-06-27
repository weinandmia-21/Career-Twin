export interface Experience {
  company: string;
  title: string;
  years?: string;
}

export interface Education {
  school: string;
  degree: string;
}

export interface CareerProfile {
  professionalSummary: string;

  skills: string[];

  experience: Experience[];

  education: Education[];

  achievements: string[];

  careerGoals: string[];
}