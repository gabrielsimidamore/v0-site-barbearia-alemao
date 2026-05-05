"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fotos = [
  { src: "/cortes/corte-1.png", alt: "Corte fade alto com linha lateral" },
  { src: "/cortes/corte-11.png", alt: "Corte infantil com risco lateral e degradê" },
  { src: "/cortes/corte-3.png", alt: "Degradê cabelo + barba" },
  { src: "/cortes/corte-13.png", alt: "Degradê com barba alinhada" },
  { src: "/cortes/corte-12.png", alt: "Mullet masculino com fade" },
  { src: "/cortes/corte-2.png", alt: "Tranças com fade" },
  { src: "/cortes/corte-7.png", alt: "Corte infantil estilo executivo" },
  { src: "/cortes/corte-14.png", alt: "Mullet cacheado com degradê" },
  { src: "/cortes/corte-9.png", alt: "Buzz cut com fade alto" },
  { src: "/cortes/corte-15.png", alt: "Mullet com risco lateral" },
  { src: "/cortes/corte-4.png", alt: "Corte com degradê platinado" },
  { src: "/cortes/corte-8.png", alt: "Corte clássico longo no topo" },
  { src: "/cortes/corte-10.png", alt: "Corte cacheado com fade" },
  { src: "/cortes/corte-6.png", alt: "Corte social com fade lateral" },
]

// Divide as fotos em duas trilhas para o carrossel duplo
const metade = Math.ceil(fotos.length / 2)
const trilha1 = fotos.slice(0, metade)
const trilha2 = fotos.slice(metade)

type Foto = { src: string; alt: string }

function CarrosselTrilha({
  itens,
  duracao,
  reverso = false,
}: {
  itens: Foto[]
  duracao: number
  reverso?: boolean
}) {
  // Duplicamos a lista para o efeito de loop infinito sem cortes
  const loop = [...itens, ...itens]

  return (
    <div className="relative overflow-hidden group">
      {/* Máscara lateral para fade nas bordas */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-card/30 via-card/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-card/30 via-card/30 to-transparent"
        aria-hidden="true"
      />

      <div
        className="flex gap-4 md:gap-5 w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${duracao}s`,
          animationDirection: reverso ? "reverse" : "normal",
        }}
      >
        {loop.map((f, i) => (
          <div
            key={`${f.src}-${i}`}
            className="relative w-[220px] h-[280px] md:w-[280px] md:h-[360px] flex-shrink-0 overflow-hidden rounded-2xl border border-border hover:border-primary/60 transition-colors"
          >
            <Image
              src={f.src || "/placeholder.svg"}
              alt={f.alt}
              fill
              sizes="(max-width: 768px) 220px, 280px"
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-xs md:text-sm text-foreground font-medium">{f.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Galeria() {
  return (
    <section id="galeria" className="relative py-20 md:py-28 bg-card/30 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Nossa galeria</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-balance">
            Cortes que <span className="text-primary">contam história</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Uma seleção de trabalhos feitos na cadeira do Alemão. Passe o mouse para pausar e inspire-se.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="space-y-4 md:space-y-5"
      >
        <CarrosselTrilha itens={trilha1} duracao={45} />
        <CarrosselTrilha itens={trilha2} duracao={55} reverso />
      </motion.div>
    </section>
  )
}
