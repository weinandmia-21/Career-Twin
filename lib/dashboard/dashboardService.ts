import { getApplications } from "@/lib/applications/applicationService";

export async function getDashboardData() {
  const applications = await getApplications();

  const saved = applications.filter(
    (app) => app.status === "Saved"
  ).length;

  const applied = applications.filter(
    (app) => app.status === "Applied"
  ).length;

  const interviews = applications.filter((app) =>
  [
    "Recruiter Screen",
    "Hiring Manager Interview",
    "Final Interview",
  ].includes(app.status)
).length;

const offers = applications.filter((app) =>
  ["Offer", "Accepted"].includes(app.status)
).length;

  const topApplication =
    [...applications].sort(
      (a, b) => b.matchScore - a.matchScore
    )[0] ?? null;

  return {
    applications,

    saved,

    applied,

    interviews,

    offers,

    topApplication,

    stats: [
      {
        title: "Applications",
        value: applications.length.toString(),
        subtitle: `${saved} saved`,
      },
      {
        title: "Applied",
        value: applied.toString(),
        subtitle: "Applications submitted",
      },
      {
        title: "Interviews",
        value: interviews.toString(),
        subtitle: "Upcoming interviews",
      },
      {
        title: "Best Match",
        value: topApplication
          ? `${topApplication.matchScore}%`
          : "--",
        subtitle: topApplication
          ? topApplication.company
          : "Analyze a job",
      },
    ],
  };
}