export const WelcomeMessage = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-4 md:p-8 rounded-lg max-w-6xl mx-auto border-b border-gray-200 gap-8 lg:gap-16">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Создаем цифровые решения для вашего бизнеса
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg max-w-lg">
            Профессиональная команда разработчиков с опытом 5+ лет. Разрабатываем веб-приложения, мобильные приложения и сложные системы.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition whitespace-nowrap">
              Рассчитать стоимость
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition whitespace-nowrap">
              Наша команда
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500 flex flex-col sm:flex-row gap-3 sm:gap-6">
            <span className="flex items-center justify-center lg:justify-start">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2 flex-shrink-0"></span> 
              Гарантия качества
            </span>
            <span className="flex items-center justify-center lg:justify-start">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2 flex-shrink-0"></span> 
              Сроки в договоре
            </span>
            <span className="flex items-center justify-center lg:justify-start">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2 flex-shrink-0"></span> 
              Поддержка 24/7
            </span>
          </div>
        </div>
  
        {/* Image Section */}
        <div className="relative flex-shrink-0 w-full lg:w-auto">
          <img
            src="src/assets/zhenek.png"
            alt="Team working on code"
            className="rounded-lg object-cover w-full lg:w-[350px] xl:w-[400px] h-[250px] md:h-[300px]"
          />
          <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            50+ проектов
          </span>
          <div className="absolute bottom-2 right-2 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
            5+ лет опыта
          </div>
        </div>
      </div>
    );
  };