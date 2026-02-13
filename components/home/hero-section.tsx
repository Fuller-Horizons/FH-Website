"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"

const slides = [
  {
    headline: "Technology Decisions That Hold Up.",
    body: "Independent strategic technology advisory that helps growing businesses gain clarity, alignment, and confidence in every technology decision.",
    gradient: "from-[#0C1829] to-[#0F2035]",
  },
  {
    headline: "See the Full Picture of Your Technology Landscape",
    body: "A clear, executive-level review of how your current technology, vendors, and systems support your business goals.",
    gradient: "from-[#0D1B2E] to-[#0C1829]",
  },
  {
    headline: "Strengthen Your Technology Foundation",
    body: "Identify opportunities to improve alignment, reduce exposure, and get more value from your existing technology investments.",
    gradient: "from-[#0B1624] to-[#111D32]",
  },
  {
    headline: "Strategic Technology Guidance Aligned to Your Goals",
    body: "Executive-level advisory that ensures your technology roadmap supports your long-term business strategy.",
    gradient: "from-[#0E1E33] to-[#0A1420]",
  },
  {
    headline: "Keep Your Technology Ecosystem Working Together",
    body: "Ongoing strategic oversight to ensure your vendors, IT team, and infrastructure stay aligned with your business.",
    gradient: "from-[#0C1829] to-[#0D1F38]",
  },
]

const AUTOPLAY_INTERVAL = 5500

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isPausedRef = useRef(false)

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      if (!isPausedRef.current && emblaApi) {
        emblaApi.scrollNext()
      }
    }, AUTOPLAY_INTERVAL)
  }, [emblaApi])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  // Sync selected index with embla
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  // Autoplay lifecycle
  useEffect(() => {
    if (!emblaApi) return
    startAutoplay()
    return () => stopAutoplay()
  }, [emblaApi, startAutoplay, stopAutoplay])

  // Pause on hover (desktop)
  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true
  }, [])

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false
  }, [])

  // Reset autoplay timer when user manually navigates via dots
  const handleDotClick = useCallback(
    (index: number) => {
      scrollTo(index)
      stopAutoplay()
      startAutoplay()
    },
    [scrollTo, stopAutoplay, startAutoplay]
  )

  return (
    <section
      id="main-content"
      className="relative h-screen md:h-auto md:min-h-[600px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hidden Embla instance for index/loop management */}
      <div className="sr-only" ref={emblaRef}>
        <div className="flex">
          {slides.map((_, i) => (
            <div key={i} className="flex-[0_0_100%]" />
          ))}
        </div>
      </div>

      {/* Crossfade slides stacked via absolute positioning */}
      {slides.map((slide, index) => (
        <div
          key={index}
          aria-hidden={index !== selectedIndex}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === selectedIndex
              ? "opacity-100 z-[1]"
              : "opacity-0 z-0"
          }`}
        >
          <div
            className={`bg-gradient-to-br ${slide.gradient} flex items-center justify-center h-screen md:h-auto md:min-h-[600px] px-4 py-20`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                {slide.headline}
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                {slide.body}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  tabIndex={index === selectedIndex ? 0 : -1}
                  className="bg-[#D4AF37] text-[#0C1829] font-semibold px-8 py-4 rounded-lg hover:bg-[#F59E0B] transition-all text-lg w-full sm:w-auto"
                >
                  Request a Strategic Assessment
                </Link>
                <Link
                  href="/the-fuller-approach"
                  tabIndex={index === selectedIndex ? 0 : -1}
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0C1829] transition-all text-lg w-full sm:w-auto"
                >
                  See How We Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-[#D4AF37] scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
