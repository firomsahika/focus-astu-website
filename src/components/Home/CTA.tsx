"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="join" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white mb-8"
        >
          Ready to find your place?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium"
        >
          Whether you're a first-year student or a final-year senior, there's a chair waiting for you at our table.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="w-full md:w-auto px-10 py-5 bg-brand-gold text-brand-navy font-black rounded-2xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-gold/20">
            YES, I WANT TO CONNECT!
          </button>
          <button className="w-full md:w-auto px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
            CONTACT A COORDINATOR
          </button>
        </motion.div>
      </div>
    </section>
  );
}
