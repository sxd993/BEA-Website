import { useScrollNavigation } from "../hooks/useScrollNavigation";

export const WelcomeMessage = () => {
  const { scrollToSection } = useScrollNavigation();

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-10">
          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
              Создаем цифровые решения для вашего бизнеса
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
              Профессиональная команда разработчиков с опытом 5+ лет. Разрабатываем веб-приложения, мобильные приложения и сложные системы.
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={() => scrollToSection('calculator')}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition whitespace-nowrap text-sm md:text-base"
              >
                Рассчитать стоимость
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition whitespace-nowrap text-sm md:text-base"
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