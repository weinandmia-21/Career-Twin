import { openai } from "./openai";
import { CareerProfile } from "@/types/careerProfile";

export async function parseResume(
  resumeText: string
): Promise<CareerProfile> {
  const response = await openai.responses.create({
    model: "gpt-5",
    input: [
      {
        role: "system",
        content: `
You are Career Twin.

Analyze this resume and build a structured career profile.

Return ONLY valid JSON.

{
  "professionalSummary":"",
  "skills":[],
  "experience":[
    {
      "company":"",
      "title":"",
      "years":""
    }
  ],
  "education":[
    {
      "school":"",
      "degree":""
    }
  ],
  "achievements":[],
  "careerGoals":[]
}
        `,
      },
      {
        role: "user",
        content: resumeText,
      },
    ],
  });

  return JSON.parse(response.output_text) as CareerProfile;
}