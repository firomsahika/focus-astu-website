import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";

export async function GET() {
  const admin = await getCurrentAdmin();

  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const registrations = await prisma.registration.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({
    success: true,
    count: registrations.length,
    registrations,
  });
}

export async function DELETE(request: Request) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let payload: { id?: string };

  try {
    payload = await request.json();
  } catch {
    payload = {};
  }

  const { id } = payload;

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "Registration id is required." }, { status: 400 });
  }

  try {
    const deletedRegistration = await prisma.registration.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      deletedRegistration,
    });
  } catch {
    return NextResponse.json({ error: "Registration not found." }, { status: 404 });
  }
}
