import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="main-content"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A1628", minHeight: "88vh" }}
    >
      {/* Background image */}
      <Image
        src="/images/hero-tower.png"
        alt=""
        fill
        className="object-cover pointer-events-none select-none"
        style={{ opacity: 0.65, filter: "saturate(0.8) brightness(0.9)" }}
        priority
      />

      {/* Dark overlay for text readability — 28% opacity, left-to-right */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to right, rgba(10, 22, 40, 0.78) 0%, rgba(10, 22, 40, 0.55) 45%, rgba(10, 22, 40, 0.3) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[860px] mx-auto px-6 py-36 md:py-44 text-center">
        {/* Headline */}
        <h1
          className="text-white text-balance"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1.1,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Alignment Before
          <br className="hidden sm:block" />
          {" "}Investment.
        </h1>

        {/* Gold divider */}
        <div
          className="mx-auto mt-10 mb-10"
          style={{
            width: "72px",
            height: "1px",
            backgroundColor: "#A89060",
          }}
          aria-hidden="true"
        />

        {/* Subheadline */}
        <p
          className="font-sans max-w-2xl mx-auto text-balance"
          style={{
            fontSize: "clamp(16px, 1.8vw, 19px)",
            lineHeight: 1.65,
            color: "rgba(255, 255, 255, 0.82)",
            letterSpacing: "0.01em",
          }}
        >
          Fuller Horizons ensures business, technology, and execution partners
          are aligned before capital is deployed — preventing the costly mistakes
          that derail projects after money is committed.
        </p>

        {/* CTAs */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary CTA — solid institutional button */}
          <Link
            href="/contact?interest=I%27m%20interested%20in%20a%20strategic%20conversation"
            className="inline-flex items-center justify-center font-sans text-base w-full sm:w-auto transition-all duration-200 hover:bg-[#142a4d]"
            style={{
              backgroundColor: "#0B1F3A",
              color: "#FFFFFF",
              border: "1px solid rgba(168, 144, 96, 0.6)",
              padding: "17px 38px",
              fontWeight: 650,
              letterSpacing: "0.3px",
              borderRadius: "5px",
            }}
          >
            Request a Strategic Conversation
          </Link>

          {/* Secondary CTA — minimal text link */}
          <Link
            href="/the-fuller-approach"
            className="inline-flex items-center justify-center font-sans text-base w-full sm:w-auto transition-colors duration-200 group"
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              padding: "17px 8px",
              fontWeight: 500,
              letterSpacing: "0.2px",
            }}
          >
            <span
              className="relative"
            >
              Explore the Fuller Approach
              <span
                className="absolute left-[8%] right-[8%] bottom-[-3px] h-[1px]"
                style={{ backgroundColor: "rgba(168, 144, 96, 0.7)" }}
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
