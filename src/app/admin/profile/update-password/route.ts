import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getCurrentAdmin } from "@/lib/auth";
import { adminPasswordSchema } from "@/lib/validation";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = adminPasswordSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || "Invalid password data.",
        },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(parsed.data.password, 10);

    await prisma.admin.update({
      where: { id: admin.id },
      data: {
        passwordHash,
        requiresPasswordChange: false,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Password updated successfully.",
    });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      {
        error: "Unable to update the password right now.",
      },
      { status: 500 }
    );
  }
}
