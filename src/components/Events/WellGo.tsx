"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Sparkles, MapPin, Calendar, ArrowRight } from "lucide-react";

// Types for TypeScript/Vercel Build Stability
interface GalleryItem {
    size: string;
    label: string;
    src: string;
}

export default function WellGo() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const galleryItems: GalleryItem[] = [
        { size: "md:col-span-4 md:row-span-2", label: "Main Worship", src: "/images/1.jpg" },
        { size: "md:col-span-2 md:row-span-1", label: "Prayer", src: "/images/graduates1.jpg" },
        { size: "md:col-span-3 md:row-span-2", label: "The Word", src: "/images/worship night.jpg" },
        { size: "md:col-span-3 md:row-span-1", label: "Nathanim Prep", src: "/images/graduates4.jpg" },
        { size: "md:col-span-2 md:row-span-1", label: "Welcome", src: "/images/5.jpg" },
        { size: "md:col-span-3 md:row-span-1", label: "Choir Harmony", src: "/images/6.jpg" },
        { size: "md:col-span-2 md:row-span-2", label: "Intercession", src: "/images/mission.jpg" },
        { size: "md:col-span-3 md:row-span-2", label: "Fellowship", src: "/images/milto.jpg" },
        { size: "md:col-span-2 md:row-span-1", label: "Digital Team", src: "/images/choir.jpg" },
        { size: "md:col-span-2 md:row-span-1", label: "Greeting", src: "/images/10.jpg" },
    ];

    if (!mounted) return null;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                {/* --- PROFESSIONAL HEADER --- */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-brand-gold font-black tracking-[0.4em] uppercase text-[10px] mb-4"
                        >
                            <Sparkles size={14} /> Class of 2026
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter leading-[0.85]">
                            COLLECTION OF
                            <br /> <span className='text-brand-gold'>EVENTS</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-brand-navy p-8 rounded-[2.5rem] text-white max-w-sm shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                            <GraduationCap size={80} />
                        </div>
                        <p className="relative z-10 text-brand-cream/80 italic font-serif text-lg mb-6 leading-relaxed">
                            "A milestone of grace, a celebration of the journey, and a launchpad for the future."
                        </p>
                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-brand-gold">
                            <span className="flex items-center gap-1"><Calendar size={12} /> June 2026</span>
                            <span className="flex items-center gap-1"><MapPin size={12} /> ASTU</span>
                        </div>
                    </motion.div>
                </div>

                {/* --- BENTO BOX CINEMATIC GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`relative rounded-[2rem] overflow-hidden group shadow-lg ${item.size}`}
                        >
                            <Image
                                src={item.src}
                                alt={item.label}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                            {/* Content on Hover */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-brand-gold font-black uppercase tracking-[0.3em] text-[9px] mb-1">
                                    Legacy Moment
                                </p>
                                <h4 className="text-white font-black text-xl tracking-tight flex items-center gap-2">
                                    {item.label} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h4>
                            </div>
                        </motion.div>
                    ))}

                    {/* Action Card */}
                    <motion.div
                        className="md:col-span-4 md:row-span-1 bg-brand-gold rounded-[2rem] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 0.98 }}
                    >
                        <div className="relative z-10">
                            <h3 className="text-brand-navy font-black text-2xl uppercase tracking-tighter mb-2">View Full Gallery</h3>
                            <p className="text-brand-navy/70 text-xs font-bold">100+ Legacy Memories</p>
                        </div>
                        <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Sparkles size={120} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}