import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Fuller Horizons",
  description:
    "Fuller Horizons ensures business, technology, and execution partners are aligned before capital is deployed — preventing the failures that derail projects after money is committed.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-28 pb-6 lg:pt-36 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1 className="text-[40px] lg:text-[56px] font-medium text-[#0A1628] text-balance leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              About
            </h1>
          </div>
        </section>

        {/* Institutional Doctrine Statement */}
        <section className="bg-[#F3F2EF] py-16 lg:py-20">
          <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
            <p className="text-xl lg:text-2xl font-semibold text-[#0A1628] leading-tight text-balance">
              Ensuring business, technology, and execution partners are aligned before capital is deployed — preventing the costly mistakes that derail projects after money is committed.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="w-16 h-0.5 bg-[#D4AF37]/40" />
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-[#F9F8F6] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start gap-8 lg:gap-12">
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <Image
                  src="/jrf-profile.png"
                  alt="Jonathan R. Fuller, Founder & Principal"
                  width={180}
                  height={180}
                  className="rounded-full object-cover shadow-lg"
                  priority
                />
              </div>
              <div className="flex-1">
                <div className="border-l-[3px] border-[#D4AF37] pl-6">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-[#0A1628]">
                    Jonathan R. Fuller
                  </h2>
                  <p className="mt-1 text-lg text-[#D4AF37] font-medium">
                    Founder & Principal
                  </p>
                </div>

                <div className="mt-6 space-y-5">
                  <p className="text-lg text-[#4B5563] leading-relaxed">
                    My career spans more than 25 years across the operating environments where projects either deliver or quietly fall apart — from hands-on technology leadership into senior executive responsibility, working alongside owners and C-level leaders on the decisions that determine what actually gets built.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed">
                    What I learned, repeatedly, is that the projects that fail rarely fail from lack of capability. They fail from misalignment — undefined scope, unspoken assumptions, mismatched expectations between client and vendor, unclear ownership. The capability is usually there. The alignment is not.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed">
                    Fuller Horizons exists to fix that before the money is spent. The work combines technical understanding, business strategy, and the human alignment side — stakeholder psychology, decision rights, expectation setting — into a single role that sits between the business and the people delivering the work.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed">
                    The firm does not implement, resell, or hold administrative credentials. That separation is what makes the alignment role independent — and what makes it worth paying for before the first vendor invoice lands.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed font-medium">
                    The core principle is simple: <span className="text-[#D4AF37]">alignment before execution determines outcome.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
