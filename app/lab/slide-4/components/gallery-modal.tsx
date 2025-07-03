"use client"

import { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useGallery } from "./gallery-provider"

export default function GalleryModal() {
  const { images, isOpen, closeCarousel, startIndex } = useGallery()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex,
    skipSnaps: false,
    loop: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(startIndex || 0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  // Update selected index and scroll states
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!emblaApi) return
      if (e.key === "ArrowRight") emblaApi.scrollNext()
      if (e.key === "ArrowLeft") emblaApi.scrollPrev()
      if (e.key === "Escape") closeCarousel()
    },
    [emblaApi, closeCarousel],
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={closeCarousel}
        className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Close gallery"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 z-10 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
        {selectedIndex + 1} / {images.length}
      </div>

      {/* Main carousel container */}
      <div className="relative w-full max-w-6xl mx-4">
        <div ref={emblaRef} className="overflow-hidden rounded-lg w-full" onClick={(e) => e.stopPropagation()}>
          <div className="flex w-full">
            {images.map((src, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-4">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Gallery image ${i + 1}`}
                  className="max-h-[80vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        {canScrollPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              emblaApi?.scrollPrev()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {canScrollNext && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              emblaApi?.scrollNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={closeCarousel} aria-label="Close gallery" />
    </div>
  )
}
