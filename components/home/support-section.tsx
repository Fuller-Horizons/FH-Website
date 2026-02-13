const clarifyItems = [
  "How well your technology, vendors, and IT team are aligned with your current business goals",
  "Where opportunities exist to reduce risk and strengthen your operational foundation",
  "Whether your technology investments are delivering the value your business needs to grow",
  "What decisions should be framed and prioritized before major commitments are made",
]

export function SupportSection() {
  return (
    <section className="bg-[#F3F2EF] py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A1628] text-center mb-12">
          What Fuller Horizons Helps You See
        </h2>

        {/* Items */}
        <div className="space-y-4">
          {clarifyItems.map((item) => (
            <div
              key={item}
              className="bg-white p-6 border-l-[3px] border-[#D4AF37]"
            >
              <p className="text-lg text-[#0A1628] leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
