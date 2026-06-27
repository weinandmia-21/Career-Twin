"use server";

import { createClient } from "@/lib/auth/server";
import { ingestResume } from "@/lib/services/resumeIngestion";

export async function uploadResumeAction(file: File) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not authenticated.");
  }

  return ingestResume(file, user.id);
}