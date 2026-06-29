import { openai } from "./openai";
import { resumeTailorPrompt } from "./prompts/resumeTailorPrompt";

import type { CareerTwinProfile } from "./schemas";

export type TailoredResume = {
  summary: {
    tailored: string;
  };

  experienceHighlights: string[];

  skillsToEmphasize: string[];

  keywordsToAdd: string[];

  resumeRecommendations: string[];

  atsScore: number;
};

export async function tailorResume(
  profile: CareerTwinProfile,
  jobDescription: string
): Promise<TailoredResume> {
  const response = await openai.responses.create({
    model: "gpt-5.5",
    input: [
      {
        role: "system",
        content: resumeTailorPrompt,
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
    return JSON.parse(text) as TailoredResume;
  } catch (error) {
    console.error("Invalid resume JSON:", text);

    throw new Error("AI returned invalid resume data.");
  }
}