"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; //
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); //

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "py-3 bg-brand-navy/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white">
          FOCUS<span className="text-brand-gold">ASTU</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href; //
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[13px] uppercase tracking-widest font-semibold transition-colors duration-300 ${
                  isActive ? "text-brand-gold" : "text-white/90 hover:text-brand-gold"
                }`}
              >
                {link.name}
                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-gold rounded-full"
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="#join"
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105 active:scale-95 ${isScrolled
              ? "bg-brand-gold text-brand-navy shadow-md"
              : "bg-white text-brand-navy"
              }`}
          >
            JOIN NOW
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-brand-navy/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href; //
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-bold transition-colors ${
                      isActive ? "text-brand-gold pl-2 border-l-2 border-brand-gold" : "text-white/90 hover:text-brand-gold"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="#join"
                className="w-full py-4 bg-brand-gold text-brand-navy text-center rounded-xl font-black tracking-widest uppercase text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                JOIN NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}