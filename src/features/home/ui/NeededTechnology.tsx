export const NeededTechnology = () => {
    const advantages = [
      "Быстрое обучение",
      "Гибкость в выборе стека", 
      "Следуем трендам"
    ];
  
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Основная карточка */}
            <div className="bg-card p-8 md:p-12 rounded-xl border border-gray-300 shadow-lg">
              <div className="text-center space-y-6">
                {/* Заголовок */}
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Не нашли нужную технологию?
                </h2>
                
                {/* Описание */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Мы постоянно изучаем новые технологии и можем освоить любой стек под ваш проект.
                  Наша команда быстро адаптируется к требованиям и готова работать с любыми
                  инструментами.
                </p>
  
                {/* Преимущества */}
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  {advantages.map((advantage, index) => (
                    <span
                      key={`${advantage}-${index}`}
                      className="px-4 py-2 bg-[#b76ec7]/10 text-[#b76ec7] border border-[#b76ec7]/30 rounded-full text-xs font-medium hover:bg-[#b76ec7]/20 transition-colors duration-200"
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