"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const perguntas = [
  {
    q: "Onde fica a Barbearia do Alemão em Osasco?",
    a: "Estamos na Av. Novo Osasco, 1512 — bairro Novo Osasco, Osasco - SP, CEP 06056-270. Atendemos clientes de Novo Osasco, Quitaúna, Bandeiras, Vila Yara, Centro de Osasco e região.",
  },
  {
    q: "Qual o horário de funcionamento da barbearia?",
    a: "De segunda a sexta das 9h às 19h30 e aos sábados das 8h às 13h. Aos domingos, das 13h às 18h, a barbearia recebe as turmas do curso de barbearia.",
  },
  {
    q: "Como funciona a barba na Barbearia do Alemão?",
    a: "Não usamos toalha. Aplicamos 4 produtos em forma de massagem em um processo que cuida da barba e da pele do cliente, deixando o rosto hidratado e a barba alinhada com precisão.",
  },
  {
    q: "Quanto custa cortar o cabelo na Barbearia do Alemão?",
    a: "Corte R$40, Barba R$35, Combo Corte + Barba R$65, Pezinho R$20, Relaxamento R$40 e Sobrancelha R$20. Penteados e finalizações sob consulta.",
  },
  {
    q: "Como funciona o curso / workshop de barbearia?",
    a: "São 4 domingos consecutivos, das 13h às 18h, com aulas práticas dadas pelo Alemão. Você sai com certificado válido em todo o Brasil para começar a atuar como barbeiro profissional.",
  },
  {
    q: "Como agendar um horário?",
    a: "É só chamar pelo WhatsApp (11) 98380-6066. Respondemos rápido e confirmamos o horário no mesmo dia.",
  },
  {
    q: "A barbearia atende crianças?",
    a: "Sim! Atendemos cortes infantis com paciência, ambiente acolhedor e o mesmo padrão de qualidade dos cortes adultos.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-card/30 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <HelpCircle className="size-3" />
            Perguntas frequentes
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-wide text-balance">
            Tudo que você <span className="text-primary">precisa saber</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Endereço, horários, preços, curso e como agendar — sem enrolação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border bg-card/60 backdrop-blur px-4 md:px-6"
          >
            {perguntas.map((p, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/60 last:border-0"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:text-primary hover:no-underline py-5">
                  {p.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-pretty">
                  {p.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
