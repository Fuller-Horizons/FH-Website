const clarifyItems = [
  "Where misalignment between stakeholders, vendors, and execution plans is putting your project at risk",
  "Which assumptions, scope gaps, and undefined ownership are likely to cause budget overruns or delay",
  "Whether your business goals translate cleanly into the technical and operational work being proposed",
  "What needs to be decided, structured, and committed to before money is spent on execution",
]

export function SupportSection() {
  return (
    <section className="bg-[#F3F2EF] py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] text-center mb-12 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
          What Misalignment Looks Like — Before You Spend
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
