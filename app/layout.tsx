import type { Metadata } from "next"
import { DM_Sans, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
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

const SITE_URL = "https://barbeariadoalemao.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Barbearia do Alemão | Corte Masculino, Degradê e Barba em Novo Osasco",
    template: "%s | Barbearia do Alemão - Osasco",
  },
  description:
    "Barbearia do Alemão em Novo Osasco, Osasco - SP. Corte masculino, degradê, fade, barba na navalha, relaxamento, cortes infantis e curso de barbearia com certificado. Agende pelo WhatsApp (11) 98380-6066.",
  keywords: [
    "barbearia em Osasco",
    "barbearia Novo Osasco",
    "corte masculino Osasco",
    "degradê Osasco",
    "fade Osasco",
    "barba na navalha Osasco",
    "barbeiro Novo Osasco",
    "corte infantil Osasco",
    "curso de barbearia Osasco",
    "workshop de barbearia",
    "Barbearia do Alemão",
    "relaxamento masculino",
    "barbearia Quitaúna",
    "barbearia perto de mim",
  ],
  authors: [{ name: "Barbearia do Alemão" }],
  creator: "Barbearia do Alemão",
  publisher: "Barbearia do Alemão",
  category: "Beleza e estética",
  applicationName: "Barbearia do Alemão",
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Barbearia do Alemão",
    title: "Barbearia do Alemão | Corte Masculino e Degradê em Novo Osasco",
    description:
      "Tradição desde 2016. Cortes masculinos, degradê, barba na navalha e curso de barbearia em Osasco - SP. Agende pelo WhatsApp.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Logo Barbearia do Alemão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbearia do Alemão | Novo Osasco",
    description:
      "Cortes, degradê, barba e workshop de barbearia em Osasco - SP. Agende pelo WhatsApp.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  verification: {
    // Adicione o código quando for verificar no Google Search Console
    // google: "seu-codigo-aqui",
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
    <html lang="pt-BR" className={`${dmSans.variable} ${bebas.variable} bg-background`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Osasco" />
        <meta name="geo.position" content="-23.5237;-46.7917" />
        <meta name="ICBM" content="-23.5237, -46.7917" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
