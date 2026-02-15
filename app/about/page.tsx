import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Fuller Horizons",
  description:
    "Empowering leaders to make smarter, defensible decisions about their technology, vendors, and digital infrastructure.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-8 pb-6 lg:pt-12 lg:pb-8">
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
              Empowering leaders to make smarter, defensible decisions about their technology, vendors, and digital infrastructure.
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
                    My career spans more than 25 years supporting organizations where technology alignment, vendor accountability, and leadership clarity are essential.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed">
                    It began in hands-on IT leadership and progressed into senior, executive-level responsibility, shaping a deep understanding of technology vendor ecosystems and how systems, vendors, and people interact in complex operating environments. Throughout this career, I have worked closely with C-level executives and business owners on critical technology decisions, contributing perspective in moments where the goal is not simply to decide—but to ensure those decisions enable people and organizations to succeed.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed">
                    Over time, this experience evolved toward helping senior leaders navigate technology complexity, assess vendor risk, and make confident technology decisions, particularly in environments where accountability, trust, and long-term outcomes matter as much as immediate results.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed">
                    Through Fuller Horizons, I provide independent strategic advisory to organizations seeking clarity, alignment, and forward progress in their technology decisions. This perspective reflects an appreciation for the realities executives and owners face—competing priorities, imperfect information, and the responsibility that comes with leadership.
                  </p>
                  <p className="text-lg text-[#4B5563] leading-relaxed font-medium">
                    At its core, Fuller Horizons exists to <span className="text-[#D4AF37]">Empower Success</span>—helping leaders create the conditions for their technology, vendors, and people to work together effectively and endure over time.
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
