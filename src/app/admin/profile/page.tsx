"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminProfilePage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAdmin = async () => {
      const response = await fetch("/api/admin/me", { credentials: "same-origin" });
      if (response.status === 401) {
        router.push("/admin/login");
      }
    };

    void fetchAdmin();
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const response = await fetch("/api/admin/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, confirmPassword }),
      credentials: "same-origin",
    });

    const data = await response.json();
    setLoading(false);

    if (!response.ok) {
      setError(data.error || "Unable to update password.");
      return;
    }

    setMessage(data.message || "Password updated successfully.");
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => router.push("/admin/dashboard"), 600);
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">Profile</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Admin profile</h1>
      </div>

      <div className="max-w-xl rounded-3xl border border-white/10 bg-slate-950/40 p-8 shadow-2xl">
        <div className="mb-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-lg font-bold text-brand-navy">
            A
          </div>
          <div>
            <p className="text-sm text-slate-400">Signed in as</p>
            <p className="text-lg font-semibold text-white">Administrator</p>
          </div>
        </div>

        <p className="mb-6 text-sm text-slate-300">This is the first login, so update the password to continue to the dashboard.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">New password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none focus:border-brand-gold"
              placeholder="Enter a secure password"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Confirm password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none focus:border-brand-gold"
              placeholder="Confirm new password"
            />
          </div>

          {error && <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">{error}</p>}
          {message && <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-gold px-4 py-3 font-bold text-brand-navy transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Updating..." : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
}
