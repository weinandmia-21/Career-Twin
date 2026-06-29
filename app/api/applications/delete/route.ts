import { NextResponse } from "next/server";

import { deleteApplication } from "@/lib/applications/applicationService";

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

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

    const success = await deleteApplication(id);

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to delete application.",
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