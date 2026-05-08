import { ArrowRight, FileSearch, MessageSquare, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Imobili%C3%A1rio."

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Conversa inicial",
    desc: "Entendemos a operação, o imóvel, os documentos disponíveis e o risco jurídico envolvido.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Análise documental",
    desc: "Revisamos contratos, matrícula, certidões, registros e demais documentos relevantes para o caso.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Estratégia jurídica",
    desc: "Indicamos os caminhos mais seguros para prevenir prejuízos, regularizar o imóvel ou resolver o conflito.",
  },
]

export function Steps() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 section-beige-alt">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="up" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#c9a961]" />
            <span className="text-[#9A783A] text-sm font-bold uppercase tracking-widest">Processo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] max-w-2xl">
            Como conduzimos a análise imobiliária
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 bg-[#BDAE95] border border-[#BDAE95]">
          {steps.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={i * 80} className="bg-[#E8E0D4] p-8 sm:p-9 relative group border border-[#BDAE95] hover:bg-[#DDD5C5] transition-colors">
              <s.icon className="w-7 h-7 text-[#9A783A] mb-5" />
              <span className="text-6xl font-black text-[#9A783A]/55 leading-none select-none block mb-4">{s.number}</span>
              <div className="w-8 h-0.5 bg-[#c9a961] mb-4" />
              <h3 className="text-lg font-black text-[#1A1A1A] mb-2 leading-tight">{s.title}</h3>
              <p className="text-[#51473D] text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={300}>
          <div className="mt-10 text-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex w-full sm:w-auto max-w-full items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1ebd5c] text-white font-bold text-sm sm:text-base px-5 sm:px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#25d366]/25 text-center">
              Falar com especialista
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}