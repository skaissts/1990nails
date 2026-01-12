import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const Services = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const serviceCategories = [
    {
      categoryKey: 'nails',
      services: [
        { key: 'newSet', duration: '90 min', price: '€75' },
        { key: 'refill', duration: '75 min', price: '€60' },
        { key: 'naturalNails', duration: '60 min', price: '€45' },
        { key: 'classicManicure', duration: '45 min', price: '€30' },
        { key: 'nailArt', duration: '30 min', price: '€15' },
      ],
    },
    {
      categoryKey: 'extensions',
      services: [
        { key: 'longNails', duration: '30 min', price: '€20' },
      ],
    },
    {
      categoryKey: 'repair',
      services: [
        { key: 'nailRepair', duration: '15 min', price: '€5' },
        { key: 'removal', duration: '30 min', price: '€20' },
      ],
    },
  ]

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-gradient-shimmer leading-tight pb-3 overflow-visible">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {serviceCategories.map((category, categoryIndex) => {
            const servicesCount = category.services.length
            const isNailsCategory = category.categoryKey === 'nails'
            const isSingleItem = servicesCount === 1
            
            let gridCols = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            if (isSingleItem) {
              gridCols = 'grid-cols-1 max-w-md mx-auto'
            }
            
            return (
              <div key={categoryIndex}>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-gold-400 mb-6 text-center leading-tight pb-2 overflow-visible">
                  {t.services.category[category.categoryKey]}
                </h3>
                <div className={`grid ${gridCols} gap-4 sm:gap-6`}>
                  {category.services.map((service, serviceIndex) => {
                    // Для категории nails, если это последний элемент (Nail Art), центрируем его
                    const isLastInNails = isNailsCategory && serviceIndex === servicesCount - 1 && servicesCount === 5
                    
                    if (isLastInNails) {
                      // Обертка для центрирования последнего элемента, сохраняя размер одного блока
                      return (
                        <div
                          key={serviceIndex}
                          className="md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:col-start-2"
                        >
                          <div className="w-full md:max-w-md bg-white/5 border border-white/10 rounded-sm p-5 sm:p-6 hover:border-gold-500/50 transition-all duration-300 hover:bg-white/10">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-3">
                              {t.services.items[service.key]}
                            </h4>
                            <div className="flex justify-between items-center text-sm text-white/70">
                              <span>{service.duration}</span>
                              <span className="text-gold-400 font-semibold text-lg">
                                {service.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    
                    return (
                      <div
                        key={serviceIndex}
                        className="bg-white/5 border border-white/10 rounded-sm p-5 sm:p-6 hover:border-gold-500/50 transition-all duration-300 hover:bg-white/10"
                      >
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3">
                          {t.services.items[service.key]}
                        </h4>
                        <div className="flex justify-between items-center text-sm text-white/70">
                          <span>{service.duration}</span>
                          <span className="text-gold-400 font-semibold text-lg">
                            {service.price}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
