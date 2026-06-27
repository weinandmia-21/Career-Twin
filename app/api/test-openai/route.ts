import { NextResponse } from "next/server";
import { openai } from "@/lib/ai/openai";

export async function GET() {
  try {
    const response = await openai.responses.create({
      model: "gpt-5",
      input: "Say 'Career Twin AI is connected.'",
    });

    return NextResponse.json({
      success: true,
      output: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}