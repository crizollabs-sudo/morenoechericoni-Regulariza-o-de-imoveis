import { Reveal } from "@/components/ui/reveal"

const stats = [
  { value: "+20", label: "Anos de experiência" },
  { value: "OAB/SP", label: "189.561 · 175.057. Advogados registrados" },
  { value: "100%", label: "Atendimento online e presencial" },
]

export function CredBar() {
  return (
    <div className="bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl px-4 py-7 sm:px-6 sm:py-9">
        <div className="grid grid-cols-3 items-center gap-2 sm:gap-0">
          {stats.map((s, i) => (
            <Reveal key={i} direction="up" delay={i * 80}>
              <div className="text-center px-1 sm:px-8">
                <div className="mb-1 font-black text-[#c9a961] text-base leading-none sm:text-2xl">{s.value}</div>
                <div className="mx-auto max-w-[7.5rem] text-[0.56rem] font-bold uppercase leading-[1.15] tracking-[0.08em] text-[#B8B8B8] sm:max-w-none sm:text-[0.68rem]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}