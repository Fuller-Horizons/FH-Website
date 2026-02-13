const trustItems = [
  "I do not manage IT systems — your providers and IT team handle operations",
  "I do not hold administrative credentials — your security stays intact",
  "I do not implement technical changes — that remains with your trusted providers",
  "I do not resell vendor services — my recommendations are always unbiased",
]

export function TrustSection() {
  return (
    <section className="bg-[#0C1829] py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-center mb-6">
          Independent by Design
        </h2>

        <p className="text-lg text-white/80 leading-relaxed text-center mb-10">
          Fuller Horizons provides strategic advisory — never implementation. This independence is what makes the guidance trustworthy.
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
          When technical discovery is needed, it is performed by client-approved specialists. I remain focused on strategic clarity and alignment.
        </p>
      </div>
    </section>
  )
}
