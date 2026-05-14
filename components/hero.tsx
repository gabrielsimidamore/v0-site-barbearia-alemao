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
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Logo flutuante */}
              <motion.div
                className="absolute -top-6 -right-6 z-20 size-28 md:size-36 float-anim"
                initial={{ rotate: -12 }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo Barbearia do Alemão"
                  fill
                  className="object-contain drop-shadow-[0_8px_24px_rgba(212,175,55,0.4)]"
                />
              </motion.div>

              {/* Foto principal */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-primary/30 shadow-2xl">
                <Image
                  src="/cortes/corte-kids.png"
                  alt="Corte kids infantil feito na Barbearia do Alemão em Osasco"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
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
