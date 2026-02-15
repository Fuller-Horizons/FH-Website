export function AdvisorSection() {
  return (
    <section className="bg-[#FAF9F7] py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <h2
          className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] text-center mb-4 leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Not IT Support. Not a Vendor. An Independent Advisor.
        </h2>

        <div className="mx-auto mt-2 mb-14 h-px w-24 bg-[#A89060]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column - Typical MSP Model */}
          <div className="rounded-lg border border-[#E8E6E3] bg-white p-8 lg:p-10">
            <h3
              className="text-[22px] font-medium text-[#0A1628] mb-6 leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Typical MSP Model
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Vendor-bundled",
                "Support-ticket driven",
                "Implementation-focused",
                "Growth via scale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-base text-[#4B5563] leading-relaxed">
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D1D5DB]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Fuller Horizons Model */}
          <div className="rounded-lg border-2 border-[#A89060]/30 bg-white p-8 lg:p-10">
            <h3
              className="text-[22px] font-medium text-[#0A1628] mb-6 leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fuller Horizons Model
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Independent advisory",
                "Governance-first",
                "Executive artifacts",
                "Risk-informed decision frameworks",
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
