import { NextResponse } from "next/server";

import { generateInterviewPrep } from "@/lib/ai/interview/generateInterviewPrep";

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

    const prep = await generateInterviewPrep(
      profile,
      jobDescription
    );

    return NextResponse.json({
      success: true,
      prep,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to generate interview prep.",
      },
      {
        status: 500,
      }
    );
  }
}