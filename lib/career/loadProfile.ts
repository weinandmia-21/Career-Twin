import { createClient } from "@/lib/auth/server";
import type { CareerTwinProfile } from "@/lib/ai/schemas";

export async function loadProfile(): Promise<CareerTwinProfile | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("career_profiles")
    .select("profile_json")
    .eq("user_id", user.id)
    .maybeSingle();

    console.log("loadProfile debug", {
  userId: user.id,
  data,
  error,
});

  if (error) {
    console.error("Error loading Career Twin:", error);
    return null;
  }

  if (!data?.profile_json) {
    return null;
  }

  return data.profile_json as CareerTwinProfile;
}