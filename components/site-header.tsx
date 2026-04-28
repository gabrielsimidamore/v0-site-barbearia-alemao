"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

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

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="#top" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 md:h-12 md:w-12 shrink-0">
              <Image
                src="/logo.png"
                alt="Logo Barbearia do Alemão"
                fill
                className="object-contain transition-transform duration-500 group-hover:rotate-6"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="block font-display text-xl md:text-2xl tracking-wider text-primary">
                Barbearia do Alemão
              </span>
              <span className="block text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase">
                Desde 2016 — Osasco
              </span>
            </div>
          </Link>

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

          <div className="hidden md:block">
            <a
              href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
            >
              Agendar agora
            </a>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-foreground"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 flex flex-col gap-4 border-t border-border/60 pt-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Agendar pelo WhatsApp
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
