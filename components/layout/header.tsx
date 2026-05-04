"use client"

import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Banc%C3%A1rio."

const navLinks = [
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#sobre", label: "Quem Somos" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1f1f1f]">
        <div className="container mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">

          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="Moreno & Chericoni Advogados"
              width={52}
              height={52}
              className="object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#737373] hover:text-white transition-colors font-medium tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2.5 bg-[#25d366] hover:bg-[#1ebd5c] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:gap-4"
          >
            Falar com especialista
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#737373] hover:text-white transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed top-16 left-0 right-0 z-40 lg:hidden bg-[#0d0d0d] border-b border-[#1f1f1f] transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="container mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 text-[#a3a3a3] hover:text-white hover:bg-[#141414] rounded-lg transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-[#1f1f1f]">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full px-4 py-3.5 bg-[#25d366] hover:bg-[#1ebd5c] text-white font-bold rounded-full transition-colors"
            >
              <span>Falar com especialista</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
