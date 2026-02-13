import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Why Fuller Horizons | Fuller Horizons",
  description:
    "Not an MSP. Not a Consultant. A Strategic Technology Advisor. Learn how Fuller Horizons provides independent, vendor-neutral technology advisory.",
}

const differentiators = [
  {
    title: "Not an MSP \u2014 a strategic partner to your MSP",
    description:
      "Your MSP handles day-to-day IT operations. I provide the independent strategic perspective that helps ensure those operations stay aligned with your business goals. I work alongside your IT provider, not in place of them.",
  },
  {
    title: "Not IT support \u2014 executive-level advisory",
    description:
      "Your IT team or provider handles the technical work. I help leadership ensure that technology decisions, vendor relationships, and infrastructure investments support the bigger picture.",
  },
  {
    title: "Not a vendor \u2014 an independent advisor",
    description:
      "I don\u2019t sell hardware, software, or telecom services. I don\u2019t accept commissions or referral fees. My only obligation is to help your business make stronger, more informed technology decisions.",
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
      "Coordinating and evaluating your vendor ecosystem \u2014 MSP, VoIP, ISP, copier, software \u2014 without conflicts of interest.",
  },
  {
    heading: "Executive Decision Support",
    description:
      "Translating complex technology decisions into clear, defensible business choices.",
  },
]

export default function WhyFullerHorizonsPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-8 pb-6 lg:pt-12 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-normal tracking-tight text-[#0A1628] text-balance">
              Why Fuller Horizons
            </h1>
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed">
              Not an MSP. Not a Consultant. A Strategic Technology Advisor.
            </p>
          </div>
        </section>

        {/* How We're Different Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border-l-[3px] border-[#D4AF37] p-8 lg:p-10"
                >
                  <h2 className="text-xl font-medium text-[#0A1628]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Fuller Horizons Brings Section */}
        <section className="bg-[#F9F8F6] py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item.heading} className="text-center">
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

        {/* Market Context Section */}
        <section className="bg-[#0C1829] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-lg text-white leading-relaxed">
              Long Island has a strong ecosystem of IT service providers. Fuller Horizons exists to help business owners navigate that ecosystem with clarity — ensuring that every technology relationship, investment, and decision supports the business it was meant to serve.
            </p>
          </div>
        </section>

        {/* Independence Section */}
        <section className="bg-[#F9F8F6] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Fuller Horizons operates as an independent advisory firm. I do not manage IT systems, hold administrative credentials, implement technical changes, or resell vendor services. When technical discovery is needed, it is performed by client-approved specialists.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0C1829] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
              Ready for an independent perspective?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
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
