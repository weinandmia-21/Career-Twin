import { supabase } from "@/lib/supabase/client";
import { CareerProfile } from "@/types/careerProfile";

export async function saveCareerProfile(
  profileId: string,
  profile: CareerProfile
) {
  const { error } = await supabase
    .from("career_profiles")
    .insert({
      profile_id: profileId,
      professional_summary: profile.professionalSummary,
      skills: profile.skills,
      experience: profile.experience,
      education: profile.education,
      achievements: profile.achievements,
      career_goals: profile.careerGoals,
    });

  if (error) {
    throw error;
  }
}