import { createClient } from "@/lib/auth/server";
import type { TailoredResumeResult } from "@/lib/ai/tailorResume";

export async function saveResumeDraft(
  applicationId: string,
  result: TailoredResumeResult
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase
    .from("resume_documents")
    .update({
      draft_resume_json: result.resume,
      draft_status: "pending",
      draft_created_at: new Date().toISOString(),

      ats_score: result.atsScore,
      improvements: result.improvements,
      keywords_added: result.keywordsAdded,

      updated_at: new Date().toISOString(),
    })
    .eq("application_id", applicationId)
    .eq("user_id", user.id);

  if (error) {
    console.error(error);
    throw error;
  }

  console.log("✅ Draft saved");
}