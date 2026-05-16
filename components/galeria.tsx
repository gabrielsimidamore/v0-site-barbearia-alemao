"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

const fotos = [
  { src: "/cortes/corte-1.png", alt: "Corte fade alto", label: "Fade Alto", tall: true },
  { src: "/cortes/corte-11.png", alt: "Corte infantil degradê", label: "Kids + Risco", tall: false },
  { src: "/cortes/corte-3.png", alt: "Degradê + barba completa", label: "Combo Premium", tall: false },
  { src: "/cortes/corte-13.png", alt: "Barba navalha", label: "Barba Navalha", tall: true },
  { src: "/cortes/corte-12.png", alt: "Mullet fade", label: "Mullet + Fade", tall: false },
  { src: "/cortes/corte-2.png", alt: "Tranças fade", label: "Tranças", tall: true },
  { src: "/cortes/corte-7.png", alt: "Social infantil", label: "Social", tall: false },
  { src: "/cortes/corte-14.png", alt: "Mullet cacheado", label: "Cacheado", tall: false },
  { src: "/cortes/corte-9.png", alt: "Buzz cut fade alto", label: "Buzz Cut", tall: true },
  { src: "/cortes/corte-4.png", alt: "Degradê platinado", label: "Platinado", tall: false },
  { src: "/cortes/corte-8.png", alt: "Clássico volume", label: "Clássico", tall: false },
  { src: "/cortes/corte-6.png", alt: "Social fade lateral", label: "Social Fade", tall: true },
]

const metade = Math.ceil(fotos.length / 2)
const trilha1 = fotos.slice(0, metade)
const trilha2 = fotos.slice(metade)

type Foto = { src: string; alt: string; label: string; tall: boolean }

function CarrosselTrilha({ itens, duracao, reverso = false }: {
  itens: Foto[]; duracao: number; reverso?: boolean
}) {
  const loop = [...itens, ...itens, ...itens]

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" aria-hidden="true" />

      <div
        className="flex gap-3 md:gap-4 w-max animate-marquee"
        style={{ animationDuration: `${duracao}s`, animationDirection: reverso ? "reverse" : "normal" }}
      >
        {loop.map((f, i) => (
          <div
            key={`${f.src}-${i}`}
            className={`group relative flex-shrink-0 overflow-hidden rounded-2xl border border-border/50 shadow-lg shadow-black/50 ${
              f.tall
                ? "w-[180px] h-[300px] md:w-[240px] md:h-[380px]"
                : "w-[180px] h-[240px] md:w-[240px] md:h-[300px]"
            }`}
          >
            <Image
              src={f.src || "/placeholder.svg"}
              alt={f.alt}
              fill
              sizes="240px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Label */}
            <div className="absolute inset-0 flex items-end p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-primary-foreground">
                <span className="size-1.5 rounded-full bg-primary-foreground/60" />
                {f.label}
              </span>
            </div>

            {/* Gold dot */}
            <div className="absolute top-3 right-3 size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.9)] group-hover:shadow-[0_0_20px_rgba(212,175,55,1)] transition-shadow" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Galeria() {
  return (
    <section id="galeria" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px gold-line" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Nossa galeria</span>
            <h2 className="mt-2 font-display text-5xl md:text-6xl lg:text-7xl tracking-wide text-balance leading-none">
              Cortes que
              <br />
              <span className="text-primary italic font-serif">contam história</span>
            </h2>
          </div>
          <a
            href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-all"
          >
            Agendar seu corte →
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-4"
      >
        <CarrosselTrilha itens={trilha1} duracao={30} />
        <CarrosselTrilha itens={trilha2} duracao={36} reverso />
      </motion.div>
    </section>
  )
}
