import { NextResponse } from "next/server";

import { analyzeResume } from "@/lib/ai/analyzeResume";
import { parseResumeToResume } from "@/lib/ai/parseResumeToResume";

import { saveProfile } from "@/lib/career/saveProfile";
import { saveResume } from "@/lib/resume/repository";

import { extractPdfText } from "@/lib/parser/extractPdfText";

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

    // Extract text from the uploaded PDF
    const { text, pages } = await extractPdfText(file);

    console.log("📄 PDF Pages:", pages);
    console.log("📄 Characters:", text.length);
    console.log("📄 First 500 Characters:");
    console.log(text.substring(0, 500));

    // Build the Career Twin profile
    const profile = await analyzeResume(text);

    // Build the Resume Studio JSON
    const resume = await parseResumeToResume(text);

    // Save the Career Twin profile
    await saveProfile(profile);

    // Save the Resume Studio resume if an application ID was supplied
    if (typeof applicationId === "string") {
      await saveResume(applicationId, resume);
    }

    return NextResponse.json({
      success: true,
      pages,
      characters: text.length,
      profile,
      resume,
    });
  } catch (error) {
    console.error("Resume processing failed:", error);

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