"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react";

const initialState = {
  fullName: "",
  phoneNumber: "",
  tgUsername: "",
  location: "",
  batch: "",
  faculty: "",
};

export default function RegisterForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed. Please try again.");
        return;
      }

      setSuccess(
        data.message ||
          "Your registration has been submitted successfully. Welcome to FOCUS ASTU!"
      );

      setForm(initialState);
    } catch {
      setError(
        "Something went wrong while submitting your registration. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-brand-navy px-4 py-16 sm:px-6 md:py-24">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-brand-sage/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)] md:grid-cols-[0.95fr_1.25fr]">
          {/* LEFT — Welcome section */}
          <div className="relative overflow-hidden bg-brand-navy p-7 text-white sm:p-9 md:p-10 lg:p-12">
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[40px] border-brand-gold/10" />

            <div className="relative flex h-full flex-col">
              {/* Eyebrow */}
              <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3.5 py-2">
                <Sparkles className="h-4 w-4 text-brand-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Welcome to FOCUS ASTU
                </span>
              </div>

              {/* Main heading */}
              <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                Baga Nagaan Gara FOCUS ASTU Dhufte
                <span className="mt-2 block text-brand-gold">
                  
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Welcome to FOCUS ASTU. Whether you are completely new to
                campus or looking for a community where you can grow, connect,
                and serve, we are glad to have you here.
              </p>

              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">
                FOCUS ASTU is a Christian fellowship where students can grow
                in faith, build meaningful friendships, encourage one another,
                and serve the university community with love and purpose.
              </p>

              {/* What awaits you */}
              <div className="mt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  A place to
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <HeartHandshake className="h-4 w-4 text-brand-gold" />
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        Find a community
                      </p>
                      <p className="mt-0.5 text-sm leading-5 text-slate-400">
                        Meet people, make friends, and find a place where you
                        belong.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Sparkles className="h-4 w-4 text-brand-gold" />
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        Grow together
                      </p>
                      <p className="mt-0.5 text-sm leading-5 text-slate-400">
                        Grow in faith, character, knowledge, and purpose.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <MessageCircle className="h-4 w-4 text-brand-gold" />
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        Stay connected
                      </p>
                      <p className="mt-0.5 text-sm leading-5 text-slate-400">
                        Receive updates and stay connected with the fellowship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom reassurance */}
              <div className="mt-auto pt-10">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />

                    <div>
                      <p className="font-semibold text-white">
                        You are welcome here.
                      </p>

                      <p className="mt-1 text-sm leading-5 text-slate-400">
                        Your journey at ASTU is just beginning. We would be
                        happy to walk part of that journey with you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Registration form */}
          <div className="bg-slate-50 p-5 sm:p-7 md:p-9 lg:p-12">
            <div className="mx-auto max-w-xl">
              {/* Form header */}
              <div className="mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-lg">
                  <UserRound className="h-5 w-5" />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-sage">
                  New to FOCUS ASTU?
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-brand-navy sm:text-4xl">
                  Let&apos;s get to know you.
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
                  Tell us a little about yourself so we can welcome you,
                  connect you with the fellowship, and keep you informed about
                  upcoming activities.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Personal information */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="h-px flex-1 bg-slate-200" />
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        About you
                      </span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      {/* Full name */}
                      <div className="md:col-span-2">
                        <label
                          htmlFor="fullName"
                          className="mb-2 block text-sm font-semibold text-brand-navy"
                        >
                          Full Name
                        </label>

                        <div className="relative">
                          <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-brand-navy shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="mb-2 block text-sm font-semibold text-brand-navy"
                        >
                          Phone Number
                        </label>

                        <div className="relative">
                          <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            required
                            autoComplete="tel"
                            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-brand-navy shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                            placeholder="+251 9..."
                          />
                        </div>
                      </div>

                      {/* Telegram */}
                      <div>
                        <label
                          htmlFor="tgUsername"
                          className="mb-2 block text-sm font-semibold text-brand-navy"
                        >
                          Telegram Username
                        </label>

                        <div className="relative">
                          <MessageCircle className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            id="tgUsername"
                            name="tgUsername"
                            type="text"
                            value={form.tgUsername}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-brand-navy shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                            placeholder="@username"
                          />
                        </div>

                        <p className="mt-1.5 text-xs text-slate-400">
                          Used to help you stay connected with us.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Academic information */}
                  <div>
                    {/* <div className="mb-4 flex items-center gap-3">
                      <div className="h-px flex-1 bg-slate-200" />
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Your ASTU information
                      </span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div> */}

                    <div className="grid gap-5 md:grid-cols-2">
                      {/* Location */}
                      <div>
                        <label
                          htmlFor="location"
                          className="mb-2 block text-sm font-semibold text-brand-navy"
                        >
                          Location / City
                        </label>

                        <div className="relative">
                          <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            id="location"
                            name="location"
                            type="text"
                            value={form.location}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-brand-navy shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                            placeholder="e.g. Adama"
                          />
                        </div>
                      </div>

                      {/* Batch */}
                      <div>
                        <label
                          htmlFor="batch"
                          className="mb-2 block text-sm font-semibold text-brand-navy"
                        >
                          Batch
                        </label>

                        <input
                          id="batch"
                          name="batch"
                          type="text"
                          value={form.batch}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-brand-navy shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                          placeholder="e.g. 2019"
                        />
                      </div>

                      {/* Faculty */}
                      <div className="md:col-span-2">
                        <label
                          htmlFor="faculty"
                          className="mb-2 block text-sm font-semibold text-brand-navy"
                        >
                          Faculty
                        </label>

                        <select
                          id="faculty"
                          name="faculty"
                          value={form.faculty}
                          onChange={handleChange}
                          required
                          className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-brand-navy shadow-sm outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15"
                        >
                          <option value="">Select your faculty</option>
                          <option value="Pre-Engineering">
                            Pre-Engineering
                          </option>
                          <option value="Applied">Applied Science</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Status messages */}
                  <div aria-live="polite" className="space-y-3">
                    {error && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700">
                        {error}
                      </div>
                    )}

                    {success && (
                      <div className="flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-5 text-emerald-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{success}</span>
                      </div>
                    )}
                  </div>

                  {/* Privacy note */}
                  <div className="rounded-xl border border-brand-navy/10 bg-white px-4 py-3.5">
                    <p className="text-xs leading-5 text-slate-500">
                      <span className="font-semibold text-brand-navy">
                        One small step to get connected.
                      </span>{" "}
                      The information you provide helps FOCUS ASTU organize
                      fellowship activities and communicate with you.
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 py-4 text-sm font-bold text-white shadow-lg shadow-brand-navy/20 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-navy-100 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <span>REGISTER NOW</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Bottom text */}
              <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                We&apos;re glad you&apos;re here. Welcome to the FOCUS ASTU
                family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

