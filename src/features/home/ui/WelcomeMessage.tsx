export const WelcomeMessage = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto border-b border-gray-200">
        {/* Text Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Создаем<br />цифровые<br />решения для<br />вашего бизнеса
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Профессиональная команда разработчиков с опытом 5+ лет. <br /> Разрабатываем веб-приложения, мобильные приложения и сложные системы.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Рассчитать стоимость
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
              Наша команда
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500 flex flex-col md:flex-row md:space-x-4">
            <span className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span> Гарантия качества
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span> Сроки в договоре
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span> Поддержка 24/7
            </span>
          </div>
        </div>
  
        {/* Image Section */}
        <div className="relative">
          <img
            src="src/assets/zhenek.png" // Replace with actual image URL
            alt="Team working on code"
            className="rounded-lg object-cover w-full md:w-[400px] h-[300px]"
          />
          <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
            50+ проектов
          </span>
          <div className="absolute bottom-2 right-2 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow">
            5+ лет опыта
          </div>
        </div>
      </div>
    );
  };