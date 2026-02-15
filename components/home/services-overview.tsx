import Link from "next/link"

const services = [
  {
    title: "Technology Alignment Review",
    description: "Executive clarity on your current technology and vendors",
  },
  {
    title: "Operational Risk & Vendor Review",
    description: "Identify risks, gaps, and misalignment before they cost you",
  },
  {
    title: "Strategic Technology Advisory",
    description: "Fractional CIO-level guidance without vendor bias",
  },
  {
    title: "Vendor Selection & RFP Advisory",
    description: "Structured, defensible vendor selection",
  },
  {
    title: "Quarterly Vendor Oversight",
    description: "Ongoing independent vendor governance",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-[#F3F2EF] py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] text-center mb-12 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
          How Fuller Horizons Works With You
        </h2>

        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 border-l-[3px] border-[#D4AF37]"
            >
              <h3 className="text-lg font-medium text-[#0A1628] mb-1">
                {service.title}
              </h3>
              <p className="text-[#4B5563] mb-2">
                {service.description}
              </p>
              <Link
                href="/services"
                className="text-[#D4AF37] font-medium hover:underline"
              >
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
