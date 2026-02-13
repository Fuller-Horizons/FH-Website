import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Fuller Horizons",
  description:
    "Fuller Horizons is an independent strategic technology advisory firm that ensures your technology, vendors, and digital infrastructure support your business goals.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-8 pb-6 lg:pt-12 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-normal tracking-tight text-[#0A1628] text-balance">
              Services
            </h1>
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed">
              Fuller Horizons is an independent strategic technology advisory firm that ensures your technology, vendors, and digital infrastructure support your business goals — not the other way around.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-10">

              {/* Service 1: Technology Alignment Review */}
              <div id="alignment-review" className="bg-white border-l-[3px] border-[#D4AF37] p-8 lg:p-10">
                <h2 className="text-2xl font-medium text-[#0A1628]">
                  Technology Alignment Review
                </h2>
                <p className="mt-3 text-[#D4AF37] font-medium leading-relaxed">
                  Executive clarity on your current technology, vendors, and business alignment — without invasive audits or system access.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">Best For</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Businesses with an MSP, multiple vendors, or growing operational complexity</li>
                      <li>Owners who want a clearer picture of how technology supports their goals</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">What We Evaluate</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Current IT provider alignment (non-invasive)</li>
                      <li>Vendor costs vs business value</li>
                      <li>Software and operational tool alignment</li>
                      <li>Internet, VoIP, and infrastructure dependencies</li>
                      <li>Business workflow vs technology support</li>
                      <li>Digital and operational technology footprint</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">Deliverables</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Executive Alignment Report (Branded)</li>
                      <li>Vendor Clarity Map</li>
                      <li>Cost vs Value Analysis</li>
                      <li>Strategic Priority Recommendations</li>
                      <li>Plain-English Executive Summary</li>
                    </ul>
                  </div>

                  <p className="text-sm text-[#4B5563] italic border-t border-[#E5E7EB] pt-4">
                    No passwords. No administrative access. No system changes. This is a strategic advisory review — not a technical audit.
                  </p>

                  <p className="text-[#0A1628] font-medium">
                    Investment: $2,500 – $5,000
                  </p>
                </div>
              </div>

              {/* Service 2: Operational Risk & Vendor Review */}
              <div id="risk-review" className="bg-white border-l-[3px] border-[#D4AF37] p-8 lg:p-10">
                <h2 className="text-2xl font-medium text-[#0A1628]">
                  Operational Risk &amp; Vendor Review
                </h2>
                <p className="mt-3 text-[#D4AF37] font-medium leading-relaxed">
                  A leadership-level assessment of your technology risks, vendor alignment, and operational dependencies.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">Best For</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Companies relying on MSPs or multiple vendors</li>
                      <li>Organizations concerned about continuity or vendor alignment</li>
                      <li>Leadership preparing for growth or investment</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">What We Analyze</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>IT vendor scope and alignment</li>
                      <li>Software ecosystem risks (CRM, ERP, SaaS)</li>
                      <li>Vendor overlap and redundancy</li>
                      <li>Business continuity and resilience posture</li>
                      <li>Technology dependency risks</li>
                      <li>Contract and service structure (non-legal)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">Deliverables</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Vendor Risk Scorecard</li>
                      <li>Technology Risk Register (Business Impact Ranked)</li>
                      <li>Vendor Accountability Matrix</li>
                      <li>Executive Risk Briefing Deck</li>
                      <li>Strategic Action Roadmap (Advisory Only)</li>
                    </ul>
                  </div>

                  <p className="text-sm text-[#4B5563] italic border-t border-[#E5E7EB] pt-4">
                    Fuller Horizons does not perform technical remediation or system administration. I provide independent oversight and strategic guidance.
                  </p>

                  <p className="text-[#0A1628] font-medium">
                    Investment: $7,500 – $15,000
                  </p>
                </div>
              </div>

              {/* Service 3: Strategic Technology Advisory */}
              <div id="strategic-advisory" className="bg-white border-l-[3px] border-[#D4AF37] p-8 lg:p-10">
                <h2 className="text-2xl font-medium text-[#0A1628]">
                  Strategic Technology Advisory
                </h2>
                <p className="mt-3 text-[#D4AF37] font-medium leading-relaxed">
                  Executive-level strategic guidance that aligns technology decisions with your long-term business strategy.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">Best For</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Growing SMBs and mid-market companies</li>
                      <li>Leadership teams that want a trusted, vendor-neutral advisor</li>
                      <li>Organizations seeking proactive technology governance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">What This Includes</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Technology strategy alignment with business goals</li>
                      <li>Vendor ecosystem oversight (MSP, VoIP, ISP, Software)</li>
                      <li>Budget and ROI optimization</li>
                      <li>Governance and decision frameworks</li>
                      <li>Executive-level technology planning</li>
                      <li>Leadership advisory sessions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">Deliverables</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>12–36 Month Technology Roadmap</li>
                      <li>Strategic Vendor Architecture Plan</li>
                      <li>Governance Framework</li>
                      <li>Executive Decision Support Reports</li>
                      <li>Ongoing Strategic Guidance</li>
                    </ul>
                  </div>

                  <p className="text-sm text-[#4B5563] italic border-t border-[#E5E7EB] pt-4">
                    This service functions as a vendor-neutral strategic advisor role — similar to a fractional CIO, without implementation conflicts or vendor bias.
                  </p>

                  <p className="text-[#0A1628] font-medium">
                    <Link href="/contact" className="text-[#D4AF37] underline underline-offset-4 hover:text-[#b8962f] transition-colors">
                      Contact for a custom engagement
                    </Link>
                  </p>
                </div>
              </div>

              {/* Service 4: Vendor Selection & RFP Advisory */}
              <div id="rfp-advisory" className="bg-white border-l-[3px] border-[#D4AF37] p-8 lg:p-10">
                <h2 className="text-2xl font-medium text-[#0A1628]">
                  Vendor Selection &amp; RFP Advisory
                </h2>
                <p className="mt-3 text-[#D4AF37] font-medium leading-relaxed">
                  Structured, defensible vendor selection — built on your business requirements, not vendor pitches.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">Vendor Categories</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Managed IT Providers (MSPs)</li>
                      <li>VoIP &amp; Communications Vendors</li>
                      <li>Internet Service Providers</li>
                      <li>Copier &amp; Document Vendors</li>
                      <li>Cybersecurity Firms</li>
                      <li>Software Platforms (CRM, ERP, SaaS)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">Deliverables</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Custom RFP Document</li>
                      <li>Vendor Comparison Matrix</li>
                      <li>Total Cost of Ownership Analysis</li>
                      <li>Vendor Vetting &amp; Due Diligence Summary</li>
                      <li>Executive Recommendation Brief</li>
                    </ul>
                  </div>

                  <p className="text-sm text-[#4B5563] italic border-t border-[#E5E7EB] pt-4">
                    I do not accept commissions, referral fees, or vendor incentives. My only obligation is to the client.
                  </p>

                  <p className="text-[#0A1628] font-medium">
                    <Link href="/contact" className="text-[#D4AF37] underline underline-offset-4 hover:text-[#b8962f] transition-colors">
                      Contact for a custom engagement
                    </Link>
                  </p>
                </div>
              </div>

              {/* Service 5: Quarterly Vendor Oversight */}
              <div id="vendor-oversight" className="bg-white border-l-[3px] border-[#D4AF37] p-8 lg:p-10">
                <h2 className="text-2xl font-medium text-[#0A1628]">
                  Quarterly Vendor Oversight
                </h2>
                <p className="mt-3 text-[#D4AF37] font-medium leading-relaxed">
                  Ongoing independent oversight to ensure your vendors and technology ecosystem remain aligned with your business.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">What Happens Every Quarter</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Vendor performance evaluation</li>
                      <li>Cost and budget drift review</li>
                      <li>Risk posture reassessment</li>
                      <li>Strategic alignment check</li>
                      <li>Executive briefing session</li>
                      <li>Priority recommendation updates</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0A1628]">Deliverables</h3>
                    <ul className="mt-2 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                      <li>Quarterly Governance Report</li>
                      <li>Vendor Performance Scorecard</li>
                      <li>Strategic Alignment Summary</li>
                      <li>Executive Advisory Briefing</li>
                    </ul>
                  </div>

                  <p className="text-sm text-[#4B5563] italic border-t border-[#E5E7EB] pt-4">
                    This is independent vendor governance and strategic oversight — not managed services.
                  </p>

                  <p className="text-[#0A1628] font-medium">
                    <Link href="/contact" className="text-[#D4AF37] underline underline-offset-4 hover:text-[#b8962f] transition-colors">
                      Contact to discuss retainer options
                    </Link>
                  </p>
                </div>
              </div>

              {/* Optional Add-On */}
              <div className="bg-white border-l-[3px] border-[#D4AF37] p-8 lg:p-10">
                <h2 className="text-2xl font-medium text-[#0A1628]">
                  Digital &amp; Software Ecosystem Review
                </h2>
                <p className="mt-3 text-[#D4AF37] font-medium text-sm uppercase tracking-wider">
                  Optional Add-On
                </p>
                <ul className="mt-4 space-y-1 text-[#4B5563] leading-relaxed list-disc list-inside">
                  <li>Website technology posture</li>
                  <li>Critical software vendor alignment</li>
                  <li>SaaS redundancy mapping</li>
                  <li>Digital presence infrastructure alignment</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="bg-[#F9F8F6] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Engagements may be standalone or sequenced depending on what needs to become clear first.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
