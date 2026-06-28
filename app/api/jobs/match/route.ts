import { NextResponse } from "next/server";

import { analyzeJobMatch } from "@/lib/ai/analyzeJobMatch";

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

    if (!jobDescription?.trim()) {
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

    const match = await analyzeJobMatch(
      profile,
      jobDescription
    );

    return NextResponse.json({
      success: true,
      match,
    });
  } catch (error) {
    console.error("Job Match failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to analyze job match.",
      },
      {
        status: 500,
      }
    );
  }
}