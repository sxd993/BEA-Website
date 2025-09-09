export const WhyChooseUs = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto border-b border-gray-200">
        {/* Text Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Почему выбирают нас
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Мы предоставляем полный цикл разработки с гарантией качества и соблюдением всех сроков
          </p>
        </div>
  
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4">
              <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v-2h2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Быстрая разработка</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Используем современные технологии и готовые решения для ускорения процесса разработки
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4">
              <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v-2h2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Безопасность</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Следуем лучшим практикам безопасности и защищаем данные ваших пользователей
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4">
              <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v-2h2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Опытная команда</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Каждый разработчик имеет 5+ лет опыта в своей области специализации
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4">
              <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v-2h2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Соблюдение сроков</h3>
            <p className="mt-2 text-gray-600 text-sm">
            Планируем проекты детально и всегда укладываемся в оговоренные временные рамки
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4">
              <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v-2h2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Гарантия качества</h3>
            <p className="mt-2 text-gray-600 text-sm">
            Проводим тщательное тестирование и предоставляем гарантию на выполненную работу
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4">
              <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v-2h2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Поддержка 24/7</h3>
            <p className="mt-2 text-gray-600 text-sm">
            Оказываем техническую поддержку и сопровождение проектов круглосуточно
            </p>
          </div>
        </div>
      </div>
    );
  };