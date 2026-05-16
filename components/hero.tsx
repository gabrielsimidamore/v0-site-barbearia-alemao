"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MessageCircle, ArrowDown } from "lucide-react"
import { linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

/* ── reveal stagger ───────────────────── */
const rev = (delay = 0) => ({
  initial: { y: "105%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  transition: {
    duration: 1,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    delay,
  },
})

/* ── magnetic button ──────────────────── */
function useMagnet(strength = 0.35) {
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia("(pointer: fine)").matches) return
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * strength
      const y = (e.clientY - r.top - r.height / 2) * strength
      el.style.transform = `translate(${x}px,${y}px)`
      el.style.transition = "transform 0.1s ease"
    }
    const leave = () => {
      el.style.transform = ""
      el.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)"
    }
    el.addEventListener("mousemove", move)
    el.addEventListener("mouseleave", leave)
    return () => {
      el.removeEventListener("mousemove", move)
      el.removeEventListener("mouseleave", leave)
    }
  }, [strength])
  return ref
}

export function Hero() {
  const btnPrimary = useMagnet(0.4)
  const btnSecondary = useMagnet(0.4)

  return (
    <section
      id="top"
      className="relative h-screen min-h-[700px] overflow-hidden flex flex-col"
    >
      {/* ── Background photo ────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/cortes/corte-3.png"
          alt="Barbearia do Alemão — degradê e barba em Osasco"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/25 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/20 to-transparent" />
      </div>

      {/* ── Decorative number ──────────────── */}
      <div
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 font-display text-stroke-gold select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 28vw, 22rem)", lineHeight: 1, opacity: 0.12 }}
        aria-hidden="true"
      >
        10
      </div>

      {/* ── Content ─────────────────────────── */}
      <div className="relative flex-1 flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-20 pt-28 md:pt-32 pb-10">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-8 gold-line" />
          <span className="font-mono text-[11px] tracking-[0.45em] uppercase text-primary/80">
            Est. 2016 · Novo Osasco · SP
          </span>
        </motion.div>

        {/* ── Giant type ──────────────────── */}
        <div className="-mt-4 md:-mt-0">
          {/* BARBEARIA */}
          <div className="reveal-wrap">
            <motion.h1
              {...rev(0.2)}
              className="font-display text-fluid-hero uppercase text-foreground leading-none tracking-wide"
            >
              Barbearia
            </motion.h1>
          </div>

          {/* do — italic serif */}
          <div className="reveal-wrap -mt-1 md:-mt-2">
            <motion.span
              {...rev(0.35)}
              className="block font-serif italic text-primary"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.85 }}
            >
              do
            </motion.span>
          </div>

          {/* ALEMÃO — gold shimmer */}
          <div className="reveal-wrap -mt-1 md:-mt-2">
            <motion.span
              {...rev(0.45)}
              className="block font-display text-fluid-hero uppercase gold-shimmer leading-none tracking-wide"
            >
              Alemão
            </motion.span>
          </div>
        </div>

        {/* ── Bottom: tagline + CTAs + stats ── */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12">

          {/* Left: text + CTAs */}
          <div className="max-w-sm">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6"
            >
              Cortes, barba e estilo no coração de Osasco.
              Mais de uma década entregando o degradê perfeito.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                ref={btnPrimary}
                href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
              >
                <Calendar className="size-4" />
                Agendar horário
              </a>
              <a
                ref={btnSecondary}
                href={linkWhatsapp(MENSAGENS_WHATSAPP.workshop)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-background/40 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary"
              >
                <MessageCircle className="size-4" />
                Workshop
              </a>
            </motion.div>

            {/* Instagram link */}
            <motion.a
              href="https://www.instagram.com/barbeariado_alemao"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-4 inline-flex items-center gap-2 group"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-primary" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors font-mono tracking-wider">
                @barbeariado_alemao
              </span>
            </motion.a>
          </div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="flex gap-8 md:gap-10 shrink-0"
          >
            {[
              { num: "10+", label: "Anos de história" },
              { num: "5★", label: "Atendimento" },
              { num: "100%", label: "Estilo garantido" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-right">
                <div className="font-display text-2xl md:text-3xl text-primary tracking-wide">{s.num}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 hidden md:flex"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-muted-foreground rotate-90 origin-center mb-4">
          Scroll
        </span>
        <div className="w-px h-12 overflow-hidden">
          <div className="w-full h-full bg-primary scroll-indicator-line" />
        </div>
        <ArrowDown className="size-3 text-primary animate-bounce mt-1" />
      </motion.div>

      {/* ── Logo flutuante ──────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-20 right-6 md:top-28 md:right-10 z-20 float-anim"
      >
        <div className="relative size-24 md:size-32 rounded-2xl bg-black/80 backdrop-blur border border-primary/30 shadow-2xl shadow-black/60 overflow-hidden p-2">
          <Image
            src="/logo.png"
            alt="Logo Barbearia do Alemão"
            fill
            className="object-contain p-2 drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]"
          />
        </div>
      </motion.div>
    </section>
  )
}
