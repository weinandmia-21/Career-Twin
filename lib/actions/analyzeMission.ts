import { getMission, getProfile } from "@/lib/careerTwin";

export function analyzeMission() {
  const mission = getMission();
  const profile = getProfile();

  return {
    company: mission.company,
    role: mission.role,
    match: mission.match,
    confidence: mission.confidence,

    summary: `${mission.company} is your strongest opportunity today.`,

    reasoning: [
      `Your experience aligns well with the ${mission.role} role.`,
      `This opportunity supports your career goal of ${profile.goals[0]}.`,
      "Your communications and AI experience create a strong match.",
    ],

    recommendedAction:
      "Tailor your resume and apply within the next 48 hours.",
  };
}