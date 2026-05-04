"use client"

import { Scale, Shield, Users } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const reasons = [
  {
    number: "01",
    icon: Scale,
    title: "Especialização real em Direito Bancário",
    desc: "Mais de 20 anos atuando em casos bancários — sem generalismo, sem improvisação. Conhecemos cada contrato, cada cláusula e cada irregularidade que os bancos tentam esconder.",
  },
  {
    number: "02",
    icon: Shield,
    title: "O banco conta com o seu desconhecimento",
    desc: "Cobranças indevidas, empréstimos fraudulentos, refinanciamentos abusivos — cada situação tem solução jurídica. Nós identificamos o que você não vê e cobramos o que é seu por direito.",
  },
  {
    number: "03",
    icon: Users,
    title: "Atendimento direto, sem enrolação",
    desc: "Você fala com quem vai tratar do seu caso. Sem intermediários, sem respostas prontas. Da análise do extrato até a conclusão do processo, você sabe exatamente o que está acontecendo.",
  },
]

export function Why() {
  return (
    <section className="py-16 sm:py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <Reveal direction="up" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#c9a961]" />
            <span className="text-[#c9a961] text-sm font-bold uppercase tracking-widest">Diferenciais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white max-w-2xl">
            Por que confiar o seu caso a um especialista?
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-px bg-[#1f1f1f]">
          {reasons.map((r, i) => (
            <Reveal
              key={i}
              direction="up"
              delay={i * 100}
              className="bg-[#0d0d0d] p-8 sm:p-10"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl font-black text-[#c9a961]/20 leading-none select-none">{r.number}</span>
                <div className="w-12 h-12 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <r.icon className="w-6 h-6 text-[#c9a961]" />
                </div>
              </div>
              <div className="w-8 h-0.5 bg-[#c9a961] mb-4" />
              <h3 className="text-xl font-black text-white mb-3 leading-tight">{r.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
