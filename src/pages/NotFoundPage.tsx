import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200/50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl shadow-gray-200/20 p-8 md:p-12 hover:shadow-3xl hover:shadow-gray-300/30 transition-all duration-500">
          
          {/* 404 Header */}
          <div className="text-center mb-12">
            <div className="relative mb-8">
              {/* Декоративные элементы */}
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-[#b76ec7]/15 to-[#8e24aa]/10 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-[#8e24aa]/12 to-[#b76ec7]/8 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
              
              {/* 404 число */}
              <div className="relative">
                <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#8e24aa] to-[#b76ec7] bg-clip-text text-transparent mb-6 opacity-90">
                  404
                </h1>
                
                {/* Иконка поиска */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-gray-200/50">
                    <Search className="w-8 h-8 text-[#8e24aa]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Заголовок и описание */}
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent leading-tight mb-6">
              Страница не найдена
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              К сожалению, запрашиваемая страница не существует. Возможно, она была удалена или вы ошиблись в адресе.
            </p>
          </div>

          {/* Кнопки действий */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-12">
            <button
              onClick={handleGoHome}
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white rounded-full hover:from-[#8e24aa] hover:to-[#b76ec7] transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl hover:shadow-[#b76ec7]/25 hover:scale-105 min-w-[200px]"
            >
              На главную
            </button>
            
            <button
              onClick={handleGoBack}
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base bg-white text-gray-800 border-2 border-gray-200 rounded-full hover:border-[#b76ec7] hover:bg-gradient-to-r hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105 min-w-[200px]"
            >
              Назад
            </button>
          </div>

          {/* Контактная информация */}
          <div className="text-center">
            <p className="text-gray-500 text-sm md:text-base">
              Остались вопросы? 
              <a 
                href="https://t.me/sxdddddddddd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#8e24aa] hover:text-[#b76ec7] font-medium ml-1 transition-colors duration-300 hover:underline"
              >
                Свяжитесь с нами
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};