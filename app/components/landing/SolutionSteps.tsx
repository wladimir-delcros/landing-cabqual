"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Search, Layers, GraduationCap, ClipboardCheck, Trophy } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnostic initial de votre situation",
    desc: "Nous analysons votre niveau de maturité par rapport à la norme visée : processus existants, documentation en place, culture qualité, risques identifiés. Vous obtenez une cartographie précise de votre point de départ et un plan d'action réaliste.",
    deliverable: "Rapport de diagnostic + plan d'action chiffré",
    duration: "1 à 2 semaines",
    objection: "Et si votre situation de départ est mauvaise ?",
    answer: "C'est précisément pour ça que le diagnostic existe. Plus tôt on identifie les écarts, plus simple c'est à corriger.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Construction de votre système de management",
    desc: "Vos consultants Cab'Qual co-construisent avec vous la documentation, les processus et les indicateurs exigés par la norme. Pas de modèle générique : chaque livrable est adapté à votre secteur, votre taille et votre organisation réelle.",
    deliverable: "SMQ complet, documenté et approprié par vos équipes",
    duration: "2 à 4 mois selon la norme",
    objection: "Vos équipes vont-elles vraiment adopter le système ?",
    answer: "La co-construction est notre méthode clé. Quand les équipes participent à l'élaboration, elles s'approprient le système.",
  },
  {
    num: "03",
    icon: GraduationCap,
    title: "Formation et montée en compétence",
    desc: "Nous formons vos auditeurs internes et responsables qualité avec des programmes certifiants (jusqu'à 10 formations disponibles). Vos équipes maîtrisent la norme et peuvent piloter le système en autonomie après la certification.",
    deliverable: "Équipes formées, auditeurs internes certifiés",
    duration: "Formations de 1 à 5 jours",
    objection: "Vos formateurs sont-ils opérationnels ?",
    answer: "Cab'Qual est certifié QUALIOPI. Nos formations sont éligibles OPCO et CPF.",
  },
  {
    num: "04",
    icon: ClipboardCheck,
    title: "Audit à blanc avant certification",
    desc: "Avant l'audit officiel de l'organisme certificateur, nous simulons la journée d'audit dans les conditions réelles. Chaque écart est identifié et corrigé. Vous arrivez à l'audit de certification avec la certitude d'être prêt.",
    deliverable: "Rapport d'audit blanc + plan de levée des écarts",
    duration: "1 à 2 jours",
    objection: "Est-ce vraiment utile si on a bien travaillé les étapes précédentes ?",
    answer: "Toujours. L'audit blanc révèle les angles morts que personne ne voit de l'intérieur. Nos clients ont un taux de réussite de 100% en certification.",
  },
  {
    num: "05",
    icon: Trophy,
    title: "Certification obtenue et pilotage continu",
    desc: "Vous obtenez votre certificat. Mais la mission ne s'arrête pas là : hotline illimitée, accompagnement aux audits de surveillance, mise à jour de votre système à chaque évolution normative. Votre certification reste vivante.",
    deliverable: "Certificat obtenu + accompagnement post-certification",
    duration: "Continu sur 3 ans",
    objection: "Que se passe-t-il si on a un audit de surveillance sans vous ?",
    answer: "Notre hotline illimitée est là pour ça. Et si vous le souhaitez, nous pouvons être présents lors des audits de surveillance.",
  },
];

export default function SolutionSteps() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/10" id="methode">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(27,43,75,0.5) 0%, transparent 60%)" }}
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
            <span className="cert-badge">Notre méthode</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-h2 text-white mb-5"
          >
            Une méthodologie structurée,{" "}
            <span className="text-gold">de l'état des lieux à la certification obtenue.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Éprouvée sur plus de 300 projets de certification, notre approche en cinq étapes
            est adaptée à chaque norme ISO et à chaque secteur d'activité. Du diagnostic initial
            jusqu'au maintien de la certification sur le long terme.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="corp-card rounded-sm p-7 lg:p-8 hover-glow"
            >
              <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-start">
                {/* Step number + icon */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3">
                  <span className="text-[#C8A96E]/30 font-bold text-5xl leading-none tracking-tighter">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-[#C8A96E]/10 border border-[#C8A96E]/20 flex items-center justify-center hidden lg:flex">
                    <Icon className="w-4 h-4 text-[#C8A96E]" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{step.desc}</p>

                  {/* Objection */}
                  <div className="border border-white/8 rounded-sm p-4 bg-white/2">
                    <p className="text-slate-500 text-xs mb-1.5 flex items-center gap-1.5">
                      <span className="text-[#C8A96E]">ℹ</span>
                      &ldquo;{step.objection}&rdquo;
                    </p>
                    <p className="text-slate-300 text-xs">{step.answer}</p>
                  </div>
                </div>

                {/* Deliverable */}
                <div className="lg:min-w-[220px] space-y-3">
                  <div className="bg-[#C8A96E]/5 border border-[#C8A96E]/15 rounded-sm p-4">
                    <p className="text-[#C8A96E] text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Livrable
                    </p>
                    <p className="text-slate-300 text-sm">{step.deliverable}</p>
                  </div>
                  <div className="bg-white/3 border border-white/8 rounded-sm p-4">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Durée
                    </p>
                    <p className="text-slate-400 text-sm">{step.duration}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <a
            href="#contact"
            className="btn-primary rounded-sm px-8 py-4 text-sm font-semibold inline-flex items-center gap-2 group"
          >
            <span>Démarrer mon diagnostic gratuit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
          </a>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <CheckCircle className="w-4 h-4 text-[#C8A96E]" />
            Entretien initial offert — Sans engagement
          </div>
        </motion.div>
      </div>
    </section>
  );
}
