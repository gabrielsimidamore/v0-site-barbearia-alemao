import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { Servicos } from "@/components/servicos"
import { Galeria } from "@/components/galeria"
import { Workshop } from "@/components/workshop"
import { Depoimentos } from "@/components/depoimentos"
import { FAQ } from "@/components/faq"
import { Contato } from "@/components/contato"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { MobileBar } from "@/components/mobile-bar"
import { StructuredData } from "@/components/structured-data"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/cursor"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      {/* pb-20 md:pb-0 garante que o conteúdo não fique atrás da barra mobile */}
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden pb-20 md:pb-0">
        <StructuredData />
        <SiteHeader />
        <Hero />
        <MarqueeBand inverted />
        <Servicos />
        <Galeria />
        <MarqueeBand />
        <Workshop />
        <Depoimentos />
        <FAQ />
        <Contato />
        <SiteFooter />
        <WhatsappFloat />
        <MobileBar />
      </main>
    </SmoothScroll>
  )
}
