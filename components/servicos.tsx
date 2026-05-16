"use client"

import { motion } from "framer-motion"
import { Scissors, Sparkles, Baby, Crown, Brush, Wind, Eye, Footprints, Clock } from "lucide-react"
import { linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

const servicosPrincipais = [
  {
    icon: Scissors,
    titulo: "Corte Masculino",
    preco: "R$ 40",
    tempo: "~30 min",
    descricao: "Clássicos e modernos, do tradicional ao autoral. Acabamento impecável garantido.",
  },
  {
    icon: Sparkles,
    titulo: "Degradê / Fade",
    preco: "R$ 40",
    tempo: "~40 min",
    descricao: "Baixa, média e alta — linhas precisas, transição suave e finalização caprichada.",
  },
  {
    icon: Brush,
    titulo: "Barba Completa",
    preco: "R$ 35",
    tempo: "~25 min",
    descricao: "4 produtos em forma de massagem. Ritual que cuida da barba e da pele.",
  },
]

const servicosSecundarios = [
  { icon: Footprints, titulo: "Pezinho", preco: "R$ 20", tempo: "~15 min" },
  { icon: Wind, titulo: "Relaxamento", preco: "R$ 40", tempo: "~45 min" },
  { icon: Eye, titulo: "Sobrancelha", preco: "R$ 20", tempo: "~10 min" },
  { icon: Baby, titulo: "Corte Infantil", preco: "R$ 40", tempo: "~30 min" },
  { icon: Sparkles, titulo: "Penteados", preco: "Sob consulta", tempo: "~30 min" },
]

export function Servicos() {
  return (
    <section id="servicos" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">O que oferecemos</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-balance">
            Serviços da <span className="text-primary">casa</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Cada serviço é executado com técnica, atenção e o cuidado que o seu visual merece.
          </p>
        </motion.div>

        {/* Promoção Seg-Qua */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 relative overflow-hidden rounded-2xl border border-primary/50 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 md:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary mb-3">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Promoção especial
              </span>
              <h3 className="font-display text-2xl md:text-3xl tracking-wide text-foreground">
                Segunda a Quarta
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Preços especiais nos dias de semana — aproveite!</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              {[
                { label: "Corte", preco: "R$ 35" },
                { label: "Barba", preco: "R$ 30" },
                { label: "Corte + Barba", preco: "R$ 60" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center rounded-xl border border-primary/30 bg-background/60 px-5 py-3"
                >
                  <div className="font-display text-2xl text-primary">{item.preco}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>

        {/* Card destaque — Combo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-5 relative overflow-hidden rounded-2xl border-2 border-primary/60 bg-gradient-to-br from-primary/15 via-card to-card p-7 md:p-9"
        >
          <div className="absolute -top-20 -right-20 size-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-primary-foreground font-medium mb-4">
                <Crown className="size-3" />
                Mais pedido
              </span>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wide text-foreground">
                Combo Cabelo + Barba
              </h3>
              <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
                O duo perfeito. Degradê ou corte à sua escolha, mais a barba completa com ritual de 4 produtos.
                Você sai pronto pra qualquer ocasião — sem abrir mão de nada.
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary" />
                <span>~55 min · Tabela fixa, sem surpresas</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              <div className="text-right">
                <div className="font-display text-5xl md:text-6xl tracking-wider text-primary gold-shimmer">R$ 65</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">preço cheio</div>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <a
                  href={linkWhatsapp('Olá! Gostaria de agendar o Combo Cabelo + Barba na Barbearia do Alemão.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.03] shadow-lg shadow-primary/25"
                >
                  Agendar Combo →
                </a>
                <p className="text-center text-xs text-muted-foreground">Seg a Qua por apenas R$ 60</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid principal — 3 serviços */}
        <div className="grid sm:grid-cols-3 gap-5 mb-5">
          {servicosPrincipais.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 hover:border-primary/50 hover:bg-card p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center size-11 rounded-xl bg-secondary text-primary mb-4">
                <s.icon className="size-5" />
              </div>
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display text-xl tracking-wide text-foreground">{s.titulo}</h3>
                <span className="font-display text-lg text-primary shrink-0">{s.preco}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.descricao}</p>
              <div className="flex items-center justify-between pt-3 border-t border-border/60">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3" /> {s.tempo}
                </span>
                <a
                  href={linkWhatsapp(`Olá! Gostaria de agendar o serviço "${s.titulo}" na Barbearia do Alemão.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  Agendar →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid secundário — serviços menores */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {servicosSecundarios.map((s, i) => (
            <motion.a
              key={s.titulo}
              href={linkWhatsapp(`Olá! Gostaria de agendar o serviço "${s.titulo}" na Barbearia do Alemão.`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col items-center text-center rounded-2xl border border-border bg-card/40 hover:border-primary/40 hover:bg-card p-5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="inline-flex items-center justify-center size-10 rounded-xl bg-secondary text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="size-5" />
              </div>
              <div className="font-display text-base tracking-wide text-foreground leading-tight mb-1">{s.titulo}</div>
              <div className="text-primary font-medium text-sm">{s.preco}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1 justify-center">
                <Clock className="size-2.5" />{s.tempo}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Tabela de preços fixa — sem surpresas
          </p>
          <a
            href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            Falar no WhatsApp e agendar
          </a>
        </motion.div>
      </div>
    </section>
  )
}
