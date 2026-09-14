"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BarChart3, LayoutDashboard, UserCircle2 } from "lucide-react";

type Registration = {
  id: string;
  fullName: string;
  phoneNumber: string;
  tgUsername: string;
  location: string;
  batch: string;
  faculty: string;
  createdAt: string;
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    async function loadData() {
      const response = await fetch("/api/admin/registrations", { credentials: "same-origin" });

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();
      if (data.success) {
        setRegistrations(data.registrations || []);
      }

      setLoading(false);
    }

    void loadData();
  }, [router]);

  const totalPages = Math.max(1, Math.ceil(registrations.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const visibleRegistrations = registrations.slice(startIndex, startIndex + pageSize);
  const preEngineeringCount = registrations.filter((item) => item.faculty === "Pre-Engineering").length;
  const appliedCount = registrations.filter((item) => item.faculty === "Applied").length;

  async function handleDeleteRegistration(id: string) {
    const confirmed = window.confirm("Are you sure you want to delete this registration?");

    if (!confirmed) {
      return;
    }

    const response = await fetch("/api/admin/registrations", {
      method: "DELETE",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      alert(data.error || "Failed to delete registration.");
      return;
    }

    setRegistrations((currentRegistrations) => currentRegistrations.filter((item) => item.id !== id));
  }

  if (loading) {
    return <div className="min-h-screen bg-brand-navy px-6 py-28 text-white">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">Admin dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">Registered members</h1>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Total Registered</p>
            <BarChart3 className="text-brand-gold" size={18} />
          </div>
          <p className="mt-4 text-4xl font-black text-brand-gold">{registrations.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Latest batch</p>
            <LayoutDashboard className="text-brand-gold" size={18} />
          </div>
          <p className="mt-4 text-2xl font-bold text-white">{registrations[0]?.batch || "—"}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Faculty count</p>
            <UserCircle2 className="text-brand-gold" size={18} />
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-3 py-2">
              <span className="text-sm text-slate-300">Pre-Engineering</span>
              <span className="text-xl font-black text-brand-gold">{preEngineeringCount}</span>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-3 py-2">
              <span className="text-sm text-slate-300">Applied</span>
              <span className="text-xl font-black text-brand-gold">{appliedCount}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/30">
        <table className="min-w-[760px] divide-y divide-white/10 text-left">
          <thead className="bg-slate-950/40 text-sm uppercase tracking-widest text-slate-300">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Full name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Tg-username</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Batch</th>
              <th className="px-4 py-3">Faculty</th>
              <th className="px-4 py-3">Registered</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-slate-100">
            {registrations.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-8 text-center text-slate-300">
                  No registrations yet.
                </td>
              </tr>
            ) : (
              visibleRegistrations.map((item, index) => (
                <tr key={item.id} className="hover:bg-white/5">
                  <td className="px-4 py-3 font-medium text-slate-300">{startIndex + index + 1}</td>
                  <td className="px-4 py-3 font-medium">{item.fullName}</td>
                  <td className="px-4 py-3">{item.phoneNumber}</td>
                  <td className="px-4 py-3">{item.tgUsername || "—"}</td>
                  <td className="px-4 py-3">{item.location}</td>
                  <td className="px-4 py-3">{item.batch}</td>
                  <td className="px-4 py-3">{item.faculty}</td>
                  <td className="px-4 py-3">{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => void handleDeleteRegistration(item.id)}
                      className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-200 transition hover:bg-red-500 hover:text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {registrations.length > pageSize && (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={safeCurrentPage === 1}
            className="rounded-lg border border-white/10 bg-slate-900 px-4 py-2 font-medium text-white transition hover:border-brand-gold disabled:cursor-not-allowed disabled:opacity-40"
          >
            Back
          </button>

          <p>
            Page {safeCurrentPage} of {totalPages}
          </p>

          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={safeCurrentPage === totalPages}
            className="rounded-lg border border-white/10 bg-slate-900 px-4 py-2 font-medium text-white transition hover:border-brand-gold disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
