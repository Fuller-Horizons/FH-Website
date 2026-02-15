import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Fuller Horizons",
  description:
    "Structured advisory engagements that deliver governance clarity, vendor accountability, and defensible technology decisions.",
}

const engagements = [
  {
    id: "alignment-review",
    title: "Technology Alignment Review",
    purpose:
      "Establish executive-level clarity on how your current technology, vendors, and infrastructure align with your business objectives.",
    scope: [
      "Non-invasive review of current IT provider alignment",
      "Vendor cost vs. business value analysis",
      "Software and operational tool assessment",
      "Internet, VoIP, and infrastructure dependency mapping",
      "Business workflow vs. technology support evaluation",
    ],
    deliverables: [
      "Executive Alignment Report (Branded)",
      "Vendor Clarity Map",
      "Cost vs. Value Analysis",
      "Strategic Priority Recommendations",
      "Plain-English Executive Summary",
    ],
    idealFor:
      "Organizations with growing vendor complexity who need an independent, structured view of how technology is serving the business.",
    investment: "$2,500 - $5,000",
  },
  {
    id: "risk-vendor-review",
    title: "Operational Risk & Vendor Review",
    purpose:
      "Identify and document technology risks, vendor misalignment, and operational dependencies that leadership needs to understand.",
    scope: [
      "IT vendor scope and alignment assessment",
      "Software ecosystem risk analysis (CRM, ERP, SaaS)",
      "Vendor overlap and redundancy identification",
      "Business continuity and resilience posture review",
      "Technology dependency risk mapping",
      "Contract and service structure evaluation (non-legal)",
    ],
    deliverables: [
      "Vendor Risk Scorecard",
      "Technology Risk Register (Business Impact Ranked)",
      "Vendor Accountability Matrix",
      "Executive Risk Briefing Deck",
      "Strategic Action Roadmap (Advisory Only)",
    ],
    idealFor:
      "Leadership teams concerned about continuity, vendor accountability, or preparing for growth and investment.",
    investment: "$7,500 - $15,000",
  },
  {
    id: "strategic-advisory",
    title: "Strategic Technology Advisory",
    purpose:
      "Provide ongoing, vendor-neutral strategic guidance that aligns technology decisions with long-term business direction.",
    scope: [
      "Technology strategy alignment with business goals",
      "Vendor ecosystem oversight (MSP, VoIP, ISP, Software)",
      "Budget and ROI optimization guidance",
      "Governance and decision framework development",
      "Executive-level technology planning",
      "Leadership advisory sessions",
    ],
    deliverables: [
      "12-36 Month Technology Roadmap",
      "Strategic Vendor Architecture Plan",
      "Governance Framework",
      "Executive Decision Support Reports",
      "Ongoing Strategic Guidance",
    ],
    idealFor:
      "Growing organizations that need a trusted, independent advisor functioning in a fractional strategic role -- without implementation conflicts or vendor bias.",
    investment: null,
  },
  {
    id: "vendor-selection",
    title: "Vendor Selection & RFP Advisory",
    purpose:
      "Structure a defensible vendor selection process built on your business requirements -- not vendor pitches or referral incentives.",
    scope: [
      "Custom RFP development and distribution",
      "Vendor vetting and due diligence",
      "Proposal evaluation and comparison",
      "Total cost of ownership analysis",
      "Executive recommendation briefing",
    ],
    deliverables: [
      "Custom RFP Document",
      "Vendor Comparison Matrix",
      "Total Cost of Ownership Analysis",
      "Vendor Vetting & Due Diligence Summary",
      "Executive Recommendation Brief",
    ],
    idealFor:
      "Organizations selecting a new technology vendor (MSP, VoIP, ISP, cybersecurity, software) who need an independent process free from vendor influence.",
    investment: null,
  },
  {
    id: "quarterly-oversight",
    title: "Quarterly Vendor Oversight",
    purpose:
      "Maintain independent, ongoing oversight to ensure vendors and technology investments remain aligned with business objectives.",
    scope: [
      "Vendor performance evaluation",
      "Cost and budget drift review",
      "Risk posture reassessment",
      "Strategic alignment verification",
      "Executive briefing session",
      "Priority recommendation updates",
    ],
    deliverables: [
      "Quarterly Governance Report",
      "Vendor Performance Scorecard",
      "Strategic Alignment Summary",
      "Executive Advisory Briefing",
    ],
    idealFor:
      "Organizations that want continuous, independent governance over their vendor ecosystem and technology direction.",
    investment: null,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#FAF9F7] pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1
              className="text-[40px] lg:text-[56px] font-medium text-[#0A1628] text-balance leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Structured Advisory Engagements.
            </h1>
            <div className="mx-auto mt-8 h-px w-16 bg-[#C4A87A]" />
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-sans">
              Each engagement is fixed in scope, independent by design, and
              structured to produce executive-ready deliverables. No vendor
              bias. No implementation conflicts. No ongoing dependencies.
            </p>
          </div>
        </section>

        {/* Engagements Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-10">
              {engagements.map((engagement) => (
                <div
                  key={engagement.id}
                  id={engagement.id}
                  className="bg-white rounded-lg p-8 lg:p-10 shadow-sm relative overflow-hidden"
                >
                  {/* Gold accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C4A87A]" />

                  <h2
                    className="text-2xl lg:text-[28px] font-normal text-[#0A1628] leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {engagement.title}
                  </h2>

                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xs font-semibold text-[#A89060]">
                          Engagement Purpose
                        </h3>
                        <p className="mt-3 text-[#4B5563] leading-relaxed font-sans">
                          {engagement.purpose}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xs font-semibold text-[#A89060]">
                          Defined Scope
                        </h3>
                        <ul className="mt-3 space-y-2 text-[#4B5563] leading-relaxed font-sans">
                          {engagement.scope.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#C4A87A]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xs font-semibold text-[#A89060]">
                          Executive Deliverables Produced
                        </h3>
                        <ul className="mt-3 space-y-2 text-[#4B5563] leading-relaxed font-sans">
                          {engagement.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#C4A87A]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xs font-semibold text-[#A89060]">
                          Ideal Use Case
                        </h3>
                        <p className="mt-3 text-[#4B5563] leading-relaxed font-sans">
                          {engagement.idealFor}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Investment or Contact */}
                  <div className="mt-8 border-t border-[#E8E6E3] pt-6 flex items-center justify-between">
                    {engagement.investment ? (
                      <p className="text-[#0A1628] font-medium font-sans">
                        Investment: {engagement.investment}
                      </p>
                    ) : (
                      <p className="text-[#4B5563] text-sm font-sans italic">
                        Scoped to engagement complexity.
                      </p>
                    )}
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-[#A89060] underline underline-offset-4 decoration-[#C4A87A]/40 hover:text-[#0A1628] transition-colors font-sans"
                    >
                      Request a Conversation
                    </Link>
                  </div>
                </div>
              ))}

              {/* Add-On */}
              <div className="bg-white rounded-lg p-8 lg:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C4A87A]" />
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h2
                      className="text-2xl lg:text-[28px] font-normal text-[#0A1628] leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Digital & Software Ecosystem Review
                    </h2>
                    <p className="mt-2 text-xs font-semibold text-[#A89060]">
                      Optional Add-On
                    </p>
                  </div>
                </div>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#4B5563] leading-relaxed font-sans">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#C4A87A]" />
                    Website technology posture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#C4A87A]" />
                    Critical software vendor alignment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#C4A87A]" />
                    SaaS redundancy mapping
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#C4A87A]" />
                    Digital presence infrastructure alignment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Principles */}
        <section className="bg-[#FAF9F7] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2
              className="text-2xl lg:text-3xl font-normal text-[#0A1628] text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Every engagement is built on four principles.
            </h2>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Independence",
                "Vendor Neutrality",
                "Decision Integrity",
                "Governance Clarity",
              ].map((principle) => (
                <div key={principle} className="text-center">
                  <div className="mx-auto h-px w-8 bg-[#C4A87A]" />
                  <p className="mt-4 text-sm font-semibold text-[#0A1628] font-sans">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-[#4B5563] leading-relaxed font-sans">
              Engagements may be standalone or sequenced depending on what
              needs to become clear first.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-[#0A1628] text-white px-8 py-3 text-base font-semibold hover:bg-[#162033] transition-colors font-sans"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
