"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";

const pains = [
  {
    icon: "⏳",
    title: "Vous perdez des mois sur des démarches administratives",
    desc: "Décoder les exigences normatives, rédiger la documentation, gérer les non-conformités — sans savoir si vous êtes sur la bonne voie.",
  },
  {
    icon: "📋",
    title: "Votre auditeur de certification vous stresse",
    desc: "L'audit de certification approche et vous n'êtes pas certain que vos processus, vos preuves et votre système soient vraiment prêts.",
  },
  {
    icon: "🔄",
    title: "Vous recommencez à zéro à chaque renouvellement",
    desc: "Le SMQ ou le système RSE vit sur le papier mais pas dans les pratiques quotidiennes — et chaque audit de surveillance repart de zéro.",
  },
  {
    icon: "🧩",
    title: "Votre équipe ne s'approprie pas la démarche",
    desc: "Qualité, sécurité, environnement restent des contraintes pour vos collaborateurs plutôt qu'une culture d'amélioration continue.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Problem() {
  return (
    <section className="relative py-24 overflow-hidden noise-bg" id="problem">
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(200,169,110,0.04) 0%, transparent 70%)",
        }}
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
              <AlertCircle className="w-3 h-3" />
              La réalité terrain
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-h2 text-white mb-5"
          >
            Franchement, est-ce vraiment comme ça{" "}
            <span className="text-gold">que vous voulez obtenir votre certification ?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Trop d'entreprises abordent leurs démarches ISO seules — et le paient en temps perdu,
            en stress avant audit, ou en certifications obtenues mais jamais vraiment intégrées.
          </motion.p>
        </div>

        {/* Pain points grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-5 mb-14"
        >
          {pains.map((pain) => (
            <motion.div key={pain.title} variants={item} className="corp-card rounded-sm p-6 hover-glow">
              <div className="text-2xl mb-4">{pain.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                {pain.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="#contact"
            className="btn-primary rounded-sm px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 group"
          >
            <span>Parlons de vos enjeux qualité</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
          </a>
          <a href="#services" className="text-slate-400 hover:text-[#C8A96E] text-sm transition-colors flex items-center gap-1">
            Voir notre approche
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
