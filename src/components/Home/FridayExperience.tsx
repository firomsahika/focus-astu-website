"use client";

import { motion } from "framer-motion";
import { Mic2, Music, BookOpen, Clock, MapPin, Sparkles } from "lucide-react";

const EXPERIENCES = [
  {
    icon: Mic2,
    title: "Prayer",
    description: "Connecting our hearts to the divine source, interceding for our campus and our future.",
    color: "from-blue-500/20 to-brand-navy/5",
  },
  {
    icon: Music,
    title: "Worship",
    description: "A soulful expression of gratitude and devotion through melodies that transcend the mundane.",
    color: "from-brand-gold/20 to-brand-navy/5",
  },
  {
    icon: BookOpen,
    title: "The Word",
    description: "Deep dive into scriptures that ignite wisdom and provide a foundation for excellence in life.",
    color: "from-emerald-500/20 to-brand-navy/5",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export default function FridayExperience() {
  return (
    <section id="friday" className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      {/* --- Animated Background Decorative Blobs --- */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-32 -mt-32"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl -ml-48 -mb-48"
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            Our Main Program
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tight"
          >
            The Friday Program
          </motion.h2>
        </div>

        {/* --- Schedule & Location Banner with Magnetic Entrance --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-20 bg-brand-navy rounded-[2.5rem] p-1 shadow-2xl shadow-brand-navy/20 group"
        >
          <div className="bg-white rounded-[2.2rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0 transition-colors group-hover:bg-brand-gold group-hover:text-white"
              >
                <Clock size={28} />
              </motion.div>
              <div>
                <p className="text-brand-navy/50 text-sm font-bold uppercase tracking-wider">Every Friday</p>
                <p className="text-xl md:text-xl font-black text-brand-navy">11:30 LT — 2:30 LT</p>
              </div>
            </div>

            <div className="hidden md:block h-12 w-[1px] bg-gray-200"></div>

            <div className="flex items-center gap-5">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 shrink-0"
              >
                <MapPin size={28} />
              </motion.div>
              <div>
                <p className="text-brand-navy/50 text-sm font-bold uppercase tracking-wider">Church Location</p>
                <p className="text-xl md:text-xl font-black text-brand-navy">Bole MY, Adama</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 bg-brand-gold text-brand-navy font-black rounded-2xl shadow-lg shadow-brand-gold/30 uppercase text-xs tracking-widest relative overflow-hidden group/btn"
            >
              <span className="relative z-10">Get the Blessing</span>
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white/20 skew-x-12"
              />
            </motion.button>
          </div>
          <p className="text-center text-white/60 text-[10px] py-3 font-medium italic tracking-widest">
            DIVIDE THE BLESSING OF GOD WITH US
          </p>
        </motion.div>

        {/* --- Experience Cards with Staggered Entrance --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {EXPERIENCES.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{
                y: -15,
                transition: { duraticon: 0.3, ease: "easeOut" }
              }}
              className={`relative overflow-hidden bg-gradient-to-br ${item.color} p-10 rounded-[2.5rem] border border-white shadow-xl group transition-shadow hover:shadow-2xl`}
            >
              {/* Spinning Decorative Icon on Hover */}
              <item.icon className="absolute -right-4 -bottom-4 text-brand-navy/5 size-32 rotate-12 group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-[2000ms] ease-in-out" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-navy group-hover:text-brand-gold transition-all duration-300"
                >
                  <item.icon size={28} />
                </motion.div>
                <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-brand-navy/70 leading-relaxed font-medium text-sm md:text-base">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-brand-navy font-bold text-xs uppercase tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Read More <span className="text-brand-gold">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}