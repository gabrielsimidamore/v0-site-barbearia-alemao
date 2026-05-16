"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle, Calendar, Star } from "lucide-react"
import { linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24"
    >
      {/* Background com listras suaves */}
      <div className="absolute inset-0 barber-stripes opacity-60" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background"
        aria-hidden
      />
      {/* Glow dourado */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary mb-6"
            >
              <Star className="size-3 fill-primary" />
              Tradição desde 2016
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-wide leading-[0.95] text-balance">
              <span className="block text-foreground">Barbearia</span>
              <span className="block gold-shimmer">do Alemão</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Cortes, barba e estilo no coração de Osasco. Mais de uma década entregando
              o degradê perfeito e ensinando a próxima geração de barbeiros.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.03] shadow-lg shadow-primary/20"
              >
                <Calendar className="size-4" />
                Agendar horário
              </a>
              <a
                href={linkWhatsapp(MENSAGENS_WHATSAPP.workshop)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-transparent px-7 py-3.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary transition-all"
              >
                <MessageCircle className="size-4" />
                Quero o workshop
              </a>
            </div>

            {/* Instagram CTA */}
            <motion.a
              href="https://www.instagram.com/barbeariado_alemao"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-5 inline-flex items-center gap-2.5 group"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-primary" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                @barbeariado_alemao
              </span>
              <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </motion.a>

            {/* Mini-estatísticas */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { num: "10+", label: "Anos de história" },
                { num: "5★", label: "Atendimento" },
                { num: "100%", label: "Estilo garantido" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="font-display text-2xl md:text-3xl text-primary">{s.num}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Logo flutuante */}
              <motion.div
                className="absolute -top-6 -right-6 z-20 size-28 md:size-36 float-anim"
                initial={{ rotate: -12 }}
              >
                <div className="relative size-full rounded-2xl bg-black shadow-2xl shadow-black/60 overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src="/logo.png"
                    alt="Logo Barbearia do Alemão"
                    fill
                    className="object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)] p-2"
                  />
                </div>
              </motion.div>

              {/* Foto principal */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-primary/30 shadow-2xl">
                <Image
                  src="/cortes/corte-kids.png"
                  alt="Corte kids infantil feito na Barbearia do Alemão em Osasco"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 38%" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1.5 text-xs text-foreground border border-primary/20">
                    <span className="size-2 rounded-full bg-accent animate-pulse" />
                    Agenda aberta hoje
                  </div>
                </div>
              </div>

              {/* Cartão flutuante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-6 hidden sm:block bg-card border border-border rounded-2xl p-4 shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-1 text-primary mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-primary" />
                  ))}
                </div>
                <p className="text-xs text-foreground/90 leading-snug">
                  &quot;Melhor barbearia de Osasco. Saio sempre satisfeito!&quot;
                </p>
                <p className="text-[10px] text-muted-foreground mt-1.5">— Cliente fiel</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
