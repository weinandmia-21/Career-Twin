import { openai } from "./openai";

import type { Resume } from "@/lib/resume/schema";

export async function parseResumeToResume(
  resumeText: string
): Promise<Resume> {
  const response = await openai.responses.create({
    model: "gpt-5.5",
    input: [
      {
        role: "system",
        content: `
You are Career Twin.

Extract this resume into the exact JSON schema provided.

Rules:

- Never invent information.
- Preserve wording where possible.
- Preserve all employers.
- Preserve all dates.
- Preserve all education.
- Return ONLY valid JSON.

Schema:

{
  "basics": {
    "name": "",
    "title": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "portfolio": "",
    "website": "",
    "summary": ""
  },

  "experience": [
    {
      "id": "",
      "company": "",
      "title": "",
      "location": "",
      "startDate": "",
      "endDate": "",
      "bullets": []
    }
  ],

  "education": [
    {
      "id": "",
      "school": "",
      "degree": "",
      "field": "",
      "graduationDate": ""
    }
  ],

  "skills": [],

  "certifications": [],

  "projects": []
}
`,
      },
      {
        role: "user",
        content: resumeText,
      },
    ],
  });

  return JSON.parse(response.output_text) as Resume;
}