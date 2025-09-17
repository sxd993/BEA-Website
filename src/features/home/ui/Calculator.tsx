import { useState } from "react";
import { AccordionSection } from "../../../shared/ui/AccordionSection";

export const Calculator = () => {
  const [projectType, setProjectType] = useState("landing");
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("standard");

  const projectTypes = {
    landing: { name: "Лендинг", price: 50000 },
    corporate: { name: "Корпоративный сайт", price: 150000 },
    ecommerce: { name: "Интернет-магазин", price: 300000 },
    webapp: { name: "Веб-приложение", price: 500000 },
    mobile: { name: "Мобильное приложение", price: 600000 },
    system: { name: "Комплексная система", price: 1000000 },
  };

  const additionalFeatures = {
    admin: { name: "Панель администратора", price: 100000 },
    payment: { name: "Система платежей", price: 150000 },
    analytics: { name: "Аналитика и отчеты", price: 80000 },
    integration: { name: "Интеграции с API", price: 120000 },
    chat: { name: "Чат поддержка", price: 60000 },
    mobile_app: { name: "Мобильная версия", price: 200000 },
  };

  const timelineMultipliers = {
    urgent: { name: "Срочно (до 2 недель)", multiplier: 1.8 },
    fast: { name: "Быстро (до 1 месяца)", multiplier: 1.4 },
    standard: { name: "Стандартно (2-3 месяца)", multiplier: 1 },
    extended: { name: "Не спешим (3+ месяца)", multiplier: 0.85 },
  };

  const handleFeatureChange = (featureId: string) => {
    if (features.includes(featureId)) {
      setFeatures(features.filter((f) => f !== featureId));
    } else {
      setFeatures([...features, featureId]);
    }
  };

  const calculatePrice = () => {
    const basePrice =
      projectTypes[projectType as keyof typeof projectTypes].price;
    const featuresPrice = features.reduce((sum, featureId) => {
      return (
        sum +
        additionalFeatures[featureId as keyof typeof additionalFeatures].price
      );
    }, 0);
    const totalPrice =
      (basePrice + featuresPrice) *
      timelineMultipliers[timeline as keyof typeof timelineMultipliers]
        .multiplier;

    return Math.round(totalPrice);
  };

  return (
    <section className="py-8 sm:py-10 bg-background border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Рассчитайте предварительную стоимость вашего проекта за пару минут
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-300 shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl text-center font-semibold mb-6 sm:mb-8">
              Выберите параметры проекта
            </h3>

            {/* Тип проекта */}
            <AccordionSection title="Тип проекта">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(projectTypes).map(([key, type]) => (
                  <label key={key} className="cursor-pointer">
                    <div
                      className={`p-4 sm:p-6 border rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                        projectType === key
                          ? "border-[#b76ec7] bg-[#b76ec7]/5"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="projectType"
                          value={key}
                          checked={projectType === key}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-4 h-4 text-[#b76ec7] focus:ring-0 focus:outline-none flex-shrink-0"
                        />
                        <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 min-w-0">
                          <span className="font-medium text-sm sm:text-base break-words">
                            {type.name}
                          </span>
                          <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-[#b76ec7] bg-[#b76ec7]/10 rounded-full whitespace-nowrap shadow-sm self-start sm:self-auto">
                            {type.price.toLocaleString()} ₽
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </AccordionSection>

            {/* Дополнительные функции */}
            <AccordionSection title="Дополнительные функции">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(additionalFeatures).map(([key, feature]) => (
                  <label key={key} className="cursor-pointer">
                    <div
                      className={`p-4 border rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                        features.includes(key)
                          ? "border-[#b76ec7] bg-[#b76ec7]/5"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={features.includes(key)}
                          onChange={() => handleFeatureChange(key)}
                          className="w-4 h-4 text-[#b76ec7] focus:ring-0 focus:outline-none rounded flex-shrink-0"
                        />
                        <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 min-w-0">
                          <span className="font-medium text-sm sm:text-base break-words">
                            {feature.name}
                          </span>
                          <span className="text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded whitespace-nowrap self-start sm:self-auto">
                            +{feature.price.toLocaleString()} ₽
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </AccordionSection>

            {/* Сроки выполнения */}
            <AccordionSection title="Сроки выполнения">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(timelineMultipliers).map(([key, option]) => (
                  <label key={key} className="cursor-pointer">
                    <div
                      className={`p-4 border rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                        timeline === key
                          ? "border-[#b76ec7] bg-[#b76ec7]/5"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="timeline"
                          value={key}
                          checked={timeline === key}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-4 h-4 text-[#b76ec7] focus:ring-0 focus:outline-none flex-shrink-0"
                        />
                        <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 min-w-0">
                          <span className="font-medium text-sm sm:text-base break-words">
                            {option.name}
                          </span>
                          <span
                            className={`text-xs sm:text-sm px-2 py-1 rounded whitespace-nowrap self-start sm:self-auto ${
                              option.multiplier > 1
                                ? "bg-red-100 text-red-800"
                                : option.multiplier < 1
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {option.multiplier > 1
                              ? `+${Math.round(
                                  (option.multiplier - 1) * 100
                                )}%`
                              : option.multiplier < 1
                              ? `-${Math.round(
                                  (1 - option.multiplier) * 100
                                )}%`
                              : "Базовая цена"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </AccordionSection>

            {/* Результат */}
            <div className="bg-gradient-to-r from-[#b76ec7]/10 to-[#b76ec7]/5 rounded-lg p-4 sm:p-6 border border-[#b76ec7]/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Предварительная стоимость
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 px-2">
                    Точная цена определяется после анализа требований
                  </p>
                </div>
                
                <div className="w-full space-y-4">
                  <div className="text-2xl sm:text-3xl font-bold text-[#b76ec7]">
                    {calculatePrice().toLocaleString()} ₽
                  </div>
                  
                  <a
                    href="https://t.me/sxdddddddddd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#b76ec7] text-white px-6 py-3 rounded-lg hover:bg-[#b76ec7]/80 transition-colors font-medium text-sm sm:text-base w-full sm:w-auto min-w-[200px]"
                  >
                    Обсудить проект
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};