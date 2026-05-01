"use client";

import { motion } from "framer-motion";
import {
    Send,
    MessageSquare, // Use for TikTok or general messaging
    MessageCircle,
    Share2,        // Great generic alternative for Facebook
    Globe,         // Professional web presence
    Users
} from "lucide-react";

const SOCIALS = [
    {
        name: "Telegram",
        icon: Send,
        color: "bg-brand-navy",
        href: "https://t.me/focussastu" // Your Telegram channel 
    },
    {
        name: "Facebook",
        icon: Share2, // Professional substitute for brand icons in Lucide
        color: "bg-brand-navy",
        href: "#"
    },
    {
        name: "TikTok",
        icon: MessageSquare,
        color: "bg-brand-navy",
        href: "#"
    },
];

export default function ContactCTA() {
    return (
        <section className="py-24 bg-brand-cream/10">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <MessageCircle className="mx-auto text-brand-gold mb-8" size={48} />
                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter mb-8">
                            COME, LET’S WORSHIP <span className="text-brand-gold italic">TOGETHER</span>
                        </h2>
                        <p className="text-brand-navy/60 text-lg mb-12 font-medium">
                            Join the movement at Adama Science and Technology University. Whether you are a student or a local partner, we invite you to share in the Word and the Spirit.
                        </p>
                    </motion.div>

                    {/* Social Links Grid */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {SOCIALS.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                whileHover={{ y: -5 }}
                                className={`flex items-center gap-3 px-8 py-5 rounded-2xl text-brand-gold font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl ${social.color}`}
                            >
                                <social.icon size={18} /> {social.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Location Highlight - Focused on Bole MY Adama */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="p-12 rounded-[4rem] bg-brand-navy text-white relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <Users className="text-brand-gold mb-4 mx-auto md:mx-0" size={32} />
                            <h4 className="text-brand-gold font-black tracking-widest uppercase text-[10px] mb-2">Main Gathering Location</h4>
                            <p className="text-2xl md:text-3xl font-black">Bole MY Adama</p>
                            <p className="text-white/40 text-xs mt-3 uppercase tracking-[0.3em] font-bold">
                                Every Friday | 11:00 Local Time
                            </p>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/15 transition-colors" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}