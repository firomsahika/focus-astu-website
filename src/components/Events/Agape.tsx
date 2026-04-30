"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Hospital, Footprints, ShieldAlert } from "lucide-react";

const AGAPE_PILLARS = [
    { icon: Heart, title: "Street Outreach", desc: "Feeding and clothing those in need." },
    { icon: Hospital, title: "Hospital Ministry", desc: "Visiting and praying for patients." },
    { icon: ShieldAlert, title: "Prison Visit", desc: "Sharing hope with inmates." },
    { icon: Footprints, title: "The Mission", desc: "Reaching unreached areas." },
];

export default function Agape() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Image Side with Floating Element */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hero.png"
                                alt="Charity in Adama"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating "Impact" Card */}
                        <div className="absolute -bottom-6 -right-6 bg-brand-gold p-8 rounded-3xl shadow-xl hidden md:block">
                            <p className="text-brand-navy font-black text-4xl tracking-tighter">500+</p>
                            <p className="text-brand-navy/60 text-[10px] font-bold uppercase tracking-widest">Lives Touched</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-brand-gold font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">The Signature Project</span>
                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter mb-6">
                            PROJECT <span className="text-brand-gold italic">AGAPE</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {AGAPE_PILLARS.map((pillar, i) => (
                                <motion.div key={i} className="p-6 bg-brand-cream/10 rounded-2xl border border-brand-navy/5">
                                    <pillar.icon className="text-brand-gold mb-3" size={24} />
                                    <h4 className="font-black text-brand-navy text-sm mb-1">{pillar.title}</h4>
                                    <p className="text-[11px] text-brand-navy/50 leading-relaxed">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}