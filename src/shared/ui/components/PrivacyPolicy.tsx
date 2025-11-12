import { useEffect } from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen py-8 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Заголовок */}
                    <div className="text-center mb-8 md:mb-12">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#b76ec7] to-[#8e24aa] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                            <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <h1 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent px-2">
                            Политика конфиденциальности
                        </h1>
                        <p className="text-base md:text-xl text-gray-600 px-2">
                            Информация о том, как мы собираем, используем и защищаем ваши данные
                        </p>
                        <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
                            Последнее обновление: 12 сентября 2025 г.
                        </p>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        {/* 1. Общие положения */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">1. Общие положения</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта bagsTack (далее — "Сайт"), принадлежащего команде разработчиков bagsTack (далее — "Мы", "Компания").
                                </p>
                                <p>
                                    Используя наш Сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности и даете согласие на обработку ваших персональных данных в соответствии с описанными ниже целями и способами.
                                </p>
                            </div>
                        </section>

                        {/* 2. Какие данные мы собираем */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">2. Какие данные мы собираем</span>
                            </h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                        Персональные данные:
                                    </h3>
                                    <ul className="space-y-2 text-sm md:text-base text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Имя и контактная информация (Email, Telegram) при обращении через формы связи</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Данные, введенные в калькулятор стоимости проектов</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Сообщения и запросы, отправленные через контактные формы</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                        Технические данные:
                                    </h3>
                                    <ul className="space-y-2 text-sm md:text-base text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>IP-адрес и данные о браузере</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Информация об устройстве и операционной системе</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Данные о посещенных страницах и времени пребывания на сайте</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Cookies и аналогичные технологии отслеживания</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. Цели обработки данных */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">3. Цели обработки персональных данных</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4">
                                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600">
                                    <li className="flex items-start gap-2 md:gap-3">
                                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-gray-900">Связь с клиентами:</strong> Ответы на запросы, консультации по проектам, предоставление коммерческих предложений</span>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-3">
                                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-gray-900">Расчет стоимости:</strong> Обработка данных калькулятора для предоставления предварительной оценки проектов</span>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-3">
                                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-gray-900">Улучшение сервиса:</strong> Анализ использования сайта для повышения качества предоставляемых услуг</span>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-3">
                                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-gray-900">Техническая поддержка:</strong> Обеспечение корректной работы сайта и устранение технических проблем</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 4. Cookies */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">4. Использование Cookies</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    Мы используем cookies и аналогичные технологии для улучшения работы сайта:
                                </p>
                                <ul className="space-y-2 ml-2 md:ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-gray-900">Функциональные cookies:</strong> Запоминание ваших предпочтений и настроек</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-gray-900">Аналитические cookies:</strong> Сбор статистики посещений и поведения пользователей</span>
                                    </li>
                                </ul>
                                <p>
                                    Вы можете управлять cookies через настройки своего браузера, но отключение некоторых из них может повлиять на функциональность сайта.
                                </p>
                            </div>
                        </section>

                        {/* 5. Передача данных третьим лицам */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">5. Передача данных третьим лицам</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением следующих случаев:
                                </p>
                                <ul className="space-y-2 ml-2 md:ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Требования законодательства РФ</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Использование технических сервисов (хостинг, аналитика)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Защита наших прав и собственности</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 6. Безопасность данных */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">6. Безопасность персональных данных</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    Мы применяем современные технические и организационные меры для защиты ваших данных:
                                </p>
                                <ul className="space-y-2 ml-2 md:ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>SSL-шифрование для передачи данных</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Ограниченный доступ к персональным данным</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Регулярное обновление систем безопасности</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 7. Ваши права */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">7. Ваши права</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>Вы имеете право:</p>
                                <ul className="space-y-2 ml-2 md:ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Получать информацию об обработке ваших данных</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Требовать исправления неточных данных</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Отзывать согласие на обработку данных</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Требовать удаления ваших персональных данных</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 8. Контактная информация */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">8. Контактная информация</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    По вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
                                </p>
                                <div className="bg-white/70 p-4 md:p-6 rounded-lg md:rounded-xl border border-gray-200">
                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <span className="font-medium text-sm md:text-base">Email:</span>
                                            </div>
                                            <a href="mailto:gurbanovich2014@yandex.ru" className="text-[#b76ec7] hover:underline break-all text-sm md:text-base">
                                                gurbanovich2014@yandex.ru
                                            </a>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#b76ec7] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                                </svg>
                                                <span className="font-medium text-sm md:text-base">Telegram:</span>
                                            </div>
                                            <a href="https://t.me/sxdddddddddd" className="text-[#b76ec7] hover:underline break-all text-sm md:text-base" target="_blank" rel="noopener noreferrer">
                                                @sxdddddddddd
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 9. Изменения политики */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">9. Изменения в Политике конфиденциальности</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности.
                                    При внесении существенных изменений мы уведомим вас через сайт или по электронной почте.
                                </p>
                                <p>
                                    Рекомендуем периодически просматривать данную страницу для ознакомления с актуальной версией Политики.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};