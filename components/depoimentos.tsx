"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"

const avaliacoes = [
  {
    nome: "Marcos A.",
    inicial: "M",
    nota: 5,
    tempo: "há 2 semanas",
    texto:
      "Melhor barbearia de Osasco! Faço corte aqui há mais de 4 anos e o Alemão é preciso demais no degradê. Cada detalhe, cada linha — impecável. Não troco por nada.",
    servico: "Degradê",
  },
  {
    nome: "Rafael S.",
    inicial: "R",
    nota: 5,
    tempo: "há 1 mês",
    texto:
      "A barba ficou incrível. O processo com os 4 produtos é diferente de qualquer barbearia que já fui — dá pra sentir o cuidado. A pele fica hidratada e a barba alinhada com precisão cirúrgica.",
    servico: "Barba Completa",
  },
  {
    nome: "Thiago M.",
    inicial: "T",
    nota: 5,
    tempo: "há 3 meses",
    texto:
      "Fiz o curso de barbearia com o Alemão e hoje trabalho como barbeiro profissional. Ele ensina de verdade, com paciência e técnica. Valeu cada real investido. Recomendo muito!",
    servico: "Curso de Barbearia",
  },
  {
    nome: "João P.",
    inicial: "J",
    nota: 5,
    tempo: "há 2 semanas",
    texto:
      "Levei meu filho de 6 anos e ele adorou! O Alemão tem muita paciência com as crianças. Ambiente acolhedor, corte ficou lindo. Com certeza voltaremos sempre.",
    servico: "Corte Infantil",
  },
  {
    nome: "Carlos B.",
    inicial: "C",
    nota: 5,
    tempo: "há 1 semana",
    texto:
      "O combo cabelo + barba por R$65 não tem igual em Osasco. Saio completamente renovado toda vez. Atendimento rápido, sem enrolação e qualidade top. Recomendo demais!",
    servico: "Combo Cabelo + Barba",
  },
  {
    nome: "Felipe R.",
    inicial: "F",
    nota: 5,
    tempo: "há 3 semanas",
    texto:
      "Já testei várias barbearias na região e a do Alemão é a melhor sem dúvida. A atenção ao detalhe é outra. O degradê ficou perfeito e o acabamento é impecável. Voltarei sempre!",
    servico: "Fade",
  },
]

const cores = [
  "bg-amber-500",
  "bg-blue-600",
  "bg-emerald-600",
  "bg-violet-600",
  "bg-rose-600",
  "bg-cyan-600",
]

export function Depoimentos() {
  return (
    <section className="relative py-20 md:py-28 bg-card/20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* Glow de fundo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Quem já veio sabe</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-balance">
            O que os clientes <span className="text-primary">dizem</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Mais de uma década de cortes — e os clientes que ficam são a melhor prova.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {avaliacoes.map((av, i) => (
            <motion.div
              key={av.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative rounded-2xl border border-border bg-card p-6 flex flex-col"
            >
              {/* Quote decorativo */}
              <Quote className="absolute top-5 right-5 size-8 text-primary/10" aria-hidden="true" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`size-10 rounded-full ${cores[i]} flex items-center justify-center text-white font-semibold text-sm shrink-0`}>
                  {av.inicial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground text-sm truncate">{av.nome}</div>
                  <div className="text-[11px] text-muted-foreground">{av.tempo}</div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: av.nota }).map((_, j) => (
                  <Star key={j} className="size-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">&quot;{av.texto}&quot;</p>

              {/* Serviço */}
              <div className="mt-4 pt-3 border-t border-border/60">
                <span className="text-[11px] uppercase tracking-widest text-primary">{av.servico}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-all"
          >
            Virar o próximo cliente satisfeito →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
