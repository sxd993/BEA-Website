import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollNavigation } from "./useScrollNavigation";
import { HOME_PATH, MOBILE_BREAKPOINT } from "../lib/headerData";

export const useHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollToSection } = useScrollNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname !== HOME_PATH) {
      navigate(HOME_PATH);
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
  }, [location.state, scrollToSection]);

  // Закрытие мобильного меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleLogoClick,
    navigate,
    scrollToSection,
  };
};

