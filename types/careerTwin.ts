export interface CareerTwin {
  profile: {
    name: string;
    title: string;
    confidence: number;
    tagline: string;
  };

  summary: string;

  strengths: string[];

  goals: string[];

  accomplishments: string[];
}