import { useScrollNavigation } from "../hooks/useScrollNavigation";

export const WelcomeMessage = () => {
  const { scrollToSection } = useScrollNavigation();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl shadow-gray-200/20 p-8 md:p-12 hover:shadow-3xl hover:shadow-gray-300/30 transition-all duration-500">
          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent leading-tight">
              Создаем цифровые решения для вашего бизнеса
            </h1>
            <p className="mt-6 text-gray-600 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
              Профессиональная команда разработчиков с опытом 5+ лет. Разрабатываем веб-приложения, мобильные приложения и сложные системы.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
              <button
                onClick={() => scrollToSection('calculator')}
                className="inline-flex items-center justify-center h-12 px-8 text-base bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white rounded-full hover:from-[#8e24aa] hover:to-[#b76ec7] transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl hover:shadow-[#b76ec7]/25 hover:scale-105"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="inline-flex items-center justify-center h-12 px-8 text-base bg-white text-gray-800 border-2 border-gray-200 rounded-full hover:border-[#b76ec7] hover:bg-gradient-to-r hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105"
              >
                Наша команда
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};