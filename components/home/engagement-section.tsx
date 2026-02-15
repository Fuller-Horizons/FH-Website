export function EngagementSection() {
  return (
    <section className="bg-warm-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-[28px] lg:text-[40px] font-medium text-foreground leading-snug" style={{ fontFamily: "var(--font-display)" }}>
          Built for Outcome-Driven Environments
        </h2>

        {/* Content */}
        <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
          This work fits situations where results depend on timing, positioning, pricing decisions, market cycles, and pipeline uncertainty. Clarity and alignment reduce wasted effort and improve decision confidence.
        </p>
      </div>
    </section>
  )
}
