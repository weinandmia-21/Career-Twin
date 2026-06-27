"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/auth/server";

export type AuthState = {
  success: boolean;
  message: string;
};

export async function signUp(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  console.log("✅ signUp server action reached");

  try {
    const supabase = await createClient();

    const fullName = String(formData.get("fullName"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("Supabase signUp:", { data, error });

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    if (data.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: data.user.id,
          full_name: fullName,
          email,
        });

      if (profileError) {
        return {
          success: false,
          message: profileError.message,
        };
      }
    }

    redirect("/dashboard");
  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function signIn(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  try {
    const supabase = await createClient();

    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    redirect("/dashboard");
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/");
}