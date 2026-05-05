"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { ENDERECO, TELEFONE_FORMATADO, linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

const horarios = [
  { dia: "Seg a Sexta", hora: "09h — 19h30" },
  { dia: "Sábado", hora: "08h — 13h" },
  { dia: "Domingo", hora: "Fechado*" },
]

const enderecoMaps = encodeURIComponent(ENDERECO.completo)

export function Contato() {
  return (
    <section id="contato" className="relative py-20 md:py-28 bg-card/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Onde estamos</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-balance">
            Vem fazer um <span className="text-primary">corte</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Estamos no coração do Novo Osasco. Estacionamento na região e fácil acesso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden border-2 border-border"
          >
            <iframe
              title="Mapa Barbearia do Alemão"
              src={`https://www.google.com/maps?q=${enderecoMaps}&output=embed`}
              className="absolute inset-0 h-full w-full grayscale-[40%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Cards de info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid gap-5"
          >
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center size-11 rounded-xl bg-primary/15 text-primary shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-foreground">Endereço</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {ENDERECO.rua}
                    <br />
                    {ENDERECO.bairro}, {ENDERECO.cidade}
                    <br />
                    CEP {ENDERECO.cep}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${enderecoMaps}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-primary hover:underline"
                  >
                    Ver rota no Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center size-11 rounded-xl bg-primary/15 text-primary shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-foreground">Contato</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{TELEFONE_FORMATADO}</p>
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      href={linkWhatsapp(MENSAGENS_WHATSAPP.geral)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-all"
                    >
                      <MessageCircle className="size-4" />
                      Chamar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center size-11 rounded-xl bg-primary/15 text-primary shrink-0">
                  <Clock className="size-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl tracking-wide text-foreground">Horários</h3>
                  <ul className="mt-2 space-y-1.5">
                    {horarios.map((h) => (
                      <li
                        key={h.dia}
                        className="flex items-center justify-between text-sm border-b border-border/50 last:border-0 pb-1.5"
                      >
                        <span className="text-muted-foreground">{h.dia}</span>
                        <span className="text-foreground font-medium">{h.hora}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed">
                    *Domingos reservados para as turmas do curso (13h às 18h).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
