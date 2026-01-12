import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const Location = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const address = 'Lassallestraße 44, 1020 Wien, Austria'
  const mapUrl = `https://www.google.com/maps?q=Lassallestraße+44,+1020+Wien,+Austria&output=embed`

  return (
    <section
      id="location"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-gradient-shimmer leading-tight">
            {t.location.title}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            {t.location.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white/5 border border-white/10 rounded-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-gold-400 mb-4 sm:mb-6 leading-tight">
              {t.location.addressTitle}
            </h3>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {address}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white/70 text-sm sm:text-base">
                  {t.location.addressInfo}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ minHeight: '300px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
