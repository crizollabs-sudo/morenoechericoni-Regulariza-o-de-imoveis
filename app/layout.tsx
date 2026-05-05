import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Moreno & Chericoni Advogados | Especialistas em Direito Bancário',
  description: 'Advogados especialistas em Direito Bancário em São Bernardo do Campo. Revisão de contratos, cobranças indevidas, empréstimos fraudulentos e refinanciamentos. Atendemos presencialmente e online para todo o Brasil.',
  keywords: ['advogado bancário', 'direito bancário', 'revisão de contrato', 'empréstimo consignado', 'cobrança indevida', 'fraude bancária', 'empréstimo não reconhecido', 'São Bernardo do Campo'],
  authors: [{ name: 'Moreno & Chericoni Advogados' }],
  openGraph: {
    title: 'Moreno & Chericoni Advogados | Especialistas em Direito Bancário',
    description: 'Seu banco pode estar te cobrando mais do que deveria. A maioria dos clientes não percebe — e não cobra.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: 'index, follow',
  icons: {
    icon: [{ url: '/logo.webp' }],
    apple: '/logo.webp',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJTFN3WW"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
