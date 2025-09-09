// src/features/home/ui/Calculator.tsx

import { useState } from "react";

export const Calculator = () => {
  const [projectType, setProjectType] = useState('landing');
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('standard');

  const projectTypes = {
    landing: { name: 'Лендинг', price: 50000 },
    corporate: { name: 'Корпоративный сайт', price: 150000 },
    ecommerce: { name: 'Интернет-магазин', price: 300000 },
    webapp: { name: 'Веб-приложение', price: 500000 },
    mobile: { name: 'Мобильное приложение', price: 600000 },
    system: { name: 'Комплексная система', price: 1000000 }
  };

  const additionalFeatures = {
    admin: { name: 'Панель администратора', price: 100000 },
    payment: { name: 'Система платежей', price: 150000 },
    analytics: { name: 'Аналитика и отчеты', price: 80000 },
    integration: { name: 'Интеграции с API', price: 120000 },
    chat: { name: 'Чат поддержка', price: 60000 },
    mobile_app: { name: 'Мобильная версия', price: 200000 }
  };

  const timelineMultipliers = {
    urgent: { name: 'Срочно (до 2 недель)', multiplier: 1.8 },
    fast: { name: 'Быстро (до 1 месяца)', multiplier: 1.4 },
    standard: { name: 'Стандартно (2-3 месяца)', multiplier: 1 },
    extended: { name: 'Не спешим (3+ месяца)', multiplier: 0.85 }
  };

  const handleFeatureChange = (featureId: string) => {
    if (features.includes(featureId)) {
      setFeatures(features.filter(f => f !== featureId));
    } else {
      setFeatures([...features, featureId]);
    }
  };

  const calculatePrice = () => {
    const basePrice = projectTypes[projectType as keyof typeof projectTypes].price;
    const featuresPrice = features.reduce((sum, featureId) => {
      return sum + additionalFeatures[featureId as keyof typeof additionalFeatures].price;
    }, 0);
    const totalPrice = (basePrice + featuresPrice) * timelineMultipliers[timeline as keyof typeof timelineMultipliers].multiplier;
    
    return Math.round(totalPrice);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте предварительную стоимость вашего проекта за пару минут
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-300 shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-8">Выберите параметры проекта</h3>
            
            {/* Тип проекта */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">Тип проекта</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(projectTypes).map(([key, type]) => (
                  <label key={key} className="cursor-pointer">
                    <div className={`p-4 border rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                      projectType === key ? 'border-[#b76ec7] bg-[#b76ec7]/5' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="projectType"
                          value={key}
                          checked={projectType === key}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-4 h-4 text-[#b76ec7] focus:ring-0 focus:outline-none"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <span className="font-medium">{type.name}</span>
                          <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {type.price.toLocaleString()} ₽
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Дополнительные функции */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">Дополнительные функции</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(additionalFeatures).map(([key, feature]) => (
                  <label key={key} className="cursor-pointer">
                    <div className={`p-4 border rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                      features.includes(key) ? 'border-[#b76ec7] bg-[#b76ec7]/5' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={features.includes(key)}
                          onChange={() => handleFeatureChange(key)}
                          className="w-4 h-4 text-[#b76ec7] focus:ring-0 focus:outline-none rounded"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <span className="font-medium">{feature.name}</span>
                          <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                            +{feature.price.toLocaleString()} ₽
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Сроки выполнения */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4">Сроки выполнения</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(timelineMultipliers).map(([key, option]) => (
                  <label key={key} className="cursor-pointer">
                    <div className={`p-4 border rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                      timeline === key ? 'border-[#b76ec7] bg-[#b76ec7]/5' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="timeline"
                          value={key}
                          checked={timeline === key}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-4 h-4 text-[#b76ec7] focus:ring-0 focus:outline-none"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <span className="font-medium">{option.name}</span>
                          <span className={`text-sm px-2 py-1 rounded ${
                            option.multiplier > 1 
                              ? 'bg-red-100 text-red-800' 
                              : option.multiplier < 1 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                          }`}>
                            {option.multiplier > 1 
                              ? `+${Math.round((option.multiplier - 1) * 100)}%`
                              : option.multiplier < 1 
                                ? `-${Math.round((1 - option.multiplier) * 100)}%`
                                : 'Базовая цена'
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Результат */}
            <div className="bg-gradient-to-r from-[#b76ec7]/10 to-[#b76ec7]/5 rounded-lg p-6 border border-[#b76ec7]/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Предварительная стоимость
                  </h3>
                  <p className="text-gray-600">
                    Точная цена определяется после анализа требований
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#b76ec7] mb-3">
                    {calculatePrice().toLocaleString()} ₽
                  </div>
                  <button 
                    onClick={scrollToContact}
                    className="bg-[#b76ec7] text-white px-6 py-3 rounded-lg hover:bg-[#b76ec7]/80 transition-colors font-medium flex items-center gap-2"
                  >
                    Обсудить проект
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};