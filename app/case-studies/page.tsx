import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Case Studies & Executive Outcomes | Fuller Horizons",
  description: "Defensible decisions in action. Real governance interventions, executive deliverables, and measurable outcomes.",
}

const caseStudies = [
  {
    id: 1,
    situation: "Mid-market manufacturing company preparing for acquisition due diligence with no documented IT governance framework or third-party vendor risk management process.",
    governanceGap: "No formal IT steering committee, undocumented vendor relationships, unclear data ownership across business units.",
    riskExposure: "Potential deal valuation reduction of 15-20% due to IT risk; regulatory compliance gaps in vendor data handling.",
    intervention: "Conducted 6-week rapid governance assessment; facilitated executive steering committee formation; implemented vendor risk assessment framework aligned with NIST standards.",
    deliverables: "Board-level IT Governance Charter, Third-Party Risk Management Policy, Vendor Risk Register (47 vendors assessed), Executive Dashboard with KRI reporting.",
    outcome: "Company passed diligence with zero IT-related valuation adjustments. Acquiring firm noted governance maturity as a key differentiator. Post-close integration accelerated by 4 months.",
  },
  {
    id: 2,
    situation: "Healthcare technology startup scaling rapidly post-Series B with emerging SOC 2 compliance requirement from enterprise customers.",
    governanceGap: "Ad-hoc security practices, no formal change management, limited audit trail documentation, unclear roles and responsibilities for compliance.",
    riskExposure: "$2.3M in pipeline at risk without SOC 2 certification; potential customer contract penalties for non-compliance.",
    intervention: "Established formal GRC program; implemented policy framework; designed and operationalized change control and incident response processes; prepared organization for SOC 2 Type II audit.",
    deliverables: "Information Security Policy Suite (12 policies), RACI Matrix for Compliance Functions, SOC 2 Readiness Assessment Report, Gap Remediation Roadmap.",
    outcome: "Achieved SOC 2 Type II certification within 9 months with zero audit findings. Secured $2.3M in delayed enterprise contracts. Reduced compliance preparation costs by 40% vs. industry benchmark.",
  },
  {
    id: 3,
    situation: "Financial services firm facing regulatory examination with inadequate evidence of cybersecurity risk oversight at the board level.",
    governanceGap: "No dedicated board-level technology or risk committee; cybersecurity discussed ad-hoc with limited strategic oversight; unclear escalation protocols.",
    riskExposure: "Regulatory enforcement action; reputational damage; potential restrictions on new business lines pending governance remediation.",
    intervention: "Designed board-level Technology & Cybersecurity Committee charter; developed executive cyber risk reporting framework; trained board members on fiduciary duties related to cyber risk.",
    deliverables: "Board Committee Charter, Quarterly Cyber Risk Dashboard for Board Reporting, Cyber Risk Appetite Statement, Board Education Workshop Series.",
    outcome: "Satisfied regulatory requirements with no enforcement action. Board oversight maturity increased from ad-hoc to defined (CMMI Level 3). Enabled approval for new digital banking initiatives.",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F7]">
      {/* Hero Section */}
      <section className="bg-[#0F1629] text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 
              className="text-[40px] lg:text-[56px] font-medium mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Defensible Decisions in Action.
            </h1>
            <div className="mx-auto w-24 h-[1px] bg-[#A89060] mb-6"></div>
            <p className="text-lg text-white/80 leading-relaxed">
              Real governance interventions, executive deliverables, and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {caseStudies.map((study, index) => (
              <div key={study.id}>
                {/* Case Study Block */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                  {/* Left Column */}
                  <div className="space-y-8">
                    <div>
                      <h3 
                        className="text-2xl font-semibold text-[#0F1629] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Situation
                      </h3>
                      <p className="text-[#4B5563] leading-relaxed">
                        {study.situation}
                      </p>
                    </div>

                    <div>
                      <h3 
                        className="text-2xl font-semibold text-[#0F1629] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Governance Gap
                      </h3>
                      <p className="text-[#4B5563] leading-relaxed">
                        {study.governanceGap}
                      </p>
                    </div>

                    <div>
                      <h3 
                        className="text-2xl font-semibold text-[#0F1629] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Risk Exposure
                      </h3>
                      <p className="text-[#4B5563] leading-relaxed">
                        {study.riskExposure}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <div>
                      <h3 
                        className="text-2xl font-semibold text-[#0F1629] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Advisory Intervention
                      </h3>
                      <p className="text-[#4B5563] leading-relaxed">
                        {study.intervention}
                      </p>
                    </div>

                    <div>
                      <h3 
                        className="text-2xl font-semibold text-[#0F1629] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Executive Deliverables Produced
                      </h3>
                      <p className="text-[#4B5563] leading-relaxed">
                        {study.deliverables}
                      </p>
                    </div>

                    <div>
                      <h3 
                        className="text-2xl font-semibold text-[#0F1629] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Outcome Impact
                      </h3>
                      <p className="text-[#4B5563] leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider (except after last item) */}
                {index < caseStudies.length - 1 && (
                  <div className="mt-16 lg:mt-24 h-[2px] bg-[#0F1629]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0F1629] text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 
              className="text-3xl lg:text-4xl font-semibold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Need Defensible Governance for Your Organization?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Every engagement begins with understanding your specific governance gaps and risk exposure.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D4AF37] text-[#0F1629] px-8 py-4 text-lg font-semibold hover:bg-[#C4A87A] transition-colors"
            >
              Request a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
