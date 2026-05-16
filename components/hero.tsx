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

            {/* Google Rating */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-5 flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">4.9</span>
                {" "}· 200+ avaliações no Google
              </span>
              <svg className="size-4 opacity-60" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </motion.div>

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
