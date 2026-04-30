"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1 = ["/images/hero.png", "/images/graduates.png", "/images/hero.png", "/images/graduates.png"];
const row2 = ["/images/graduates.png", "/images/hero.png", "/images/graduates.png", "/images/hero.png"];

const ScrollImage = ({ images, direction = "left" }) => (
    <div className="flex overflow-hidden gap-4 py-2">
        <motion.div
            animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 min-w-max"
        >
            {[...images, ...images].map((src, i) => (
                <div key={i} className="relative w-64 h-40 md:w-80 md:h-52 overflow-hidden rounded-2xl border border-white/5">
                    <Image src={src} alt="Gallery" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                </div>
            ))}
        </motion.div>
    </div>
);

export default function ScrollImages() {
    return (
        <section className="bg-brand-navy py-10">
            <ScrollImage images={row1} direction="left" />
            <ScrollImage images={row2} direction="right" />
        </section>
    );
}