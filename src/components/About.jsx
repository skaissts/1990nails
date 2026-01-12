import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/95"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-gradient-shimmer leading-tight">
          {t.about.title}
        </h2>
        <div className="w-24 h-1 bg-gold-500 mx-auto mb-8 sm:mb-12"></div>
        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
          {t.about.text}
        </p>
      </div>
    </section>
  )
}

export default About
