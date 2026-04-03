"use client";

import { motion } from "framer-motion";
import { X, Check, Swords } from "lucide-react";

const competitors = [
  {
    name: "Les grands cabinets conseil",
    icon: "🏢",
    issues: [
      "Tarifs journaliers inaccessibles pour une PME (1 500€+ /jour)",
      "Interlocuteur senior à la vente, junior sur le terrain",
      "Approche standardisée, peu adaptée à votre secteur",
      "Livrent un dossier documentaire et disparaissent",
    ],
  },
  {
    name: "Les consultants indépendants généralistes",
    icon: "👤",
    issues: [
      "Disponibilité limitée, souvent surchargés",
      "Expertise de surface sur les normes spécifiques (ISO 45001, ISO 50001...)",
      "Pas de hotline entre les missions, vous êtes seul en cas de question",
      "Aucune capacité de formation pour vos équipes",
    ],
  },
];

const cabqual = [
  "Tarifs adaptés PME avec un interlocuteur senior dédié",
  "12 normes maîtrisées en profondeur par des experts sectoriels",
  "Hotline illimitée incluse pendant toute la mission",
  "Formation des équipes intégrée à la démarche",
  "Cabinet certifié ISO 14001 : on pratique ce qu'on préconise",
  "20 ans de recul sur toutes les configurations possibles",
];

export default function CritiqueCompetitors() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/6" id="pourquoi-nous">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 40%, rgba(200,169,110,0.03) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="cert-badge">
              <Swords className="w-3 h-3" />
              Autres solutions du marché
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-h2 text-white mb-5"
          >
            Pourquoi les autres approches{" "}
            <span className="text-gold">ne suffisent pas</span>
          </motion.h2>
        </div>

        {/* Competitors grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {competitors.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="corp-card rounded-sm p-7 border border-red-900/15"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{comp.icon}</span>
                <h3 className="text-white font-semibold text-base">{comp.name}</h3>
              </div>
              <ul className="space-y-3">
                {comp.issues.map((issue, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                    <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                    {issue}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Cab'Qual alternative */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-sm p-8 border border-[#C8A96E]/20"
          style={{ background: "linear-gradient(135deg, rgba(22,32,53,0.9) 0%, rgba(30,46,74,0.6) 100%)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#C8A96E] to-[#B8914E] flex items-center justify-center">
              <span className="text-[#0F1C35] font-bold text-sm">C</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">L&apos;approche Cab&apos;Qual</h3>
              <p className="text-[#C8A96E] text-xs">Ce qui fait la différence, concrètement</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {cabqual.map((point, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <Check className="w-4 h-4 text-[#C8A96E] shrink-0 mt-0.5" />
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
