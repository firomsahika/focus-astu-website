"use client";

import { useState } from "react";

const initialState = {
  fullName: "",
  phoneNumber: "",
  location: "",
  batch: "",
  faculty: "",
};

export default function RegisterForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    setLoading(false);

    if (!response.ok) {
      setError(data.error || "Registration failed.");
      return;
    }

    setSuccess(data.message || "Registration submitted successfully.");
    setForm(initialState);
  };

  return (
    <section className="bg-brand-navy px-6 py-24 text-brand-navy">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-brand-navy/10 bg-white p-6 shadow-[0_25px_80px_rgba(11,18,33,0.12)] md:grid-cols-[1.05fr_1.3fr] md:p-10 lg:p-12">
        <div className="flex flex-col justify-center rounded-[1.5rem] bg-brand-navy p-7 text-white md:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-brand-gold">WELCOME TO FOCUS ASTU</p>
          <h2 className="mb-5 text-4xl font-black leading-tight md:text-5xl">Register to be part of the fellowship</h2>
          <p className="max-w-md text-base leading-7 text-slate-200">
            New students can register here to connect with the fellowship, stay informed about events, and be welcomed into the community.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Welcome</p>
              <p className="mt-2 text-lg font-semibold">A warm place to belong, grow, and serve.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-brand-navy/10 bg-slate-50 p-5 shadow-inner md:p-7">
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-brand-navy/10 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-sage">New student</p>
              <h3 className="mt-2 text-2xl font-black text-brand-navy">Registration form</h3>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-brand-navy">Full Name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-brand-navy shadow-sm outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-navy">Phone Number</label>
              <input
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-brand-navy shadow-sm outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                placeholder="+2519..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-navy">Location / City</label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-brand-navy shadow-sm outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                placeholder="e.g. Adama"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-navy">Batch</label>
              <input
                name="batch"
                value={form.batch}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-brand-navy shadow-sm outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                placeholder="e.g. 2019"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-navy">Faculty</label>
              <select
                name="faculty"
                value={form.faculty}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-brand-navy shadow-sm outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
              >
                <option value="">Select faculty</option>
                <option value="Pre-Engineering">Pre-Engineering</option>
                <option value="Applied">Applied Science</option>
              </select>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {error && <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">{error}</p>}
            {success && <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-700">{success}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-brand-navy px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-gold/30 transition hover:-translate-y-0.5 hover:bg-brand-navy-100 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Register now"}
          </button>
        </form>
      </div>
    </section>
  );
}
