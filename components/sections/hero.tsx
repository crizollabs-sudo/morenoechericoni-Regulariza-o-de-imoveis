"use client"

import { ArrowRight, MapPin, Monitor } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Banc%C3%A1rio."

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 right-0 top-0 h-[52%] lg:hidden">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.30]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-[65%] hidden lg:block">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.28]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 bg-[#0a0a0a]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/85" />
      </div>

      {/* Linha de acento esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#c9a961] to-transparent z-10" />

      {/* Glow dourado sutil */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c9a961]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-24 lg:pt-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-0 items-center">

          {/* Texto */}
          <div className="pt-10 pb-4 lg:py-16">
            <Reveal direction="down" delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-6 h-[2px] bg-[#c9a961]" />
                <span className="text-[#c9a961] text-xs font-bold uppercase tracking-[0.2em]">Direito Bancário</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] mb-6">
                Seu banco pode estar{" "}
                <em className="not-italic text-[#c9a961]">te cobrando mais do que deveria.</em>{" "}
                A maioria dos clientes não percebe.{" "}
                <em className="not-italic text-[#c9a961]">E não cobra.</em>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <p className="text-[#737373] text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
                Contratos com cobranças indevidas, empréstimos que você não reconhece, refinanciamentos abusivos —
                cada uma dessas situações tem{" "}
                <span className="text-white font-semibold">solução jurídica.</span>{" "}
                Nós identificamos e cobramos por você.
              </p>
            </Reveal>

            <Reveal direction="up" delay={320}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebd5c] text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#25d366]/30 mb-10"
              >
                Quero analisar meu contrato agora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal direction="up" delay={420}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-[#525252]">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#c9a961]/50" />
                  <span>Online e presencial</span>
                </div>
                <div className="w-px h-4 bg-[#2a2a2a] hidden sm:block" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c9a961]/50" />
                  <span>São Bernardo do Campo - SP</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Foto */}
          <Reveal direction="left" delay={150} className="flex justify-center lg:justify-end">
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src="/hero-trabalhista.webp"
                alt="Advogados especialistas em Direito Bancário — Moreno & Chericoni"
                width={520}
                height={620}
                className="object-contain drop-shadow-2xl relative z-10"
                priority
              />

              {/* Badge experiência */}
              <div className="absolute bottom-6 left-0 lg:bottom-auto lg:top-[72%] lg:-translate-y-1/2 lg:-left-6 z-20 bg-[#111] border border-[#c9a961]/30 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-black text-[#c9a961]">+20</div>
                <div className="text-xs text-[#737373]">anos de experiência</div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
