import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center bg-black overflow-hidden"
    >
      {/* Logo Container with defined boundaries */}
      <div 
        className="relative w-full flex items-center justify-center"
        style={{
          height: '50vh',
          maxHeight: '600px',
          paddingTop: '80px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{
            maxWidth: '900px',
          }}
        >
          <img
            src="/logo.png"
            alt="1990 Nails Logo"
            className="w-full h-full object-contain"
            style={{ 
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              transform: 'scale(1.5)'
            }}
          />
        </div>
      </div>

      {/* Content below logo - with proper spacing to avoid overlap */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 sm:mt-12 md:mt-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 text-gradient-shimmer leading-tight pb-2">
          {t.hero.subtitle}
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light mb-8 tracking-wide">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#booking"
            className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-sm transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-base"
          >
            {t.hero.bookButton}
          </a>
          <a
            href="#services"
            className="px-6 py-3 border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10 font-semibold rounded-sm transition-all duration-300 uppercase tracking-wider text-base"
          >
            {t.hero.servicesButton}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
