"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Carnival() {
    return (
        <section className="relative py-32 bg-brand-navy overflow-hidden">
            {/* Immersive Background Image */}
            <div className="absolute inset-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
                <Image src="/images/milto.jpg" alt="Carnival" fill className="object-cover" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex justify-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="max-w-3xl w-full bg-white p-12 md:p-20 rounded-[4rem] text-center shadow-2xl relative"
                >
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 p-8">
                        <div className="w-12 h-12 border-t-2 border-r-2 border-brand-gold" />
                    </div>

                    <span className="text-brand-gold font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Unity in Joy</span>
                    <h2 className="text-5xl md:text-6xl font-black text-brand-navy tracking-tighter mb-6">
                        BRETHREN <span className="text-brand-gold italic">CARNIVAL</span>
                    </h2>
                    <p className="text-brand-navy/60 text-sm md:text-base leading-relaxed mb-8 italic">
                        "How good and pleasant it is when God’s people live together in unity!" — Psalm 133:1
                    </p>
                    <div className="h-1 w-12 bg-brand-gold mx-auto mb-8 rounded-full" />
                    <p className="text-brand-navy/40 text-[10px] font-bold uppercase tracking-[0.4em]">Annual Community Festival</p>
                </motion.div>
            </div>
        </section>
    );
}