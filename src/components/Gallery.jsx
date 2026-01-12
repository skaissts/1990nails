import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const Gallery = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedImage, setSelectedImage] = useState(null)

  // Gallery images - using actual image files
  const galleryImages = [
    {
      id: 1,
      url: '/gallery/IMG_5696.jpg',
      alt: 'Nail art design',
    },
    {
      id: 2,
      url: '/gallery/IMG_5697.jpg',
      alt: 'Nail art design',
    },
    {
      id: 3,
      url: '/gallery/IMG_5698.jpg',
      alt: 'Nail art design',
    },
    {
      id: 4,
      url: '/gallery/IMG_5699.jpg',
      alt: 'Nail art design',
    },
    {
      id: 5,
      url: '/gallery/IMG_5700.jpg',
      alt: 'Nail art design',
    },
    {
      id: 6,
      url: '/gallery/IMG_5701.jpg',
      alt: 'Nail art design',
    },
    {
      id: 7,
      url: '/gallery/IMG_5702.jpg',
      alt: 'Nail art design',
    },
    {
      id: 8,
      url: '/gallery/IMG_5703.jpg',
      alt: 'Nail art design',
    },
    {
      id: 9,
      url: '/gallery/IMG_5704.jpg',
      alt: 'Nail art design',
    },
  ]

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section
        id="gallery"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-gradient-shimmer leading-tight">
              {t.gallery.title}
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openModal(image)}
                className="w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.67rem)] aspect-square overflow-hidden rounded-sm bg-white/5 border border-white/10 hover:border-gold-500/50 transition-all duration-300 group cursor-pointer relative max-w-md"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const placeholder = e.target.parentElement.querySelector('.placeholder')
                    if (placeholder) placeholder.style.display = 'flex'
                  }}
                />
                <div className="placeholder hidden absolute inset-0 bg-gradient-to-br from-gold-900/20 via-black to-gold-900/20 items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gold-500/30 group-hover:text-gold-400/50 transition-colors"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <a
              href="https://www.instagram.com/1990nails.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              {t.gallery.instagram}
            </a>
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors z-10"
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default Gallery
