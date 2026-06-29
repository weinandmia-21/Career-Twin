export const jobMatchSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    job: {
      type: "object",
      additionalProperties: false,
      properties: {
        company: { type: "string" },
        title: { type: "string" },
        location: { type: "string" }
      },
      required: ["company", "title", "location"]
    },

    summary: {
      type: "string"
    },

    overallMatch: {
      type: "number"
    },

    recommendedRole: {
      type: "string"
    },

    strengths: {
      type: "array",
      items: { type: "string" }
    },

    missingSkills: {
      type: "array",
      items: { type: "string" }
    },

    missingKeywords: {
      type: "array",
      items: { type: "string" }
    },

    resumeImprovements: {
      type: "array",
      items: { type: "string" }
    },

    interviewFocus: {
      type: "array",
      items: { type: "string" }
    },

    salaryRange: {
      type: "string"
    },

    confidence: {
      type: "string",
      enum: ["High", "Medium", "Low"]
    }
  },

  required: [
    "job",
    "summary",
    "overallMatch",
    "recommendedRole",
    "strengths",
    "missingSkills",
    "missingKeywords",
    "resumeImprovements",
    "interviewFocus",
    "salaryRange",
    "confidence"
  ]
} as const;