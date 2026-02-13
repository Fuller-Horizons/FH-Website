import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "The Fuller Approach | Fuller Horizons",
  description:
    "Great technology providers deserve a strategic partner who helps connect their work to your business goals. Fuller Horizons provides the independent perspective that strengthens alignment between leadership, vendors, and IT.",
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

export default function TheFullerApproachPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-8 pb-6 lg:pt-12 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-normal tracking-tight text-[#0A1628] text-center text-balance">
              The Fuller Approach
            </h1>
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed text-center">
              Great technology providers deserve a strategic partner who helps connect their work to your business goals. Fuller Horizons provides the independent perspective that strengthens alignment between leadership, vendors, and IT — so everyone moves forward together.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="bg-white p-8 lg:p-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10 border-l-[3px] border-[#D4AF37]">
                  <span className="text-[#D4AF37] font-serif text-5xl lg:text-6xl font-normal leading-none">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-medium text-[#0A1628]">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-[#4B5563] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Boundaries Section */}
        <section className="bg-[#F9F8F6] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-lg text-[#4B5563] leading-relaxed">
              My role is clarity, alignment, and accountability to defined outcomes. Think of me as an independent strategic partner — working alongside your vendors and IT team to ensure technology serves the business.
            </p>
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-[#0C1829] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <blockquote>
              <p className="font-serif text-2xl lg:text-3xl text-white italic leading-relaxed">
                &ldquo;Discipline at the beginning prevents regret at the end.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
