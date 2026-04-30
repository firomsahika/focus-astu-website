"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Helper to generate random particles for the "Falling Grace" effect
const graceParticles = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 10 + 10, // Slow, graceful fall
  delay: Math.random() * 10,
  size: Math.random() * 4 + 1, // Varying sizes for depth
}));

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-navy">

      {/* --- Falling Grace Animation Layer --- */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {graceParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{
              y: "110vh",
              // Increased opacity slightly from 0.4 to 0.6 for a brighter white look
              opacity: [0, 0.6, 0.6, 0],
              x: ["-20px", "20px", "-20px"]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
              x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            // Changed from bg-brand-gold to bg-white
            className="absolute bg-white rounded-full blur-[1px] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          />
        ))}
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="FOCUS ASTU Fellowship"
          fill
          className="object-cover opacity-50 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/40 to-brand-navy"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center h-full">

        {/* Welcome Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-gold font-bold tracking-[0.4em] text-[10px] md:text-xs mb-3 uppercase"
        >
          Welcoming the ASTU Community
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl"
        >
          FOCUS ASTU
        </motion.h1>

        {/* --- Verse Section (Glassmorphism) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto border border-white/10 rounded-xl bg-white/[0.03] backdrop-blur-lg shadow-2xl p-6 md:p-8 mb-8"
        >
          <p className="text-lg md:text-xl font-medium leading-snug font-serif italic text-center">
            <span className="bg-gradient-to-r from-white via-brand-gold/40 to-white bg-clip-text text-transparent">
              "Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ."
            </span>
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-brand-gold/20"></div>
            <span className="text-brand-gold/80 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">
              Ephesians 4:15
            </span>
            <div className="h-[1px] w-8 bg-brand-gold/20"></div>
          </div>
        </motion.div>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-brand-cream/70 text-sm md:text-base max-w-xl mx-auto mb-8 font-medium leading-relaxed"
        >
          Finding your path, your purpose, and your family in the heart of Adama Science and Technology University.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <button className="w-64 sm:w-auto px-8 py-3.5 bg-brand-navy border border-brand-gold text-brand-gold font-bold rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 text-sm shadow-lg shadow-brand-gold/10">
            JOIN OUR FRIDAY FELLOWSHIP
          </button>
          <button className="w-64 sm:w-auto px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 text-sm">
            LEARN OUR STORY
          </button>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-brand-gold/40 text-[10px] tracking-widest uppercase mb-2"
        >
          Scroll
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-brand-gold to-transparent"
        />
      </div>
    </section>
  );
}