import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-[#0C1829] py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="text-[28px] lg:text-[40px] font-medium text-white mb-6 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
          Clarity starts with a conversation.
        </h2>

        <p className="text-lg text-white/80 leading-relaxed mb-10">
          If you want a clearer picture of how your technology supports your business — or if important decisions are ahead and you want an independent perspective — a confidential conversation is the first step.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#D4AF37] text-[#0C1829] font-semibold px-8 py-4 rounded-lg hover:bg-[#F59E0B] transition-all text-lg"
        >
          Request a Strategic Assessment
        </Link>
      </div>
    </section>
  )
}
