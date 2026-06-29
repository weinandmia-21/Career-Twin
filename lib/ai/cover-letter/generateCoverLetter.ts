import { openai } from "@/lib/ai/openai";
import { coverLetterPrompt } from "@/lib/ai/prompts/coverLetterPrompt";

import type { CareerTwinProfile } from "@/lib/ai/schemas";

export type CoverLetter = {
  coverLetter: string;

  openingHook: string;

  strengthsHighlighted: string[];

  keywordsIncluded: string[];

  recommendations: string[];
};

export async function generateCoverLetter(
  profile: CareerTwinProfile,
  jobDescription: string
): Promise<CoverLetter> {
  const response = await openai.responses.create({
    model: "gpt-5.5",

    input: [
      {
        role: "system",
        content: coverLetterPrompt,
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
    return JSON.parse(text) as CoverLetter;
  } catch (error) {
    console.error("Invalid cover letter JSON:", text);

    throw new Error("AI returned invalid cover letter.");
  }
}