"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Award } from "lucide-react";
import GradientMesh from "../ui/GradientMesh";

const trust = [
  "20 ans d'expertise",
  "300+ projets certifiés",
  "9,5/10 satisfaction",
];

const certifs = ["ISO 9001", "ISO 14001", "ISO 45001", "QUALIOPI", "RSE / ISO 26000"];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-bg pt-24 pb-16"
      id="hero"
    >
      <GradientMesh />

      {/* Radial glow behind title */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,169,110,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="cert-badge">
              <Shield className="w-3 h-3" />
              Cabinet conseil certifié ISO 14001 — Paris
            </span>
          </motion.div>

          {/* Headline */}
          <div className="hero-h1 text-white mb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Obtenez votre certification ISO
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gold"
            >
              sans perdre 18 mois
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              à piloter seul vos démarches.
            </motion.div>
          </div>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Cab&apos;Qual accompagne les PME et grandes entreprises dans leurs certifications
            ISO et stratégies RSE depuis 20 ans — avec méthode, sans jargon, avec résultats.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <a
              href="#contact"
              className="btn-primary rounded-sm px-8 py-4 text-base font-semibold inline-flex items-center justify-center gap-2 group"
            >
              <span>Discuter de mon projet</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            </a>
            <a
              href="#services"
              className="btn-outline rounded-sm px-8 py-4 text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              Voir nos services
            </a>
          </motion.div>

          {/* Micro-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-slate-500 text-sm mb-12"
          >
            Premier entretien gratuit et sans engagement — réponse sous 24h
          </motion.p>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-6"
          >
            {trust.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-slate-400 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-[#C8A96E] shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifs strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 pt-8 border-t border-white/8"
        >
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-5 font-medium">
            Normes &amp; certifications maîtrisées
          </p>
          <div className="flex flex-wrap gap-3">
            {certifs.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 text-slate-400 text-sm border border-white/10 rounded-sm px-3 py-1.5 hover:border-[#C8A96E]/30 hover:text-slate-300 transition-all duration-200"
              >
                <Award className="w-3 h-3 text-[#C8A96E]" />
                {c}
              </span>
            ))}
            <span className="inline-flex items-center text-slate-500 text-sm px-3 py-1.5">
              + 7 autres normes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
