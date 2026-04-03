"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";

const urgencyPoints = [
  "Vos concurrents certifiés accèdent à des marchés qui vous sont fermés aujourd'hui",
  "Chaque trimestre sans démarche RSE vous éloigne des exigences de vos donneurs d'ordre",
  "Les nouvelles réglementations (CSRD, taxonomie verte) seront obligatoires — mieux vaut anticiper",
];

const guarantees = [
  "Premier entretien diagnostique offert",
  "Devis transparent sous 48h",
  "Méthode éprouvée sur 300+ projets",
  "Hotline illimitée incluse",
];

export default function UrgencyCTA() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/10" id="urgence">
      {/* Strong gradient BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.06) 0%, rgba(15,28,53,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="cert-badge">
            <TrendingUp className="w-3 h-3" />
            Ne prenez pas de retard
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-h2 text-white mb-5"
        >
          Ces entreprises ont déjà leur certification ISO.{" "}
          <span className="text-gold">Quand est-ce votre tour ?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-base leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          Pendant que vous tergiversez, vos concurrents certifiés renforcent leur crédibilité
          auprès des donneurs d&apos;ordre. La certification n&apos;est plus un plus — c&apos;est une condition d&apos;accès.
        </motion.p>

        {/* Urgency points */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3 mb-10 text-left max-w-2xl mx-auto"
        >
          {urgencyPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <div className="w-5 h-5 rounded-full bg-[#C8A96E]/15 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[#C8A96E] text-xs font-bold">{i + 1}</span>
              </div>
              {point}
            </div>
          ))}
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {guarantees.map((g) => (
            <div key={g} className="flex items-center gap-2 text-slate-300 text-sm">
              <CheckCircle className="w-4 h-4 text-[#C8A96E]" />
              {g}
            </div>
          ))}
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-primary rounded-sm px-10 py-4 text-base font-semibold inline-flex items-center gap-3 group"
          >
            <span>Lancer ma démarche de certification</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </a>
          <a href="tel:0171563770" className="btn-outline rounded-sm px-7 py-4 text-base font-semibold">
            01 71 56 37 70
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="text-slate-600 text-sm mt-4"
        >
          Entretien initial offert · Devis sous 48h · Sans engagement
        </motion.p>
      </div>
    </section>
  );
}
