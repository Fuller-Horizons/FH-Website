import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "The Fuller Approach | Fuller Horizons",
  description:
    "Strategic technology advisory that helps business leaders navigate vendor relationships, technology decisions, and IT alignment — without conflicts of interest.",
}

const steps = [
  {
    number: "01",
    title: "Clarify intent and alignment",
    description: "Define what your technology should be doing for your business — and identify where it falls short.",
  },
  {
    number: "02",
    title: "Surface risk and opportunity",
    description: "Bring vendor alignment, cost exposure, and operational risks into clear view.",
  },
  {
    number: "03",
    title: "Define measurable outcomes",
    description: "Translate strategy into observable results, decision paths, and governance frameworks.",
  },
]

const differentiators = [
  {
    title: "Not an MSP — a strategic partner to your MSP",
    description:
      "Your MSP handles day-to-day IT operations. I provide the independent strategic perspective that helps ensure those operations stay aligned with your business goals. I work alongside your IT provider, not in place of them.",
  },
  {
    title: "Not IT support — executive-level advisory",
    description:
      "Your IT team or provider handles the technical work. I help leadership ensure that technology decisions, vendor relationships, and infrastructure investments support the bigger picture.",
  },
  {
    title: "Not a vendor — an independent advisor",
    description:
      "I don't sell hardware, software, or telecom services. I don't accept commissions or referral fees. My only obligation is to help your business make stronger, more informed technology decisions.",
  },
]

const capabilities = [
  {
    heading: "Strategic Technology Advisor",
    description:
      "Executive-level technology guidance rooted in your business goals, not vendor quotas.",
  },
  {
    heading: "Vendor-Neutral Orchestrator",
    description:
      "Coordinating and evaluating your vendor ecosystem — MSP, VoIP, ISP, copier, software — without conflicts of interest.",
  },
  {
    heading: "Executive Decision Support",
    description:
      "Translating complex technology decisions into clear, defensible business choices.",
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
              Not an MSP. Not a Consultant. A Strategic Technology Advisor.
            </p>
            <p className="mt-6 text-lg text-[#4B5563] leading-relaxed text-center">
              Great technology providers deserve a strategic partner who helps connect their work to your business goals. Fuller Horizons provides the independent perspective that strengthens alignment between leadership, vendors, and IT — so everyone moves forward together.
            </p>
          </div>
        </section>

        {/* What Fuller Horizons Is Section */}
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

        {/* How We're Different Section */}
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
              How We Work Together
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
              My role is clarity, alignment, and accountability to defined outcomes. Think of me as an independent strategic partner — working alongside your vendors and IT team to ensure technology serves the business.
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Fuller Horizons operates as an independent advisory firm. I do not manage IT systems, hold administrative credentials, implement technical changes, or resell vendor services. When technical discovery is needed, it is performed by client-approved specialists.
            </p>
          </div>
        </section>

        {/* Market Context Section */}
        <section className="bg-[#0C1829] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-lg text-white leading-relaxed mb-8">
              Long Island has a strong ecosystem of IT service providers. Fuller Horizons exists to help business owners navigate that ecosystem with clarity — ensuring that every technology relationship, investment, and decision supports the business it was meant to serve.
            </p>
            <blockquote>
              <p className="text-2xl lg:text-3xl text-[#D4AF37] italic leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                "Discipline at the beginning prevents regret at the end."
              </p>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#F9F8F6] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] mb-6 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              Ready for an independent perspective?
            </h2>
            <p className="text-lg text-[#4B5563] leading-relaxed mb-10">
              A confidential conversation is the first step toward strategic clarity.
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
