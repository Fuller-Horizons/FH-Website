export function AdvisorSection() {
  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <h2
          className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] text-center mb-4 leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Not a Consultant. Not an Implementer. An Alignment Authority.
        </h2>

        <div className="mx-auto mt-2 mb-14 h-px w-24 bg-[#A89060]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column - What Others Do */}
          <div className="rounded-lg border border-[#E8E6E3] bg-white p-8 lg:p-10">
            <h3
              className="text-[22px] font-medium text-[#0A1628] mb-6 leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Traditional Consultants & Vendors
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Engaged after capital is already committed",
                "Sell deliverables, billable hours, or implementation",
                "Align to the scope they were sold — not the outcome",
                "Compete with other vendors instead of orchestrating them",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-base text-[#4B5563] leading-relaxed">
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D1D5DB]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Fuller Horizons */}
          <div className="rounded-lg border-2 border-[#A89060]/30 bg-white p-8 lg:p-10">
            <h3
              className="text-[22px] font-medium text-[#0A1628] mb-6 leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fuller Horizons Model
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Engaged before capital is committed",
                "Sells alignment, structure, and decision integrity",
                "Aligns to the outcome — and protects it through execution",
                "Independent authority across business, technology, and vendors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-base text-[#0A1628] leading-relaxed">
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#A89060]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
