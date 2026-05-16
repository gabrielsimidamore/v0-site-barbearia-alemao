"use client"

import { motion } from "framer-motion"

const items = [
  "CORTE", "BARBA", "DEGRADÊ", "FADE", "NAVALHA",
  "WORKSHOP", "OSASCO", "DESDE 2016", "ESTILO",
]

export function MarqueeBand({ inverted = false }: { inverted?: boolean }) {
  const loop = [...items, ...items, ...items]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`relative py-4 overflow-hidden border-y ${
        inverted
          ? "bg-primary border-primary/80"
          : "bg-transparent border-primary/20"
      }`}
    >
      <div
        className="flex w-max animate-marquee"
        style={{
          animationDuration: "22s",
          animationDirection: inverted ? "reverse" : "normal",
        }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className={`font-display tracking-[0.35em] text-sm md:text-base uppercase whitespace-nowrap px-6 ${
              inverted ? "text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            {item}
            <span className={`mx-6 ${inverted ? "opacity-40" : "text-primary"}`}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </motion.div>
  )
}
