import { sampleResume } from "./data/sampleResume";

import type { Resume } from "./schema";

/**
 * Temporary in-memory storage.
 *
 * Later this will be replaced by Supabase.
 */

const resumeStore = new Map<string, Resume>();

export async function getResume(
  applicationId: string
): Promise<Resume> {
  const existing = resumeStore.get(applicationId);

  if (existing) {
    return structuredClone(existing);
  }

  return structuredClone(sampleResume);
}

export async function saveResume(
  applicationId: string,
  resume: Resume
): Promise<void> {
  resumeStore.set(
    applicationId,
    structuredClone(resume)
  );
}

export async function resetResume(
  applicationId: string
): Promise<void> {
  resumeStore.delete(applicationId);
}