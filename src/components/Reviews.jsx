import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const Reviews = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const reviews = [
    {
      name: t.reviews.review1.name,
      text: t.reviews.review1.text,
      rating: 5,
    },
    {
      name: t.reviews.review2.name,
      text: t.reviews.review2.text,
      rating: 5,
    },
    {
      name: t.reviews.review3.name,
      text: t.reviews.review3.text,
      rating: 5,
    },
  ]

  return (
    <section
      id="reviews"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/95"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-gradient-shimmer leading-tight pb-3 overflow-visible">
            {t.reviews.title}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-sm p-6 sm:p-8 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic text-sm sm:text-base">
                "{review.text}"
              </p>
              <p className="text-gold-400 font-semibold text-sm sm:text-base">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
