"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/choir.jpg" // Replace with a wide fellowship group shot
          alt="FOCUS ASTU Moments"
          fill
          className="object-cover opacity-30"
          priority
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-transparent to-brand-navy z-[1]" />
      <div className="absolute inset-0 bg-brand-navy/40 z-[1]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6"
        >
          Visual Testimony
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4"
        >
          OUR <span className="text-brand-gold italic">JOURNEY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-brand-cream/60 text-sm md:text-base max-w-lg mx-auto font-medium uppercase tracking-widest"
        >
          Capturing the grace, the mission, and the family.
        </motion.p>
      </div>
    </section>
  );
}