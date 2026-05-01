"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FRIDAY_MICRO_MOMENTS = [
    { size: "md:col-span-4 md:row-span-2", label: "Main Worship", src: "/images/1.jpg" },
    { size: "md:col-span-2 md:row-span-1", label: "Prayer", src: "/images/2.jpg" },
    { size: "md:col-span-3 md:row-span-2", label: "The Word", src: "/images/3.jpg" },
    { size: "md:col-span-3 md:row-span-1", label: "Nathanim Prep", src: "/images/4.jpg" },
    { size: "md:col-span-2 md:row-span-1", label: "Welcome", src: "/images/5.jpg" },
    { size: "md:col-span-3 md:row-span-1", label: "Choir Harmony", src: "/images/6.jpg" },
    { size: "md:col-span-2 md:row-span-2", label: "Intercession", src: "/images/7.jpg" },
    { size: "md:col-span-3 md:row-span-2", label: "Fellowship", src: "/images/8.jpg" },
    { size: "md:col-span-2 md:row-span-1", label: "Digital Team", src: "/images/9.jpg" },
    { size: "md:col-span-2 md:row-span-1", label: "Greeting", src: "/images/10.jpg" },
    { size: "md:col-span-3 md:row-span-2", label: "LAD Performance", src: "/images/11.jpg" },
    { size: "md:col-span-4 md:row-span-1", label: "Audience", src: "/images/12.jpg" },
    { size: "md:col-span-3 md:row-span-1", label: "Sanctuary", src: "/images/13.jpg" },
    { size: "md:col-span-2 md:row-span-1", label: "Post-Service", src: "/images/1.jpg" },
    { size: "md:col-span-3 md:row-span-1", label: "Group Photo", src: "/images/2.jpg" },
    { size: "md:col-span-2 md:row-span-2", label: "Action Call", src: "/images/3.jpg" },
    { size: "md:col-span-2 md:row-span-1", label: "Tech Booth", src: "/images/4.jpg" },
    { size: "md:col-span-3 md:row-span-1", label: "Family Meeting", src: "/images/5.jpg" },
    { size: "md:col-span-2 md:row-span-1", label: "Blessing", src: "/images/6.jpg" },
    { size: "md:col-span-3 md:row-span-1", label: "Benediction", src: "/images/7.jpg" },
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
                                src={img.src}
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