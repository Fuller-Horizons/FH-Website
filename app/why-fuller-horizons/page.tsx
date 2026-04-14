import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Why Fuller Horizons | Fuller Horizons",
  description:
    "Not a generic consultant. Not a technical implementer. Not a project manager. Fuller Horizons is the alignment authority that prevents costly project failure before execution.",
}

const differentiators = [
  {
    title: "Not a generic consultant",
    description:
      "Consultants sell deliverables, frameworks, and billable hours. Fuller Horizons sells one specific outcome — alignment — and is held to it.",
  },
  {
    title: "Not a technical implementer",
    description:
      "Implementation stays with your vendors and partners. That separation is what makes the alignment role independent and worth paying for.",
  },
  {
    title: "Not a project manager",
    description:
      "Project managers execute a plan. Fuller Horizons makes sure the plan is the right plan, and that the people, scope, and decisions behind it actually hold up.",
  },
]

const capabilities = [
  {
    heading: "Pre-Execution Alignment Authority",
    description:
      "Engaged before capital is committed. Surfaces the misalignment that would otherwise cost you mid-project.",
  },
  {
    heading: "Decision Structure Architect",
    description:
      "Defines scope, decision rights, and ownership so vendors and stakeholders know what they are actually building toward.",
  },
  {
    heading: "Risk Eliminator",
    description:
      "Combines technical understanding, business strategy, and stakeholder psychology to prevent failure where projects usually break.",
  },
]

const failurePatterns = [
  "Undefined or shifting scope",
  "Misaligned expectations between client and vendor",
  "Budget overruns from hidden assumptions",
  "Poor translation between business goals and technical execution",
  "Vendor conflict and blame shifting",
  "Decision paralysis from unclear ownership",
]

export default function WhyFullerHorizonsPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-28 pb-6 lg:pt-36 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h1 className="text-[40px] lg:text-[56px] font-medium text-[#0A1628] text-balance leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Why Fuller Horizons
            </h1>
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed">
              Pre-execution alignment authority across business, technology, and
              execution partners — so the project you fund actually delivers the
              result you funded it for.
            </p>
          </div>
        </section>

        {/* Failure Patterns Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] text-center mb-4 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              How Projects Actually Fail
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed text-center max-w-2xl mx-auto mb-12">
              Rarely from lack of capability. Almost always from misalignment that
              compounds quietly until the budget is gone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {failurePatterns.map((item) => (
                <div
                  key={item}
                  className="bg-white border-l-[3px] border-[#D4AF37] p-6"
                >
                  <p className="text-[#0A1628] font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What FH Is Not Section */}
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

        {/* What Fuller Horizons Brings */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] text-center mb-12 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              What Fuller Horizons Brings
            </h2>
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

        {/* Independence Section */}
        <section className="bg-[#F9F8F6] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Fuller Horizons does not implement, hold administrative credentials, or
              resell vendor services. The alignment role only stays trustworthy if
              the incentives stay clean.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0C1829] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-[28px] lg:text-[40px] font-medium text-white mb-6 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
              Align before you spend.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              A confidential conversation is the first step toward alignment.
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
