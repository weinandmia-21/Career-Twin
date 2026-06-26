import { getMission, getProfile } from "@/lib/careerTwin";
import { resumeAnalysis } from "@/data/resume";

export function tailorResume() {
  const mission = getMission();
  const profile = getProfile();

  return {
    profile,
    mission,
    analysis: resumeAnalysis,
  };
}