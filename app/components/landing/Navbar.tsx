"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Certifications ISO", href: "#certifications" },
    { label: "RSE", href: "#rse" },
    { label: "À propos", href: "#about" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1C35]/95 backdrop-blur-md border-b border-white/8 shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                <span className="text-[#0F1C35] font-bold text-sm">C</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-tight leading-none block">
                  Cab&apos;Qual
                </span>
                <span className="text-[#C8A96E] text-[10px] font-medium tracking-widest uppercase leading-none">
                  Conseil & Certification
                </span>
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0171563770"
              className="flex items-center gap-2 text-slate-400 hover:text-[#C8A96E] text-sm transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              01 71 56 37 70
            </a>
            <a
              href="#contact"
              className="btn-primary rounded-sm px-5 py-2.5 text-sm font-semibold inline-block"
            >
              <span>Discutons de votre projet</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-[#0F1C35]/98 backdrop-blur-md border-t border-white/8 px-6 py-6"
        >
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white text-base font-medium py-2 border-b border-white/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary rounded-sm px-5 py-3 text-sm font-semibold text-center mt-2 inline-block"
              onClick={() => setOpen(false)}
            >
              <span>Discutons de votre projet</span>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
