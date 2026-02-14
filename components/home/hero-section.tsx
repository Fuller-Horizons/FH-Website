"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"

const slides = [
  {
    headline: "Technology Decisions That Hold Up.",
    body: "Independent strategic technology advisory that helps growing businesses gain clarity, alignment, and confidence in every technology decision.",
    gradient: "from-[#0C1829] to-[#0F2035]",
    buttonText: "Request a Strategic Assessment",
    context: "I'm interested in learning more about strategic technology advisory services.",
  },
  {
    headline: "See the Full Picture of Your Technology Landscape",
    body: "A clear, executive-level review of how your current technology, vendors, and systems support your business goals.",
    gradient: "from-[#0D1B2E] to-[#0C1829]",
    buttonText: "Request Technology Alignment Review",
    context: "I'm interested in a Technology Alignment Review to understand how my current technology, vendors, and systems support my business goals.",
  },
  {
    headline: "Evaluate Your Vendor Relationships & Operational Risk",
    body: "Leadership-level assessment of your technology risks, vendor alignment, and operational dependencies.",
    gradient: "from-[#0B1624] to-[#111D32]",
    buttonText: "Request Risk & Vendor Review",
    context: "I'm interested in an Operational Risk & Vendor Review to assess my vendor alignment and technology dependencies.",
  },
  {
    headline: "Strategic Technology Advisory for Long-Term Success",
    body: "Executive-level strategic guidance that aligns technology decisions with your long-term business strategy.",
    gradient: "from-[#0E1E33] to-[#0A1420]",
    buttonText: "Request Strategic Advisory",
    context: "I'm interested in Strategic Technology Advisory services to align technology decisions with my long-term business strategy.",
  },
  {
    headline: "Independent Oversight of Your Vendor Ecosystem",
    body: "Ongoing strategic oversight to ensure your vendors, IT team, and infrastructure stay aligned with your business.",
    gradient: "from-[#0C1829] to-[#0D1F38]",
    buttonText: "Request Quarterly Oversight",
    context: "I'm interested in Quarterly Vendor Oversight to ensure my technology ecosystem remains aligned with my business.",
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

  // Handle click on slide content to advance to next slide
  const handleSlideClick = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      stopAutoplay()
      startAutoplay()
    }
  }, [emblaApi, stopAutoplay, startAutoplay])

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
            className={`bg-gradient-to-br ${slide.gradient} flex items-center justify-center h-screen md:h-auto md:min-h-[600px] px-4 py-20 cursor-pointer`}
            onClick={handleSlideClick}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                {slide.headline}
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                {slide.body}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" onClick={(e) => e.stopPropagation()}>
                <Link
                  href={`/contact?interest=${encodeURIComponent(slide.context)}`}
                  tabIndex={index === selectedIndex ? 0 : -1}
                  className="bg-[#D4AF37] text-[#0C1829] font-semibold px-8 py-4 rounded-lg hover:bg-[#F59E0B] transition-all text-lg w-full sm:w-auto"
                >
                  {slide.buttonText}
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
