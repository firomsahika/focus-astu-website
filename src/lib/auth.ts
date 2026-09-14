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

