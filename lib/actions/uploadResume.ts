import { uploadResume } from "@/lib/db/resumes";

export async function uploadResumeAction(file: File) {
  return uploadResume(file);
}