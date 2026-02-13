import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

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
        <section className="bg-[#F9F8F6] pt-8 pb-6 lg:pt-12 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-normal tracking-tight text-[#0A1628] text-center text-balance">
              Contact
            </h1>
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed text-center">
              If something feels misaligned, risk is increasing, or clarity is missing, a confidential conversation can be requested below.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-xl px-6 lg:px-8">
            <div className="bg-white p-8 lg:p-10">
              <ContactForm />
              
              {/* Discretion Note */}
              <p className="mt-8 text-sm text-[#6B7280] text-center leading-relaxed">
                Discretion matters. Information shared is treated as confidential.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
