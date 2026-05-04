"use client"

import { ArrowRight, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Banc%C3%A1rio."

export function CtaFinal() {
  return (
    <section className="py-16 sm:py-24 bg-[#0d0d0d] relative overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-cta-contract.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-[0.15] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/70 to-[#0d0d0d]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-transparent to-[#0d0d0d]/60" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#c9a961] to-transparent z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <div className="max-w-3xl">
          <Reveal direction="down">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-bold uppercase tracking-[0.2em]">Atenção: cada mês que passa é dinheiro perdido</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-6">
              Não ignore um desconto que você não autorizou.{" "}
              <em className="not-italic text-[#c9a961]">Cada cobrança indevida tem prazo para ser cobrada.</em>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={180}>
            <div className="w-12 h-[2px] bg-[#c9a961] mb-8" />

            <div className="border-l-2 border-red-500/60 pl-5 mb-10 py-1">
              <p className="text-[#a3a3a3] text-lg leading-relaxed">
                Se você tem empréstimos no seu CPF que não reconhece, ou está pagando mais do que deveria em um financiamento,{" "}
                <span className="text-red-400 font-bold">não espere a dívida crescer.</span>{" "}
                Uma análise gratuita pode revelar o que o banco não quer que você saiba.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={280}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebd5c] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#25d366]/25"
            >
              Falar com advogado especialista
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
