"use client"

import type React from "react"
import { createContext, useCallback, useContext, useMemo, useState } from "react"

interface GalleryContextValue {
  images: string[]
  isOpen: boolean
  startIndex: number
  openCarousel: (index: number, imgs?: string[]) => void
  closeCarousel: () => void
}

/**
 * Dummy fallback images so the gallery always has something to show.
 * Replace these with real image URLs or pass a custom array to `openCarousel`.
 */
const FALLBACK_IMAGES = [
  "/placeholder.svg?height=800&width=1200",
  "/placeholder.svg?height=800&width=1200",
  "/placeholder.svg?height=800&width=1200",
]

const GalleryContext = createContext<GalleryContextValue | undefined>(undefined)

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<string[]>(FALLBACK_IMAGES)
  const [isOpen, setIsOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  const openCarousel = useCallback(
    (index: number, imgs: string[] = images) => {
      setImages(imgs)
      setStartIndex(index)
      setIsOpen(true)
    },
    [images],
  )

  const closeCarousel = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(
    () => ({ images, isOpen, startIndex, openCarousel, closeCarousel }),
    [images, isOpen, startIndex, openCarousel, closeCarousel],
  )

  return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
}

export function useGallery() {
  const ctx = useContext(GalleryContext)
  if (!ctx) {
    throw new Error("useGallery must be used within a GalleryProvider")
  }
  return ctx
}
