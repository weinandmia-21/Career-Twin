import { createClient } from "@/lib/auth/server";
import type { CareerTwinProfile } from "@/lib/ai/schemas";

export async function saveProfile(profile: CareerTwinProfile) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase
    .from("career_profiles")
    .upsert(
      {
        user_id: user.id,

        // These columns are useful for searching/reporting
        professional_summary: profile.executiveSummary,
        skills: profile.skills,
        experience: profile.jobTitles,
        education: profile.education,
        achievements: profile.topAchievements,
        career_goals: profile.idealRoles,

        // Store the complete AI-generated profile
        profile_json: profile,
      },
      {
        onConflict: "user_id",
      }
    );

  if (error) {
    console.error("Error saving Career Twin:", error);
    throw error;
  }

  console.log("✅ Career Twin saved successfully");
}