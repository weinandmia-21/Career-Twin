import { createClient } from "@/lib/auth/server";

import type { Resume } from "./schema";

export async function loadResume(
  applicationId: string
): Promise<Resume | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("resume_documents")
    .select("resume_json")
    .eq("application_id", applicationId)
    .maybeSingle();

  if (error) {
    console.error(error);
    return null;
  }

  if (!data?.resume_json) {
    return null;
  }

  return data.resume_json as Resume;
}