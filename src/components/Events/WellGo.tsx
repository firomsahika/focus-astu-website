"use client";
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, GraduationCap, Sparkles } from "lucide-react";

export default function WellGo() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} className="py-32 bg-white overflow-hidden relative">
            {/* Background Decorative Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-20" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
                    <div className="relative">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            className="h-1 bg-brand-gold mb-6"
                        />
                        <h2 className="text-7xl md:text-9xl font-black text-brand-navy tracking-tighter leading-none">
                            WELL <br />
                            <span className="text-brand-gold italic font-light font-serif">GO!</span>
                        </h2>
                    </div>

                    <div className="max-w-xs text-right">
                        <p className="text-brand-navy/40 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                            Class of 2026 Commissioning
                        </p>
                        <p className="text-brand-navy font-medium leading-relaxed italic">
                            "A milestone of grace, a celebration of the journey, and a launchpad for the future."
                        </p>
                    </div>
                </div>

                {/* Cinematic Collage Grid */}
                <div className="relative grid grid-cols-12 gap-4 h-[800px] md:h-[1000px]">

                    {/* Main Floating Card (Alumni/3.jpg) */}
                    <motion.div
                        style={{ y: y1 }}
                        className="col-span-12 md:col-span-7 h-[400px] md:h-[600px] relative z-20"
                    >
                        <div className="w-full h-full rounded-[5rem] md:rounded-[10rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative group">
                            <Image
                                src="/images/3.jpg"
                                alt="Graduates"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors" />
                            <div className="absolute top-12 left-12">
                                <div className="bg-white/90 backdrop-blur-md p-6 rounded-full">
                                    <GraduationCap className="text-brand-gold" size={32} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* The "Commissioned" Card (Sendoff/5.jpg) */}
                    <motion.div
                        style={{ y: y2 }}
                        className="col-span-8 md:col-span-5 h-[350px] md:h-[500px] absolute right-0 top-1/4 z-30"
                    >
                        <div className="w-full h-full rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl relative group">
                            <Image
                                src="/images/5.jpg"
                                alt="Commissioning"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                <p className="font-black text-2xl tracking-tight">The Sending</p>
                                <p className="text-[10px] uppercase tracking-widest font-bold">June 2026</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Info Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="col-span-6 md:col-span-3 h-64 bg-brand-navy rounded-[3rem] p-10 flex flex-col justify-between absolute bottom-10 left-0 md:left-20 z-40 shadow-xl"
                    >
                        <Sparkles className="text-brand-gold" size={28} />
                        <div>
                            <h4 className="text-white font-black text-xl leading-tight">Legacy <br />Gathering</h4>
                            <button className="mt-4 flex items-center gap-2 text-brand-gold text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all">
                                Learn More <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Decorative Circle Plate */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-gold/20 rounded-full pointer-events-none" />
                </div>
            </div>
        </section>
    );
}