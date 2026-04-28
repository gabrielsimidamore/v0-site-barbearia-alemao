import Image from "next/image"
import { ENDERECO, TELEFONE_FORMATADO } from "@/lib/contato"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border py-12 md:py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative size-12 shrink-0">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
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
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wide text-foreground mb-3">Navegue</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-primary">Galeria</a></li>
              <li><a href="#workshop" className="hover:text-primary">Workshop</a></li>
              <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            </ul>
            <p className="mt-4 text-sm text-foreground">{TELEFONE_FORMATADO}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Barbearia do Alemão. Todos os direitos reservados.</span>
          <span>Feito com cuidado para quem ama um bom corte.</span>
        </div>
      </div>
    </footer>
  )
}
