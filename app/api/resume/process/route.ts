import { NextResponse } from "next/server";

import { analyzeResume } from "@/lib/ai/analyzeResume";
import { saveProfile } from "@/lib/career/saveProfile";
import { extractPdfText } from "@/lib/parser/extractPdfText";

export async function POST(request: Request) {
  try {
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

    // Extract text from the uploaded PDF
    const { text, pages } = await extractPdfText(file);

    console.log("📄 PDF Pages:", pages);
    console.log("📄 Characters:", text.length);
    console.log("📄 First 500 Characters:");
    console.log(text.substring(0, 500));

    // Analyze the extracted resume text with GPT
    const profile = await analyzeResume(text);

    // Save the AI profile to Supabase
await saveProfile(profile);

    return NextResponse.json({
      success: true,
      pages,
      characters: text.length,
      profile,
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