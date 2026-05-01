"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1 = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",

];
const row2 = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",

];

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