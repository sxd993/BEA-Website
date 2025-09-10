import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { useEffect } from 'react';

export const useScrollNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollNavigate = (to, customOptions = {}) => {
    // Определяем, мобильное ли устройство
    const isMobile = window.innerWidth < 768;
    
    // Настройки offset в зависимости от устройства
    const offset = isMobile ? -100 : -80; // Для мобильных больший отступ
    
    const defaultOptions = {
      smooth: true,
      duration: 500,
      offset: offset,
      ...customOptions
    };

    if (location.pathname !== '/') {
      // Если не на главной, перенаправляем с передачей секции в state
      navigate('/', { state: { scrollTo: to, options: defaultOptions } });
    } else {
      // Если на главной, сразу прокручиваем
      scroller.scrollTo(to, defaultOptions);
    }
  };

  return scrollNavigate;
};

