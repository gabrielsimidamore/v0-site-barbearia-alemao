import { TELEFONE, ENDERECO } from "@/lib/contato"

const SITE_URL = "https://barbeariadoalemao.com.br"

const servicos = [
  { name: "Corte masculino", price: "40.00", description: "Corte masculino completo finalizado." },
  { name: "Degradê / Fade", price: "40.00", description: "Degradê ou fade alinhado ao estilo do cliente." },
  { name: "Barba completa", price: "35.00", description: "Barba feita com 4 produtos em massagem, cuidando da pele e dos pelos. Não usamos toalha." },
  { name: "Combo Corte + Barba", price: "65.00", description: "Corte completo + barba na massagem." },
  { name: "Pezinho", price: "20.00", description: "Acabamento e contorno entre cortes." },
  { name: "Relaxamento", price: "40.00", description: "Relaxamento capilar masculino." },
  { name: "Sobrancelha", price: "20.00", description: "Design e acabamento da sobrancelha." },
  { name: "Penteados", price: "0", description: "Penteados e finalizações masculinas (valor sob consulta)." },
  { name: "Corte infantil", price: "40.00", description: "Corte com paciência e estilo para os pequenos." },
]

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "LocalBusiness", "BarberShop"],
    "@id": `${SITE_URL}/#barbearia`,
    name: "Barbearia do Alemão",
    alternateName: "Barbearia Alemão",
    description:
      "Barbearia tradicional desde 2016 em Novo Osasco. Cortes masculinos, degradê, fade, barba na navalha, cortes infantis, relaxamento e curso de barbearia com certificado.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [
      `${SITE_URL}/logo.png`,
      `${SITE_URL}/cortes/ambiente.png`,
      `${SITE_URL}/cortes/corte-3.png`,
      `${SITE_URL}/cortes/corte-13.png`,
    ],
    telephone: `+55${TELEFONE}`,
    priceRange: "R$ 20 - R$ 65",
    currenciesAccepted: "BRL",
    paymentAccepted: "Cash, Credit Card, Debit Card, Pix",
    foundingDate: "2016",
    slogan: "Tradição, estilo e precisão desde 2016.",
    address: {
      "@type": "PostalAddress",
      streetAddress: ENDERECO.rua,
      addressLocality: "Osasco",
      addressRegion: "SP",
      postalCode: ENDERECO.cep,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.5237,
      longitude: -46.7917,
    },
    areaServed: [
      { "@type": "City", name: "Osasco" },
      { "@type": "Place", name: "Novo Osasco" },
      { "@type": "Place", name: "Quitaúna" },
      { "@type": "Place", name: "Bandeiras" },
      { "@type": "Place", name: "Vila Yara" },
      { "@type": "Place", name: "Centro de Osasco" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+55${TELEFONE}`,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
    sameAs: [`https://wa.me/55${TELEFONE}`],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cortes e Serviços da Barbearia do Alemão",
      itemListElement: servicos.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
        },
        ...(s.price !== "0" && {
          price: s.price,
          priceCurrency: "BRL",
        }),
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Barbearia do Alemão",
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#barbearia` },
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/#servicos` },
      { "@type": "ListItem", position: 3, name: "Galeria", item: `${SITE_URL}/#galeria` },
      { "@type": "ListItem", position: 4, name: "Workshop", item: `${SITE_URL}/#workshop` },
      { "@type": "ListItem", position: 5, name: "Contato", item: `${SITE_URL}/#contato` },
    ],
  }

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Curso / Workshop de Barbearia - Barbearia do Alemão",
    description:
      "Curso de barbearia ministrado pelo Alemão em 4 domingos consecutivos, das 13h às 18h. Conteúdo prático: cortes masculinos, degradê, fade, barba e finalização. Certificado válido em todo o Brasil.",
    provider: {
      "@type": "Organization",
      name: "Barbearia do Alemão",
      sameAs: SITE_URL,
    },
    courseMode: "Presencial",
    educationalLevel: "Iniciante a intermediário",
    inLanguage: "pt-BR",
    locationCreated: {
      "@type": "Place",
      name: "Barbearia do Alemão",
      address: {
        "@type": "PostalAddress",
        streetAddress: ENDERECO.rua,
        addressLocality: "Osasco",
        addressRegion: "SP",
        postalCode: ENDERECO.cep,
        addressCountry: "BR",
      },
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Presencial",
      courseWorkload: "PT20H",
      location: {
        "@type": "Place",
        name: "Barbearia do Alemão",
        address: {
          "@type": "PostalAddress",
          streetAddress: ENDERECO.rua,
          addressLocality: "Osasco",
          addressRegion: "SP",
          postalCode: ENDERECO.cep,
          addressCountry: "BR",
        },
      },
    },
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Onde fica a Barbearia do Alemão?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Estamos na Av. Novo Osasco, 1512 - Novo Osasco, Osasco - SP, CEP 06056-270.",
        },
      },
      {
        "@type": "Question",
        name: "Qual o horário de funcionamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De segunda a sexta das 9h às 19h30 e aos sábados das 8h às 13h. Aos domingos a barbearia recebe as turmas do curso.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona a barba na Barbearia do Alemão?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não fazemos a barba na toalha. Utilizamos 4 produtos aplicados em forma de massagem em um processo que cuida da barba e da pele do cliente.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto custa um corte na Barbearia do Alemão?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Corte R$40, Barba R$35, Combo Corte+Barba R$65, Pezinho R$20, Relaxamento R$40 e Sobrancelha R$20.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o curso de barbearia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "São 4 domingos consecutivos das 13h às 18h, com conteúdo prático e certificado válido em todo o Brasil.",
        },
      },
      {
        "@type": "Question",
        name: "Como agendar um horário?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agende diretamente pelo WhatsApp (11) 98380-6066 ou ligue para o mesmo número.",
        },
      },
    ],
  }

  const data = [localBusiness, website, breadcrumb, course, faq]

  return (
    <>
      {data.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
