"use client"

import { Reveal } from "@/components/ui/reveal"
import {
  FileText,
  CreditCard,
  SearchCheck,
  ShieldAlert,
  ArrowRightLeft,
  ScanSearch,
} from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Revisão de empréstimos consignados",
    desc: "Identificamos cobranças irregulares em contratos de empréstimo consignado — inclusive descontos em aposentadoria ou salário feitos sem sua autorização.",
  },
  {
    icon: CreditCard,
    title: "Empréstimos pessoais e financiamentos",
    desc: "Analisamos se as taxas, encargos e condições do seu contrato estão dentro dos limites legais. Qualquer abuso pode ser revertido na Justiça.",
  },
  {
    icon: SearchCheck,
    title: "Cobranças indevidas em contratos bancários",
    desc: "Tarifas não contratadas, seguros embutidos sem consentimento, IOF acima do permitido — cobramos a devolução de tudo que foi cobrado indevidamente.",
  },
  {
    icon: ScanSearch,
    title: "Verificação da regularidade do crédito",
    desc: "Verificamos se a contratação seguiu todas as exigências legais: informação clara, documentação adequada, agente habilitado e certificação válida.",
  },
  {
    icon: ShieldAlert,
    title: "Fraude e empréstimos não reconhecidos",
    desc: "Empréstimo no seu CPF que você não contratou? Atuamos para cancelar o contrato, responsabilizar o banco e reaver os valores descontados indevidamente.",
  },
  {
    icon: ArrowRightLeft,
    title: "Revisão de refinanciamentos sucessivos",
    desc: "Refinanciamentos em cadeia podem esconder cobranças abusivas e juros sobre juros. Fazemos uma análise completa para identificar e corrigir cada irregularidade.",
  },
]

export function Services() {
  return (
    <section id="areas" className="py-16 sm:py-24 bg-[#0d0d0d]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal direction="up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#c9a961]" />
            <span className="text-[#c9a961] text-xs font-bold uppercase tracking-[0.2em]">Áreas de Atuação</span>
            <span className="w-6 h-[2px] bg-[#c9a961]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Como podemos te ajudar?
          </h2>
          <p className="text-[#737373] mt-4 text-lg max-w-2xl mx-auto">
            Atuamos em todas as frentes do Direito Bancário para proteger quem foi lesado por práticas abusivas de bancos e financeiras.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal
              key={i}
              direction="up"
              delay={i * 60}
              className="group flex flex-col items-center text-center bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 sm:p-7 hover:border-[#c9a961]/40 hover:bg-[#141414] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#c9a961]/10 border border-[#c9a961]/15 flex items-center justify-center mb-4 group-hover:bg-[#c9a961]/15 group-hover:border-[#c9a961]/30 transition-all duration-300">
                <s.icon className="w-6 h-6 text-[#c9a961]" />
              </div>
              <h3 className="font-bold text-white text-base mb-2 leading-snug">{s.title}</h3>
              <p className="text-[#737373] text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
