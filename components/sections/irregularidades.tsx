"use client"

import { Reveal } from "@/components/ui/reveal"
import { AlertTriangle } from "lucide-react"

const flags = [
  {
    title: "Divergência entre o contratado e o cobrado",
    desc: "As parcelas do seu contrato não batem com o que foi combinado? Isso é irregularidade — e pode ser cobrado judicialmente.",
  },
  {
    title: "Empréstimos desconhecidos no seu CPF",
    desc: "Encontrou contratos de crédito vinculados ao seu nome que você não reconhece? É possível que sejam fraudulentos — e você tem direito a contestar.",
  },
  {
    title: "Assinaturas suspeitas ou fraudulentas",
    desc: "Se há contratos assinados no seu nome sem o seu conhecimento, isso configura fraude. A responsabilidade é do banco, não sua.",
  },
  {
    title: "Agente sem habilitação ou certificação",
    desc: "A lei exige que quem oferece crédito seja certificado. Se o contrato foi fechado por um agente sem certificação válida, ele pode ser anulado.",
  },
  {
    title: "Cobranças em operações de refinanciamento",
    desc: "Refinanciamentos mal explicados ou em cascata costumam esconder encargos extras. Cada refinanciamento feito com irregularidade pode ser revisado.",
  },
]

export function Irregularidades() {
  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal direction="up" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-red-500" />
            <span className="text-red-400 text-sm font-bold uppercase tracking-widest">Sinais de Alerta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white max-w-2xl">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="text-[#737373] mt-4 text-lg max-w-2xl">
            Se sim, pode ser que você esteja sendo lesado. Cada um desses casos tem solução jurídica.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flags.map((f, i) => (
            <Reveal
              key={i}
              direction="up"
              delay={i * 70}
              className={`group bg-[#111] border rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-[#141414] ${
                i === flags.length - 1 && flags.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              } border-red-500/10 hover:border-red-500/30`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500/15 transition-all">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="font-bold text-white text-base leading-snug">{f.title}</h3>
              </div>
              <p className="text-[#737373] text-sm leading-relaxed pl-11">{f.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={400}>
          <div className="mt-10 p-6 sm:p-8 bg-[#c9a961]/5 border border-[#c9a961]/20 rounded-2xl">
            <p className="text-[#a3a3a3] text-center text-base sm:text-lg leading-relaxed">
              Reconheceu algum desses sinais?{" "}
              <span className="text-white font-semibold">
                Se você já tem o extrato do Meu INSS ou os contratos em mãos, podemos iniciar a análise de viabilidade agora mesmo.
              </span>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
