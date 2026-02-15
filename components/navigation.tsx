"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/the-fuller-approach", label: "The Fuller Approach" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0A1628]/95 backdrop-blur-md text-white pt-[env(safe-area-inset-top)]">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex h-12 md:h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-nav.png"
              alt="Fuller Horizons"
              width={140}
              height={94}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-semibold text-white transition-all duration-300 ease-out hover:text-[#D4AF37] relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#0A1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#F59E0B] transition-all"
            >
              Request a Conversation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold text-white transition-all hover:text-[#D4AF37] py-2 hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-[#0A1628] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#F59E0B] transition-all mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Conversation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
