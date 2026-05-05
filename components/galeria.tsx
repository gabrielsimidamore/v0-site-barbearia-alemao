"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fotos = [
  { src: "/cortes/corte-1.png", alt: "Corte fade alto com linha lateral", span: "row-span-2" },
  { src: "/cortes/corte-11.png", alt: "Corte infantil com risco lateral e degradê", span: "" },
  { src: "/cortes/corte-3.png", alt: "Degradê cabelo + barba", span: "" },
  { src: "/cortes/corte-13.png", alt: "Degradê com barba alinhada", span: "row-span-2" },
  { src: "/cortes/corte-12.png", alt: "Mullet masculino com tatuagem", span: "" },
  { src: "/cortes/corte-2.png", alt: "Tranças com fade", span: "" },
  { src: "/cortes/corte-7.png", alt: "Corte infantil estilo executivo", span: "" },
  { src: "/cortes/corte-14.png", alt: "Mullet cacheado com degradê", span: "" },
  { src: "/cortes/corte-9.png", alt: "Buzz cut com fade alto", span: "" },
  { src: "/cortes/corte-15.png", alt: "Mullet com risco lateral", span: "" },
  { src: "/cortes/corte-4.png", alt: "Corte com degradê platinado", span: "" },
  { src: "/cortes/corte-8.png", alt: "Corte clássico longo no topo", span: "" },
  { src: "/cortes/corte-10.png", alt: "Corte cacheado com fade", span: "" },
  { src: "/cortes/corte-6.png", alt: "Corte social com fade lateral", span: "" },
]

export function Galeria() {
  return (
    <section id="galeria" className="relative py-20 md:py-28 bg-card/30">
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
            Uma seleção de trabalhos feitos na cadeira do Alemão. Inspire-se e venha fazer o seu.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {fotos.map((f, i) => (
            <motion.div
              key={f.src}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border hover:border-primary/60 transition-all ${f.span}`}
            >
              <Image
                src={f.src || "/placeholder.svg"}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-xs md:text-sm text-foreground font-medium">{f.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
