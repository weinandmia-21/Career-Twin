import { openai } from "@/lib/ai/openai";
import { interviewPrompt } from "@/lib/ai/prompts/interviewPrompt";

import type { CareerTwinProfile } from "@/lib/ai/schemas";

export type InterviewPrep = {
  readinessScore: number;

  overallAssessment: string;

  likelyQuestions: string[];

  starStories: {
    question: string;
    story: string;
  }[];

  technicalTopics: string[];

  companyResearch: string[];

  questionsToAsk: string[];

  biggestRisks: string[];

  recommendations: string[];
};

export async function generateInterviewPrep(
  profile: CareerTwinProfile,
  jobDescription: string
): Promise<InterviewPrep> {
  const response = await openai.responses.create({
    model: "gpt-5.5",
    input: [
      {
        role: "system",
        content: interviewPrompt,
      },
      {
        role: "user",
        content: `
Career Twin Profile

${JSON.stringify(profile, null, 2)}

Job Description

${jobDescription}
`,
      },
    ],
  });

  const text = response.output_text.trim();

  try {
    return JSON.parse(text) as InterviewPrep;
  } catch {
    console.error("Invalid interview JSON:", text);
    throw new Error("AI returned invalid interview data.");
  }
}