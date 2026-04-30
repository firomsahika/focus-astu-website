"use client";

import { motion } from "framer-motion";
import { BookMarked, MessageCircle, GraduationCap, Compass } from "lucide-react";

const COORDINATORS = [
    {
        title: "Bible Study Coordinators",
        icon: BookMarked,
        description: "The architects of fellowship family life.",
        features: [
            "Manage families from 1st to 5th year",
            "Develop Bible study curriculum",
            "Link System: Monitoring family health",
            "Dad & Mom leadership training"
        ]
    },
    {
        title: "Counselling Coordinator",
        icon: MessageCircle,
        description: "A ministry of emotional healing and support.",
        features: [
            "Individual spiritual/personal counselling",
            "Grief and sorrow support",
            "Integration with Bible Study Link System",
            "Support for students in academic distress"
        ]
    },
    {
        title: "Excellence Coordinator",
        icon: GraduationCap,
        description: "Bridging the gap between faith and the classroom.",
        features: [
            "Freshman Academic Tutorials & Exams",
            "FOCUS ASTU Tech Community management",
            "Software Dev & Competitive Programming",
            "Family Academic Monitoring"
        ]
    },
    {
        title: "Action Coordinators",
        icon: Compass,
        description: "Strategic leadership for campus and global missions.",
        features: [
            "Mini Missions (Mid-Semester)",
            "Break & Summer Mission Planning",
            "Adama, Dukem, Modjo, Asella, Holeta",
            "Evangelism strategy & logistics"
        ]
    }
];

export default function Coordinators() {
    return (
        <section className="py-24 bg-brand-navy text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-brand-gold font-black tracking-[0.4em] text-[10px] uppercase mb-4 text-center md:text-left">
                        Structural Leadership
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-center md:text-left">
                        The <span className="text-brand-gold italic">Coordinators</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {COORDINATORS.map((coord, idx) => (
                        <motion.div
                            key={coord.title}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 shrink-0 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-navy">
                                    <coord.icon size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black mb-2 tracking-tight">{coord.title}</h4>
                                    <p className="text-brand-cream/50 font-medium text-sm mb-6">{coord.description}</p>
                                    <ul className="space-y-3">
                                        {coord.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-cream/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}