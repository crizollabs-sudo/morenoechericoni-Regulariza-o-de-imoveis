"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Imobili%C3%A1rio."

const navLinks = [
  { href: "#areas", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current

      if (currentY < 80) {
        setVisible(true)
      } else if (delta > 8) {
        setVisible(false)
        setIsOpen(false)
      } else if (delta < -8) {
        setVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-[#F0EAE0]/95 backdrop-blur-sm border-b border-[#C7B89F] transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="container mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <div className="bg-[#1A1A1A] rounded-lg px-3 py-2">
              <Image src="/logo.webp" alt="Moreno & Chericoni Advogados" width={52} height={52} className="object-contain" />
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#51473D] hover:text-[#1A1A1A] transition-colors font-semibold tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center gap-2.5 bg-[#25d366] hover:bg-[#1ebd5c] text-white text-sm font-bold px-6 py-3 rounded-full transition-all hover:gap-4">
            Falar com especialista
            <ArrowRight className="w-4 h-4" />
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-11 h-11 flex items-center justify-center text-[#51473D] hover:text-[#1A1A1A] transition-colors" aria-label="Menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {isOpen && <div className="fixed inset-0 z-40 lg:hidden bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />}

      <div className={`fixed top-20 left-0 right-0 z-40 lg:hidden bg-[#F0EAE0] border-b border-[#C7B89F] transition-all duration-200 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
        <div className="container mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="py-3 px-4 text-[#51473D] hover:text-[#1A1A1A] hover:bg-[#E8E0D4] rounded-lg transition-colors font-semibold">
              {l.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-[#C7B89F]">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex items-center justify-between w-full px-4 py-3.5 bg-[#25d366] hover:bg-[#1ebd5c] text-white font-bold rounded-full transition-colors">
              <span>Falar com especialista</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}