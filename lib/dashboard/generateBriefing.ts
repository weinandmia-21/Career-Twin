import type { JobApplication } from "@/lib/applications/types";

type DashboardData = {
  topApplication: JobApplication | null;
  saved: number;
  applied: number;
  interviews: number;
  offers: number;
};

export function generateBriefing(
  dashboard: DashboardData
) {
  if (!dashboard.topApplication) {
    return {
      title: "Welcome back.",
      message:
        "Upload your resume and analyze a job to begin building your Career Twin.",
      recommendation: "Analyze your first opportunity.",
    };
  }

  const { topApplication } = dashboard;

  let recommendation =
    "Continue building momentum.";

  if (dashboard.saved > dashboard.applied) {
    recommendation =
      "You have saved opportunities waiting. Tailor your resume before applying.";
  }

  if (dashboard.interviews > 0) {
    recommendation =
      "Prepare for your upcoming interviews. Interview readiness should be today's priority.";
  }

  return {
    title: "Welcome back.",

    message: `${topApplication.company} remains your strongest opportunity with a ${topApplication.matchScore}% match. Your Career Twin recommends focusing your effort on this role before exploring additional opportunities.`,

    recommendation,
  };
}