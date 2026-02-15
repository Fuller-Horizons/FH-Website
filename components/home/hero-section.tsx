import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="main-content"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A1628" }}
    >
      {/* Background image */}
      <Image
        src="/images/hero-tower.png"
        alt=""
        fill
        className="object-cover pointer-events-none select-none"
        style={{ opacity: 0.7, filter: "saturate(0.85)" }}
        priority
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to right, rgba(10, 22, 40, 0.75) 0%, rgba(10, 22, 40, 0.5) 50%, rgba(10, 22, 40, 0.35) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-40 text-center">
        {/* Headline */}
        <h1
          className="text-white text-balance"
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
          className="font-sans max-w-2xl mx-auto text-balance"
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          Independent strategic advisory for leaders who require governance
          clarity, vendor accountability, and defensible decision-making.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/contact?interest=I%27m%20interested%20in%20a%20strategic%20conversation"
            className="inline-flex items-center justify-center font-sans font-semibold text-base px-8 py-4 transition-all duration-200 w-full sm:w-auto"
            style={{
              backgroundColor: "#0E1726",
              color: "#FFFFFF",
              border: "1px solid #A89060",
            }}
          >
            Request a Strategic Conversation
          </Link>

          <Link
            href="/the-fuller-approach"
            className="inline-flex items-center justify-center font-sans font-semibold text-base px-8 py-4 transition-colors duration-200 w-full sm:w-auto"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
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
