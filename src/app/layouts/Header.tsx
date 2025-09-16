import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollNavigation } from "../../features/home/hooks/useScrollNavigation"; // Укажите путь к хуку

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollToSection } = useScrollNavigation();



  // Функция для обработки клика по логотипу
  const handleLogoClick = () => {
    // Используйте scrollToTop из хука:
    // scrollToTop();
    
    // Временная реализация (удалить после подключения хука):
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Обработчик для прокрутки при переходе с другой страницы
  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  // Закрытие мобильного меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationItems = [
    { label: "Преимущества", sectionId: "advantages" },
    { label: "Калькулятор", sectionId: "calculator" },
    { label: "Команда", sectionId: "team" },
    { label: "Технологии", sectionId: "technologies" },
    { label: "FAQ", sectionId: "faq" }
  ];

  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-gray-200 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Логотип */}
        <button 
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-xl font-semibold">bagsTack</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b76ec7] transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://t.me/sxdddddddddd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-foreground border border-border rounded-lg hover:bg-[#b76ec7] hover:text-white hover:border-[#b76ec7] transition-all duration-300"
          >
            Связаться
          </a>
          <button 
            onClick={() => navigate('/projects')}
            className="px-4 py-2 bg-[#b76ec7] text-white rounded-lg hover:bg-[#b76ec7]/80 transition-colors duration-200"
          >
            Наши проекты
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Открыть меню"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <a 
                href="https://t.me/sxdddddddddd"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-center text-foreground border border-border rounded-lg hover:bg-[#b76ec7] hover:text-white hover:border-[#b76ec7] transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Связаться
              </a>
              <button 
                onClick={() => {
                  navigate('/projects');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full px-4 py-3 text-center bg-[#b76ec7] text-white rounded-lg hover:bg-[#b76ec7]/80 transition-colors duration-200"
              >
                Наши проекты
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};