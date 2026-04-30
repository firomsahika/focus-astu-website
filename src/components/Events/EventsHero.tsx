"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Snow particles for the "Falling Grace" effect
const snowParticles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    size: Math.random() * 4 + 1,
}));

export default function EventsHero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-navy">

            {/* --- Cinematic Background Image --- */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/hero.png" // Using the established high-quality fellowship image
                    alt="FOCUS ASTU Events"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                {/* Navy Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-transparent to-brand-navy" />
                <div className="absolute inset-0 bg-brand-navy/20" />
            </motion.div>

            {/* --- Falling Grace (Snow) Effect --- */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {snowParticles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: "100vh", opacity: [0, 0.4, 0.4, 0] }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "linear"
                        }}
                        style={{ left: p.left, width: p.size, height: p.size }}
                        className="absolute bg-white rounded-full blur-[1px]"
                    />
                ))}
            </div>

            {/* --- Center Content --- */}
            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-5 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8"
                >
                    Moments of Impact
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-[9rem] font-black text-white tracking-tighter leading-[0.85] mb-8"
                >
                    OUR <span className="text-brand-gold italic block md:inline">EVENTS</span>
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="h-[1px] w-32 bg-brand-gold mx-auto mb-8"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-brand-cream/80 text-sm md:text-lg font-medium italic mb-6">
                        "To everything there is a season, A time for every purpose under heaven."
                        <span className="block text-brand-gold font-black not-italic text-[10px] tracking-widest mt-2 uppercase">
                            — Ecclesiastes 3:1
                        </span>
                    </p>
                    <p className="text-brand-cream/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] leading-loose">
                        From the streets of Adama to the halls of ASTU, every event is a step of faith.
                    </p>
                </motion.div>
            </div>

            {/* --- Scroll Indicator --- */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent" />
            </motion.div>
        </section>
    );
}