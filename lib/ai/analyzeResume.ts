import { openai } from "@/lib/ai/openai";
import { resumeAnalysisPrompt } from "@/lib/ai/prompts";
import type { CareerTwinProfile } from "@/lib/ai/schemas";

export async function analyzeResume(
  resumeText: string
): Promise<CareerTwinProfile> {
  const response = await openai.responses.create({
    model: "gpt-5.5",

    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: resumeAnalysisPrompt,
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: resumeText,
          },
        ],
      },
    ],
  });

  const output = response.output_text;

  return JSON.parse(output) as CareerTwinProfile;
}