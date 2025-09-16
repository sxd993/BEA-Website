import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, FileText, Users } from 'lucide-react';

export const PrivacyPolicy = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen py-10 bg-background">
            <div className="container mx-auto px-4">
                {/* Кнопка назад */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                    На главную
                </button>

                <div className="max-w-4xl mx-auto">
                    {/* Заголовок */}
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 bg-[#b76ec7] rounded-full flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                            Политика конфиденциальности
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Информация о том, как мы собираем, используем и защищаем ваши данные
                        </p>
                        <p className="text-sm text-muted-foreground mt-4">
                            Последнее обновление: 12 сентября 2025 г.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* 1. Общие положения */}
                        <section className="bg-card p-8 rounded-xl border border-border shadow-lg">
                            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-[#b76ec7]" />
                                1. Общие положения
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта bagsTack (далее — "Сайт"), принадлежащего команде разработчиков bagsTack (далее — "Мы", "Компания").
                                </p>
                                <p>
                                    Используя наш Сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности и даете согласие на обработку ваших персональных данных в соответствии с описанными ниже целями и способами.
                                </p>
                            </div>
                        </section>

                        {/* 2. Какие данные мы собираем */}
                        <section className="bg-card p-8 rounded-xl border border-border shadow-lg">
                            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <Users className="w-6 h-6 text-[#b76ec7]" />
                                2. Какие данные мы собираем
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        Персональные данные:
                                    </h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Имя и контактная информация (email, Telegram) при обращении через формы связи
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Данные, введенные в калькулятор стоимости проектов
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Сообщения и запросы, отправленные через контактные формы
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        Технические данные:
                                    </h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            IP-адрес и данные о браузере
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Информация об устройстве и операционной системе
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Данные о посещенных страницах и времени пребывания на сайте
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Cookies и аналогичные технологии отслеживания
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. Цели обработки данных */}
                        <section className="bg-card p-8 rounded-xl border border-border shadow-lg">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                3. Цели обработки персональных данных
                            </h2>
                            <div className="space-y-4">
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Связь с клиентами:</strong> Ответы на запросы, консультации по проектам, предоставление коммерческих предложений</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Расчет стоимости:</strong> Обработка данных калькулятора для предоставления предварительной оценки проектов</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Улучшение сервиса:</strong> Анализ использования сайта для повышения качества предоставляемых услуг</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Техническая поддержка:</strong> Обеспечение корректной работы сайта и устранение технических проблем</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 4. Cookies */}
                        <section className="bg-card p-8 rounded-xl border border-border shadow-lg">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                4. Использование Cookies
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Мы используем cookies и аналогичные технологии для улучшения работы сайта:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <strong className="text-foreground">Функциональные cookies:</strong> Запоминание ваших предпочтений и настроек
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <strong className="text-foreground">Аналитические cookies:</strong> Сбор статистики посещений и поведения пользователей
                                    </li>
                                </ul>
                                <p>
                                    Вы можете управлять cookies через настройки своего браузера, но отключение некоторых из них может повлиять на функциональность сайта.
                                </p>
                            </div>
                        </section>

                        {/* 5. Передача данных третьим лицам */}
                        <section className="bg-card p-8 rounded-xl border border-border shadow-lg">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                5. Передача данных третьим лицам
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением следующих случаев:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Требования законодательства РФ
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Использование технических сервисов (хостинг, аналитика)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Защита наших прав и собственности
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 6. Безопасность данных */}
                        <section className="bg-card p-8 rounded-xl border border-border shadow-lg">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                6. Безопасность персональных данных
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Мы применяем современные технические и организационные меры для защиты ваших данных:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        SSL-шифрование для передачи данных
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Ограниченный доступ к персональным данным
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Регулярное обновление систем безопасности
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 7. Ваши права */}
                        <section className="bg-card p-8 rounded-xl border border-border shadow-lg">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                7. Ваши права
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>Вы имеете право:</p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Получать информацию об обработке ваших данных
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Требовать исправления неточных данных
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Отзывать согласие на обработку данных
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Требовать удаления ваших персональных данных
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 8. Контактная информация */}
                        <section className="bg-gradient-to-r from-[#b76ec7]/10 to-[#b76ec7]/5 p-8 rounded-xl border border-[#b76ec7]/20">
                            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                                <Mail className="w-6 h-6 text-[#b76ec7]" />
                                8. Контактная информация
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    По вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
                                </p>
                                <div className="bg-card p-6 rounded-lg border border-border">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-[#b76ec7]" />
                                            <span className="font-medium">Email:</span>
                                            <a href="mailto:gurbanovich2014@yandex.ru" className="text-[#b76ec7] hover:underline">
                                                gurbanovich2014@yandex.ru
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[#b76ec7]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                            </svg>
                                            <span className="font-medium">Telegram:</span>
                                            <a href="https://t.me/sxdddddddddd" className="text-[#b76ec7] hover:underline" target="_blank" rel="noopener noreferrer">
                                                @sxdddddddddd
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 9. Изменения политики */}
                        <section className="bg-card p-8 rounded-xl border border-border shadow-lg">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                9. Изменения в Политике конфиденциальности
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
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