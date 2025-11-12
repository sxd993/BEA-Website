import type React from 'react';
import { FaRocket, FaShieldAlt, FaUsers, FaClock, FaCheckCircle, FaHeadset } from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons';

export interface WhyChooseUsFeature {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  description: string;
  color: string;
}

export const whyChooseUsFeatures: WhyChooseUsFeature[] = [
  {
    icon: FaRocket,
    title: "Быстрая разработка",
    description: "Используем современные технологии и готовые решения для ускорения процесса разработки",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FaShieldAlt,
    title: "Безопасность",
    description: "Следуем лучшим практикам безопасности и защищаем данные ваших пользователей",
    color: "from-green-500 to-green-600"
  },
  {
    icon: FaUsers,
    title: "Опытная команда",
    description: "Каждый разработчик имеет 5+ лет опыта в своей области специализации",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FaClock,
    title: "Соблюдение сроков",
    description: "Планируем проекты детально и всегда укладываемся в оговоренные временные рамки",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: FaCheckCircle,
    title: "Гарантия качества",
    description: "Проводим тщательное тестирование и предоставляем гарантию на выполненную работу",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: FaHeadset,
    title: "Поддержка 24/7",
    description: "Оказываем техническую поддержку и сопровождение проектов круглосуточно",
    color: "from-indigo-500 to-indigo-600"
  }
];

