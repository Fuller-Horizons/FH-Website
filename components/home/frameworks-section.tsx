import { Shield, Users, HeartPulse, FileText } from "lucide-react"

export function FrameworksSection() {
  const frameworks = [
    {
      icon: Shield,
      title: "Seatbelt",
      description: "Risk Protection Without Slowing Progress",
    },
    {
      icon: Users,
      title: "Governance Board",
      description: "Structured Oversight",
    },
    {
      icon: HeartPulse,
      title: "Preventative Healthcare",
      description: "Early Risk Detection",
    },
    {
      icon: FileText,
      title: "Emergency Plan",
      description: "Prepared Crisis Response",
    },
  ]

  return (
    <section className="bg-[#0F1629] py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-[28px] lg:text-[40px] font-medium text-white leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            Frameworks Prevent Avoidable Mistakes.
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-[#A89060]" />
        </div>

        {/* Four Horizontal Blocks */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {frameworks.map((framework) => {
            const Icon = framework.icon
            return (
              <div
                key={framework.title}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#A89060]/30 bg-[#0A1628]">
                  <Icon className="h-8 w-8 text-[#A89060]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {framework.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/70">
                  {framework.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
