import { ArrowRight, Home } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Preciso%20de%20um%20advogado%20especialista%20em%20Direito%20Imobili%C3%A1rio."

export function CtaFinal() {
  return (
    <section className="py-16 sm:py-24 section-beige relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/bg-cta-contract.jpg" alt="" fill className="object-cover object-center opacity-[0.08] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0EAE0]/95 via-[#F0EAE0]/82 to-[#E6DAC8]/94" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0EAE0]/60 via-transparent to-[#E6DAC8]/70" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#c9a961] to-transparent z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <div className="max-w-3xl">
          <Reveal direction="down">
            <div className="flex items-center gap-3 mb-8">
              <Home className="w-4 h-4 text-[#c9a961]" />
              <span className="text-[#c9a961] text-xs font-bold uppercase tracking-[0.2em]">Direito Imobiliário</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#1A1A1A] leading-[1.1] mb-6">
              Precisa de um advogado especialista em <em className="not-italic text-[#c9a961]">Direito Imobiliário?</em>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={180}>
            <div className="w-12 h-[2px] bg-[#c9a961] mb-8" />
            <div className="border-l-2 border-[#c9a961]/70 pl-5 mb-10 py-1">
              <p className="text-[#51473D] text-lg leading-relaxed">
                Clique abaixo e fale com um dos nossos especialistas.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={280}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex w-full sm:w-auto max-w-full items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1ebd5c] text-white font-bold text-sm sm:text-base px-5 sm:px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#25d366]/25 text-center">
              Falar com especialista
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
