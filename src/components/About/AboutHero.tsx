"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[70vh] flex items-center justify-center bg-brand-navy overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <Image
                    src="/images/hero.png"
                    alt="FOCUS ASTU Fellowship"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-brand-gold font-black tracking-[0.5em] text-[10px] uppercase mb-4 block"
                >
                    Established in Adama
                </motion.span>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6"
                >
                    WHO WE <span className="text-brand-gold italic">ARE</span>
                </motion.h1>
                <p className="text-brand-cream/60 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed tracking-wide">
                    The Fellowship of Oromo Christian University Students (FOCUS) at Adama Science and Technology University is a vibrant community of faith, academic excellence, and cultural heritage.
                </p>
            </div>
        </section>
    );
}