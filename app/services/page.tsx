import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Fuller Horizons",
  description:
    "Alignment Audits, Alignment Architecture, and Alignment Enforcement — structured engagements that prevent costly project failure before execution begins.",
}

const engagements = [
  {
    id: "alignment-audit",
    title: "Alignment Audit",
    tag: "Entry Engagement",
    purpose:
      "Identify the misalignment risks, scope gaps, and execution exposure that will cause a project to fail or overrun — before money is committed.",
    scope: [
      "Defined business objective (what the project must produce)",
      "Stakeholder, decision-rights, and ownership review",
      "Scope, assumption, and dependency surfacing",
      "Budget and timeline risk assessment",
      "Vendor or solution alignment review (if applicable)",
      "Recommended execution structure",
    ],
    deliverables: [
      "Misalignment Risk Register (ranked)",
      "Scope Gap Analysis",
      "Budget & Timeline Risk Brief",
      "Vendor / Solution Assessment",
      "Recommended Execution Structure",
    ],
    idealFor:
      "Owners and operators preparing to spend on a project, vendor engagement, or transformation — and who want the failure modes surfaced before contracts are signed.",
  },
  {
    id: "alignment-architecture",
    title: "Alignment Architecture",
    tag: "Core Offer",
    purpose:
      "Fully define and structure the project so it can be executed without ambiguity — scope, stakeholders, decisions, and roadmap committed in writing.",
    scope: [
      "Scope definition and boundary setting",
      "Stakeholder alignment and role assignment",
      "Clear expectations and responsibilities",
      "Execution roadmap with sequencing and dependencies",
      "Decision framework for in-flight tradeoffs",
    ],
    deliverables: [
      "Defined Project Scope Document",
      "Stakeholder & Decision-Rights Map",
      "Execution Roadmap",
      "In-Flight Decision Framework",
      "Vendor / Partner Engagement Brief",
    ],
    idealFor:
      "Organizations whose audit surfaced enough complexity that the project needs to be structured end-to-end before any vendor begins billable work.",
  },
  {
    id: "alignment-enforcement",
    title: "Alignment Enforcement",
    tag: "Optional / High Value",
    purpose:
      "Maintain alignment during execution — facilitate decisions, protect scope, and keep stakeholders moving in the same direction as conditions change.",
    scope: [
      "Meeting facilitation and decision capture",
      "Scope protection and change control",
      "Stakeholder alignment maintenance",
      "Vendor accountability and conflict mediation",
      "Executive briefing and escalation",
    ],
    deliverables: [
      "Decision Log",
      "Scope Change Control Record",
      "Stakeholder Alignment Updates",
      "Executive Briefings",
    ],
    idealFor:
      "Projects where the cost of drift is high — long timelines, multiple vendors, or executive sponsors who need an independent party holding the line.",
  },
  {
    id: "project-participation",
    title: "Project Participation",
    tag: "Selective — % of Project Value",
    purpose:
      "Ongoing alignment ownership through delivery on a select set of large, well-scoped projects with trusted partners — compensated as a percentage of project value.",
    scope: [
      "Limited to engagements that have completed prior alignment phases",
      "Defined scope, defined partners, and a defined outcome",
      "Reserved for large projects where alignment is the deciding factor",
    ],
    deliverables: [
      "Continuous alignment ownership through execution",
      "Partner and stakeholder coordination",
      "Outcome accountability",
    ],
    idealFor:
      "Large, well-defined initiatives where Fuller Horizons has already led the audit and architecture phases and the partners involved are trusted and known.",
  },
]

const principles = [
  "Alignment Before Investment",
  "Independence by Design",
  "Defined Scope, Defined Outcome",
  "No Implementation, No Resale",
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
              Alignment Engagements.
            </h1>
            <div className="mx-auto mt-8 h-px w-16 bg-[#C4A87A]" />
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto font-sans">
              Three sequenced engagements — Audit, Architecture, and Enforcement —
              that ensure business, technology, and execution partners are aligned
              before capital is deployed and stay aligned through delivery.
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

                  <div className="flex items-baseline justify-between flex-wrap gap-3">
                    <h2
                      className="text-2xl lg:text-[28px] font-normal text-[#0A1628] leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {engagement.title}
                    </h2>
                    <p className="text-xs font-semibold text-[#A89060] tracking-wide uppercase">
                      {engagement.tag}
                    </p>
                  </div>

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
                          Deliverables Produced
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

                  {/* Footer */}
                  <div className="mt-8 border-t border-[#E8E6E3] pt-6 flex items-center justify-between">
                    <p className="text-[#4B5563] text-sm font-sans italic">
                      Fixed-fee engagement. Scope and timeline confirmed before start.
                    </p>
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-[#A89060] underline underline-offset-4 decoration-[#C4A87A]/40 hover:text-[#0A1628] transition-colors font-sans"
                    >
                      Request a Conversation
                    </Link>
                  </div>
                </div>
              ))}
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
              {principles.map((principle) => (
                <div key={principle} className="text-center">
                  <div className="mx-auto h-px w-8 bg-[#C4A87A]" />
                  <p className="mt-4 text-sm font-semibold text-[#0A1628] font-sans">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-[#4B5563] leading-relaxed font-sans">
              Engagements are typically sequenced — Audit first, Architecture next,
              Enforcement where the cost of drift is high. Each can also stand alone
              when the situation calls for it.
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
