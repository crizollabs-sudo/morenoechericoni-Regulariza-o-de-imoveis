"use client"

import { Reveal } from "@/components/ui/reveal"
import { AlertTriangle } from "lucide-react"

const flags = [
  {
    title: "A parcela não bate com o que foi combinado",
    desc: "Você assinou pra pagar um valor e o banco está descontando outro. Isso é irregularidade e dá pra cobrar a diferença na justiça.",
  },
  {
    title: "Empréstimo no seu nome que você não pediu",
    desc: "Apareceu um contrato vinculado ao seu CPF que você nunca contratou? Pode ser fraude. Você tem direito de contestar e parar o desconto.",
  },
  {
    title: "Contrato assinado no seu nome sem o seu conhecimento",
    desc: "Se alguém usou seu nome pra fechar um empréstimo, isso é fraude. A culpa é do banco que aceitou, não sua. E você não precisa pagar.",
  },
  {
    title: "Empréstimo oferecido por quem não tinha autorização",
    desc: "A lei só permite que pessoas certificadas ofereçam consignado. Se quem te procurou não tinha essa autorização, o contrato pode ser anulado.",
  },
  {
    title: "Refinanciamento que aumenta a dívida em vez de diminuir",
    desc: "Seu empréstimo já foi refinanciado várias vezes e a parcela só cresce? Refinanciamento em cascata costuma esconder juros e tarifas extras. Tudo isso pode ser revisado.",
  },
]

export function Irregularidades() {
  return (
    <section className="py-16 sm:py-24 section-beige-alt">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal direction="up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-red-500" />
            <span className="text-red-600 text-sm font-bold uppercase tracking-widest">Sinais de Alerta</span>
            <span className="w-6 h-[2px] bg-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] max-w-3xl mx-auto">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="text-[#51473D] mt-4 text-lg max-w-2xl mx-auto">
            Se reconhece pelo menos uma, vale a pena olhar seu contrato com atenção. Todos esses casos podem ser revertidos na justiça.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {flags.map((f, i) => (
            <Reveal
              key={i}
              direction="up"
              delay={i * 70}
              className={`group bg-white border border-red-200 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-red-300 hover:shadow-md hover:shadow-red-100 ${
                i < 3
                  ? "lg:col-span-2"
                  : i === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : "lg:col-span-2 lg:col-start-4"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-base leading-snug">{f.title}</h3>
              </div>
              <p className="text-[#51473D] text-sm leading-relaxed pl-11">{f.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={400}>
          <div className="mt-10 p-6 sm:p-8 bg-[#c9a961]/10 border border-[#c9a961]/30 rounded-2xl">
            <p className="text-[#1A1A1A] text-center text-base sm:text-lg leading-relaxed">
              Reconheceu algum desses sinais?{" "}
              <span className="text-[#1A1A1A] font-bold">
                Se você já tem o extrato do Meu INSS ou o contrato em mãos, a gente já começa a análise hoje mesmo.
              </span>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
