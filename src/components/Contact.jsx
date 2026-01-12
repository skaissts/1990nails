import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const phoneNumber = '+43 677 64747789'
  const whatsappNumber = '4367764747789'

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/95"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-gradient-shimmer leading-tight">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[calc(33.333%-0.89rem)] max-w-md bg-white/5 border border-white/10 rounded-sm p-5 sm:p-6 hover:border-gold-500/50 hover:bg-white/10 transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gold-500/30 transition-colors">
              <svg
                className="w-6 h-6 text-gold-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{t.contact.whatsapp}</h3>
            <p className="text-white/60 text-xs sm:text-sm">{t.contact.whatsappDesc}</p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="w-full sm:w-[calc(33.333%-0.89rem)] max-w-md bg-white/5 border border-white/10 rounded-sm p-5 sm:p-6 hover:border-gold-500/50 hover:bg-white/10 transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gold-500/30 transition-colors">
              <svg
                className="w-6 h-6 text-gold-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{t.contact.phone}</h3>
            <p className="text-white/60 text-xs sm:text-sm">{phoneNumber}</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/1990nails.at/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[calc(33.333%-0.89rem)] max-w-md bg-white/5 border border-white/10 rounded-sm p-5 sm:p-6 hover:border-gold-500/50 hover:bg-white/10 transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gold-500/30 transition-colors">
              <svg
                className="w-6 h-6 text-gold-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{t.contact.instagram}</h3>
            <p className="text-white/60 text-xs sm:text-sm">@1990nails</p>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-white/10 text-center">
        <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4">
          {t.contact.footer}
        </p>
        <p className="text-white/40 text-xs">
          {t.contact.footerSub}
        </p>
      </footer>
    </section>
  )
}

export default Contact
