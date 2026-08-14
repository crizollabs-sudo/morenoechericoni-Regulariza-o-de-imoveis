import { MessageCircle, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Imobili%C3%A1rio."

const areas = [
  "Usucapião",
  "Regularização Fundiária e REURB",
  "Inventário e Herança",
  "Correção de Escritura",
  "Contrato de Gaveta",
  "Cessão de Direitos Hereditários",
]

const nav = [
  { href: "#areas", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="section-beige border-t border-[#C7B89F]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Image src="/logo.webp" alt="Moreno & Chericoni Advogados" width={56} height={56} className="object-contain mb-4" />
            <p className="text-[#51473D] text-sm leading-relaxed mb-4">
              Escritório especializado em Direito Imobiliário, com atuação estratégica para proteger patrimônio, contratos e operações envolvendo imóveis.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25d366] text-white text-sm font-bold px-4 py-2.5 rounded-full hover:bg-[#1ebd5c] transition-colors">
              <MessageCircle className="w-4 h-4" />
              Falar com especialista
            </a>
          </div>

          <div className="hidden sm:block">
            <h4 className="font-bold text-[#1A1A1A] mb-4 text-sm uppercase tracking-wider border-l-2 border-[#c9a961] pl-3">Serviços</h4>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a}>
                  <a href="#areas" className="text-[#51473D] text-sm hover:text-[#9A783A] transition-colors">{a}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-4 text-sm uppercase tracking-wider border-l-2 border-[#c9a961] pl-3">Navegação</h4>
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#51473D] text-sm hover:text-[#9A783A] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold text-[#1A1A1A] mb-4 text-sm uppercase tracking-wider border-l-2 border-[#c9a961] pl-3">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c9a961] flex-shrink-0 mt-0.5" />
                <span className="text-[#51473D] text-sm">Av. Índico, 86, Sala 42<br />Jardim do Mar · SBC - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c9a961] flex-shrink-0" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#51473D] text-sm hover:text-[#9A783A] transition-colors">(11) 99026-7173</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c9a961] flex-shrink-0" />
                <span className="text-[#51473D] text-sm">(11) 4399-2531</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c9a961] flex-shrink-0" />
                <a href="mailto:advocaciamorenoechericoni@gmail.com" className="text-[#51473D] text-sm hover:text-[#9A783A] transition-colors break-all">advocaciamorenoechericoni@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#C7B89F] text-center space-y-2">
          <p className="text-sm text-[#51473D]">© {new Date().getFullYear()} Moreno & Chericoni Advogados. Todos os direitos reservados.</p>
          <p className="text-xs text-[#51473D]/80">
            OAB/SP 189.561 · OAB/SP 175.057. Este site não constitui propaganda de serviços advocatícios, conforme diretrizes do Código de Ética e Disciplina da OAB.
          </p>
        </div>
      </div>
    </footer>
  )
}
