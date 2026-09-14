import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { registrationSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registrationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || "Invalid registration data.",
        },
        { status: 400 }
      );
    }

    const registration = await prisma.registration.create({
      data: {
        fullName: parsed.data.fullName,
        phoneNumber: parsed.data.phoneNumber,
        location: parsed.data.location,
        batch: parsed.data.batch,
        faculty: parsed.data.faculty,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration submitted successfully.",
        registration,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register API error:", error);
    return NextResponse.json(
      {
        error: "Something went wrong while saving the registration.",
      },
      { status: 500 }
    );
  }
}
