export const NeededTechnology = () => {
  const advantages = [
    "Быстрое обучение",
    "Гибкость в выборе стека",
    "Следуем трендам"
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-10">
          {/* Основная карточка */}
          <div className="bg-white p-8 md:p-12 rounded-xl">
            <div className="text-center space-y-6">
              {/* Заголовок */}
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Не нашли нужную технологию?
              </h2>

              {/* Описание */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Мы постоянно изучаем новые технологии и можем освоить любой стек под ваш проект.
                Наша команда быстро адаптируется к требованиям и готова работать с любыми
                инструментами.
              </p>

              {/* Преимущества */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 pt-2">
                {advantages.map((advantage, index) => (
                  <span
                    key={`${advantage}-${index}`}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-[#b76ec7]/10 text-[#b76ec7] border border-[#b76ec7]/30 rounded-full text-[11px] md:text-xs font-medium hover:bg-[#b76ec7]/20 transition-colors duration-200"
                  >
                    {advantage}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};