import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsappFloat } from "@/components/layout/whatsapp-float"
import { HorizontalScrollLock } from "@/components/layout/horizontal-scroll-lock"
import { ScrollRevealController } from "@/components/layout/scroll-reveal-controller"
import { WhatsappClickTracker } from "@/components/layout/whatsapp-click-tracker"
import { Hero } from "@/components/sections/hero"
import { CredBar } from "@/components/sections/cred-bar"
import { Irregularidades } from "@/components/sections/irregularidades"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Why } from "@/components/sections/why"
import { CtaFinal } from "@/components/sections/cta-final"
import { Location } from "@/components/sections/location"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HorizontalScrollLock />
      <ScrollRevealController />
      <WhatsappClickTracker />
      <Header />
      <Hero />
      <CredBar />
      <Services />
      <Irregularidades />
      <About />
      <Why />
      <CtaFinal />
      <Location />
      <Footer />
      <WhatsappFloat />
    </main>
  )
}