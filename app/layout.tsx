import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  "metadataBase": new URL("https://imoveis.morenoechericoni.com.br/"),
  "title": "Regularização de Imóveis em São Bernardo | Moreno & Chericoni",
  "description": "Atuação em regularização de imóveis, usucapião, escritura e questões imobiliárias de herança. Moreno & Chericoni em São Bernardo do Campo.",
  "alternates": {
    "canonical": "https://imoveis.morenoechericoni.com.br/"
  },
  "authors": [
    {
      "name": "Moreno & Chericoni Advogados"
    }
  ],
  "openGraph": {
    "title": "Regularização de Imóveis em São Bernardo | Moreno & Chericoni",
    "description": "Atuação em regularização de imóveis, usucapião, escritura e questões imobiliárias de herança. Moreno & Chericoni em São Bernardo do Campo.",
    "url": "https://imoveis.morenoechericoni.com.br/",
    "siteName": "Moreno & Chericoni Advogados",
    "locale": "pt_BR",
    "type": "website"
  },
  "twitter": {
    "card": "summary",
    "title": "Regularização de Imóveis em São Bernardo | Moreno & Chericoni",
    "description": "Atuação em regularização de imóveis, usucapião, escritura e questões imobiliárias de herança. Moreno & Chericoni em São Bernardo do Campo."
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [{ url: '/logo.webp' }],
    apple: '/logo.webp',
  }
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="gtm-script" strategy="lazyOnload">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJTFN3WW');`}</Script>
      </head>
      <body className={`${geist.className} antialiased`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJTFN3WW" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <script id="seo-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://morenoechericoni.com.br/#organization\",\"name\":\"Moreno & Chericoni Advogados\",\"url\":\"https://morenoechericoni.com.br/\"},{\"@type\":\"WebPage\",\"@id\":\"https://imoveis.morenoechericoni.com.br/#webpage\",\"url\":\"https://imoveis.morenoechericoni.com.br/\",\"name\":\"Regularização de Imóveis em São Bernardo | Moreno & Chericoni\",\"description\":\"Atuação em regularização de imóveis, usucapião, escritura e questões imobiliárias de herança. Moreno & Chericoni em São Bernardo do Campo.\",\"inLanguage\":\"pt-BR\",\"publisher\":{\"@id\":\"https://morenoechericoni.com.br/#organization\"}}]}" }} />
        {children}
      </body>
    </html>
  )
}