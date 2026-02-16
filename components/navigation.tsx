"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navGroups = [
  {
    label: "Advisory",
    items: [
      { href: "/the-fuller-approach", label: "The Fuller Approach" },
      { href: "/services", label: "Services" },
      { href: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    label: "Thinking",
    items: [
      { href: "/insights", label: "Insights" },
      { href: "/blog", label: "Blog" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Connect", href: "/contact" },
]

const allLinks = [
  { href: "/", label: "Home" },
  { href: "/the-fuller-approach", label: "The Fuller Approach" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

function NavDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 text-[14px] font-normal text-white/80 transition-all duration-300 hover:text-white"
      >
        {label}
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[200px] rounded-md border border-white/10 bg-[#0F1115]/95 backdrop-blur-xl py-2 shadow-xl animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-[13px] font-normal text-white/70 transition-colors duration-200 hover:text-white hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 text-white backdrop-blur-2xl transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(15, 17, 21, 0.92)" : "rgba(15, 17, 21, 0.75)",
      }}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-10 transition-all duration-300"
        style={{ paddingTop: scrolled ? "16px" : "28px", paddingBottom: scrolled ? "16px" : "28px" }}
      >
        <div className="flex items-center justify-between">
          {/* Responsive Logo */}
          <div className="transition-transform duration-300" style={{ transform: scrolled ? "scale(0.95)" : "scale(1)" }}>
            <Link href="/" className="block" aria-label="Fuller Horizons - Home">
              {/* Mobile: Monogram only (< 768px) */}
              <div className="relative md:hidden" style={{ width: "30px", height: "30px" }}>
                <Image
                  src="/images/logos/FH_monogram_white.png"
                  alt="Fuller Horizons Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                  style={{ width: "30px", height: "30px" }}
                  priority
                />
              </div>
              {/* Tablet: Stacked h40 (768px - 1279px) */}
              <div className="relative hidden md:block xl:hidden" style={{ width: "auto", height: "38px" }}>
                <Image
                  src="/images/logos/FH_nav_stacked_h40.png"
                  alt="Fuller Horizons Logo"
                  width={160}
                  height={40}
                  className="object-contain h-[38px] w-auto"
                  priority
                />
              </div>
              {/* Desktop: Stacked h80 (>= 1280px) */}
              <div className="relative hidden xl:block" style={{ width: "auto", height: "46px" }}>
                <Image
                  src="/images/logos/FH_nav_stacked_h80.png"
                  alt="Fuller Horizons Logo"
                  width={240}
                  height={80}
                  className="object-contain h-[46px] w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navGroups.map((group) =>
              "items" in group ? (
                <NavDropdown key={group.label} label={group.label} items={group.items} />
              ) : (
                <Link
                  key={group.href}
                  href={group.href}
                  className="text-[14px] font-normal text-white/80 transition-all duration-300 hover:text-white relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white/40 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {group.label}
                </Link>
              )
            )}
          </div>

          {/* CTA - Right */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="text-[13px] font-normal text-white/80 border border-white/20 rounded-full px-6 py-2.5 transition-all duration-400 hover:text-white hover:border-white/40 hover:bg-white/[0.04]"
            >
              Start a Conversation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-6 pb-8 border-t border-white/10 mt-6">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-normal text-white/70 transition-colors hover:text-white py-3 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-block text-[14px] font-normal text-white/80 border border-white/20 rounded-full px-6 py-2.5 transition-all hover:text-white hover:border-white/40"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
