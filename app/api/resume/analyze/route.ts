import { NextResponse } from "next/server";

import { analyzeResume } from "@/lib/ai/analyzeResume";

export async function POST(request: Request) {
  try {
    const { resumeText } = await request.json();

    const profile = await analyzeResume(resumeText);

    return NextResponse.json(profile);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to analyze resume.",
      },
      {
        status: 500,
      }
    );
  }
}