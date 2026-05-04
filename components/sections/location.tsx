"use client"

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

const WA_LINK = "https://wa.me/5511990267173?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20Banc%C3%A1rio."

export function Location() {
  return (
    <section id="contato" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#c9a961]" />
            <span className="text-[#c9a961] text-sm font-bold uppercase tracking-widest">Localização</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Onde nos encontrar
          </h2>
          <p className="text-[#a3a3a3] mt-3 text-lg">
            Atendemos presencialmente em São Bernardo do Campo e online para todo o Brasil.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 border border-[#1f1f1f]">
          <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#1f1f1f]">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c9a961]" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Endereço</p>
                  <p className="text-[#a3a3a3]">Avenida Índico, 86 — Sala 42</p>
                  <p className="text-[#a3a3a3]">Jardim do Mar · São Bernardo do Campo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#c9a961]" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">WhatsApp</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#c9a961] transition-colors block">
                    (11) 99026-7173
                  </a>
                  <p className="text-[#a3a3a3] text-sm">(11) 91457-0777</p>
                  <p className="text-[#a3a3a3] text-sm">(11) 9 6517-9450</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#c9a961]" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Telefone Fixo</p>
                  <p className="text-[#a3a3a3]">(11) 4399-2531</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c9a961]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#c9a961]" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">E-mail</p>
                  <a href="mailto:advocaciamorenoechericoni@gmail.com" className="text-[#a3a3a3] hover:text-[#c9a961] transition-colors break-all">
                    advocaciamorenoechericoni@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-80 lg:h-auto min-h-[360px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0!2d-46.5652!3d-23.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQyJzAwLjAiUyA0NsKwMzMnNTQuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
