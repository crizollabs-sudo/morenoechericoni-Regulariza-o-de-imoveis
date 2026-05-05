"use client"

import { Reveal } from "@/components/ui/reveal"

const stats = [
  { value: "+20", label: "Anos de experiência" },
  { value: "OAB/SP", label: "189.561 · 175.057. Advogados registrados" },
  { value: "100%", label: "Atendimento online para todo o Brasil" },
]

export function CredBar() {
  return (
    <div className="bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#c9a961]/15">
          {stats.map((s, i) => (
            <Reveal key={i} direction="up" delay={i * 80}>
              <div className="text-center py-5 sm:py-0 sm:px-8 first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0">
                <div className="text-2xl sm:text-3xl font-black text-[#c9a961] mb-1">{s.value}</div>
                <div className="text-[#737373] text-xs uppercase tracking-wider leading-relaxed">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
