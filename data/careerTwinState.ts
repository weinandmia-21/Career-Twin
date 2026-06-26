export const careerTwinState = {
  profile: {
    name: "Mia Weinand",
    title: "Strategic Communications Manager",
    location: "Atlanta, GA",

    careerScore: 94,

    goals: [
      "Land a Senior Communications role",
      "Increase salary to $165K+",
      "Move into AI Product Marketing",
    ],
  },

  dashboard: {
    greeting: "Good afternoon, Mia.",

    mission: {
      company: "Stripe",
      role: "Senior Communications Manager",

      match: 94,

      confidence: 91,

      reasons: [
        "Resume already optimized",
        "Leadership experience aligns",
        "High communication skills match",
      ],
    },
  },

  jobs: [
    {
      id: 1,
      company: "Stripe",
      title: "Senior Communications Manager",
      match: 94,
      status: "Recommended",
      applied: false,
    },
    {
      id: 2,
      company: "OpenAI",
      title: "Product Communications",
      match: 92,
      status: "Watching",
      applied: false,
    },
    {
      id: 3,
      company: "Microsoft",
      title: "AI Marketing Lead",
      match: 90,
      status: "Applied",
      applied: true,
    },
  ],

  applications: [
    {
      company: "Microsoft",
      stage: "Recruiter Screen",
      updated: "Yesterday",
    },
    {
      company: "Adobe",
      stage: "Hiring Manager Review",
      updated: "2 days ago",
    },
  ],

  ai: {
    status: "Monitoring opportunities",

    lastAnalysis: "14 seconds ago",

    activity: [
      "31 jobs analyzed",
      "Resume optimized",
      "4 recruiter signals detected",
      "Preparing interview briefing",
    ],
  },
};