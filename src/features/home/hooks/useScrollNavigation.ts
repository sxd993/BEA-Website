import { useNavigate, useLocation } from "react-router-dom";

export const useScrollNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Если не на главной странице, сначала переходим на неё
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    // Если уже на главной, прокручиваем к секции
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Высота фиксированного хедера
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection, scrollToTop };
};