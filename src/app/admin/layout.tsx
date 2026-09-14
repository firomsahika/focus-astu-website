"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BarChart3, LayoutDashboard, LogOut, ShieldCheck, UserCircle2 } from "lucide-react";

const adminNavItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/profile", label: "Profile", icon: UserCircle2 },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST", credentials: "same-origin" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 p-4 sm:p-6 lg:flex-row lg:p-8">
        <aside className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-sm lg:sticky lg:top-6 lg:h-[calc(100vh-4rem)] lg:max-w-65 lg:self-start">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gold text-lg font-black text-brand-navy">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">Admin</p>
              <h2 className="text-lg font-bold text-white">Control Center</h2>
            </div>
          </div>

          <nav className="mt-6 space-y-2">
            {adminNavItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/20"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={() => void handleLogout()}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-500 hover:text-white"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 rounded-3xl border border-white/10 bg-slate-900/60 p-4 shadow-2xl backdrop-blur-sm sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
