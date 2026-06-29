import type { CareerTwinProfile } from "@/lib/ai/schemas";

export type DailyMission = {
  priority: "High" | "Medium" | "Low";
  objective: string;
  estimatedImpact: string;
  tasks: string[];
};

export function generateMission(
  profile: CareerTwinProfile
): DailyMission {
  const tasks: string[] = [];

  const hasAI = profile.skills.some((skill) =>
    skill.toLowerCase().includes("ai")
  );

  const hasProduct = profile.skills.some((skill) =>
    skill.toLowerCase().includes("product")
  );

  const leadership =
    profile.leadershipLevel !== "Individual Contributor" &&
    profile.leadershipLevel !== "Unknown";

  if (!hasProduct) {
    tasks.push(
      "Tailor your resume toward Product-focused roles."
    );
  }

  if (!hasAI) {
    tasks.push(
      "Complete a short AI course or hands-on project."
    );
  }

  if (!leadership) {
    tasks.push(
      "Add leadership accomplishments to your resume."
    );
  }

  tasks.push(
    "Apply to 3 highly matched positions."
  );

  tasks.push(
    "Practice one behavioral interview question."
  );

  return {
    priority: "High",

    objective:
      profile.idealRoles[0] ??
      "Advance toward your next career opportunity.",

    estimatedImpact:
      "+5–10% stronger job competitiveness",

    tasks,
  };
}