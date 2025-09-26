import { FaRocket, FaShieldAlt, FaUsers, FaClock, FaCheckCircle, FaHeadset } from 'react-icons/fa';

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl shadow-gray-200/20 p-8 md:p-12 hover:shadow-3xl hover:shadow-gray-300/30 transition-all duration-500">
          {/* Text Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent leading-tight">
              Почему выбирают нас
            </h2>
            <p className="mt-6 text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Мы предоставляем полный цикл разработки с гарантией качества и соблюдением всех сроков
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center border border-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 hover:bg-gradient-to-br hover:from-[#b76ec7]/5 hover:to-white transition-all duration-500 hover:-translate-y-2 hover:border-[#b76ec7]/30 group">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#8e24aa] transition-colors duration-300">Быстрая разработка</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
                Используем современные технологии и готовые решения для ускорения процесса разработки
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center border border-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 hover:bg-gradient-to-br hover:from-[#b76ec7]/5 hover:to-white transition-all duration-500 hover:-translate-y-2 hover:border-[#b76ec7]/30 group">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#8e24aa] transition-colors duration-300">Безопасность</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
                Следуем лучшим практикам безопасности и защищаем данные ваших пользователей
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center border border-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 hover:bg-gradient-to-br hover:from-[#b76ec7]/5 hover:to-white transition-all duration-500 hover:-translate-y-2 hover:border-[#b76ec7]/30 group">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#8e24aa] transition-colors duration-300">Опытная команда</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
                Каждый разработчик имеет 5+ лет опыта в своей области специализации
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center border border-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 hover:bg-gradient-to-br hover:from-[#b76ec7]/5 hover:to-white transition-all duration-500 hover:-translate-y-2 hover:border-[#b76ec7]/30 group">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaClock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#8e24aa] transition-colors duration-300">Соблюдение сроков</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
                Планируем проекты детально и всегда укладываемся в оговоренные временные рамки
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center border border-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 hover:bg-gradient-to-br hover:from-[#b76ec7]/5 hover:to-white transition-all duration-500 hover:-translate-y-2 hover:border-[#b76ec7]/30 group">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaCheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#8e24aa] transition-colors duration-300">Гарантия качества</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
                Проводим тщательное тестирование и предоставляем гарантию на выполненную работу
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl text-center border border-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 hover:bg-gradient-to-br hover:from-[#b76ec7]/5 hover:to-white transition-all duration-500 hover:-translate-y-2 hover:border-[#b76ec7]/30 group">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaHeadset className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#8e24aa] transition-colors duration-300">Поддержка 24/7</h3>
              <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
                Оказываем техническую поддержку и сопровождение проектов круглосуточно
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};