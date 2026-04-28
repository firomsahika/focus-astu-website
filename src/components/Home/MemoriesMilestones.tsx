"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MEMORIES = [
  {
    title: "Graduates Day",
    category: "Events",
    image: "/images/graduates.png",
    size: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Themed Nights",
    category: "Fellowship",
    image: "/images/fellowship-night.png",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    title: "Sister's Night",
    category: "Gathering",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    size: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Holiday Celebrations",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=800&auto=format&fit=crop",
    size: "col-span-1 md:col-span-1 row-span-1",
  },
];

export default function MemoriesMilestones() {
  return (
    <section id="events" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-navy/60 font-bold tracking-widest text-sm mb-2"
          >
            OUR SHARED JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-brand-navy"
          >
            Memories & Milestones
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          {MEMORIES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${item.size}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white transition-transform group-hover:-translate-y-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
