"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Cab'Qual nous a accompagnés sur notre double certification ISO 9001/14001 en 8 mois. Méthode structurée, réactive, et nos équipes se sont vraiment approprié le système. L'audit de certification a été une formalité.",
    name: "Direction Qualité",
    company: "CIDER — Design & Ameublement",
    sector: "Industrie",
    stars: 5,
    result: "Double certification en 8 mois",
  },
  {
    quote: "La dimension formation fait vraiment la différence. Nos responsables qualité sont autonomes aujourd'hui — ils n'ont plus besoin de décrocher le téléphone pour chaque question. Et quand ils le font, Cab'Qual répond.",
    name: "Responsable QHSE",
    company: "GIS Médical — Dispositifs médicaux",
    sector: "Médical",
    stars: 5,
    result: "ISO 13485 + autonomie équipe",
  },
  {
    quote: "Nous avons tenté de gérer notre ISO 9001 seuls pendant 2 ans. Cab'Qual a remis de l'ordre en 3 mois et nous a conduits à la certification en 6 mois supplémentaires. Je regrette de ne pas les avoir appelés plus tôt.",
    name: "DG",
    company: "Turbo ABP — Pièces auto",
    sector: "Automobile",
    stars: 5,
    result: "Certification en 6 mois après reprise",
  },
  {
    quote: "Notre démarche RSE était brouillonne et peu valorisée par nos clients. L'accompagnement Cab'Qual nous a permis de structurer nos engagements, améliorer notre score EcoVadis de 30 points et en faire un argument commercial concret.",
    name: "Directrice RSE",
    company: "Groupe Services BTP",
    sector: "Construction",
    stars: 5,
    result: "+30 points EcoVadis",
  },
  {
    quote: "La formation auditeur interne ISO 45001 animée par Cab'Qual est la plus opérationnelle que j'ai suivie. On sort avec une vraie compétence, pas juste une attestation.",
    name: "CHSCT & Prévention",
    company: "Organisme de formation professionnelle",
    sector: "Formation",
    stars: 5,
    result: "Auditeurs internes opérationnels",
  },
  {
    quote: "Le Serious Game RSE est un outil redoutable pour convaincre des collaborateurs sceptiques. En une demi-journée, le sujet RSE n'est plus abstrait. On repart avec des actions concrètes identifiées par les équipes elles-mêmes.",
    name: "Directeur des Opérations",
    company: "PME logistique — Transport",
    sector: "Logistique",
    stars: 5,
    result: "Engagement équipe démultiplié",
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

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/6" id="temoignages">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,169,110,0.03) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="cert-badge">
              <Star className="w-3 h-3" />
              Témoignages
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-h2 text-white mb-4"
          >
            Pourquoi{" "}
            <span className="text-gold">300+ entreprises</span>{" "}
            font confiance à Cab&apos;Qual
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-[#C8A96E] fill-[#C8A96E]" />
              ))}
            </div>
            <span className="text-[#C8A96E] font-bold text-lg">9,5/10</span>
            <span className="text-slate-500 text-sm">de satisfaction client</span>
          </motion.div>
        </div>

        {/* Grid masonry */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="corp-card rounded-sm p-6 flex flex-col hover-glow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-[#C8A96E] fill-[#C8A96E]" />
                ))}
              </div>

              {/* Result highlight */}
              <div className="bg-[#C8A96E]/8 border border-[#C8A96E]/15 rounded-sm px-3 py-1.5 mb-4 inline-fit">
                <span className="text-[#C8A96E] text-xs font-semibold">{t.result}</span>
              </div>

              {/* Quote */}
              <div className="relative flex-1">
                <Quote className="w-5 h-5 text-slate-700 absolute -top-1 -left-1" />
                <p className="text-slate-300 text-sm leading-relaxed pl-4 italic">{t.quote}</p>
              </div>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-white/6">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
