import { uploadResume } from "@/lib/db/resumes";
import { saveCareerProfile } from "@/lib/db/careerProfiles";
import { parseResume } from "@/lib/ai/resumeParser";
import { extractText } from "@/lib/document/extractText";
import { CareerProfile } from "@/types/careerProfile";

export async function ingestResume(
  file: File,
  profileId: string
) {
  try {
    // --------------------------------------------------
    // Step 1: Upload the original resume to Supabase
    // --------------------------------------------------

    const uploadedResume = await uploadResume(file);

    // --------------------------------------------------
    // Step 2: Extract readable text from the PDF
    // --------------------------------------------------

    const resumeText = await extractText(file);

    if (!resumeText.trim()) {
      throw new Error("No readable text could be extracted from the resume.");
    }

    // --------------------------------------------------
    // Step 3: Ask GPT to build a Career Profile
    // --------------------------------------------------

    const careerProfile: CareerProfile =
      await parseResume(resumeText);

    // --------------------------------------------------
    // Step 4: Save Career Profile
    // --------------------------------------------------

    await saveCareerProfile(
      profileId,
      careerProfile
    );

    // --------------------------------------------------
    // Step 5: Return everything the UI needs
    // --------------------------------------------------

    return {
      success: true,
      uploadedResume,
      careerProfile,
    };

  } catch (error) {
    console.error("Resume ingestion failed:", error);

    throw error;
  }
}