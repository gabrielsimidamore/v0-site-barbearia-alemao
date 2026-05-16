import Image from "next/image"
import { ENDERECO, TELEFONE_FORMATADO, linkWhatsapp, MENSAGENS_WHATSAPP } from "@/lib/contato"
import { MessageCircle } from "lucide-react"

const sociais = [
  {
    nome: "Instagram",
    href: "https://www.instagram.com/barbearia.alemao",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    nome: "Facebook",
    href: "https://www.facebook.com/barbearia.alemao",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    nome: "WhatsApp",
    href: linkWhatsapp(MENSAGENS_WHATSAPP.agendamento),
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* CTA pré-rodapé */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/20 py-10 md:py-14">
        <div className="absolute inset-0 barber-stripes opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-wide text-foreground">
              Pronto pra dar um <span className="text-primary">upgrade</span> no visual?
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">Agenda aberta. Atendemos de Seg a Sáb.</p>
          </div>
          <a
            href={linkWhatsapp(MENSAGENS_WHATSAPP.agendamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.03] shadow-lg shadow-primary/20"
          >
            <MessageCircle className="size-4" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>

      {/* Rodapé principal */}
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative size-12 shrink-0 rounded-xl bg-black overflow-hidden p-1">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain p-0.5" />
                </div>
                <div>
                  <div className="font-display text-2xl tracking-wider text-primary">
                    Barbearia do Alemão
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Desde 2016
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
                Estilo, técnica e tradição. Cortes masculinos, barba e workshop em Osasco.
              </p>
              {/* Redes sociais */}
              <div className="mt-5 flex items-center gap-3">
                {sociais.map((s) => (
                  <a
                    key={s.nome}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.nome}
                    className="inline-flex items-center justify-center size-10 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg tracking-wide text-foreground mb-3">Endereço</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {ENDERECO.rua}
                <br />
                {ENDERECO.bairro}
                <br />
                {ENDERECO.cidade} — CEP {ENDERECO.cep}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Barbearia+do+Alemão+Osasco"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-primary hover:underline"
              >
                Ver no Google Maps →
              </a>
            </div>

            <div>
              <h4 className="font-display text-lg tracking-wide text-foreground mb-3">Horários</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex justify-between gap-4">
                  <span>Seg a Sexta</span>
                  <span className="text-foreground">9h — 19h30</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sábado</span>
                  <span className="text-foreground">8h — 13h</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Domingo</span>
                  <span className="text-foreground">Curso</span>
                </li>
              </ul>
              <p className="mt-4 text-sm font-medium text-foreground">{TELEFONE_FORMATADO}</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Barbearia do Alemão. Todos os direitos reservados.</span>
            <span>Feito com cuidado para quem ama um bom corte.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
