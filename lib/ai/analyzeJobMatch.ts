import { openai } from "./openai";
import { jobMatchPrompt } from "./prompts/jobMatchPrompt";

import type { CareerTwinProfile } from "./schemas";

export type JobMatch = {
  job: {
    company: string;
    title: string;
    location: string;
  };

  summary: string;

  overallMatch: number;

  recommendedRole: string;

  strengths: string[];

  missingSkills: string[];

  missingKeywords: string[];

  resumeImprovements: string[];

  interviewFocus: string[];

  salaryRange: string;

  confidence: "High" | "Medium" | "Low";
};

export async function analyzeJobMatch(
  profile: CareerTwinProfile,
  jobDescription: string
): Promise<JobMatch> {
  const response = await openai.responses.create({
    model: "gpt-5.5",
    input: [
      {
        role: "system",
        content: jobMatchPrompt,
      },
      {
        role: "user",
        content: `
Career Twin Profile:

${JSON.stringify(profile, null, 2)}

Job Description:

${jobDescription}
        `,
      },
    ],
  });

  const text = response.output_text.trim();

  try {
    return JSON.parse(text) as JobMatch;
  } catch (error) {
    console.error("Failed to parse Job Match response:");
    console.error(text);

    throw new Error("Invalid JSON returned from OpenAI.");
  }
}