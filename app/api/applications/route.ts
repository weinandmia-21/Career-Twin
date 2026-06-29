import { NextResponse } from "next/server";

import { saveApplication } from "@/lib/applications/saveApplication";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await saveApplication({
  company: body.company,
  role: body.role,
  matchScore: body.matchScore,
  location: body.location,
  notes: body.notes,
  jobDescription: body.jobDescription,
});

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to save application.",
      },
      {
        status: 500,
      }
    );
  }
}