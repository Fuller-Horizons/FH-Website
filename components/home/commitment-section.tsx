export function CommitmentSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#FAF9F7]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Divider */}
        <div className="h-px bg-[#C4A87A] mb-12"></div>

        {/* Heading */}
        <h2 className="text-[28px] font-medium text-[#0A1628] mb-8 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
          Commitment to Accessibility and Ethical Independence.
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#4B5563]">
          {/* WCAG Compliance */}
          <div>
            <p className="text-base leading-relaxed font-sans">
              <span className="font-semibold text-[#0A1628]">Accessibility.</span> This website meets WCAG 2.1 Level AA compliance standards. We believe digital tools should serve all users equally.
            </p>
          </div>

          {/* Confidentiality */}
          <div>
            <p className="text-base leading-relaxed font-sans">
              <span className="font-semibold text-[#0A1628]">Confidentiality.</span> Your advisory engagements remain confidential. We do not share client information, vendor relationships, or engagement details.
            </p>
          </div>

          {/* Independence */}
          <div>
            <p className="text-base leading-relaxed font-sans">
              <span className="font-semibold text-[#0A1628]">Independence.</span> We maintain no vendor resale agreements or referral arrangements. Our recommendations are driven by your needs, not commission structures.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-[#C4A87A] mt-12"></div>
      </div>
    </section>
  )
}
