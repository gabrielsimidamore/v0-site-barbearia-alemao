"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, Check, MessageCircle, Calendar, Clock, Award } from "lucide-react"
import { linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

const beneficios = [
  "Aulas práticas com cliente real na cadeira",
  "Técnicas de degradê, navalha e finalização",
  "Postura profissional e atendimento",
  "Material de apoio + certificado",
  "Turmas reduzidas para atenção individual",
  "Suporte pós-curso para tirar dúvidas",
]

const detalhes = [
  {
    icon: Calendar,
    label: "Duração",
    valor: "4 Domingos",
  },
  {
    icon: Clock,
    label: "Horário",
    valor: "13h às 18h",
  },
  {
    icon: Award,
    label: "Certificado",
    valor: "Válido nível Brasil",
  },
]

export function Workshop() {
  return (
    <section id="workshop" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background dourado sutil */}
      <div className="absolute inset-0 barber-stripes opacity-40" aria-hidden />
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 translate-x-4 translate-y-4" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-primary/40 shadow-2xl">
                <Image
                  src="/cortes/ambiente.png"
                  alt="Barbeiro do Alemão ensinando técnicas de corte na barbearia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-xl"
              >
                <div className="font-display text-3xl tracking-wider">100%</div>
                <div className="text-[11px] uppercase tracking-widest opacity-90">prático</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary mb-6">
              <GraduationCap className="size-3.5" />
              Workshop & Curso
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide leading-[0.95] text-balance">
              Aprenda a cortar com{" "}
              <span className="text-primary">quem vive da cadeira</span>
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
              Mais do que cortar cabelo, a Barbearia do Alemão ensina o ofício. Em workshops e cursos
              intensivos, você aprende na prática a técnica que transforma clientes em fiéis — do
              degradê preciso ao toque final na navalha. Ideal para iniciantes e barbeiros que
              querem evoluir.
            </p>

            {/* Card destacando estrutura do curso */}
            <div className="mt-7 grid grid-cols-3 gap-3">
              {detalhes.map((d) => (
                <div
                  key={d.label}
                  className="rounded-2xl border border-primary/30 bg-card/70 backdrop-blur-sm p-4 text-center"
                >
                  <d.icon className="size-5 text-primary mx-auto mb-2" />
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {d.label}
                  </div>
                  <div className="mt-1 font-display text-base md:text-lg tracking-wide text-foreground leading-tight">
                    {d.valor}
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {beneficios.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-2.5 text-sm text-foreground/90"
                >
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={linkWhatsapp(MENSAGENS_WHATSAPP.workshop)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.03] shadow-lg shadow-primary/20"
              >
                <MessageCircle className="size-4" />
                Quero saber mais sobre o curso
              </a>
              <a
                href={linkWhatsapp(
                  "Olá! Gostaria de saber as próximas turmas e datas do workshop da Barbearia do Alemão.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-7 py-3.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary transition-all"
              >
                Ver próximas turmas
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
