const trustItems = [
  "I do not implement the work — execution stays with your chosen vendors and partners",
  "I do not resell vendor services or accept referral fees — recommendations are unbiased",
  "I do not hold administrative credentials or operate your systems",
  "I disqualify engagements where alignment is not possible — no unpaid discovery, no scope creep",
]

export function TrustSection() {
  return (
    <section className="bg-[#0C1829] py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-[28px] lg:text-[40px] font-medium text-white text-center mb-6 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
          Independent by Design
        </h2>

        <p className="text-lg text-white/80 leading-relaxed text-center mb-10">
          Fuller Horizons sits between the business and the people delivering the work.
          That position only stays trustworthy if the incentives stay clean.
        </p>

        <div className="space-y-4 mb-10">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#D4AF37]" />
              <p className="text-lg text-white/90 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-base text-white/70 leading-relaxed text-center">
          When deeper technical or operational discovery is needed, it is performed by
          client-approved specialists. Fuller Horizons remains focused on alignment,
          structure, and decision integrity.
        </p>
      </div>
    </section>
  )
}
