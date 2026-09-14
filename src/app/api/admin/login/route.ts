import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { ADMIN_SESSION_COOKIE, createSessionValue, ensureDefaultAdmin } from "@/lib/auth";
import { adminLoginSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = adminLoginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || "Please enter a valid email and password.",
        },
        { status: 400 }
      );
    }

    const email = parsed.data.email.trim().toLowerCase();
    const password = parsed.data.password;

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        {
          error: "Database is not configured. Add your DATABASE_URL in the environment before logging in.",
        },
        { status: 503 }
      );
    }

    let admin;
    try {
      admin = await ensureDefaultAdmin();
    } catch (error) {
      console.error("Admin bootstrap error:", error);
      return NextResponse.json(
        {
          error: "The admin account is not configured yet. Check your environment variables.",
        },
        { status: 503 }
      );
    }

    if (email !== admin.email.toLowerCase()) {
      return NextResponse.json({ error: "Email is incorrect. Please check the email and try again." }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash);

    if (!isValid) {
      return NextResponse.json({ error: "Password does not match. Please try again." }, { status: 401 });
    }

    await prisma.admin.update({
      where: { id: admin.id },
      data: { lastLoginAt: new Date() },
    });

    const response = NextResponse.json({
      success: true,
      requiresPasswordChange: admin.requiresPasswordChange,
      redirectTo: admin.requiresPasswordChange ? "/admin/profile?forceChange=1" : "/admin/dashboard",
    });

    response.cookies.set(ADMIN_SESSION_COOKIE, createSessionValue(admin.id), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      {
        error: "Unable to sign in at the moment. Please check your database and admin credentials.",
      },
      { status: 500 }
    );
  }
}
