import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/the-fuller-approach", label: "The Fuller Approach" },
  { href: "/services", label: "Services" },
  { href: "/why-fuller-horizons", label: "Why Us" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0C1829] text-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-nav.png"
              alt="Fuller Horizons"
              width={140}
              height={94}
              className="h-12 w-auto mb-8"
            />
          </Link>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Copyright */}
          <p className="text-white/50 text-sm">
            {currentYear} Fuller Horizons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
