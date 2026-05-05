import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

const lawyers = [
  {
    name: "Dra. Fabiula Chericoni",
    oab: "OAB/SP 189.561",
    years: "20",
    bio: "Advogada há 20 anos. Formada pela Universidade do Grande ABC e especialista em Direito Processual Civil pela Escola Paulista de Direito. Atuação em causas bancárias com foco em defesa do consumidor e litígios contra instituições financeiras.",
    highlight: "Autora do livro: Manual de Conscientização Previdenciária para Mulheres.",
    bookCover: "/livro-fabiula-capa.jpg",
    bookAlt: "Manual de Conscientização Previdenciária para Mulheres",
    image: "/fotofabiula.jpg",
  },
  {
    name: "Dr. Nilton Moreno",
    oab: "OAB/SP 175.057",
    years: "21",
    bio: "Advogado há 21 anos. Formado pela Universidade do Grande ABC e especialista em Direito Previdenciário pela FMU. Membro-efetivo da Comissão de Direito Previdenciário OAB/SBC.",
    highlight: "Autor do livro: Guia da Aposentadoria da Pessoa com Deficiência.",
    bookCover: "/livro-nilton-capa.jpg",
    bookAlt: "Guia da Aposentadoria da Pessoa com Deficiência",
    image: "/fotonilton.jpg",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <Reveal direction="up" className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#c9a961]" />
            <span className="text-[#c9a961] text-sm font-bold uppercase tracking-widest">Equipe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Quem vai cuidar do seu caso
          </h2>
        </Reveal>

        <div className="space-y-6">
          {lawyers.map((lawyer, index) => (
            <Reveal
              key={index}
              direction={index % 2 === 0 ? "right" : "left"}
              delay={index * 120}
              className="flex flex-col sm:flex-row bg-[#111] border-l-4 border-[#c9a961] overflow-hidden"
            >
              <div className="relative w-full sm:w-56 flex-shrink-0 aspect-[4/3] sm:aspect-auto sm:h-64">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-white mb-1">{lawyer.name}</h3>
                  <p className="text-[#c9a961] font-bold text-sm mb-2">{lawyer.oab}</p>
                  <div className="inline-flex items-center gap-2 bg-[#c9a961]/10 px-3 py-1 text-xs text-[#c9a961] font-semibold uppercase tracking-wider">
                    {lawyer.years} anos de experiência
                  </div>
                </div>
                <p className="text-[#D0D0D0] leading-relaxed mb-4">{lawyer.bio}</p>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#c9a961]/10 border border-[#c9a961]/30">
                  <Image
                    src={lawyer.bookCover}
                    alt={lawyer.bookAlt}
                    width={36}
                    height={50}
                    className="rounded object-cover flex-shrink-0 shadow-md"
                  />
                  <p className="text-[#D0D0D0] text-sm font-medium">{lawyer.highlight}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
