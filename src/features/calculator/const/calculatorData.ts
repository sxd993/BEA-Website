export const projectTypes = {
  landing: { name: "Лендинг", price: 25000 },
  corporate: { name: "Корпоративный сайт", price: 50000 },
  ecommerce: { name: "Интернет-магазин", price: 100000 },
  webapp: { name: "Веб-приложение", price: 150000 },
  mobile: { name: "Мобильное приложение", price: 200000 },
  system: { name: "Комплексная система", price: 300000 },
} as const;

export const additionalFeatures = {
  admin: { name: "Панель администратора", price: 40000 },
  payment: { name: "Система платежей", price: 30000 },
  integration: { name: "Интеграции с API", price: 50000 },
  chat: { name: "Чат поддержка", price: 25000 },
} as const;

export const timelineMultipliers = {
  urgent: { name: "Срочно (до 2 недель)", multiplier: 1.2 },
  fast: { name: "Быстро (до 1 месяца)", multiplier: 1.1 },
  standard: { name: "Стандартно (1-2 месяца)", multiplier: 1 },
  extended: { name: "Не спешим (2+ месяца)", multiplier: 0.85 },
} as const;

export type ProjectType = keyof typeof projectTypes;
export type AdditionalFeature = keyof typeof additionalFeatures;
export type Timeline = keyof typeof timelineMultipliers;

