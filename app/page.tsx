import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SupportSection } from "@/components/home/support-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { EnvironmentSection } from "@/components/home/environment-section"
import { LeadersSection } from "@/components/home/leaders-section"
import { FrameworksSection } from "@/components/home/frameworks-section"
import { TrustSection } from "@/components/home/trust-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <SupportSection />
        <ServicesOverview />
        <EnvironmentSection />
        <LeadersSection />
        <FrameworksSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
