"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FRIDAY_MICRO_MOMENTS = [
    { size: "md:col-span-4 md:row-span-2", label: "Main Worship" },
    { size: "md:col-span-2 md:row-span-1", label: "Prayer" },
    { size: "md:col-span-3 md:row-span-2", label: "The Word" },
    { size: "md:col-span-3 md:row-span-1", label: "Nathanim Prep" },
    { size: "md:col-span-2 md:row-span-1", label: "Welcome" },
    { size: "md:col-span-3 md:row-span-1", label: "Choir Harmony" },
    { size: "md:col-span-2 md:row-span-2", label: "Intercession" },
    { size: "md:col-span-3 md:row-span-2", label: "Fellowship" },
    { size: "md:col-span-2 md:row-span-1", label: "Digital Team" },
    { size: "md:col-span-2 md:row-span-1", label: "Greeting" },
    { size: "md:col-span-3 md:row-span-2", label: "LAD Performance" },
    { size: "md:col-span-4 md:row-span-1", label: "Audience" },
    { size: "md:col-span-3 md:row-span-1", label: "Sanctuary" },
    { size: "md:col-span-2 md:row-span-1", label: "Post-Service" },
    { size: "md:col-span-3 md:row-span-1", label: "Group Photo" },
    { size: "md:col-span-2 md:row-span-2", label: "Action Call" },
    { size: "md:col-span-2 md:row-span-1", label: "Tech Booth" },
    { size: "md:col-span-3 md:row-span-1", label: "Family Meeting" },
    { size: "md:col-span-2 md:row-span-1", label: "Blessing" },
    { size: "md:col-span-3 md:row-span-1", label: "Benediction" },
];

export default function FridayGallery() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-12 border-l-4 border-brand-gold pl-6">
                    <span className="text-brand-gold font-black tracking-[0.4em] text-[10px] uppercase">Weekly Gathering</span>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tighter mt-1 italic">
                        FRIDAY <span className="text-brand-gold not-italic">PROGRAMS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-12 gap-2 md:gap-3 auto-rows-[110px] md:auto-rows-[140px]">
                    {FRIDAY_MICRO_MOMENTS.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.02 }}
                            className={`relative overflow-hidden rounded-xl md:rounded-[2rem] group bg-brand-navy/5 ${img.size}`}
                        >
                            <Image
                                src="/images/hero.png"
                                alt={img.label}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                <p className="text-white text-[9px] font-bold uppercase tracking-widest">{img.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}