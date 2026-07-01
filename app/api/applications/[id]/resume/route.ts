import { NextResponse } from "next/server";

import { extractPdfText } from "@/lib/parser/extractPdfText";
import { parseResumeToResume } from "@/lib/ai/parseResumeToResume";
import { saveResume } from "@/lib/resume/saveResume";

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
    const { id: applicationId } = await params;

    console.log("📄 Resume upload started");
    console.log("Application:", applicationId);

    const formData = await request.formData();

    const file = formData.get("file");

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

    console.log("File:", file.name);

    // Extract PDF text
    const { text, pages } = await extractPdfText(file);

    console.log("Pages:", pages);
    console.log("Characters:", text.length);

    // Parse into Resume Studio schema
    const resume = await parseResumeToResume(text);

    console.log("Resume parsed successfully");

    // Save to database
    await saveResume(
      applicationId,
      resume
    );

    console.log("Resume saved successfully");

    return NextResponse.json({
      success: true,
      pages,
      characters: text.length,
      resume,
    });
  } catch (error) {
    console.error("❌ Resume upload failed");

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      {
        status: 500,
      }
    );
  }
}