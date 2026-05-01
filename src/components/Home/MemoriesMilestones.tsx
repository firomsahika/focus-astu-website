"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Calendar, Heart, Star } from "lucide-react";

const MEMORIES = [
  {
    title: "Graduates Day",
    category: "Milestone",
    icon: Star,
    image: "/images/1.jpg",
    size: "md:col-span-2 md:row-span-2",
    description: "Honoring those who finished their race with excellence."
  },
  {
    title: "Themed Nights",
    category: "Fellowship",
    icon: Heart,
    image: "/images/3.jpg",
    size: "md:col-span-2 md:row-span-1",
    description: "Laughter, snacks, and deep conversations under the ASTU stars."
  },
  {
    title: "Sister's Night",
    category: "Gathering",
    icon: Calendar,
    image: "/images/5.jpg",
    size: "md:col-span-1 md:row-span-1",
    description: "A sacred space for our sisters to connect and grow."
  },
  {
    title: "Holiday Celebrations",
    category: "Culture",
    icon: Camera,
    image: "/images/7.jpg",
    size: "md:col-span-1 md:row-span-1",
    description: "Celebrating our diverse traditions in one spirit."
  },
];

export default function MemoriesMilestones() {
  return (
    <section id="memories" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-gold" />
              <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
                Capturing the Moments
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight"
            >
              Memories & <span className="text-brand-gold">Milestones</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-cream/60 max-w-sm text-sm md:text-base font-medium leading-relaxed"
          >
            A visual timeline of our walk together—from first meetings to the bittersweet joy of graduation.
          </motion.p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 h-auto md:h-[700px]">
          {MEMORIES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-brand-navy border border-white/10 ${item.size}`}
            >
              {/* Image with Parallax Effect */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1 opacity-70 group-hover:opacity-100"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent flex flex-col justify-end p-8 md:p-10">

                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="p-2 bg-brand-gold/20 backdrop-blur-md rounded-lg">
                    <item.icon className="text-brand-gold" size={16} />
                  </div>
                  <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-brand-cream/60 text-sm font-medium leading-relaxed max-w-xs h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  {item.description}
                </p>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 h-1 bg-brand-gold w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex justify-center"
        >
          <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold text-sm hover:bg-white/10 transition-all group">
            SEE OUR FULL GALLERY
            <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy transition-transform group-hover:rotate-45">
              →
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}