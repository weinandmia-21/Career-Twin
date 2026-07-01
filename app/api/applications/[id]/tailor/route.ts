import { NextResponse } from "next/server";

import {
  getApplication,
  updateResumeMatch,
} from "@/lib/applications/applicationService";

import { loadProfile } from "@/lib/career/loadProfile";
import { tailorResume } from "@/lib/ai/tailorResume";

import { loadResume } from "@/lib/resume/loadResume";
import { saveResumeDraft } from "@/lib/resume/saveResumeDraft";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function POST(
  request: Request,
  { params }: Props
) {
  try {
    const { id } = await params;

    const application = await getApplication(id);

    if (!application) {
      return NextResponse.json(
        {
          success: false,
          error: "Application not found.",
        },
        {
          status: 404,
        }
      );
    }

    const profile = await loadProfile();

    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          error: "Career Twin profile not found.",
        },
        {
          status: 404,
        }
      );
    }

    const resume = await loadResume(id);

    if (!resume) {
      return NextResponse.json(
        {
          success: false,
          error: "Resume not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (!application.jobDescription) {
      return NextResponse.json(
        {
          success: false,
          error: "This application doesn't have a job description yet.",
        },
        {
          status: 400,
        }
      );
    }

    const result = await tailorResume(
      profile,
      resume,
      application.jobDescription
    );

    // Save the AI draft
    await saveResumeDraft(id, result);

    // Save the Resume Match score
    await updateResumeMatch(
      id,
      result.resumeMatch
    );

    return NextResponse.json({
      success: true,
      resumeMatch: result.resumeMatch,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to tailor resume.",
      },
      {
        status: 500,
      }
    );
  }
}