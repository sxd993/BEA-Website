import { useMemo } from "react";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

const FloatingStar = ({ 
  size = 'small',
  left,
  top,
  moveX,
  moveY,
  duration
}: { 
  size?: 'small' | 'medium' | 'large';
  left: number;
  top: number;
  moveX: number;
  moveY: number;
  duration: number;
}) => {
  const sizeClasses = {
    small: 'w-1 h-1',
    medium: 'w-1.5 h-1.5',
    large: 'w-2 h-2'
  };

  const opacityClasses = {
    small: 'opacity-60',
    medium: 'opacity-70',
    large: 'opacity-80'
  };

  return (
    <div 
      className={`absolute ${sizeClasses[size]} ${opacityClasses[size]} bg-white rounded-full`}
      style={{ 
        left: `${left}%`,
        top: `${top}%`,
        willChange: 'transform',
        animation: `floatStar ${duration}s ease-in-out infinite`,
        '--move-x': `${moveX}px`,
        '--move-y': `${moveY}px`,
      } as React.CSSProperties & { '--move-x': string; '--move-y': string }}
    />
  );
};

export const WelcomeMessage = () => {
  const { scrollToSection } = useScrollNavigation();
  
  // Generate fixed positions and unique trajectories for stars using useMemo
  const starData = useMemo(() => {
    const generateStarData = (count: number) => 
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        moveX: (Math.random() - 0.5) * 100, // Random X movement between -50px and 50px
        moveY: (Math.random() - 0.5) * 80,  // Random Y movement between -40px and 40px
        duration: 6 + Math.random() * 4,    // Random duration between 6-10s
      }));
    
    return {
      small: generateStarData(50),
      medium: generateStarData(25),
      large: generateStarData(12),
      extraSmall: generateStarData(30),
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden px-4 md:px-8 lg:px-12">
      {/* Floating stars background */}
      <div className="absolute inset-0 z-[1]">
        {/* Small stars - more coverage */}
        {starData.small.map((star, i) => (
          <FloatingStar 
            key={`small-${i}`} 
            size="small"
            left={star.left}
            top={star.top}
            moveX={star.moveX}
            moveY={star.moveY}
            duration={star.duration}
          />
        ))}
        {/* Medium stars - better distribution */}
        {starData.medium.map((star, i) => (
          <FloatingStar 
            key={`medium-${i}`} 
            size="medium"
            left={star.left}
            top={star.top}
            moveX={star.moveX}
            moveY={star.moveY}
            duration={star.duration}
          />
        ))}
        {/* Large stars - strategic placement */}
        {starData.large.map((star, i) => (
          <FloatingStar 
            key={`large-${i}`} 
            size="large"
            left={star.left}
            top={star.top}
            moveX={star.moveX}
            moveY={star.moveY}
            duration={star.duration}
          />
        ))}
        {/* Extra small stars for density */}
        {starData.extraSmall.map((star, i) => (
          <FloatingStar 
            key={`extra-small-${i}`} 
            size="small"
            left={star.left}
            top={star.top}
            moveX={star.moveX}
            moveY={star.moveY}
            duration={star.duration}
          />
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-[5]" />

      <div className="container mx-auto relative z-10 w-full flex items-center justify-center">
        <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto text-center w-full px-4 sm:px-6 md:px-8 lg:px-12">
        
          {/* Main heading with improved readability */}
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight text-center">
              <div className="bg-gradient-to-r from-white via-[#b76ec7] via-white to-[#8e24aa] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(183,110,199,0.5)]">
                Создаем цифровые решения для вашего бизнеса
              </div>
            </h1>
          </div>

          {/* Subtitle with enhanced styling and readability */}
          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 flex flex-col items-center">
            <div className="relative max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto w-full text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 sm:text-gray-100 leading-relaxed sm:leading-relaxed font-medium drop-shadow-lg text-center">
                Профессиональная команда разработчиков с опытом{" "}
                <span className="text-[#b76ec7] font-bold drop-shadow-[0_0_8px_rgba(183,110,199,0.6)]">5+ лет</span>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 sm:text-gray-200 leading-relaxed mt-3 sm:mt-4 md:mt-5 font-normal drop-shadow-md text-center">
                Разрабатываем веб-приложения, мобильные приложения и сложные системы
              </p>
            </div>
          </div>

          {/* Enhanced buttons container */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center w-full">
            <button
              onClick={() => scrollToSection('calculator')}
              className="group relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-bold text-white rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl"
            >
              {/* Animated gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#b76ec7] via-[#8e24aa] to-[#b76ec7] bg-[length:200%_100%] animate-gradient-x opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              {/* Border glow */}
              <span className="absolute inset-0 rounded-full border-2 border-[#b76ec7] group-hover:border-white/60 transition-colors duration-300" />
              
              {/* Text with better contrast */}
              <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-lg">
                Рассчитать стоимость
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('team')}
              className="group relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-bold text-white rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl"
            >
              {/* Glass morphism background */}
              <span className="absolute inset-0 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full group-hover:bg-white/15 group-hover:border-white/50 transition-all duration-300" />
              
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              {/* Glow effect on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-white/5 blur-xl transition-opacity duration-300" />
              
              {/* Text with better contrast */}
              <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-lg">
                Наша команда
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};