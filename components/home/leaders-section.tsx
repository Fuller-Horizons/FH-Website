export function LeadersSection() {
  const audiences = [
    {
      title: "Mid-Market Founders",
      description: "Technology leaders building scalable operations who need strategic advisory without implementation conflicts or vendor lock-in.",
    },
    {
      title: "Private Equity & Portfolio Companies",
      description: "Investment teams and portfolio executives seeking independent technology assessments and governance frameworks for defensible diligence.",
    },
    {
      title: "Regulated Industries",
      description: "Organizations navigating CMMC, compliance frameworks, and cybersecurity mandates who require vendor-neutral strategic guidance.",
    },
  ]

  return (
    <section className="bg-[#F5F4F2] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl font-semibold text-[#0A1628] mb-4">
            Built for Leaders in Complex Environments.
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
              <h3 className="font-serif text-2xl font-semibold text-[#0A1628] mb-4">
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
          <h3 className="font-serif text-3xl font-semibold text-[#0A1628] mb-4">
            Serving Long Island and Beyond
          </h3>
          <div className="mx-auto mt-4 h-px w-20 bg-[#A89060] mb-6" />
          <p className="text-lg text-[#4B5563] leading-relaxed">
            Fuller Horizons is based on Long Island, serving clients across Nassau County, Suffolk County, and the greater New York metropolitan area. Remote advisory engagements are available for qualified organizations nationwide.
          </p>
        </div>
      </div>
    </section>
  )
}
