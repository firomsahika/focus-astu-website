"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Cpu } from "lucide-react";

export default function Tech() {
    return (
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <Image src="/images/2.jpg" alt="Tech" fill className="object-cover" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-brand-navy/80 backdrop-blur-xl p-10 md:p-16 rounded-[4rem] border border-white/10">
                        <div className="md:w-1/2">
                            <h2 className="text-5xl font-black tracking-tighter mb-6 leading-none">
                                TECH <br /> <span className="text-brand-gold italic text-6xl">EXCELLENCE</span>
                            </h2>
                            <p className="text-brand-cream/40 text-xs font-bold uppercase tracking-widest leading-loose mb-8">
                                Innovating for the Kingdom.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-center">
                                    <div className="p-3 bg-white/5 rounded-xl"><Code className="text-brand-gold" size={20} /></div>
                                    <p className="text-sm font-medium">Developer Hackathons</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="p-3 bg-white/5 rounded-xl"><Cpu className="text-brand-gold" size={20} /></div>
                                    <p className="text-sm font-medium">AI & Ethics Seminars</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative aspect-square rounded-3xl overflow-hidden border-4 border-brand-gold/20">
                            <Image src="/images/hero.png" alt="Tech Event" fill className="object-cover" />
                        </div>
                    </div>clear
                    
                </div>
            </div>
        </section>
    );
}