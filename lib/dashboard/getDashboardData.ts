import { loadProfile } from "@/lib/career/loadProfile";

export async function getDashboardData() {
  const profile = await loadProfile();

  if (!profile) {
    return null;
  }

  return {
    greeting: "Welcome back",

    summary: profile.executiveSummary,

    yearsExperience: profile.yearsExperience,

    topSkills: profile.skills,

    experience: profile.jobTitles,

    achievements: profile.topAchievements,

    careerGoals: profile.idealRoles,

    profile,
  };
}