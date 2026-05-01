"use client";

import { motion } from "framer-motion";
import { MapPin, Church, Users } from "lucide-react";
import Image from "next/image"

export default function OurMission() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl font-black text-brand-navy tracking-tighter mb-8">
                            A LIGHT WITHIN <span className="text-brand-gold">ASTU</span>
                        </h2>
                        <p className="text-brand-navy/70 leading-relaxed mb-6 text-lg">
                            FOCUS ASTU serves as a spiritual home for students navigating their academic journey. We are rooted in the belief that university life is a prime season to grow in the Word of God while pursuing professional excellence.
                        </p>
                        <p className="text-brand-navy/70 leading-relaxed mb-10">
                            Our fellowship is a place where we worship God together, share testimonies, and build lifelong brotherhood and sisterhood within the campus of Adama Science and Technology University.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-6 bg-brand-cream/10 rounded-3xl">
                                <MapPin className="text-brand-gold mt-1" size={24} />
                                <div>
                                    <h4 className="font-black text-brand-navy text-sm uppercase tracking-widest">Base Location</h4>
                                    <p className="text-xs text-brand-navy/60">Adama, Oromia, Ethiopia.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-brand-navy rounded-3xl text-white">
                                <Church className="text-brand-gold mt-1" size={24} />
                                <div>
                                    <h4 className="font-black text-brand-gold text-sm uppercase tracking-widest">Our Sanctuary</h4>
                                    <p className="text-xs text-white/60">Bole Mekane Yesus Adama.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-square lg:aspect-auto rounded-[4rem] overflow-hidden shadow-2xl">
                        <Image src="/images/7.jpg" alt="Worship" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}