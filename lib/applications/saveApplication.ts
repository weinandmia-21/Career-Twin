import { createClient } from "@/lib/auth/server";

type SaveApplicationInput = {
  company: string;
  role: string;
  matchScore: number;
  location?: string;
  notes?: string;
  jobDescription?: string;
};

export async function saveApplication(
  input: SaveApplicationInput
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase
    .from("applications")
    .insert({
  user_id: user.id,
  company: input.company,
  role: input.role,
  match_score: input.matchScore,
  location: input.location,
  notes: input.notes,
  job_description: input.jobDescription,
  status: "Saved",
});

  if (error) {
    throw error;
  }
}