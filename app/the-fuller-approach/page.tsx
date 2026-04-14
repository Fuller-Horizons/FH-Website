import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "The Fuller Approach | Fuller Horizons",
  description:
    "Alignment before investment. The Fuller Approach defines, structures, and protects the work before money is committed — across business, technology, and execution partners.",
}

const steps = [
  {
    number: "01",
    title: "Surface the misalignment",
    description:
      "Identify the assumptions, scope gaps, and ownership ambiguity that will cause this project to fail or overrun.",
  },
  {
    number: "02",
    title: "Structure the engagement",
    description:
      "Define the objective, scope, decision rights, and execution roadmap so the work can be delivered without ambiguity.",
  },
  {
    number: "03",
    title: "Hold the line through delivery",
    description:
      "Where the cost of drift is high, stay engaged to facilitate decisions, protect scope, and keep stakeholders aligned.",
  },
]

const differentiators = [
  {
    title: "Not a generic consultant",
    description:
      "Generic consultants sell deliverables and billable hours. Fuller Horizons sells alignment — a specific, narrow outcome that prevents the failure modes you would otherwise pay to fix later.",
  },
  {
    title: "Not a technical implementer",
    description:
      "Implementation stays with your vendors and partners. Fuller Horizons does not write the code, configure the systems, or deliver the work — which is what makes the alignment role independent and trustworthy.",
  },
  {
    title: "Not a project manager",
    description:
      "PMs run a defined plan. Fuller Horizons makes sure the plan is the right plan before it gets handed off — and, when retained, holds it together as conditions change.",
  },
]

const capabilities = [
  {
    heading: "Alignment Authority",
    description:
      "Pre-execution authority that ensures business, technology, and execution partners are aligned before capital is deployed.",
  },
  {
    heading: "Decision Architect",
    description:
      "Structures scope, decision rights, and ownership so the work can be executed without ambiguity once it begins.",
  },
  {
    heading: "Risk Eliminator",
    description:
      "Surfaces the misalignment, assumption, and scope risks that quietly compound into budget overruns and project failure.",
  },
]

export default function TheFullerApproachPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-28 pb-6 lg:pt-36 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-[40px] lg:text-[56px] font-medium text-[#0A1628] text-center text-balance leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              The Fuller Approach
            </h1>
            <p className="mt-6 text-xl text-[#D4AF37] font-medium text-center">
              Alignment before investment determines outcome.
            </p>
            <p className="mt-6 text-lg text-[#4B5563] leading-relaxed text-center">
              Most projects fail not from lack of capability, but from misalignment —
              shifting scope, mismatched expectations, hidden assumptions, unclear
              ownership. Fuller Horizons fixes that before money is committed, and
              when needed, holds it together through delivery.
            </p>
          </div>
        </section>

        {/* What Fuller Horizons Brings */}
        <section className="bg-[#F3F2EF] py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] text-center mb-12 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              What Fuller Horizons Brings
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item.heading} className="bg-white p-8 text-center border-t-[3px] border-[#D4AF37]">
                  <h3 className="text-lg font-semibold text-[#D4AF37]">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Fuller Horizons Is Not */}
        <section className="bg-[#F9F8F6] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] text-center mb-12 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              What Fuller Horizons Is Not
            </h2>
            <div className="space-y-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border-l-[3px] border-[#D4AF37] p-8 lg:p-10"
                >
                  <h3 className="text-xl font-medium text-[#0A1628]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] text-center mb-12 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              How an Engagement Moves
            </h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="bg-white p-8 lg:p-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10 border-l-[3px] border-[#D4AF37]">
                  <span className="text-[#D4AF37] text-5xl lg:text-6xl font-normal leading-none" style={{ fontFamily: "var(--font-display)" }}>
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-[#0A1628]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[#4B5563] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role Clarity Section */}
        <section className="bg-[#F9F8F6] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-[28px] font-medium text-[#0A1628] mb-6 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              The Scope of My Role
            </h2>
            <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
              My role is alignment, structure, and decision integrity — the work that
              determines whether a project succeeds before anyone touches a tool.
              I sit between the business and the people executing the work, and I am
              accountable to the outcome, not to any vendor.
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Fuller Horizons does not implement, hold administrative credentials, or
              resell vendor services. When deeper technical or operational discovery is
              needed, it is performed by client-approved specialists.
            </p>
          </div>
        </section>

        {/* Market Context Section */}
        <section className="bg-[#0C1829] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-lg text-white leading-relaxed mb-8">
              Most organizations engage vendors too early, spend before clarity, and
              discover the problems after the money is committed. Fuller Horizons
              exists to invert that order.
            </p>
            <blockquote>
              <p className="text-2xl lg:text-3xl text-[#D4AF37] italic leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                &ldquo;Alignment before execution determines outcome.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#F9F8F6] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] mb-6 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              Have a project ahead worth aligning?
            </h2>
            <p className="text-lg text-[#4B5563] leading-relaxed mb-10">
              A confidential conversation is the first step.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D4AF37] text-[#0C1829] font-semibold px-8 py-4 rounded-lg hover:bg-[#F59E0B] transition-all text-lg"
            >
              Request a Strategic Assessment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
