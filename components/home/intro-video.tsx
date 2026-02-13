"use client"

import { useRef, useEffect } from "react"

const VIDEO_URL = "https://zjomec7a0d55gbga.public.blob.vercel-storage.com/hero-video.mp4"

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    
    // Slow down playback by 25% (play at 75% speed)
    video.playbackRate = 0.75
    
    // Force load and play
    video.load()
    
    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay may be blocked on some devices
      })
    }
    
    // Try to play immediately
    playVideo()
    
    // Also try on user interaction
    video.addEventListener('click', playVideo)
    
    return () => {
      video.removeEventListener('click', playVideo)
    }
  }, [])

  return (
    <section className="w-full bg-black md:bg-transparent md:py-12 lg:py-16">
      {/* Mobile: Full width edge-to-edge */}
      {/* Desktop: Contained with max-width and centered */}
      <div className="relative w-full md:max-w-5xl md:mx-auto md:px-8">
        <div className="relative overflow-hidden md:rounded-lg md:shadow-2xl">
          <video
            ref={videoRef}
            muted
            playsInline
            autoPlay
            preload="auto"
            className="w-full h-auto object-cover"
            webkit-playsinline="true"
            src={VIDEO_URL}
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Gold inner frame - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute inset-0 pointer-events-none border-4 border-[#D4AF37]/80 rounded-lg" />
        </div>
      </div>
    </section>
  )
}
