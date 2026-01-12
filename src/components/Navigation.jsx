import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const Navigation = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'reviews', label: t.nav.reviews },
    { id: 'location', label: t.nav.location },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <>
      {/* Overlay with uniform darkening when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/85 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 border-b border-gold-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Hamburger Menu Button - Always visible */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                className="relative text-white hover:text-gold-400 transition-colors p-2 group"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                <div className="absolute inset-0 bg-gold-500/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg
                  className="relative w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500 rounded-sm transition-all duration-200 text-xs sm:text-sm font-semibold uppercase tracking-wider"
            >
              {language === 'de' ? 'EN' : 'DE'}
            </button>
          </div>

          {/* Menu Dropdown - Always visible when open */}
          {isMobileMenuOpen && (
            <div className="pb-6 space-y-1 border-t border-gold-500/20 mt-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-white/80 hover:text-gold-400 hover:bg-gold-500/10 rounded-sm transition-all duration-200 text-sm sm:text-base font-medium uppercase tracking-wider border-l-2 border-transparent hover:border-gold-500"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navigation
