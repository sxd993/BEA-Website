import { AccordionSection } from "../../shared/ui/AccordionSection";
import { useCalculator } from "../../features/calculator/hooks/useCalculator";
import {
  projectTypes,
  additionalFeatures,
  timelineMultipliers,
  type AdditionalFeature,
  type ProjectType,
  type Timeline,
} from "../../features/calculator/const/calculatorData";

export const Calculator = () => {
  const {
    projectType,
    setProjectType,
    features,
    timeline,
    setTimeline,
    handleFeatureChange,
    calculatePrice,
  } = useCalculator();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl shadow-gray-200/20 p-6 md:p-8 hover:shadow-3xl hover:shadow-gray-300/30 transition-all duration-500">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent">
              Калькулятор стоимости
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Рассчитайте предварительную стоимость вашего проекта за пару минут
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-200/50">

              <div>
                {/* Тип проекта */}
                <div>
                  <AccordionSection title="Тип проекта" titleClassName="text-sm md:text-base">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {Object.entries(projectTypes).map(([key, type]) => {
                        const projectTypeKey = key as ProjectType;
                        return (
                          <label key={key} className="cursor-pointer">
                            <div
                              className={`p-3 md:p-4 border rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 hover:shadow-md hover:-translate-y-1 ${
                                projectType === projectTypeKey
                                  ? "border-[#b76ec7] bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 shadow-md shadow-[#b76ec7]/20"
                                  : "border-gray-200/50 hover:border-[#b76ec7]/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="projectType"
                                  value={key}
                                  checked={projectType === projectTypeKey}
                                  onChange={(e) => setProjectType(e.target.value as ProjectType)}
                                  className="w-4 h-4 text-[#b76ec7] focus:ring-0 focus:outline-none flex-shrink-0"
                                />
                              <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-2 min-w-0">
                                <span className="font-medium text-sm md:text-base break-words">
                                  {type.name}
                                </span>
                                <span className="px-3 md:px-4 py-1.5 text-xs md:text-sm font-semibold text-[#b76ec7] bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 rounded-full whitespace-nowrap shadow-md self-start md:self-auto border border-[#b76ec7]/20">
                                  {type.price.toLocaleString()} ₽
                                </span>
                              </div>
                            </div>
                          </div>
                        </label>
                        );
                      })}
                    </div>
                  </AccordionSection>
                </div>

                {/* Дополнительные функции */}
                <div>
                  <AccordionSection title="Доп. функции" titleClassName="text-sm md:text-base">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {Object.entries(additionalFeatures).map(([key, feature]) => {
                        const featureKey = key as AdditionalFeature;
                        return (
                          <label key={key} className="cursor-pointer">
                            <div
                              className={`p-3 border rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 hover:shadow-md hover:-translate-y-1 ${
                                features.includes(featureKey)
                                  ? "border-[#b76ec7] bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 shadow-md shadow-[#b76ec7]/20"
                                  : "border-gray-200/50 hover:border-[#b76ec7]/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  checked={features.includes(featureKey)}
                                  onChange={() => handleFeatureChange(featureKey)}
                                  className="w-4 h-4 text-[#b76ec7] focus:ring-0 focus:outline-none rounded flex-shrink-0"
                                />
                              <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-2 min-w-0">
                                <span className="font-medium text-sm md:text-base break-words">
                                  {feature.name}
                                </span>
                                <span className="text-xs md:text-sm bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto border border-gray-300/50 shadow-sm">
                                  +{feature.price.toLocaleString()} ₽
                                </span>
                              </div>
                            </div>
                          </div>
                        </label>
                        );
                      })}
                    </div>
                  </AccordionSection>
                </div>

                {/* Сроки выполнения */}
                <div>
                  <AccordionSection title="Сроки выполнения" titleClassName="text-sm md:text-base">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {Object.entries(timelineMultipliers).map(([key, option]) => {
                        const timelineKey = key as Timeline;
                        return (
                          <label key={key} className="cursor-pointer">
                            <div
                              className={`p-3 border rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 hover:shadow-md hover:-translate-y-1 ${
                                timeline === timelineKey
                                  ? "border-[#b76ec7] bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 shadow-md shadow-[#b76ec7]/20"
                                  : "border-gray-200/50 hover:border-[#b76ec7]/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="timeline"
                                  value={key}
                                  checked={timeline === timelineKey}
                                  onChange={(e) => setTimeline(e.target.value as Timeline)}
                                  className="w-4 h-4 text-[#b76ec7] focus:ring-0 focus:outline-none flex-shrink-0"
                                />
                              <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-2 min-w-0">
                                <span className="font-medium text-sm md:text-base break-words">
                                  {option.name}
                                </span>
                                <span
                                  className={`text-xs md:text-sm px-2 py-1 rounded whitespace-nowrap self-start md:self-auto ${
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
                        );
                      })}
                    </div>
                  </AccordionSection>
                </div>

                {/* Результат */}
                <div className="bg-gradient-to-r from-[#b76ec7]/15 to-[#8e24aa]/15 rounded-xl p-4 md:p-6 border border-[#b76ec7]/30 shadow-lg shadow-[#b76ec7]/10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-full">
                      <h3 className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-[#8e24aa] to-[#b76ec7] bg-clip-text text-transparent">
                        Предварительная стоимость
                      </h3>
                      <p className="text-sm text-gray-600 px-2 leading-relaxed">
                        Точная цена определяется после анализа требований
                      </p>
                    </div>
                    
                    <div className="w-full space-y-4">
                      <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#8e24aa] to-[#b76ec7] bg-clip-text text-transparent drop-shadow-lg">
                        {calculatePrice().toLocaleString()} ₽
                      </div>
                      
                      <a
                        href="https://t.me/sxdddddddddd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 h-10 px-6 text-sm bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white rounded-full hover:from-[#8e24aa] hover:to-[#b76ec7] transition-all duration-300 whitespace-nowrap w-full md:w-auto min-w-[180px] shadow-lg hover:shadow-xl hover:shadow-[#b76ec7]/25 hover:scale-105 animate-glow"
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
        </div>
      </div>
    </section>
  );
};