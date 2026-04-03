"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, HeartHandshake, Zap, Lock, Building2, ArrowRight, Layers } from "lucide-react";

const services = [
  {
    icon: Shield,
    norm: "ISO 9001",
    title: "Management de la Qualité",
    desc: "Structurez vos processus, réduisez vos non-conformités et obtenez la certification qualité reconnue mondialement pour accéder aux marchés exigeants.",
    tags: ["Conseil", "Audit", "Formation"],
    cta: "#contact",
  },
  {
    icon: Leaf,
    norm: "ISO 14001",
    title: "Management Environnemental",
    desc: "Intégrez l'environnement dans votre stratégie d'entreprise. Réduisez votre empreinte écologique et valorisez vos engagements auprès de vos clients et partenaires.",
    tags: ["Conseil", "Audit", "RSE"],
    cta: "#contact",
  },
  {
    icon: HeartHandshake,
    norm: "ISO 45001",
    title: "Santé & Sécurité au Travail",
    desc: "Protégez vos collaborateurs et réduisez les risques professionnels. Certification SST reconnue par vos donneurs d'ordre et vos assureurs.",
    tags: ["Conseil", "Audit", "Formation"],
    cta: "#contact",
  },
  {
    icon: Zap,
    norm: "ISO 50001",
    title: "Management de l'Énergie",
    desc: "Réduisez votre consommation énergétique et vos coûts opérationnels. Répondez aux exigences réglementaires sur la performance énergétique.",
    tags: ["Conseil", "Diagnostic", "Audit"],
    cta: "#contact",
  },
  {
    icon: Lock,
    norm: "ISO 27001 & RGPD",
    title: "Sécurité de l'Information",
    desc: "Protégez vos données sensibles et celles de vos clients. Mettez en conformité RGPD votre organisation et certifiez votre système de management de la sécurité.",
    tags: ["Conseil", "Audit", "RGPD"],
    cta: "#contact",
  },
  {
    icon: Building2,
    norm: "ISO 26000 / RSE",
    title: "Stratégie RSE & Développement Durable",
    desc: "Construisez une stratégie RSE authentique et mesurable. Pilotez votre impact social et environnemental avec nos outils Serious Game et formations certifiantes.",
    tags: ["RSE", "Formation", "EcoVadis"],
    cta: "#rse",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/6" id="services">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, rgba(200,169,110,0.04) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="cert-badge">
              <Layers className="w-3 h-3" />
              Nos services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-h2 text-white mb-5"
          >
            12 normes maîtrisées,{" "}
            <span className="text-gold">une seule promesse : la certification obtenue.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            Conseil, audit et formation — Cab&apos;Qual couvre l&apos;intégralité de votre démarche,
            de l&apos;état des lieux initial jusqu&apos;à la remise du certificat.
          </motion.p>
        </div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          id="certifications"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.norm}
                variants={item}
                className="corp-card rounded-sm p-6 group hover-glow flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-sm bg-[#C8A96E]/10 flex items-center justify-center group-hover:bg-[#C8A96E]/15 transition-colors">
                    <Icon className="w-5 h-5 text-[#C8A96E]" />
                  </div>
                  <span className="text-[#C8A96E] text-xs font-bold tracking-widest uppercase border border-[#C8A96E]/20 px-2 py-1 rounded-sm">
                    {service.norm}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-slate-500 text-[10px] font-medium uppercase tracking-wider border border-white/8 px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={service.cta}
                    className="text-[#C8A96E] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 shrink-0 ml-2"
                  >
                    En savoir plus
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional norms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 p-5 border border-white/8 rounded-sm flex flex-wrap gap-4 items-center justify-between"
        >
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-1">Autres normes accompagnées</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["ISO 37001", "ISO 22301", "ISO 20121", "ISO 37101", "QUALIOPI", "EcoVadis"].map((n) => (
                <span key={n} className="text-slate-500 text-xs border border-white/8 px-2.5 py-1 rounded-sm">
                  {n}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#contact"
            className="btn-outline rounded-sm px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 shrink-0"
          >
            Votre norme n&apos;est pas listée ?
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
