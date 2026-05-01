"use client";

import { motion } from "framer-motion";
import {
  Music, Flame, Palette, Heart, HandHelping,
  ScanEye, Users, BookOpen, GraduationCap,
  Stethoscope, Globe, ChevronRight, Sparkles,
  LucideIcon
} from "lucide-react";

// 1. Define the shape of your data
interface FellowshipItem {
  name: string;
  icon: LucideIcon;
  desc: string;
}

// 2. Define Prop interfaces for the components
interface ComponentProps {
  item: FellowshipItem;
  index: number;
}

const DATA = {
  teams: [
    { name: "Choir", icon: Music, desc: "Leading the community in soulful worship." },
    { name: "Action", icon: Flame, desc: "The energetic force behind our logistics." },
    { name: "Pray", icon: HandHelping, desc: "Interceding for the campus and beyond." },
    { name: "LAD", icon: Palette, desc: "Literature and Arts for Divine expression." },
    { name: "Charity", icon: Heart, desc: "Extending God's love through giving." },
    { name: "Nathanim", icon: Sparkles, desc: "Devoted service in the house of God." },
    { name: "DS (Digital)", icon: ScanEye, desc: "Strategic digital outreach and media." },
    { name: "Sisters", icon: Users, desc: "Empowering and connecting ASTU sisters." },
  ],
  coordinators: [
    {
      name: "Bible Study",
      icon: BookOpen,
      desc: "Guiding spiritual growth by coordinating families from the 1st to 5th batch."
    },
    {
      name: "Counselling",
      icon: Stethoscope,
      desc: "Providing spiritual and emotional support through structured counseling."
    },
    {
      name: "Excellence",
      icon: GraduationCap,
      desc: "Academic support, freshman lectures, and exam preparation."
    },
    {
      name: "Mission",
      icon: Globe,
      desc: "Coordinating Gospel missions and outreach in different places."
    },
  ]
};

export default function FellowshipStructure() {
  return (
    <section id="structure" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* --- SECTION 1: TEAMS --- */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-2"
              >
                Operational Units
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white"
              >
                Our <span className="text-brand-gold italic">Teams</span>
              </motion.h2>
            </div>
            <p className="text-brand-cream/50 max-w-md text-sm font-medium">
              The diverse departments of FOCUS ASTU working in unity to fulfill our divine mandate on campus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA.teams.map((item, index) => (
              <TeamCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* --- SECTION 2: COORDINATORS --- */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-2"
              >
                Leadership & Vision
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white"
              >
                Our <span className="text-brand-gold italic">Coordinators</span>
              </motion.h2>
            </div>
            <p className="text-brand-cream/50 max-w-md text-sm font-medium">
              Strategic offices dedicated to guiding, teaching, and empowering the fellowship across all batches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.coordinators.map((item, index) => (
              <CoordinatorCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// 3. Apply types to the component arguments
function TeamCard({ item, index }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all"
    >
      <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
        <item.icon className="text-brand-gold group-hover:text-brand-navy" size={24} />
      </div>
      <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{item.name}</h3>
      <p className="text-brand-cream/60 text-xs leading-relaxed font-medium">{item.desc}</p>
    </motion.div>
  );
}

function CoordinatorCard({ item, index }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 md:p-10 rounded-[2.5rem] overflow-hidden"
    >
      <item.icon className="absolute -right-8 -bottom-8 size-48 text-white/[0.02] group-hover:text-brand-gold/[0.04] transition-all duration-700 rotate-12" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
        <div className="w-16 h-16 rounded-[1.5rem] bg-brand-navy border border-brand-gold/20 flex items-center justify-center shrink-0 shadow-xl group-hover:border-brand-gold transition-colors">
          <item.icon className="text-brand-gold" size={32} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white mb-3 flex items-center gap-3 italic uppercase">
            {item.name} <span className="text-[10px] not-italic tracking-[0.3em] text-brand-gold bg-brand-gold/10 px-2 py-1 rounded">Office</span>
          </h3>
          <p className="text-brand-cream/70 leading-relaxed font-medium text-sm md:text-base">
            {item.desc}
          </p>
          <motion.button
            whileHover={{ x: 5 }}
            className="mt-6 flex items-center gap-2 text-brand-gold font-bold text-[10px] tracking-widest uppercase"
          >
            Learn More <ChevronRight size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}