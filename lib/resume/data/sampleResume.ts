import type { Resume } from "../schema";

export const sampleResume: Resume = {
  basics: {
    name: "Mia Weinand",

    title: "Strategic Communications Manager",

    email: "mia@email.com",

    phone: "(555) 555-5555",

    location: "Atlanta, GA",

    linkedin: "linkedin.com/in/miaweinand",

    summary:
      "Strategic communications leader with 6+ years of experience leading executive communications, digital strategy, UX, AI initiatives, and federal consulting engagements.",
  },

  experience: [
    {
      id: "booz",

      company: "Booz Allen Hamilton",

      title: "Strategic Communications Manager",

      startDate: "2022",

      endDate: "Present",

      bullets: [
        "Led executive communications supporting federal agencies including USPS, NIH and FRA.",
        "Designed AI-enabled communication products and digital experiences.",
        "Produced executive presentations that helped secure multi-million dollar contracts.",
      ],
    },
  ],

  education: [
    {
      id: "college",

      school: "University",

      degree: "Bachelor's Degree",
    },
  ],

  skills: [
    "Strategic Communications",
    "UX Design",
    "Content Strategy",
    "AI",
    "Figma",
    "Adobe Creative Cloud",
  ],

  certifications: [],

  projects: [],
};