import { createClient } from "@/lib/auth/server";

import type { Resume } from "./schema";
import type { TailoredResumeResult } from "@/lib/ai/tailorResume";

export async function saveResume(
  applicationId: string,
  result: Resume | TailoredResumeResult
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const resume =
    "resume" in result
      ? result.resume
      : result;

  const atsScore =
    "atsScore" in result
      ? result.atsScore
      : null;

  const improvements =
    "improvements" in result
      ? result.improvements
      : null;

  const keywordsAdded =
    "keywordsAdded" in result
      ? result.keywordsAdded
      : null;

  const { error } = await supabase
    .from("resume_documents")
    .upsert(
      {
        user_id: user.id,
        application_id: applicationId,

        resume_json: resume,

        ats_score: atsScore,
        improvements,
        keywords_added: keywordsAdded,

        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "application_id",
      }
    );

  if (error) {
    console.error(error);

    throw error;
  }

  console.log("✅ Resume saved");
}