export function LeadersSection() {
  const audiences = [
    {
      title: "Owners & Operators",
      description:
        "SMB and lower mid-market leaders engaging external vendors on $15K–$250K+ initiatives who have been burned by past project failures or scope drift.",
    },
    {
      title: "Digital Transformation & Tech Implementation",
      description:
        "Companies preparing for a system rollout, vendor transition, or platform migration that need scope, stakeholders, and execution defined before signing.",
    },
    {
      title: "Growth & Vendor Transitions",
      description:
        "Organizations scaling operations, replacing incumbents, or restructuring vendor relationships where alignment between business intent and delivery is the deciding factor.",
    },
  ]

  return (
    <section className="bg-[#F5F4F2] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] mb-4 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            Built for Leaders Spending Real Capital on Execution.
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-[#A89060]" />
        </div>

        {/* Three Column Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16 lg:mb-20">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="bg-white rounded-lg shadow-sm p-8 border-t-2 border-[#A89060]"
            >
              <h3 className="text-[28px] font-medium text-[#0A1628] mb-4 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                {audience.title}
              </h3>
              <p className="text-base text-[#4B5563] leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Serving Long Island Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-[28px] font-medium text-[#0A1628] mb-4 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            Serving Long Island and Beyond
          </h3>
          <div className="mx-auto mt-4 h-px w-20 bg-[#A89060] mb-6" />
          <p className="text-lg text-[#4B5563] leading-relaxed">
            Fuller Horizons is based on Long Island, working with clients across Nassau County, Suffolk County, and the greater New York metropolitan area. Remote alignment engagements are available for qualified organizations nationwide.
          </p>
        </div>
      </div>
    </section>
  )
}
