import { useScrollNavigation } from "../hooks/useScrollNavigation";

export const WelcomeMessage = () => {
  const { scrollToSection } = useScrollNavigation();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-10 md:p-8 rounded-lg max-w-6xl mx-auto border-b border-gray-200 gap-8 lg:gap-16">
      {/* Text Section */}
      <div className="text-center lg:text-left flex-1 min-w-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Создаем цифровые решения для вашего бизнеса
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg max-w-lg">
          Профессиональная команда разработчиков с опытом 5+ лет. Разрабатываем веб-приложения, мобильные приложения и сложные системы.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={() => scrollToSection('calculator')}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition whitespace-nowrap"
          >
            Рассчитать стоимость
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition whitespace-nowrap"
          >
            Наша команда
          </button>
        </div>
      </div>
    </div>
  );
};