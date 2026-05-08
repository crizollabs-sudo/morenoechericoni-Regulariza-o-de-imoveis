import { Building2, CheckCircle2, UserRound } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const audiences = [
  {
    icon: UserRound,
    title: "Pessoa Física",
    desc: "Apoio jurídico para proteger patrimônio, regularizar imóveis e tomar decisões com segurança.",
    items: ["Proprietários buscando regularização", "Herdeiros em processos sucessórios", "Investidores em leilões"],
  },
  {
    icon: Building2,
    title: "Empresas",
    desc: "Estratégia jurídica para operações, ativos imobiliários e prevenção de riscos patrimoniais.",
    items: ["Construtoras, incorporadoras e loteadoras", "Negócios de pequeno e médio porte com imóveis", "Empresas que precisam prevenir riscos patrimoniais"],
  },
]

export function Irregularidades() {
  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal direction="up" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#c9a961]" />
            <span className="text-[#c9a961] text-sm font-bold uppercase tracking-widest">Para quem atendemos</span>
          </div>
          <div>
            <h2 className="max-w-6xl text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-white leading-tight">
              <span className="block">Proteção jurídica para quem compra,</span>
              <span className="block">vende, regulariza ou administra imóveis.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {audiences.map((audience, i) => (
            <Reveal key={audience.title} direction={i === 0 ? "right" : "left"} delay={i * 100} className="group bg-[#111] border border-[#1f1f1f] rounded-2xl p-7 sm:p-8 hover:border-[#c9a961]/40 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center flex-shrink-0">
                  <audience.icon className="w-7 h-7 text-[#c9a961]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">{audience.title}</h3>
                  <p className="text-[#737373] leading-relaxed">{audience.desc}</p>
                </div>
              </div>
              <div className="space-y-3 border-t border-[#1f1f1f] pt-5">
                {audience.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[#a3a3a3] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a961] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
