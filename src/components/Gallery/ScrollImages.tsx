"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Define the type for the component props
interface ScrollImageProps {
    images: string[];
    direction?: "left" | "right";
}

const row1 = [
    "/images/1.jpg",
    "/images/graduates1.jpg",
    "/images/worship night.jpg",
    "/images/4.jpg",
    "/images/choir.jpg",
    "/images/6.jpg",
    "/images/mission.jpg",
    "/images/8.jpg",
    "/images/graduates4.jpg",
    "/images/10.jpg",
    "/images/choir2.jpg",
    "/images/12.jpg",
    "/images/mission5.jpg",
];

const row2 = [
    "/images/1.jpg",
    "/images/graduates1.jpg",
    "/images/worship night.jpg",
    "/images/4.jpg",
    "/images/choir.jpg",
    "/images/6.jpg",
    "/images/mission.jpg",
    "/images/8.jpg",
    "/images/graduates4.jpg",
    "/images/10.jpg",
    "/images/choir2.jpg",
    "/images/12.jpg",
    "/images/mission6.jpg",
];

// Apply the interface to the component
const ScrollImage = ({ images, direction = "left" }: ScrollImageProps) => (
    <div className="flex overflow-hidden gap-4 py-2">
        <motion.div
            animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 min-w-max"
        >
            {[...images, ...images].map((src, i) => (
                <div key={i} className="relative w-64 h-40 md:w-80 md:h-52 overflow-hidden rounded-2xl border border-white/5">
                    <Image
                        src={src}
                        alt="Gallery"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-700"
                    />
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