"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users2, ChevronDown, LucideIcon } from "lucide-react";

// 1. Define types for the animation particles
interface Particle {
  id: number;
  left: string;
  duration: number;
  delay: number;
  size: number;
}

// 2. Define types for the info items
interface InfoItem {
  icon: LucideIcon;
  label: string;
  val: string;
}

export default function TeamsHero() {
  // Apply the Particle type to the state
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 5,
      size: Math.random() * 4 + 1,
    }));
    setParticles(generated);
  }, []);

  const infoItems: InfoItem[] = [
    { icon: Calendar, label: "Day", val: "Fridays" },
    { icon: Clock, label: "Time", val: "11:30 LT" },
    { icon: MapPin, label: "Place", val: "Bole MY" },
    { icon: Users2, label: "Units", val: "12+ Teams" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy py-20">

      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Image
          // WARNING: Ensure this filename matches exactly (case and spaces) in your public/images folder
          src="/images/worship night.jpg"
          alt="Teams Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy/20 to-brand-navy"></div>
      </div>

      {/* --- Falling Grace Animation Layer --- */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {particles.map((p: Particle) => (
          <motion.div
            key={p.id}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{
              y: "110vh",
              opacity: [0, 0.5, 0.5, 0],
              x: ["-15px", "15px", "-15px"]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
              x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            className="absolute bg-white rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]"
        >
          Our Structure
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter"
        >
          TEAMS & <span className="text-brand-gold italic">COORDINATORS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto border border-white/5 rounded-[2.5rem] bg-white/[0.01] backdrop-blur-md shadow-2xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg md:text-xl font-medium leading-relaxed font-serif italic text-white/80">
            "There are different kinds of service, but the same Lord. There are different kinds of working, but in all of them it is the same God at work."
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
            <div className="h-[1px] w-8 bg-brand-gold"></div>
            <span className="text-brand-gold font-bold tracking-widest text-[10px] uppercase">
              1 Corinthians 12:5-6
            </span>
            <div className="h-[1px] w-8 bg-brand-gold"></div>
          </div>
        </motion.div>

        {/* Info Bar with explicit types for map parameters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden"
        >
          {infoItems.map((item: InfoItem, i: number) => (
            <div key={i} className="p-6 flex flex-col items-center justify-center border-white/5 border-b sm:border-b-0 sm:border-r last:border-0">
              <item.icon className="text-brand-gold/60 mb-2" size={20} />
              <span className="text-[9px] text-white/30 uppercase font-bold tracking-widest mb-1">{item.label}</span>
              <span className="text-white font-black text-xs uppercase tracking-tight">{item.val}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="mt-12 text-white/20"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}