import type { Metadata } from "next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Fuller Horizons",
  description:
    "Request a confidential conversation about alignment, risk, or clarity.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-28 pb-6 lg:pt-36 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-[40px] lg:text-[56px] font-medium text-[#0A1628] text-center text-balance leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Contact
            </h1>
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed text-center">
              If a project, vendor selection, or major investment is ahead — and you want misalignment surfaced before money is committed — a confidential conversation can be requested below.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-xl px-6 lg:px-8">
            <h2 className="text-[28px] font-medium text-[#0A1628] leading-snug text-center mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Request a Conversation
            </h2>
            <div className="bg-white p-8 lg:p-10">
              <Suspense fallback={<div className="text-center py-8 text-[#4B5563]">Loading form...</div>}>
                <ContactForm />
              </Suspense>
              
              {/* Discretion Note */}
              <p className="mt-8 text-sm text-[#6B7280] text-center leading-relaxed">
                Discretion matters. Information shared is treated as confidential.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="bg-[#F3F2EF] py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-[28px] font-medium text-[#0A1628] leading-snug text-center mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Other Ways to Connect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <a
                href="tel:+16312645178"
                className="bg-white p-8 border-l-[3px] border-[#D4AF37] hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A1628] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      Call Directly
                    </h3>
                    <p className="text-[#4B5563] text-base font-medium">
                      (631) 264-5178
                    </p>
                    <p className="text-sm text-[#6B7280] mt-2">
                      For immediate strategic conversations
                    </p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@fullerhorizons.net"
                className="bg-white p-8 border-l-[3px] border-[#D4AF37] hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A1628] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      Send an Email
                    </h3>
                    <p className="text-[#4B5563] text-base font-medium break-all">
                      contact@fullerhorizons.net
                    </p>
                    <p className="text-sm text-[#6B7280] mt-2">
                      For detailed inquiries and documentation
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
