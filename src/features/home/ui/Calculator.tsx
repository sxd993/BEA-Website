export const Calculator = () => {
    return (
      <div className="flex flex-col items-center bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Калькулятор стоимости
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Рассчитайте предварительную стоимость вашего проекта за пару минут
          </p>
        </div>
  
        <div className="w-full">
          {/* Project Parameters Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Выберите параметры проекта</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Тип проекта</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Лендинг 50 000 ₽</button>
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Интернет-магазин 300 000 ₽</button>
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Мобильное приложение 600 000 ₽</button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Корпоративный сайт 150 000 ₽</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Веб-приложение 500 000 ₽</button>
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Комплексная система 1 000 000 ₽</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Additional Functions Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Дополнительные функции</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Панель администратора +100 000 ₽</button>
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Аналитика и отчеты +80 000 ₽</button>
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Чат поддержка +60 000 ₽</button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Система платежей +150 000 ₽</button>
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Интеграция с API +120 000 ₽</button>
                  <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Мобильная версия +200 000 ₽</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Development Speed Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Сроки выполнения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Срочно (до 2 недель) +80%</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Быстро (до 1 месяца) +40%</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <button className="w-full text-left p-2 bg-white border border-gray-200 rounded hover:bg-gray-100">Стандартно (2-3 месяца) Базовая цена</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <button className="w-full text-left p-2 bg-white border border-gray-200 rounded ">Не спешим (3+ месяца) -15%</button>
              </div>
            </div>
          </div>
  
          {/* Total Cost Section */}
          <div className="text-center mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Предварительная стоимость</h2>
            <p className="text-2xl font-bold text-gray-900 mb-4">50 000 ₽</p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    );
  };
