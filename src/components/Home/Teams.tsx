"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Heart, 
  Palette, 
  HandHelping, 
  Flame, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2,
  Stethoscope,
  Lightbulb,
  Globe,
  Dna
} from "lucide-react";

const TEAMS = [
  { name: "Choir", icon: Music, color: "bg-blue-500" },
  { name: "Action", icon: Flame, color: "bg-red-500" },
  { name: "LAD", icon: Palette, color: "bg-purple-500" },
  { name: "Charity", icon: Heart, color: "bg-pink-500" },
  { name: "Pray Team", icon: HandHelping, color: "bg-orange-500" },
  { name: "Media", icon: Globe, color: "bg-indigo-500" },
  { name: "Counselling", icon: Stethoscope, color: "bg-teal-500" },
  { name: "Bible Study", icon: BookOpen, color: "bg-emerald-500" },
  { name: "Excellence", icon: GraduationCap, color: "bg-amber-500" },
  { name: "Action Coord", icon: CheckCircle2, color: "bg-cyan-500" },
  { name: "Events", icon: Lightbulb, color: "bg-yellow-500" },
  { name: "Missions", icon: Globe, color: "bg-rose-500" },
];

import { Music } from "lucide-react";

export default function Teams() {
  return (
    <section id="teams" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold font-bold mb-4"
            >
              OUR MINISTRIES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              The Engine Room
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-cream/60 max-w-sm"
          >
            12 operational units working in harmony to serve, lead, and foster the fellowship experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TEAMS.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <team.icon className="text-brand-gold" size={24} />
              </div>
              <span className="text-white font-bold text-sm uppercase tracking-wider">{team.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
