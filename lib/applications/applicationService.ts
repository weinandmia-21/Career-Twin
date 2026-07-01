import { createClient } from "@/lib/auth/server";

import type {
  JobApplication,
  ApplicationStatus,
} from "./types";

function mapApplication(row: any): JobApplication {
  return {
    id: row.id,
    userId: row.user_id,
    company: row.company,
    role: row.role,
    status: row.status,

    matchScore: row.match_score,

    // NEW
    resumeMatch: row.resume_match,

    location: row.location,
    salary: row.salary,
    appliedDate: row.applied_date,
    interviewDate: row.interview_date,
    notes: row.notes,
    jobDescription: row.job_description,
    resumeVersion: row.resume_version,
    coverLetter: row.cover_letter,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getApplications(): Promise<JobApplication[]> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? []).map(mapApplication);
}

export async function getApplication(
  id: string
): Promise<JobApplication | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (error || !data) {
    return null;
  }

  return mapApplication(data);
}

export async function updateApplicationStatus(
  id: string,
  status: ApplicationStatus
): Promise<boolean> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return false;
  }

  const { error } = await supabase
    .from("applications")
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}

/**
 * NEW
 * Saves the latest AI Resume Match score
 * for this application.
 */
export async function updateResumeMatch(
  id: string,
  resumeMatch: number
): Promise<boolean> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return false;
  }

  const { error } = await supabase
    .from("applications")
    .update({
      resume_match: resumeMatch,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}

export async function deleteApplication(
  id: string
): Promise<boolean> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return false;
  }

  const { error } = await supabase
    .from("applications")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}