import { Building2, FileText, Gavel, Home, KeyRound, SearchCheck } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const services = [
  {
    icon: FileText,
    title: "Contratos Imobiliários",
    desc: "Elaboração e revisão de contratos de compra, venda, permuta, locação e parceria imobiliária com cláusulas mais seguras.",
  },
  {
    icon: SearchCheck,
    title: "Due Diligence e Registros",
    desc: "Análise completa do imóvel, das partes e da documentação para identificar pendências e prevenir fraudes.",
  },
  {
    icon: Home,
    title: "Usucapião e Regularização",
    desc: "Regularização de posse, matrícula, área construída e situação registral para valorizar e proteger o patrimônio.",
  },
  {
    icon: KeyRound,
    title: "Locação e Despejo",
    desc: "Atuação em contratos, inadimplência, garantias e retomada do imóvel com estratégia para locadores e locatários.",
  },
  {
    icon: Gavel,
    title: "Leilão de Imóveis",
    desc: "Assessoria antes, durante e depois da arrematação para evitar dívidas ocultas, nulidades e problemas de posse.",
  },
  {
    icon: Building2,
    title: "Direito Condominial",
    desc: "Suporte para condomínios, síndicos, administradoras e condôminos em conflitos, cobranças e regras internas.",
  },
]

export function Services() {
  return (
    <section id="areas" className="py-16 sm:py-24 section-beige">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#c9a961]" />
            <span className="text-[#9A783A] text-xs font-bold uppercase tracking-[0.2em]">Serviços</span>
            <span className="w-6 h-[2px] bg-[#c9a961]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A]">
            Como podemos proteger o seu imóvel?
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={i * 70} className="group flex min-h-[228px] flex-col items-center justify-center text-center bg-white border border-[#C7B89F] rounded-2xl p-6 sm:p-7 hover:border-[#c9a961]/70 hover:shadow-md hover:shadow-[#c9a961]/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center mb-5 group-hover:bg-[#c9a961]/15 group-hover:border-[#c9a961]/35 transition-all duration-300">
                <s.icon className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="font-black text-[#1A1A1A] text-base mb-3 leading-snug">{s.title}</h3>
              <p className="text-[#51473D] text-sm leading-relaxed max-w-sm">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}