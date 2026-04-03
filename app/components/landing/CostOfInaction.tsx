"use client";

import { motion } from "framer-motion";
import { TrendingDown, Clock, Euro, Users } from "lucide-react";
import CounterUp from "../ui/CounterUp";

const costs = [
  {
    icon: Clock,
    stat: "18",
    suffix: " mois",
    label: "perdus en moyenne",
    desc: "pour une certification ISO sans accompagnement expert versus 6 à 9 mois avec Cab'Qual.",
    color: "text-orange-400",
  },
  {
    icon: Euro,
    stat: "35",
    suffix: "k€+",
    label: "de coût d'un audit raté",
    desc: "Reprise documentaire, nouvelle campagne d'audit, perte de contrats : le prix d'une certification échouée.",
    color: "text-red-400",
  },
  {
    icon: Users,
    stat: "67",
    suffix: "%",
    label: "des PME perdent des marchés",
    desc: "parce qu'elles ne peuvent pas justifier une certification ISO exigée par leurs donneurs d'ordre.",
    color: "text-amber-400",
  },
  {
    icon: TrendingDown,
    stat: "4",
    suffix: "x",
    label: "plus de non-conformités",
    desc: "constatées chez les entreprises qui pilotent leur SMQ sans consultant dédié.",
    color: "text-slate-400",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CostOfInaction() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/6 noise-bg" id="enjeux">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(27,43,75,0.6) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="cert-badge">
              <TrendingDown className="w-3 h-3" />
              Le coût de l&apos;inaction
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-h2 text-white mb-5"
          >
            Ce que vous perdez{" "}
            <span className="text-gold">en n&apos;agissant pas maintenant</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Chaque mois sans certification est un mois où vos concurrents renforcent leur positionnement
            marché, accèdent à des appels d&apos;offres fermés, et consolident leur image de sérieux.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {costs.map((cost, i) => {
            const Icon = cost.icon;
            const numericTarget = parseInt(cost.stat);
            return (
              <motion.div
                key={i}
                variants={item}
                className="corp-card rounded-sm p-6 text-center hover-glow"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-sm mb-4 ${cost.color} bg-white/5`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`text-3xl font-bold mb-1 ${cost.color}`}>
                  <CounterUp target={numericTarget} suffix={cost.suffix} duration={2000} />
                </div>
                <p className="text-white font-semibold text-sm mb-2">{cost.label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{cost.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Big quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-8 border border-[#C8A96E]/15 rounded-sm text-center"
          style={{ background: "rgba(200,169,110,0.03)" }}
        >
          <p className="text-[#C8A96E] text-xl font-semibold italic mb-3 leading-relaxed">
            &ldquo;La certification n&apos;est pas une contrainte réglementaire.
            C&apos;est un avantage concurrentiel — si elle est bien pilotée.&rdquo;
          </p>
          <p className="text-slate-500 text-sm">— Cab&apos;Qual, 20 ans de missions terrain</p>
        </motion.div>
      </div>
    </section>
  );
}
