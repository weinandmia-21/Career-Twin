import { NextResponse } from "next/server";

import { extractPdfText } from "@/lib/parser/extractPdfText";
import { parseResumeToResume } from "@/lib/ai/parseResumeToResume";
import { saveResume } from "@/lib/resume/repository";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");
    const applicationId = formData.get("applicationId");

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          error: "No file uploaded.",
        },
        {
          status: 400,
        }
      );
    }

    if (typeof applicationId !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Missing application ID.",
        },
        {
          status: 400,
        }
      );
    }

    const extraction = await extractPdfText(file);

    const resume = await parseResumeToResume(
      extraction.text
    );

    await saveResume(
      applicationId,
      resume
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
        error: "Unable to process resume.",
      },
      {
        status: 500,
      }
    );
  }
}