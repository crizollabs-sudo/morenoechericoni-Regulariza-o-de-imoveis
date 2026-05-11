import { Award, Layers3, Shield, Users } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const reasons = [
  { number: "01", icon: Award, title: "Foco exclusivo em Direito Imobiliário", desc: "Toda a experiência da equipe está concentrada nas questões que envolvem imóveis, o que permite uma atuação mais precisa e fundamentada em cada situação." },
  { number: "02", icon: Users, title: "Atendimento próximo e personalizado", desc: "Cada caso recebe atenção direta dos advogados responsáveis, sem intermediários, desde o diagnóstico inicial até a conclusão do processo." },
  { number: "03", icon: Shield, title: "Transparência em cada etapa", desc: "Você é informado sobre o andamento do processo de forma clara, sem jargão desnecessário e sem surpresas." },
  { number: "04", icon: Layers3, title: "Atendimento presencial e online", desc: "Sede em São Bernardo do Campo, com atendimento para todo o Brasil por videoconferência." },
]

export function Why() {
  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <Reveal direction="up" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#c9a961]" />
            <span className="text-[#9A783A] text-sm font-bold uppercase tracking-widest">Por que nos escolher</span>
          </div>
          <h2 className="max-w-7xl text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-white leading-tight">
            Segurança jurídica com atenção ao seu caso.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} direction="up" delay={i * 100} className="group flex min-h-[230px] flex-col items-center justify-center text-center bg-[#111] border border-[#1f1f1f] rounded-2xl p-7 sm:p-8 hover:border-[#c9a961]/50 transition-all duration-300">
              <h3 className="text-xl font-black text-white mb-3 leading-tight">{r.title}</h3>
              <p className="text-[#8a8a8a] leading-relaxed text-sm">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
