import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/the-fuller-approach", label: "The Fuller Approach" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const missionStatement = "We provide independent, vendor-neutral advisory to executives and boards navigating governance, technology, and regulatory complexity. Our fixed-scope engagements deliver clarity where ambiguity threatens value creation."

const advisoryAreas = [
  "Governance Clarity",
  "Vendor Accountability",
  "Risk Visibility",
  "Executive Decision Support"
]

const geographicFocus = [
  "Long Island",
  "Nassau County",
  "Suffolk County",
  "National Advisory"
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0C1829] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        {/* Logo */}
        <Link href="/" className="inline-block mb-12">
          <Image
            src="/logo-nav.png"
            alt="Fuller Horizons"
            width={140}
            height={94}
            className="h-12 w-auto"
          />
        </Link>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Mission Statement */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] mb-4">Our Mission</h3>
            <p className="text-[#FAF9F7] text-sm leading-relaxed">
              {missionStatement}
            </p>
          </div>

          {/* Column 2: Core Advisory Areas */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] mb-4">Core Advisory Areas</h3>
            <ul className="space-y-3">
              {advisoryAreas.map((area) => (
                <li key={area} className="text-[#FAF9F7] text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Geographic Focus */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] mb-4">Geographic Focus</h3>
            <ul className="space-y-3">
              {geographicFocus.map((location) => (
                <li key={location} className="text-[#FAF9F7] text-sm">
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#A89060] mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Tagline and Copyright */}
          <div className="text-right">
            <p className="text-[#D4AF37] text-sm font-semibold mb-2">
              Driven to Innovate. Anchored in Integrity.
            </p>
            <p className="text-white/50 text-xs">
              {currentYear} Fuller Horizons. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
