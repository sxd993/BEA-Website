import { FaRocket, FaShieldAlt, FaUsers, FaClock, FaCheckCircle, FaHeadset } from 'react-icons/fa';

export const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-10">
          {/* Text Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              Мы предоставляем полный цикл разработки с гарантией качества и соблюдением всех сроков
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4">
                <FaRocket className="w-full h-full text-blue-500" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Быстрая разработка</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm">
                Используем современные технологии и готовые решения для ускорения процесса разработки
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4">
                <FaShieldAlt className="w-full h-full text-green-500" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Безопасность</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm">
                Следуем лучшим практикам безопасности и защищаем данные ваших пользователей
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4">
                <FaUsers className="w-full h-full text-purple-500" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Опытная команда</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm">
                Каждый разработчик имеет 5+ лет опыта в своей области специализации
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4">
                <FaClock className="w-full h-full text-orange-500" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Соблюдение сроков</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm">
                Планируем проекты детально и всегда укладываемся в оговоренные временные рамки
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4">
                <FaCheckCircle className="w-full h-full text-teal-500" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Гарантия качества</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm">
                Проводим тщательное тестирование и предоставляем гарантию на выполненную работу
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
              <div className="w-12 h-12 mx-auto mb-4">
                <FaHeadset className="w-full h-full text-indigo-500" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">Поддержка 24/7</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm">
                Оказываем техническую поддержку и сопровождение проектов круглосуточно
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};