"use client"

import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Banc%C3%A1rio."

const steps = [
  {
    number: "01",
    title: "Conversa inicial",
    desc: "Agendamos uma conversa rápida para entender a sua situação. Sem julgamento, sem compromisso.",
  },
  {
    number: "02",
    title: "Levantamento do extrato",
    desc: "Obtemos o extrato de empréstimos pelo Meu INSS — um raio-x completo de tudo que está vinculado ao seu CPF.",
  },
  {
    number: "03",
    title: "Identificação dos contratos",
    desc: "Mapeamos todos os contratos de crédito vinculados ao seu nome, incluindo os que você talvez não reconheça.",
  },
  {
    number: "04",
    title: "Solicitação junto aos bancos",
    desc: "Quando necessário, solicitamos os contratos diretamente às instituições financeiras para análise completa.",
  },
  {
    number: "05",
    title: "Análise técnica",
    desc: "Examinamos cada operação em detalhes — taxas, encargos, cláusulas abusivas, irregularidades na contratação.",
  },
  {
    number: "06",
    title: "Orientação jurídica clara",
    desc: "Apresentamos os resultados em linguagem simples: o que encontramos, o que é possível fazer e quais são os próximos passos.",
  },
]

export function Steps() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal direction="up" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#c9a961]" />
            <span className="text-[#c9a961] text-sm font-bold uppercase tracking-widest">Processo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white max-w-2xl">
            Como funciona o atendimento
          </h2>
          <p className="text-[#737373] mt-4 text-lg max-w-2xl">
            Do primeiro contato até a conclusão do caso — um processo transparente, do início ao fim.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1f1f1f]">
          {steps.map((s, i) => (
            <Reveal
              key={i}
              direction="up"
              delay={i * 80}
              className="bg-[#0a0a0a] p-8 sm:p-9 relative group hover:bg-[#0d0d0d] transition-colors"
            >
              <span className="text-6xl font-black text-[#c9a961]/10 leading-none select-none block mb-4">
                {s.number}
              </span>
              <div className="w-8 h-0.5 bg-[#c9a961] mb-4" />
              <h3 className="text-lg font-black text-white mb-2 leading-tight">{s.title}</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={500}>
          <div className="mt-10 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebd5c] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#25d366]/25"
            >
              Começar agora pelo WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-[#525252] text-sm mt-4">
              Se você já tem o extrato do Meu INSS ou os contratos, a análise começa na mesma hora.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
