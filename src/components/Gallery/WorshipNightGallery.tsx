"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WORSHIP_HOLIDAY_MOMENTS = [
  { size: "md:col-span-3 md:row-span-3", label: "Holy Adoration" },
  { size: "md:col-span-3 md:row-span-1", label: "Easter Feast" },
  { size: "md:col-span-3 md:row-span-2", label: "Candlelight Night" },
  { size: "md:col-span-3 md:row-span-1", label: "Intimacy" },
  { size: "md:col-span-3 md:row-span-2", label: "Genna Fellowship" },
  { size: "md:col-span-3 md:row-span-1", label: "The Presence" },
  { size: "md:col-span-2 md:row-span-2", label: "Vocal Power" },
  { size: "md:col-span-4 md:row-span-2", label: "Night of Power" },
  { size: "md:col-span-3 md:row-span-1", label: "Holiday Joy" },
  { size: "md:col-span-3 md:row-span-1", label: "New Year Prayer" },
  { size: "md:col-span-2 md:row-span-2", label: "Instrumentals" },
  { size: "md:col-span-4 md:row-span-1", label: "Sanctuary Bloom" },
  { size: "md:col-span-3 md:row-span-2", label: "Deep Worship" },
  { size: "md:col-span-3 md:row-span-1", label: "Fasika Celebration" },
  { size: "md:col-span-2 md:row-span-1", label: "Humble Hearts" },
  { size: "md:col-span-4 md:row-span-1", label: "Choir Unity" },
  { size: "md:col-span-3 md:row-span-2", label: "Altar Moments" },
  { size: "md:col-span-3 md:row-span-1", label: "Holiday Meal" },
  { size: "md:col-span-2 md:row-span-1", label: "Grace" },
  { size: "md:col-span-4 md:row-span-1", label: "Reverence" },
];

export default function WorshipNightGallery() {
  return (
    <section className="py-24 bg-brand-cream/10">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-brand-gold font-black tracking-[0.4em] text-[10px] uppercase">Special Presence</span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tighter mt-1">
            NIGHTS <span className="text-brand-gold italic text-brand-gold">& HOLIDAYS</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-3 auto-rows-[120px] md:auto-rows-[150px]">
          {WORSHIP_HOLIDAY_MOMENTS.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[2rem] shadow-lg border border-brand-navy/5 bg-white ${img.size}`}
            >
              <Image
                src="/images/hero.png"
                alt={img.label}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-brand-gold text-[9px] font-black tracking-widest uppercase">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}