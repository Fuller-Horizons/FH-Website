import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="main-content"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#FAF9F7" }}
    >
      {/* Subtle strategic background */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-20 pointer-events-none select-none"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        {/* Headline */}
        <h1
          className="font-[var(--font-display)] text-[#0E1726] tracking-tight text-balance"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1.1,
            fontWeight: 500,
          }}
        >
          Decisions That Hold Up
          <br className="hidden sm:block" />
          {" "}Under Pressure.
        </h1>

        {/* Gold divider */}
        <div
          className="mx-auto my-8"
          style={{
            width: "80px",
            height: "1px",
            backgroundColor: "#A89060",
          }}
          aria-hidden="true"
        />

        {/* Subheadline */}
        <p
          className="font-sans text-[#4B5563] max-w-2xl mx-auto text-balance"
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.6,
          }}
        >
          Independent strategic advisory for leaders who require governance
          clarity, vendor accountability, and defensible decision-making.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/contact?interest=I%27m%20interested%20in%20a%20strategic%20conversation"
            className="inline-flex items-center justify-center font-sans font-semibold tracking-wide text-[15px] px-8 py-4 transition-all duration-200 w-full sm:w-auto"
            style={{
              backgroundColor: "#0E1726",
              color: "#FFFFFF",
            }}
          >
            Request a Strategic Conversation
          </Link>

          <Link
            href="/the-fuller-approach"
            className="inline-flex items-center justify-center font-sans font-medium tracking-wide text-[15px] px-8 py-4 transition-colors duration-200 w-full sm:w-auto"
            style={{
              color: "#0E1726",
              borderBottom: "1px solid #A89060",
            }}
          >
            Explore the Fuller Approach
          </Link>
        </div>
      </div>
    </section>
  )
}
