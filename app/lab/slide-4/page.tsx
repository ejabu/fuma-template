"use client"

import GalleryModal from "./components/gallery-modal"
import { GalleryProvider, useGallery } from "./components/gallery-provider"

function GalleryGrid() {
  const { openCarousel } = useGallery()

  // Sample images for the gallery
  const sampleImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=500&width=700",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=450&width=650",
    "/placeholder.svg?height=550&width=750",
    "/placeholder.svg?height=400&width=600",
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Beautiful Gallery</h1>
        <p className="text-center text-gray-600 mb-12">Click any image to open the modal gallery</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleImages.map((src, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openCarousel(index, sampleImages)}
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
              />
              {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center"> */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <GalleryProvider>
      <GalleryGrid />
      <GalleryModal />
    </GalleryProvider>
  )
}
