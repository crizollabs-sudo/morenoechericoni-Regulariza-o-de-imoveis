import { FilePenLine, Home, MapPinned, ShieldCheck, UsersRound } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const services = [
  {
    icon: Home,
    title: "Usucapião",
    desc: "Para quem possui um imóvel há anos sem escritura formal. A usucapião é o instrumento jurídico que permite transformar a posse contínua em propriedade registrada. Atuamos nas modalidades ordinária, extraordinária, especial urbana, especial rural e familiar.",
  },
  {
    icon: MapPinned,
    title: "Regularização Fundiária",
    desc: "Para imóveis em loteamentos irregulares, contratos de gaveta ou situações sem registro em cartório. Orientamos sobre os procedimentos cabíveis, incluindo a REURB, para garantir que o imóvel passe a ter existência legal plena.",
  },
  {
    icon: FilePenLine,
    title: "Atualização e Correção de Escritura",
    desc: "Divergências de área, dados desatualizados ou erros no registro podem travar uma venda ou um financiamento. Cuidamos da regularização documental para que o imóvel reflita a realidade com precisão.",
  },
  {
    icon: UsersRound,
    title: "Inventário e Transmissão para Herdeiros",
    desc: "Imóvel sem inventário formalizado não pode ser transferido com segurança. Orientamos herdeiros sobre os procedimentos corretos para garantir a titularidade de cada bem.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção contra Penhoras e Gravames",
    desc: "Irregularidades documentais deixam o imóvel exposto a bloqueios e restrições. Atuamos na identificação e resolução dessas pendências para assegurar a posse tranquila do proprietário.",
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
            Como podemos orientar você
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={i * 70} className={`group flex min-h-[260px] flex-col items-center justify-center text-center bg-white border border-[#C7B89F] rounded-2xl p-5 sm:p-6 hover:border-[#c9a961]/70 hover:shadow-md hover:shadow-[#c9a961]/10 transition-all duration-300 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}>
              <div className="w-12 h-12 rounded-2xl bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center mb-4 group-hover:bg-[#c9a961]/15 group-hover:border-[#c9a961]/35 transition-all duration-300">
                <s.icon className="w-5 h-5 text-[#c9a961]" />
              </div>
              <h3 className="font-black text-[#1A1A1A] text-[0.95rem] mb-2 leading-snug">{s.title}</h3>
              <p className="text-[#51473D] text-[0.82rem] leading-relaxed max-w-sm">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
