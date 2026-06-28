import { NextResponse } from "next/server";
import { extractPdfText } from "@/lib/parser/extractPdfText";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "No file uploaded." },
        { status: 400 }
      );
    }

    const result = await extractPdfText(file);

    return NextResponse.json({
      success: true,
      fileName: file.name,
      pages: result.pages,
      characters: result.text.length,
      preview: result.text.slice(0, 500),
      text: result.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to parse PDF.",
      },
      {
        status: 500,
      }
    );
  }
}