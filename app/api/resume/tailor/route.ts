import { NextResponse } from "next/server";

import { tailorResume } from "@/lib/ai/tailorResume";

export async function POST(request: Request) {
  try {
    const {
      profile,
      jobDescription,
    } = await request.json();

    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing Career Twin profile.",
        },
        {
          status: 400,
        }
      );
    }

    if (!jobDescription) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing job description.",
        },
        {
          status: 400,
        }
      );
    }

    const resume = await tailorResume(
      profile,
      jobDescription
    );

    return NextResponse.json({
      success: true,
      resume,
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