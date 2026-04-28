"use client"

import { motion } from "framer-motion"
import { Scissors, Sparkles, Baby, Crown, Brush, Droplet } from "lucide-react"
import { linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

const servicos = [
  {
    icon: Scissors,
    titulo: "Corte Masculino",
    descricao: "Cortes clássicos e modernos, do tradicional ao mais autoral, sempre com acabamento impecável.",
    destaque: false,
  },
  {
    icon: Sparkles,
    titulo: "Degradê / Fade",
    descricao: "Degradês de baixa, média e alta — linhas precisas, transição suave e finalização caprichada.",
    destaque: true,
  },
  {
    icon: Brush,
    titulo: "Barba na Navalha",
    descricao: "Toalha quente, óleo, hidratação e desenho. A experiência completa para a barba dos sonhos.",
    destaque: false,
  },
  {
    icon: Crown,
    titulo: "Combo Cabelo + Barba",
    descricao: "O combo mais pedido. Você sai pronto pra qualquer ocasião com o melhor preço.",
    destaque: true,
  },
  {
    icon: Baby,
    titulo: "Corte Infantil",
    descricao: "Atendimento paciente e ambiente acolhedor para os pequenos. Primeira ida, primeira memória.",
    destaque: false,
  },
  {
    icon: Droplet,
    titulo: "Platinado e Coloração",
    descricao: "Descoloração, platinado, mechas e cores. Visual que chama atenção, feito por quem entende.",
    destaque: false,
  },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicos.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 ${
                s.destaque
                  ? "border-primary/40 bg-card hover:border-primary"
                  : "border-border bg-card/50 hover:border-primary/40 hover:bg-card"
              }`}
            >
              {s.destaque && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-primary border border-primary/40 rounded-full px-2 py-0.5">
                  Top
                </span>
              )}
              <div
                className={`inline-flex items-center justify-center size-12 rounded-xl mb-4 transition-colors ${
                  s.destaque ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                }`}
              >
                <s.icon className="size-6" />
              </div>
              <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-2">
                {s.titulo}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.descricao}</p>
              <div className="mt-5 pt-4 border-t border-border/60">
                <a
                  href={linkWhatsapp(
                    `Olá! Gostaria de agendar o serviço "${s.titulo}" na Barbearia do Alemão.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  Agendar este serviço →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
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
