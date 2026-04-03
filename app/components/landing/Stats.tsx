"use client";

import { motion } from "framer-motion";
import { Award, BarChart3, BookOpen, Star } from "lucide-react";
import CounterUp from "../ui/CounterUp";

const stats = [
  { icon: Award, value: 20, suffix: " ans", label: "d'expertise en conseil ISO & RSE", sub: "Fondé en 2004" },
  { icon: BarChart3, value: 300, suffix: "+", label: "projets de certification menés à bien", sub: "Tous secteurs confondus" },
  { icon: BookOpen, value: 12, suffix: "", label: "normes et labels maîtrisés", sub: "ISO 9001 à ISO 37101" },
  { icon: Star, value: 9, suffix: ",5/10", label: "de satisfaction client", sub: "Mesurée projet après projet" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden" id="stats">
      {/* Divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className="text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-sm bg-[#C8A96E]/10 border border-[#C8A96E]/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#C8A96E]" />
                </div>
                <div className="stat-number mb-2">
                  <CounterUp
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </div>
                <p className="text-white font-semibold text-sm leading-snug mb-1">
                  {stat.label}
                </p>
                <p className="text-slate-500 text-xs">{stat.sub}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Divider bottom */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
