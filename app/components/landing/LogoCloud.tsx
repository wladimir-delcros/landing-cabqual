"use client";

import { motion } from "framer-motion";

const sectors = [
  "Architecture & BET",
  "Dispositifs médicaux",
  "Industrie automobile",
  "Formation professionnelle",
  "Services financiers",
  "Logistique & Transport",
  "Agroalimentaire",
  "Construction & BTP",
  "Organismes mutualistes",
  "Conseil & Expertise",
  "Services numériques",
  "Secteur associatif",
];

const clients = [
  "CIDER Furniture",
  "GIS Médical",
  "Turbo ABP",
  "Diagam",
  "Groupement Architecture",
  "Société Formation Pro",
];

export default function LogoCloud() {
  const doubled = [...sectors, ...sectors];

  return (
    <section className="relative py-16 overflow-hidden border-b border-white/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-2">
            Secteurs accompagnés
          </p>
          <p className="text-slate-400 text-base">
            Cab&apos;Qual opère dans{" "}
            <span className="text-[#C8A96E] font-semibold">20+ secteurs d&apos;activité</span>{" "}
            pour des entreprises de toutes tailles
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #0F1C35, transparent)" }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #0F1C35, transparent)" }}
        />

        <div className="overflow-hidden">
          <div className="marquee-track">
            {doubled.map((sector, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-3 text-slate-400 text-sm font-medium whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-[#C8A96E] shrink-0" />
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
        <p className="text-slate-600 text-xs text-center uppercase tracking-widest mb-5">
          Références clients
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="px-4 py-2 border border-white/8 rounded-sm text-slate-400 text-sm hover:border-[#C8A96E]/20 hover:text-slate-300 transition-all duration-200"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
