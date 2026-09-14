import { cookies } from "next/headers";
import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";

export const ADMIN_SESSION_COOKIE = "focus_admin_session";

function getSignature(value: string) {
  return crypto
    .createHmac("sha256", process.env.AUTH_SECRET || "dev-secret")
    .update(value)
    .digest("hex");
}

export function createSessionValue(adminId: string) {
  return `${adminId}.${getSignature(adminId)}`;
}

export function verifySessionValue(value: string) {
  const [adminId, signature] = value.split(".");

  if (!adminId || !signature) {
    return null;
  }

  if (signature !== getSignature(adminId)) {
    return null;
  }

  return adminId;
}

export async function getCurrentAdmin() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (!sessionValue) {
    return null;
  }

  const adminId = verifySessionValue(sessionValue);

  if (!adminId) {
    return null;
  }

  const admin = await prisma.admin.findUnique({
    where: { id: adminId },
  });

  return admin;
}

export async function ensureDefaultAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error("Missing ADMIN_EMAIL or ADMIN_PASSWORD environment variables.");
  }

  const existingAdmin = await prisma.admin.findUnique({
    where: { email },
  });

  if (existingAdmin) {
    return existingAdmin;
  }

  if(!existingAdmin){
    throw new Error("User with this credential doesnot exist")
  }

  const bcrypt = await import("bcryptjs");
  const passwordHash = await bcrypt.hash(password, 10);

  return prisma.admin.create({
    data: {
      email,
      passwordHash,
      requiresPasswordChange: true,
    },
  });
}
