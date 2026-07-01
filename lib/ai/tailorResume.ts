import { openai } from "./openai";
import { resumeTailorPrompt } from "./prompts/resumeTailorPrompt";

import type { CareerTwinProfile } from "./schemas";
import type { Resume } from "@/lib/resume/schema";

export type TailoredResumeResult = {
  resume: Resume;

  resumeMatch: number;

  strengths: string[];

  opportunities: string[];

  improvements: string[];

  keywordsAdded: string[];
};

export async function tailorResume(
  profile: CareerTwinProfile,
  resume: Resume,
  jobDescription: string
): Promise<TailoredResumeResult> {
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

Current Resume

${JSON.stringify(resume, null, 2)}

Job Description

${jobDescription}
`,
      },
    ],
  });

  const text = response.output_text.trim();

  try {
    return JSON.parse(text) as TailoredResumeResult;
  } catch {
    console.error(text);

    throw new Error("AI returned invalid resume JSON.");
  }
}