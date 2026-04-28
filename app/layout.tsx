import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-custom",
  display: "swap",
})

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-custom",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Barbearia do Alemão — Osasco | Cortes, Barba e Workshop",
  description:
    "Tradição desde 2016. Cortes masculinos, barba, degradê e workshop de barbearia em Osasco. Agende pelo WhatsApp.",
  generator: "v0.app",
  openGraph: {
    title: "Barbearia do Alemão — Osasco",
    description: "Cortes, barba e workshop. Agende pelo WhatsApp.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebas.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
