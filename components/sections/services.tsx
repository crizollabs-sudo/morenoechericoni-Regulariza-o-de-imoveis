"use client"

import { Reveal } from "@/components/ui/reveal"
import {
  FileText,
  ShieldAlert,
  TrendingDown,
  RefreshCw,
  BadgeX,
  Undo2,
} from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Revisão de empréstimos consignados",
    desc: "Olhamos seu contrato linha por linha pra identificar cobranças irregulares, descontos a mais e cláusulas que não combinam com o que você assinou.",
  },
  {
    icon: ShieldAlert,
    title: "Cancelamento de fraude e empréstimos não reconhecidos",
    desc: "Apareceu um empréstimo no seu CPF que você nunca contratou? A gente cancela o contrato, para o desconto e processa o banco pra te devolver tudo o que foi tirado.",
  },
  {
    icon: TrendingDown,
    title: "Revisão de juros abusivos",
    desc: "Banco é obrigado a respeitar os limites do Banco Central. Quando passa disso, dá pra reduzir a parcela e cobrar a diferença que você já pagou a mais.",
  },
  {
    icon: RefreshCw,
    title: "Refinanciamento em cascata",
    desc: "Seu empréstimo foi refinanciado várias vezes e a dívida só cresce? Cada refinanciamento pode esconder tarifa, IOF e juros sobre juros. A gente revisa tudo e cobra de volta.",
  },
  {
    icon: BadgeX,
    title: "Contrato fechado por agente sem autorização",
    desc: "A lei exige que quem oferece consignado seja certificado. Se quem te abordou não tinha essa autorização, o contrato pode ser anulado e o desconto, encerrado.",
  },
  {
    icon: Undo2,
    title: "Devolução do que foi cobrado a mais",
    desc: "Identificada a irregularidade, a gente entra com a ação pra você receber de volta. Em vários casos, a devolução é em dobro do que foi descontado indevidamente.",
  },
]

export function Services() {
  return (
    <section id="areas" className="py-16 sm:py-24 section-beige">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal direction="up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#c9a961]" />
            <span className="text-[#9A783A] text-xs font-bold uppercase tracking-[0.2em]">Áreas de Atuação</span>
            <span className="w-6 h-[2px] bg-[#c9a961]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A]">
            Como podemos te ajudar?
          </h2>
          <p className="text-[#51473D] mt-4 text-lg max-w-2xl mx-auto">
            Atuamos em todas as frentes do consignado pra proteger aposentados, pensionistas e servidores que foram lesados por bancos e financeiras.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal
              key={i}
              direction="up"
              delay={i * 60}
              className="group flex flex-col items-center text-center bg-white border border-[#C7B89F] rounded-2xl p-6 sm:p-7 hover:border-[#c9a961]/60 hover:shadow-md hover:shadow-[#c9a961]/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#c9a961]/15 border border-[#c9a961]/35 flex items-center justify-center mb-4 group-hover:bg-[#c9a961]/20 group-hover:border-[#c9a961]/50 transition-all duration-300">
                <s.icon className="w-6 h-6 text-[#9A783A]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-base mb-2 leading-snug">{s.title}</h3>
              <p className="text-[#51473D] text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
