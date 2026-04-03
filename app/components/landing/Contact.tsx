"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: "iso9001",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 overflow-hidden border-t border-white/6 noise-bg" id="contact">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(27,43,75,0.6) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="cert-badge">Contact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-h2 text-white mb-5"
            >
              Parlez-nous de{" "}
              <span className="text-gold">votre projet</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-10"
            >
              Premier entretien gratuit et sans engagement. Nous analysons votre situation
              et vous proposons un plan d&apos;action concret sous 48h.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#C8A96E]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C8A96E]" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Téléphone</p>
                  <a href="tel:0171563770" className="text-white font-semibold hover:text-[#C8A96E] transition-colors">
                    01 71 56 37 70
                  </a>
                  <span className="text-slate-600 mx-2">·</span>
                  <a href="tel:0680623677" className="text-white font-semibold hover:text-[#C8A96E] transition-colors">
                    06 80 62 36 77
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#C8A96E]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#C8A96E]" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Email</p>
                  <a href="mailto:contact@cabqual.fr" className="text-white font-semibold hover:text-[#C8A96E] transition-colors">
                    contact@cabqual.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#C8A96E]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#C8A96E]" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Adresse</p>
                  <p className="text-white font-semibold">61, rue de Lyon — 75012 Paris</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#C8A96E]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#C8A96E]" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">Délai de réponse</p>
                  <p className="text-white font-semibold">Réponse garantie sous 24h ouvrées</p>
                </div>
              </div>
            </motion.div>

            {/* Skeptic alternative */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 border border-white/8 rounded-sm"
            >
              <p className="text-slate-400 text-sm mb-2 font-medium">Pas encore convaincu ?</p>
              <p className="text-slate-500 text-sm mb-3">
                Découvrez nos ressources gratuites sur les certifications ISO avant de nous contacter.
              </p>
              <a href="https://cabqual.fr" target="_blank" rel="noopener noreferrer"
                className="text-[#C8A96E] text-sm font-semibold hover:text-[#DEC080] transition-colors">
                Visiter le site Cab&apos;Qual →
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="corp-card rounded-sm p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#C8A96E]/15 flex items-center justify-center mx-auto mb-5">
                  <Send className="w-6 h-6 text-[#C8A96E]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Message envoyé.</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Cab&apos;Qual reviendra vers vous dans les 24h ouvrées pour organiser votre
                  premier entretien diagnostique gratuit.
                </p>
              </div>
            ) : (
              <div className="corp-card rounded-sm p-7">
                <h3 className="text-white font-bold text-lg mb-6">Votre demande</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Project type */}
                  <div>
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">
                      Type de projet *
                    </label>
                    <select
                      value={form.project}
                      onChange={(e) => setForm({ ...form, project: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-[#C8A96E]/40 focus:bg-white/8 transition-all outline-none appearance-none"
                      required
                    >
                      <option value="iso9001">Certification ISO 9001 (Qualité)</option>
                      <option value="iso14001">Certification ISO 14001 (Environnement)</option>
                      <option value="iso45001">Certification ISO 45001 (SST)</option>
                      <option value="iso50001">Certification ISO 50001 (Énergie)</option>
                      <option value="iso27001">Certification ISO 27001 (SI)</option>
                      <option value="qualiopi">Certification QUALIOPI</option>
                      <option value="rse">Accompagnement RSE</option>
                      <option value="multi">Multi-certifications</option>
                      <option value="audit">Audit seul / Audit blanc</option>
                      <option value="formation">Formation uniquement</option>
                      <option value="autre">Autre — à préciser</option>
                    </select>
                  </div>

                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">
                        Nom & Prénom *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jean Dupont"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:border-[#C8A96E]/40 focus:bg-white/8 transition-all outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Nom de votre société"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:border-[#C8A96E]/40 focus:bg-white/8 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jean@entreprise.fr"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:border-[#C8A96E]/40 focus:bg-white/8 transition-all outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="06 XX XX XX XX"
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:border-[#C8A96E]/40 focus:bg-white/8 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-slate-400 text-xs font-medium uppercase tracking-wider block mb-2">
                      Votre message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Décrivez brièvement votre situation et vos objectifs..."
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:border-[#C8A96E]/40 focus:bg-white/8 transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full rounded-sm py-4 text-sm font-semibold inline-flex items-center justify-center gap-2 group"
                  >
                    <span>Envoyer ma demande</span>
                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    Entretien initial offert · Réponse sous 24h · Vos données sont protégées
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
