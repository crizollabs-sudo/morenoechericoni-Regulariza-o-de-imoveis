"use client"

import { MessageCircle } from "lucide-react"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Imobili%C3%A1rio."

export function WhatsappFloat() {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 hidden lg:flex w-14 h-14 rounded-full bg-[#25d366] text-white items-center justify-center shadow-xl shadow-[#25d366]/20 hover:scale-110 transition-transform" aria-label="Falar pelo WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}