"use client";

import { motion } from "framer-motion";
import { Coffee, BookOpen, Users, Sparkles, ArrowRight } from "lucide-react";

const RHYTHMS = [
  {
    time: "Dawn | 12:00 — 1:00 LT",
    title: "The Morning Altar",
    subtitle: "Spiritual Foundations",
    description: "Before the laboratories and lecture halls open, we gather at the campus chapel. It’s a sacred hour of intercession that anchors our day in divine purpose.",
    icon: Coffee,
    tag: "Spiritual"
  },
  {
    time: "Afternoon | 11:30 — 12:30 LT",
    title: "Excellence Seminars",
    subtitle: "Academic Mastery",
    description: "Iron sharpens iron. Our peer-mentorship circles simplify complex Engineering and Science concepts, ensuring every FOCUS member leads their class in wisdom.",
    icon: BookOpen,
    tag: "Intellectual"
  },
  {
    time: "Friday | 11:30 LT — 2:30 LT",
    title: "The Weekly Encounter",
    subtitle: "Main Fellowship",
    description: "The crown of our week. A high-energy atmosphere of worship and transformative teaching that prepares us to be salt and light in ASTU.",
    icon: Users,
    highlight: true,
    tag: "Community"
  },
];

export default function DailyRhythms() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Abstract background subtle pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none italic font-black text-[20vw] text-brand-navy select-none leading-none">
        RHYTHM
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles className="text-brand-gold animate-pulse" size={20} />
              <span className="text-brand-navy font-black tracking-[0.3em] uppercase text-xs">
                Consistency is Growth
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-[0.9]"
            >
              Our Sacred <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy">Rhythms.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-navy/50 max-w-sm font-medium text-lg italic"
          >
            "He makes all things beautiful in its time." — We don't just study; we build a life of disciplined grace.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line for Desktop */}
          <div className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 hidden md:block" />

          <div className="space-y-24">
            {RHYTHMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Content Block */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 ${item.highlight ? "bg-brand-gold text-brand-navy" : "bg-brand-navy text-white"
                    }`}>
                    {item.tag}
                  </div>
                  <h3 className="text-3xl font-black text-brand-navy mb-2 tracking-tight group cursor-default">
                    {item.title}
                  </h3>
                  <p className="text-brand-gold font-bold text-sm mb-4 uppercase tracking-tighter italic">
                    {item.subtitle}
                  </p>
                  <p className="text-brand-navy/60 font-medium leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
                    {item.description}
                  </p>
                </div>

                {/* Center Icon/Orb */}
                <div className="relative z-20">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all duration-500 ${item.highlight
                        ? "bg-brand-navy text-brand-gold ring-4 ring-brand-gold/20"
                        : "bg-white text-brand-navy ring-1 ring-brand-navy/10"
                      }`}
                  >
                    <item.icon size={28} />
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl -z-10" />
                </div>

                {/* Time/Meta Block */}
                <div className="flex-1">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                    <span className="text-brand-navy/30 font-black text-4xl tracking-tighter mb-2">
                      {item.time.split("|")[0]}
                    </span>
                    <span className="bg-brand-navy/5 px-6 py-2 rounded-xl text-brand-navy font-bold text-sm border border-brand-navy/5">
                      {item.time.split("|")[1]}
                    </span>

                    <button className="mt-6 flex items-center gap-2 text-brand-navy/40 hover:text-brand-gold transition-colors font-bold text-xs uppercase tracking-widest group">
                      Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}