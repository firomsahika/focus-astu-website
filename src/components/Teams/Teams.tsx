"use client";

import { motion } from "framer-motion";
import { Music, Zap, Flame, Theater, Heart, Monitor, Sparkles, UserCheck, MapPin, Clock } from "lucide-react";

const MINISTRY_TEAMS = [
    {
        name: "Choir Team",
        icon: Music,
        verse: "Psalm 33:3",
        mandate: "Sing to the Lord a new song; play skillfully.",
        schedule: "Mondays | 11:30 — 2:30 LT",
        location: "Bole MY Adama",
        details: "Vocal training, technical music theory, and Bible study."
    },
    {
        name: "Action Team",
        icon: Zap,
        verse: "Isaiah 52:7",
        mandate: "How beautiful are the feet of those who bring good news.",
        schedule: "Tuesdays | 11:20 — 2:30 LT",
        location: "FOCUS ASTU Chapel",
        details: "Evangelism training, missions teaching, and 'Walk for Christ'."
    },
    {
        name: "Pray Team",
        icon: Flame,
        verse: "James 5:16",
        mandate: "The prayer of a righteous person is powerful.",
        schedule: "Tuesdays | 11:30 — 2:30 LT",
        location: "Bole MY Adama",
        details: "Intensive intercession, worship, and Bible reflections."
    },
    {
        name: "LAD Team",
        icon: Theater,
        verse: "Mark 16:15",
        mandate: "Preach the gospel to all creation through art.",
        schedule: "Mondays | 11:30 — 2:30 LT",
        location: "FOCUS ASTU Chapel",
        details: "Drama, script writing, art workshops, and dramatical songs."
    },
    {
        name: "Charity Team",
        icon: Heart,
        verse: "James 1:27",
        mandate: "To look after orphans and widows in their distress.",
        schedule: "Thursdays | 11:30 — 2:30 LT",
        location: "FOCUS ASTU Chapel",
        details: "Resource collection, roadside ministry, and home visits."
    },
    {
        name: "Digital Strategy",
        icon: Monitor,
        verse: "Psalm 96:3",
        mandate: "Declare His glory among the nations digitally.",
        schedule: "Fri/Events/Missions",
        location: "Various Locations",
        details: "Photography, Video/Audio recording, and Content Strategy."
    },
    {
        name: "Nathanim",
        icon: Sparkles,
        verse: "Colossians 3:23",
        mandate: "Work at it with all your heart, as for the Lord.",
        schedule: "Fridays | 12:00 — 1:00 LT",
        location: "Sanctuary",
        details: "Logistics, environment preparation, and church cleaning."
    },
    {
        name: "Sisters Team",
        icon: UserCheck,
        verse: "Proverbs 31:25",
        mandate: "She is clothed with strength and dignity.",
        schedule: "Special Programs",
        location: "Chapel / Online",
        details: "Sisterhood empowerment, prayer, and identity teaching."
    }
];

// Snow particles for the background
const snowParticles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    size: Math.random() * 3 + 1,
}));

export default function MinistryTeams() {
    return (
        <section className="relative py-24 bg-brand-navy overflow-hidden">

            {/* --- Subtle Falling Grace Effect (Navy Theme) --- */}
            <div className="absolute inset-0 pointer-events-none">
                {snowParticles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: "100vh", opacity: [0, 0.3, 0.3, 0] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
                        style={{ left: p.left, width: p.size, height: p.size }}
                        className="absolute bg-brand-gold rounded-full blur-[1px]"
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* --- Section Header --- */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4"
                    >
                        The Body of Christ
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter"
                    >
                        Our <span className="text-brand-gold italic">Active Units</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-[1px] w-24 bg-brand-gold/50 mx-auto mt-6"
                    />
                </div>

                {/* --- Teams Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MINISTRY_TEAMS.map((team, idx) => (
                        <motion.div
                            key={team.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md hover:bg-white/[0.07] transition-all duration-500"
                        >
                            {/* Icon Container */}
                            <div className="w-14 h-14 rounded-2xl bg-brand-navy border border-brand-gold/20 text-brand-gold flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-gold transition-all duration-500 shadow-xl shadow-black/20">
                                <team.icon size={28} />
                            </div>

                            {/* Title & Verse */}
                            <h3 className="text-xl font-black text-white mb-1 group-hover:text-brand-gold transition-colors">
                                {team.name}
                            </h3>
                            <span className="text-[10px] font-bold text-brand-gold/60 uppercase tracking-widest block mb-4">
                                {team.verse}
                            </span>

                            {/* Mandate */}
                            <p className="text-brand-cream/40 text-xs italic mb-8 leading-relaxed line-clamp-2">
                                "{team.mandate}"
                            </p>

                            {/* Meta Info */}
                            <div className="space-y-4 pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-white/5 text-brand-gold">
                                        <Clock size={12} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-brand-cream/30 uppercase font-black tracking-tighter">Schedule</span>
                                        <span className="text-[11px] text-white/90 font-bold tracking-tight">{team.schedule}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-white/5 text-brand-gold">
                                        <MapPin size={12} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-brand-cream/30 uppercase font-black tracking-tighter">Venue</span>
                                        <span className="text-[11px] text-white/90 font-bold tracking-tight">{team.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle Glow Effect on Hover */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}