"use client";

import Link from "next/link";
import { Globe, Camera, Send, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-black tracking-tighter text-white mb-6 block">
              FOCUS<span className="text-brand-gold">ASTU</span>
            </Link>
            <p className="text-brand-cream/40 max-w-sm leading-relaxed mb-8">
              Empowering students through faith, fellowship, and academic excellence within the Adama Science and Technology University community.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Globe size={20} /></Link>
              <Link href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Camera size={20} /></Link>
              <Link href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Send size={20} /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-brand-cream/40 hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-brand-cream/40 hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="#teams" className="text-brand-cream/40 hover:text-brand-gold transition-colors">Our Teams</Link></li>
              <li><Link href="#events" className="text-brand-cream/40 hover:text-brand-gold transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-brand-cream/40">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-1" />
                <span>ASTU Campus, Adama, Ethiopia</span>
              </li>
              <li className="flex items-center space-x-3 text-brand-cream/40">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>contact@focusastu.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm">
            © 2026 FOCUS ASTU. OFFICIAL CHRISTIAN FELLOWSHIP - ADAMA SCIENCE AND TECHNOLOGY UNIVERSITY.
          </p>
          <div className="flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
