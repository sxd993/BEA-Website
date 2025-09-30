import { useScrollNavigation } from "../hooks/useScrollNavigation";

const FloatingStar = ({ delay = 0, size = 'small' }: { delay?: number; size?: 'small' | 'medium' | 'large' }) => {
  const sizeClasses = {
    small: 'w-1 h-1',
    medium: 'w-1.5 h-1.5',
    large: 'w-2 h-2'
  };

  return (
    <div 
      className={`absolute ${sizeClasses[size]} bg-white rounded-full opacity-60 animate-float-stars`}
      style={{ 
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

export const WelcomeMessage = () => {
  const { scrollToSection } = useScrollNavigation();
  

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden px-4 md:px-8 lg:px-12">
      {/* Floating stars background */}
      <div className="absolute inset-0">
        {/* Small stars - more coverage */}
        {Array.from({ length: 50 }).map((_, i) => (
          <FloatingStar 
            key={`small-${i}`} 
            delay={i * 0.2} 
            size="small"
          />
        ))}
        {/* Medium stars - better distribution */}
        {Array.from({ length: 25 }).map((_, i) => (
          <FloatingStar 
            key={`medium-${i}`} 
            delay={i * 0.25} 
            size="medium"
          />
        ))}
        {/* Large stars - strategic placement */}
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingStar 
            key={`large-${i}`} 
            delay={i * 0.3} 
            size="large"
          />
        ))}
        {/* Extra small stars for density */}
        {Array.from({ length: 30 }).map((_, i) => (
          <FloatingStar 
            key={`extra-small-${i}`} 
            delay={i * 0.15} 
            size="small"
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 w-full">
        <div className="max-w-xs md:max-w-4xl lg:max-w-6xl mx-auto text-center px-4 md:px-8 lg:px-12">
        
          <div className="mb-6 md:mb-10 lg:mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <div className="bg-gradient-to-r from-white via-[#b76ec7] to-white bg-clip-text text-transparent">
                Создаем цифровые решения
              </div>
              <div className="mt-1 md:mt-2 lg:mt-3 bg-gradient-to-r from-[#b76ec7] via-white to-[#8e24aa] bg-clip-text text-transparent">
                для вашего бизнеса
              </div>
            </h1>
          </div>

          {/* Subtitle with enhanced styling */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <div className="relative max-w-xs md:max-w-3xl lg:max-w-4xl mx-auto px-2 md:px-4 lg:px-6">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Профессиональная команда разработчиков с опытом{" "}
                <span className="text-[#b76ec7] font-semibold">5+ лет</span>
              </p>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed mt-2 md:mt-3">
                Разрабатываем веб-приложения, мобильные приложения и сложные системы
              </p>
            </div>
          </div>

          {/* Enhanced buttons container */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10 justify-center items-center px-4 md:px-6 lg:px-8">
            <button
              onClick={() => scrollToSection('calculator')}
              className="group relative overflow-hidden md:px-6 px-3 md:py-3 py-2 md:text-base text-sm font-bold text-white rounded-full border-2 border-[#b76ec7] hover:border-[#b76ec7] transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-[#b76ec7]/50 bg-gradient-to-r from-[#b76ec7]/20 to-[#8e24aa]/20 backdrop-blur-sm active:scale-95"
            >
              Рассчитать стоимость
            </button>
            
            <button
              onClick={() => scrollToSection('team')}
              className="group relative overflow-hidden md:px-6 px-3 md:py-3 py-2 md:text-base text-sm font-bold text-white rounded-full border-2 border-white/40 hover:border-white hover:bg-white/5 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-white/30 backdrop-blur-sm active:scale-95"
            >
              Наша команда
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};