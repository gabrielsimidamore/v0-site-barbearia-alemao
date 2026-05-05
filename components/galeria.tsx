"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fotos = [
  { src: "/cortes/corte-1.png", alt: "Corte fade alto com linha lateral feito na Barbearia do Alemão em Novo Osasco" },
  { src: "/cortes/corte-11.png", alt: "Corte infantil com risco lateral e degradê em Osasco" },
  { src: "/cortes/corte-3.png", alt: "Corte degradê com barba completa - Barbearia do Alemão Osasco" },
  { src: "/cortes/corte-13.png", alt: "Degradê com barba alinhada feita na navalha em Novo Osasco" },
  { src: "/cortes/corte-12.png", alt: "Corte mullet masculino com fade na Barbearia do Alemão" },
  { src: "/cortes/corte-2.png", alt: "Tranças masculinas com fade em Osasco" },
  { src: "/cortes/corte-7.png", alt: "Corte infantil estilo social na Barbearia do Alemão" },
  { src: "/cortes/corte-14.png", alt: "Mullet cacheado com degradê em Novo Osasco" },
  { src: "/cortes/corte-9.png", alt: "Buzz cut com fade alto - barbearia em Osasco" },
  { src: "/cortes/corte-15.png", alt: "Corte mullet com risco lateral na Barbearia do Alemão" },
  { src: "/cortes/corte-4.png", alt: "Corte masculino com degradê platinado em Osasco" },
  { src: "/cortes/corte-8.png", alt: "Corte clássico com volume no topo na Barbearia do Alemão" },
  { src: "/cortes/corte-10.png", alt: "Corte cacheado masculino com fade em Novo Osasco" },
  { src: "/cortes/corte-6.png", alt: "Corte social com fade lateral feito pelo Alemão em Osasco" },
]

// Divide em duas trilhas com sentidos opostos para sensação de fluxo dinâmico
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
  // Triplicamos a lista para garantir loop sem qualquer "engasgo" visual
  const loop = [...itens, ...itens, ...itens]

  return (
    <div className="relative overflow-hidden">
      {/* Fade nas bordas para entrada e saída suave */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-40 z-10 bg-gradient-to-r from-background to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-40 z-10 bg-gradient-to-l from-background to-transparent"
        aria-hidden="true"
      />

      <div
        className="flex gap-4 md:gap-6 w-max animate-marquee"
        style={{
          animationDuration: `${duracao}s`,
          animationDirection: reverso ? "reverse" : "normal",
        }}
      >
        {loop.map((f, i) => (
          <div
            key={`${f.src}-${i}`}
            className="relative w-[200px] h-[260px] md:w-[260px] md:h-[340px] flex-shrink-0 overflow-hidden rounded-2xl border border-border shadow-lg shadow-black/40"
          >
            <Image
              src={f.src || "/placeholder.svg"}
              alt={f.alt}
              fill
              sizes="(max-width: 768px) 200px, 260px"
              className="object-cover"
            />
            {/* Sombra inferior pra dar profundidade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
            {/* Detalhe dourado no canto */}
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
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
            Uma seleção de trabalhos feitos na cadeira do Alemão.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="space-y-5 md:space-y-6"
      >
        <CarrosselTrilha itens={trilha1} duracao={28} />
        <CarrosselTrilha itens={trilha2} duracao={32} reverso />
      </motion.div>
    </section>
  )
}
