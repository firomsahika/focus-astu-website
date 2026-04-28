"use client";

import { motion } from "framer-motion";
import { Sun, GraduationCap, Heart } from "lucide-react";

const RHYTHMS = [
  {
    time: "06:00 AM — 07:00 AM",
    title: "Morning Prayer",
    description: "Starting the day with spiritual clarity and collective intercession at the campus chapel. A moment of peace before the academic rush.",
    icon: Sun,
  },
  {
    time: "06:30 PM — 07:30 PM",
    title: "Academic Excellence Lectures",
    description: "Bridging faith and intellect. Peer-to-peer tutoring and faculty-led seminars designed for academic distinction in engineering and science.",
    icon: GraduationCap,
  },
  {
    time: "EVERY FRIDAY | 05:30 PM",
    title: "Main Fellowship Gathering",
    description: "The heart of our week. Worship, teaching, and communal connection that recharges our souls.",
    icon: Heart,
    highlight: true,
  },
];

export default function DailyRhythms() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-navy/60 font-bold tracking-widest text-sm mb-2"
          >
            SUSTAINING GROWTH & EXCELLENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-brand-navy"
          >
            Daily Rhythms
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {RHYTHMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                item.highlight ? "bg-brand-navy text-white p-8 rounded-3xl" : ""
              }`}
            >
              <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${
                item.highlight ? "bg-brand-gold text-brand-navy" : "bg-brand-navy/5 text-brand-navy"
              }`}>
                <item.icon size={32} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${
                  item.highlight ? "text-brand-gold" : "text-brand-navy/40"
                }`}>
                  {item.time}
                </span>
                <h3 className={`text-2xl font-bold mb-3 ${
                  item.highlight ? "text-white" : "text-brand-navy"
                }`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed font-medium ${
                  item.highlight ? "text-white/70" : "text-brand-navy/60"
                }`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
