"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Scissors, Sparkles, Baby, Crown, Brush, Wind, Eye, Footprints, Clock } from "lucide-react"
import { linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

/* ── 3D Tilt hook ───────────────────── */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia("(pointer: fine)").matches) return
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`
      el.style.transition = "transform 0.1s ease"
    }
    const leave = () => {
      el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)"
      el.style.transition = "transform 0.7s cubic-bezier(0.16,1,0.3,1)"
    }
    el.addEventListener("mousemove", move)
    el.addEventListener("mouseleave", leave)
    return () => {
      el.removeEventListener("mousemove", move)
      el.removeEventListener("mouseleave", leave)
    }
  }, [])
  return ref
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useTilt()
  return (
    <div ref={ref} className={`tilt-card ${className ?? ""}`} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  )
}

/* ── Data ───────────────────────────── */
const servicosPrincipais = [
  { icon: Scissors, titulo: "Corte Masculino", preco: "R$ 40", tempo: "~30 min", descricao: "Clássicos e modernos, do tradicional ao autoral. Acabamento impecável garantido." },
  { icon: Sparkles, titulo: "Degradê / Fade", preco: "R$ 40", tempo: "~40 min", descricao: "Baixa, média e alta — linhas precisas, transição suave e finalização caprichada." },
  { icon: Brush, titulo: "Barba Completa", preco: "R$ 35", tempo: "~25 min", descricao: "4 produtos em forma de massagem. Ritual que cuida da barba e da pele." },
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
      <div className="absolute inset-x-0 top-0 h-px gold-line" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">O que oferecemos</span>
          <h2 className="mt-2 font-display text-5xl md:text-6xl lg:text-7xl tracking-wide leading-none">
            Serviços da <span className="italic font-serif text-primary">casa</span>
          </h2>
        </motion.div>

        {/* Promoção Seg-Qua */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/12 via-card to-card/80 p-6 md:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-px gold-line" />
          <div className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary mb-3">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Promoção especial
              </span>
              <h3 className="font-display text-2xl md:text-3xl tracking-wide">Segunda a Quarta</h3>
              <p className="mt-1 text-sm text-muted-foreground font-mono">Preços especiais nos dias de semana</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              {[{ label: "Corte", preco: "R$ 35" }, { label: "Barba", preco: "R$ 30" }, { label: "Combo", preco: "R$ 60" }].map((item) => (
                <div key={item.label} className="text-center rounded-2xl border border-primary/30 bg-background/50 backdrop-blur px-4 py-3">
                  <div className="font-display text-2xl text-primary">{item.preco}</div>
                  <div className="font-mono text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Combo destaque ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <TiltCard className="relative overflow-hidden rounded-3xl border-2 border-primary/60 bg-gradient-to-br from-primary/15 via-card to-card p-7 md:p-10">
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px gold-line" />
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary-foreground font-medium mb-4">
                  <Crown className="size-3" /> Mais pedido
                </span>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide leading-none">
                  Combo Cabelo + Barba
                </h3>
                <p className="mt-3 text-muted-foreground max-w-md leading-relaxed text-sm md:text-base">
                  O duo perfeito. Degradê ou corte à sua escolha, mais a barba completa com ritual de 4 produtos.
                  Você sai pronto pra qualquer ocasião.
                </p>
                <div className="mt-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <Clock className="size-3.5 text-primary" />
                  ~55 min · Tabela fixa, sem surpresas
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
                <div className="text-right">
                  <div className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider gold-shimmer">R$ 65</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">preço cheio</div>
                </div>
                <a
                  href={linkWhatsapp("Olá! Gostaria de agendar o Combo Cabelo + Barba na Barbearia do Alemão.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                  Agendar Combo →
                </a>
                <p className="font-mono text-[10px] text-muted-foreground">Seg a Qua por R$ 60</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* ── Grid 3 principais ─────────────── */}
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          {servicosPrincipais.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard className="group h-full rounded-2xl border border-border bg-card/60 hover:border-primary/50 hover:bg-card p-6 transition-colors duration-300">
                <div className="inline-flex items-center justify-center size-11 rounded-xl bg-secondary text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="size-5" />
                </div>
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl tracking-wide">{s.titulo}</h3>
                  <span className="font-display text-xl text-primary shrink-0">{s.preco}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.descricao}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border/60">
                  <span className="font-mono flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Clock className="size-3" /> {s.tempo}
                  </span>
                  <a
                    href={linkWhatsapp(`Olá! Gostaria de agendar o serviço "${s.titulo}" na Barbearia do Alemão.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline font-mono"
                  >
                    Agendar →
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* ── Grid compacto ─────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {servicosSecundarios.map((s, i) => (
            <motion.a
              key={s.titulo}
              href={linkWhatsapp(`Olá! Gostaria de agendar o serviço "${s.titulo}" na Barbearia do Alemão.`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col items-center text-center rounded-2xl border border-border bg-card/40 hover:border-primary/40 hover:bg-card p-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center size-10 rounded-xl bg-secondary text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="size-5" />
              </div>
              <div className="font-display text-base tracking-wide leading-tight mb-1">{s.titulo}</div>
              <div className="text-primary text-sm font-medium">{s.preco}</div>
              <div className="font-mono text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1 justify-center">
                <Clock className="size-2.5" />{s.tempo}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
            Tabela de preços fixa — sem surpresas
          </p>
          <a
            href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20"
          >
            Falar no WhatsApp e agendar
          </a>
        </motion.div>
      </div>
    </section>
  )
}
