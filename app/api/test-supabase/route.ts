import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";

export async function GET() {
  const { error } = await supabase
    .from("profiles")
    .select("*")
    .limit(1);

  if (error) {
    return NextResponse.json({
      connected: false,
      error: error.message,
    });
  }

  return NextResponse.json({
    connected: true,
    message: "Supabase connected successfully!",
  });
}