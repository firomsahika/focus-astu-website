"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname === "/admin" || pathname.startsWith("/admin/");

  return (
    <>
      {!isAdminPage && <Header />}

      <main className="min-h-screen">{children}</main>

      {!isAdminPage && <Footer />}
    </>
  );
}
