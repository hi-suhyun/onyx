import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { DemoSlideSection } from "@/components/sections/demo-slide-section"
import { PainPointSection } from "@/components/sections/pain-point-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <DemoSlideSection />
      <PainPointSection />
      <CTASection />
      <Footer />
    </main>
  )
}
