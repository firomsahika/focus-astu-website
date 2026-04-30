"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WellGo() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter italic">
                        LEGACY <span className="text-brand-gold not-italic">GATHERINGS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Graduates Program Card */}
                    <motion.div whileHover={{ y: -10 }} className="relative group">
                        <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-xl">
                            <Image src="/images/graduates.png" alt="Alumni" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <h3 className="text-3xl font-black text-white mb-2">Graduates' Program</h3>
                                <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">Alumni Homecoming</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Well Go Card */}
                    <motion.div whileHover={{ y: -10 }} className="relative group md:mt-12">
                        <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-xl border-4 border-brand-gold/10">
                            <Image src="/images/wellgo.png" alt="Send off" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/90 via-brand-gold/20 to-transparent opacity-90" />
                            <div className="absolute bottom-12 left-12 right-12 text-brand-navy">
                                <h3 className="text-3xl font-black mb-2">Well Go Program</h3>
                                <p className="text-brand-navy/60 text-[10px] font-black uppercase tracking-[0.4em]">The Class Commissioning</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}