"use client";

import { motion } from "framer-motion";
import { Users, Award, Target, CheckCircle } from "lucide-react";

const team = [
  {
    role: "Consultant Senior & Directeur",
    title: "Orthopédagogue certifié IFO",
    desc: "20 ans d'expérience en accompagnement qualité, expert pédagogue pour la formation et la montée en compétence des équipes.",
  },
  {
    role: "6 Consultants Experts",
    title: "Spécialistes par norme et secteur",
    desc: "Chaque consultant maîtrise ses normes en profondeur et connaît les spécificités de votre secteur d'activité.",
  },
];

const values = [
  { label: "Engagement résultats", desc: "Nous nous engageons sur des objectifs concrets, pas sur des livrables documentaires." },
  { label: "Proximité terrain", desc: "Vos consultants sont opérationnels dès le premier jour, sans phase de montée en charge." },
  { label: "Transfert de compétences", desc: "Chaque mission laisse vos équipes plus autonomes. Vous ne dépendez pas de nous indéfiniment." },
  { label: "Transparence totale", desc: "Plan d'action chiffré dès le départ, pas de surprises en cours de mission ni à la facture." },
];

export default function About() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/6" id="about">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(27,43,75,0.5) 0%, transparent 60%)" }}
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
                <Users className="w-3 h-3" />
                Le cabinet
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-h2 text-white mb-5"
            >
              20 ans à transformer les démarches qualité en{" "}
              <span className="text-gold">avantages compétitifs</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-6"
            >
              Fondé à Paris, Cab&apos;Qual accompagne les entreprises françaises et internationales
              dans leurs démarches ISO et RSE depuis 2004. Notre conviction : une certification
              n&apos;a de valeur que si elle est vécue au quotidien par vos équipes.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-slate-400 text-base leading-relaxed mb-8"
            >
              Nous pratiquons ce que nous préconisons : Cab&apos;Qual est lui-même certifié
              ISO 14001 et QUALIOPI — preuve que nos méthodes fonctionnent dans la réalité,
              pas seulement sur le papier.
            </motion.p>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {["Certifié ISO 14001", "Certifié QUALIOPI", "Paris — 75012"].map((badge) => (
                <span key={badge} className="cert-badge">
                  <Award className="w-3 h-3" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Team */}
            <div className="space-y-4 mb-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="corp-card rounded-sm p-5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-[#C8A96E]/15 flex items-center justify-center">
                      <Target className="w-3 h-3 text-[#C8A96E]" />
                    </div>
                    <span className="text-[#C8A96E] text-xs font-semibold uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-sm mb-1.5">{member.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">
                Nos engagements
              </p>
              <div className="space-y-3">
                {values.map((value, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#C8A96E] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold text-sm">{value.label} </span>
                      <span className="text-slate-400 text-sm">— {value.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
