import { NextResponse } from "next/server";

import { updateApplicationStatus } from "@/lib/applications/applicationService";

import type { ApplicationStatus } from "@/lib/applications/types";

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing application id.",
        },
        {
          status: 400,
        }
      );
    }

    if (!status) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing status.",
        },
        {
          status: 400,
        }
      );
    }

    const success = await updateApplicationStatus(
      id,
      status as ApplicationStatus
    );

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to update status.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Unexpected server error.",
      },
      {
        status: 500,
      }
    );
  }
}