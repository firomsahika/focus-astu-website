"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MISSION_MICRO_MOMENTS = [
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

export default function MissionGallery() {
    return (
        <section className="py-24 bg-brand-navy text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center md:text-left">
                    <span className="text-brand-gold font-black tracking-[0.4em] text-[10px] uppercase">The Great Commission</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mt-1 uppercase">
                        ON <span className="text-brand-gold italic">MISSION</span>
                    </h2>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-12 gap-2 md:gap-3 auto-rows-[100px] md:auto-rows-[130px]">
                    {MISSION_MICRO_MOMENTS.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.03 }}
                            className={`relative overflow-hidden rounded-xl md:rounded-[2.5rem] group bg-white/5 border border-white/10 ${img.size}`}
                        >
                            <Image
                                src="/images/graduates.png"
                                alt={img.label}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                                <span className="text-brand-gold text-[8px] font-black tracking-widest uppercase">{img.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}