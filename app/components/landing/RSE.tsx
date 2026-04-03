"use client";

import { motion } from "framer-motion";
import { Globe, Award, BookOpen, Gamepad2, ArrowRight } from "lucide-react";

const rseServices = [
  {
    icon: Globe,
    title: "Stratégie RSE sur-mesure",
    desc: "Diagnostic RSE, cartographie des parties prenantes, plan d'action priorisé et indicateurs de performance. Une démarche RSE qui s'intègre dans votre stratégie d'entreprise, pas dans une case à cocher.",
  },
  {
    icon: Award,
    title: "Certification Expert RSE (RS6530)",
    desc: "Formation certifiante accréditée RS6530 pour former vos responsables RSE internes. Devenez autonome dans le pilotage de votre démarche développement durable.",
  },
  {
    icon: BookOpen,
    title: "Accompagnement EcoVadis",
    desc: "Préparez et améliorez votre score EcoVadis pour répondre aux exigences de vos donneurs d'ordre. Audit de votre performance RSE sur les 21 critères EcoVadis.",
  },
  {
    icon: Gamepad2,
    title: "Serious Game RSE",
    desc: "Outil pédagogique innovant pour sensibiliser vos équipes aux enjeux RSE de manière engageante et mémorable. Changez les comportements sans les imposer.",
  },
];

export default function RSE() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/10 noise-bg" id="rse">
      {/* Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(200,169,110,0.04) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
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
                <Globe className="w-3 h-3" />
                RSE & Développement Durable
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-h2 text-white mb-5"
            >
              Votre RSE devient un{" "}
              <span className="text-gold">levier de performance,</span>{" "}
              pas une charge administrative.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              L&apos;art de la stratégie au service de démarches RSE vivantes, intégrées et fluides.
              Pas de rapports RSE qui dorment dans un tiroir — des engagements qui créent
              de la valeur pour vos parties prenantes et renforcent votre compétitivité.
            </motion.p>

            {/* Norms covered */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["ISO 26000", "ISO 37101", "ISO 37001", "ISO 20121", "Bilan Carbone", "EcoVadis"].map((n) => (
                <span
                  key={n}
                  className="cert-badge"
                >
                  {n}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="btn-primary rounded-sm px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 group"
              >
                <span>Construire ma stratégie RSE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
            </motion.div>
          </div>

          {/* Right: services list */}
          <div className="space-y-4">
            {rseServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="corp-card rounded-sm p-5 flex gap-4 hover-glow"
                >
                  <div className="shrink-0 w-10 h-10 rounded-sm bg-[#C8A96E]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C8A96E]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
