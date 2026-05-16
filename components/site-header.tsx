"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { X, Menu, Calendar } from "lucide-react"
import { linkWhatsapp, MENSAGENS_WHATSAPP, TELEFONE_FORMATADO } from "@/lib/contato"

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#workshop", label: "Workshop" },
  { href: "#contato", label: "Contato" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Travar scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-background/90 backdrop-blur-md border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between gap-4">

            {/* Logo */}
            <Link href="#top" className="flex items-center gap-2.5 group shrink-0" onClick={() => setOpen(false)}>
              <div className="relative size-9 md:size-11 shrink-0 rounded-lg bg-black overflow-hidden border border-primary/20">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="leading-tight">
                <span className="block font-display text-lg md:text-2xl tracking-wider text-primary leading-none">
                  Barbearia do Alemão
                </span>
                <span className="block text-[9px] md:text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                  Desde 2016 — Osasco
                </span>
              </div>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Direita */}
            <div className="flex items-center gap-2">
              {/* CTA desktop */}
              <a
                href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Calendar className="size-3.5" />
                Agendar
              </a>

              {/* Botão hamburguer */}
              <button
                type="button"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden relative flex items-center justify-center size-10 rounded-full border border-border/60 bg-card/80 backdrop-blur text-foreground active:scale-95 transition-transform"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.div key="x" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="size-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="size-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Menu mobile fullscreen ─────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-background/98 backdrop-blur-xl flex flex-col pt-20"
            style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
          >
            {/* Links grandes */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-border/40 last:border-0"
                >
                  <span className="font-display text-4xl tracking-wide text-foreground group-hover:text-primary transition-colors">
                    {l.label}
                  </span>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-2xl">→</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer do menu */}
            <div className="px-8 pb-4 space-y-3">
              <motion.a
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-primary py-4 text-base font-semibold text-primary-foreground active:scale-95 transition-transform"
              >
                <Calendar className="size-5" />
                Agendar pelo WhatsApp
              </motion.a>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.34 }}
                className="text-center font-mono text-xs text-muted-foreground"
              >
                {TELEFONE_FORMATADO} · Seg–Sex 9h–19h30 · Sáb 8h–13h
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
