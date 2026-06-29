import { NextResponse } from "next/server";

import { generateCoverLetter } from "@/lib/ai/cover-letter/generateCoverLetter";

export async function POST(request: Request) {
  try {
    const { profile, jobDescription } = await request.json();

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

    const coverLetter = await generateCoverLetter(
      profile,
      jobDescription
    );

    return NextResponse.json({
      success: true,
      coverLetter,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to generate cover letter.",
      },
      {
        status: 500,
      }
    );
  }
}