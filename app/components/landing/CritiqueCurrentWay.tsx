"use client";

import { motion } from "framer-motion";
import { X, TrendingDown } from "lucide-react";

const issues = [
  {
    label: "Vos équipes lisent les normes sans les comprendre",
    detail: "Les exigences ISO sont rédigées pour des auditeurs, pas pour vos responsables de processus. Vous perdez un temps précieux à interpréter plutôt qu'à agir.",
  },
  {
    label: "Vous documentez pour documenter",
    detail: "Procédures, fiches de postes, indicateurs — tout est produit pour l'auditeur mais personne ne s'en sert vraiment au quotidien.",
  },
  {
    label: "Vous gérez l'urgent, pas l'important",
    detail: "La démarche qualité passe après le business. Les revues de direction, les audits internes et l'analyse des risques sont repoussés d'un trimestre à l'autre.",
  },
  {
    label: "Votre consultant externe est absent au moment critique",
    detail: "Beaucoup de cabinets livrent un dossier et disparaissent. Vous vous retrouvez seul face aux questions de l'auditeur de certification.",
  },
];

export default function CritiqueCurrentWay() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/10" id="approche">
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(27,43,75,0.5) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="cert-badge">
                <TrendingDown className="w-3 h-3" />
                La méthode actuelle
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-h2 text-white mb-5"
            >
              Ce n&apos;est pas votre faute —{" "}
              <span className="text-gold">les démarches ISO ne sont pas conçues pour être gérées seul.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              La plupart des responsables qualité jonglent entre leurs missions opérationnelles
              et la gestion d&apos;un système de management complexe — sans référentiels pratiques,
              sans méthode éprouvée, sans regard extérieur pour calibrer leurs efforts.
            </motion.p>

            {/* Visual: spreadsheet / current approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="corp-card rounded-sm p-6 border border-red-900/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="text-slate-500 text-xs font-mono">Approche typique sans accompagnement</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Tableau Excel &quot;plan_qualite_v12_FINAL.xlsx&quot;</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Procédures rédigées il y a 4 ans, jamais mises à jour</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Audit interne annulé &quot;faute de temps&quot;</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Revue de direction : 3 slides PowerPoint, pas d&apos;analyse</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Résultat : écart majeur lors de l&apos;audit de renouvellement</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: issues list */}
          <div className="space-y-4">
            {issues.map((issue, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="corp-card rounded-sm p-5 flex gap-4"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1.5">{issue.label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{issue.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
