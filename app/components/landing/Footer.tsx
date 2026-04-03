"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "ISO 9001 — Qualité",
  "ISO 14001 — Environnement",
  "ISO 45001 — SST",
  "ISO 50001 — Énergie",
  "ISO 27001 & RGPD",
  "ISO 37001 — Anti-corruption",
  "QUALIOPI",
  "RSE & ISO 26000",
];

const formations = [
  "Auditeur interne ISO 9001",
  "Auditeur interne ISO 14001",
  "Expert RSE (RS6530)",
  "Serious Game RSE",
  "Toutes nos formations",
];

const company = [
  { label: "À propos", href: "#about" },
  { label: "Notre méthode", href: "#methode" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 pt-16 pb-8 overflow-hidden" id="footer">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(27,43,75,0.4) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14"
        >
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#C8A96E] to-[#B8914E] flex items-center justify-center">
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
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              L&apos;art de la stratégie au service de démarches ISO et RSE vivantes,
              intégrées et fluides depuis 2004.
            </p>
            <div className="space-y-2">
              <a href="tel:0171563770" className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#C8A96E]" />
                01 71 56 37 70
              </a>
              <a href="mailto:contact@cabqual.fr" className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#C8A96E]" />
                contact@cabqual.fr
              </a>
              <div className="flex items-start gap-2 text-slate-500 text-sm">
                <MapPin className="w-3.5 h-3.5 text-[#C8A96E] shrink-0 mt-0.5" />
                61, rue de Lyon — 75012 Paris
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Certifications
            </p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Formations
            </p>
            <ul className="space-y-2">
              {formations.map((f) => (
                <li key={f}>
                  <a href="#contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {f}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Cabinet
            </p>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <span className="cert-badge text-[10px] block w-fit">Certifié ISO 14001</span>
              <span className="cert-badge text-[10px] block w-fit">Certifié QUALIOPI</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Cab&apos;Qual. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
