"use client";

import { motion } from "framer-motion";
import { Share2, Sun, CloudMoon } from "lucide-react";

export default function ChurchPartner() {
    return (
        <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-black tracking-[0.4em] text-[10px] uppercase">Kingdom Collaboration</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-2 italic">
                        SERVING THE <span className="text-brand-gold not-italic">LOCAL CHURCH</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div whileHover={{ y: -10 }} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm">
                        <Sun className="text-brand-gold mb-6" size={32} />
                        <h3 className="text-2xl font-black mb-4 tracking-tight">Sunday Service</h3>
                        <p className="text-brand-cream/40 text-sm leading-relaxed">
                            When invited, our teams serve local churches across Adama during Sunday morning services, leading worship and sharing the Word.
                        </p>
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="p-10 bg-brand-gold text-brand-navy rounded-[3rem]">
                        <CloudMoon className="mb-6" size={32} />
                        <h3 className="text-2xl font-black mb-4 tracking-tight">Friday Vigils</h3>
                        <p className="text-brand-navy/60 text-sm leading-relaxed font-bold">
                            We join hands with the local community for Friday evening programs, fostering unity between the campus and the city.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}