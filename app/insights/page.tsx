import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ResourceCard } from "@/components/insights/resource-card"

export const metadata: Metadata = {
  title: "Briefings & Executive Resources | Fuller Horizons",
  description:
    "Executive briefings, governance frameworks, and advisory papers for leaders navigating risk and growth.",
}

const resources = [
  {
    title: "The Technology Alignment Gap",
    description:
      "A concise executive briefing on why most businesses overspend on technology that doesn't support their goals, and the strategic framework to close the gap.",
    downloadUrl: "#",
  },
  {
    title: "Vendor Governance Playbook",
    description:
      "A practical governance framework for business leaders who manage multiple technology vendors, covering accountability structures, performance metrics, and escalation protocols.",
    downloadUrl: "#",
  },
  {
    title: "Operational Risk in Plain English",
    description:
      "A leadership-level overview of the most common technology risks businesses face today, translated from technical jargon into clear, strategic language.",
    downloadUrl: "#",
  },
]

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1
              className="text-[40px] lg:text-[56px] font-medium text-[#0A1628] text-balance leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Strategic Clarity for Complex Decisions
            </h1>
            <div className="mx-auto mt-8 h-px w-16 bg-[#D4AF37]/50" />
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed font-sans">
              Executive briefings, governance frameworks, and advisory papers
              for leaders navigating risk and growth.
            </p>
          </div>
        </section>

        {/* Resource Cards Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <ResourceCard
                  key={resource.title}
                  title={resource.title}
                  description={resource.description}
                  downloadUrl={resource.downloadUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
