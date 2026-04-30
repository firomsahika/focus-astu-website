"use client";

import { motion } from "framer-motion";

export default function TeamsBridge() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-brand-navy/40 font-black tracking-[0.3em] text-xs uppercase mb-8">
                        The Theology of Service
                    </h2>
                    <p className="text-2xl md:text-3xl font-serif italic text-brand-navy leading-relaxed mb-6">
                        "Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms."
                    </p>
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-[1px] w-12 bg-brand-gold"></div>
                        <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">1 Peter 4:10</span>
                        <div className="h-[1px] w-12 bg-brand-gold"></div>
                    </div>
                    <p className="text-brand-navy/60 text-lg leading-relaxed font-medium">
                        At FOCUS ASTU, we believe every student carries a unique grace. Our fellowship is a
                        laboratory where your academic journey meets spiritual fervor. Whether you lead through
                        song, technology, or prayer, there is a place for your hands here.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}