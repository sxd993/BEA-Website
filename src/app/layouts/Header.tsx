import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
 
import { useScrollNavigation } from "../../features/home/hooks/useScrollNavigation"; // Укажите путь к хуку
import { MobileMenu, MobileMenuButton } from "./MobileMenu";

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
    <header className="sticky top-0 bg-white border-b border-gray-300 z-50">
      <div className="container mx-auto px-4 py-4 sm:py-6 flex items-center justify-between sm:justify-center xl:justify-between gap-4 sm:gap-6 sm:flex-wrap xl:flex-nowrap">
        {/* Логотип */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity sm:order-1 sm:basis-full sm:justify-center sm:mx-auto xl:order-none xl:basis-auto"
        >
          <span className="text-xl logo-font">bagsTack</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 sm:order-3 sm:w-full sm:justify-center xl:order-none xl:flex-1 xl:justify-center">
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
        <div className="hidden sm:flex items-center gap-3 sm:gap-4 sm:order-2 sm:w-full sm:justify-center xl:order-none xl:w-auto xl:justify-start">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center justify-center h-9 min-w-[140px] px-4 text-sm bg-[#b76ec7] text-white rounded-lg hover:bg-[#b76ec7]/80 transition-colors duration-200 whitespace-nowrap"
          >
            Наши проекты
          </button>
          <a
            href="https://t.me/sxdddddddddd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 min-w-[140px] px-4 text-sm text-foreground border border-border rounded-lg hover:bg-[#b76ec7] hover:text-white hover:border-[#b76ec7] transition-all duration-300 whitespace-nowrap"
          >
            Связаться
          </a>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <MobileMenu
          navigationItems={navigationItems}
          onClose={() => setIsMobileMenuOpen(false)}
          onLogoClick={handleLogoClick}
          onNavigateProjects={() => navigate('/projects')}
          onNavigateToSection={scrollToSection}
        />
      )}

    </header>
  );
};