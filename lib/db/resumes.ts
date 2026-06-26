import { supabase } from "@/lib/supabase/client";

export async function uploadResume(file: File) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;

  const storagePath = `uploads/${fileName}`;

  const { error } = await supabase.storage
    .from("resume-files")
    .upload(storagePath, file);

  if (error) {
    throw error;
  }

  const { data, error: dbError } = await supabase
    .from("resumes")
    .insert({
      file_name: file.name,
      storage_path: storagePath,
    })
    .select()
    .single();

  if (dbError) {
    throw dbError;
  }

  return data;
}