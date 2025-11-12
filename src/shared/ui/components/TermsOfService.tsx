import { useEffect } from 'react';
import { FileText } from 'lucide-react'; 

export const TermsOfService = () => {

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
                            <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent px-2">
                            Пользовательское соглашение
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 px-2">
                            Условия использования сайта и получения услуг bagsTack
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
                                    Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между
                                    командой разработчиков bagsTack (далее — «Исполнитель», «Мы») и физическими или юридическими
                                    лицами (далее — «Пользователь», «Вы», «Заказчик»), использующими веб-сайт bagsTack
                                    (далее — «Сайт») и заказывающими наши услуги.
                                </p>
                                <p>
                                    Использование Сайта означает ваше полное согласие с условиями настоящего Соглашения.
                                    Если вы не согласны с какими-либо условиями, пожалуйста, прекратите использование Сайта.
                                </p>
                            </div>
                        </section>

                        {/* 2. Определения */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">2. Определения</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4">
                                <div className="grid gap-3 md:gap-4">
                                    <div className="bg-white/70 border border-gray-200 p-3 md:p-4 rounded-lg md:rounded-xl">
                                        <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Сайт</h4>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            Веб-ресурс bagsTack, включающий все страницы, формы, калькуляторы и интерактивные элементы
                                        </p>
                                    </div>
                                    <div className="bg-white/70 border border-gray-200 p-3 md:p-4 rounded-lg md:rounded-xl">
                                        <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Услуги</h4>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            IT-услуги по разработке веб-приложений, мобильных приложений, дизайну и консультациям
                                        </p>
                                    </div>
                                    <div className="bg-white/70 border border-gray-200 p-3 md:p-4 rounded-lg md:rounded-xl">
                                        <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Контент</h4>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            Все материалы, размещенные на Сайте: тексты, изображения, код, дизайн-макеты
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. Предоставляемые услуги */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">3. Предоставляемые услуги</span>
                            </h2>
                            <div className="space-y-4 md:space-y-6">
                                <p className="text-sm md:text-base text-gray-600">
                                    bagsTack предоставляет следующие виды услуг:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-2 md:space-y-3">
                                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">Разработка:</h4>
                                        <ul className="space-y-2 text-sm md:text-base text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Веб-приложения и сайты</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Мобильные приложения</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Интернет-магазины</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Корпоративные системы</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-2 md:space-y-3">
                                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">Дополнительно:</h4>
                                        <ul className="space-y-2 text-sm md:text-base text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>UI/UX дизайн</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Техническое консультирование</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Поддержка и сопровождение</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Аудит существующих проектов</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. Права и обязанности сторон */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">4. Права и обязанности сторон</span>
                            </h2>
                            <div className="space-y-4 md:space-y-6">
                                {/* Права исполнителя */}
                                <div>
                                    <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                                        4.1. Права Исполнителя:
                                    </h3>
                                    <ul className="space-y-2 text-sm md:text-base text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Требовать полную и своевременную оплату выполненных работ</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Запрашивать у Заказчика необходимую для выполнения работ информацию</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Вносить изменения в техническое задание по согласованию с Заказчиком</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Приостанавливать работы при нарушении Заказчиком условий оплаты</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Обязанности исполнителя */}
                                <div>
                                    <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                                        4.2. Обязанности Исполнителя:
                                    </h3>
                                    <ul className="space-y-2 text-sm md:text-base text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Выполнять работы в соответствии с техническим заданием и в установленные сроки
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Обеспечивать конфиденциальность предоставленной Заказчиком информации
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Предоставлять консультации по выполненным работам
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Уведомлять о возникающих трудностях и изменениях в сроках
                                        </li>
                                    </ul>
                                </div>

                                {/* Права заказчика */}
                                <div>
                                    <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                                        4.3. Права Заказчика:
                                    </h3>
                                    <ul className="space-y-2 text-sm md:text-base text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Требовать выполнения работ в соответствии с техническим заданием
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Получать регулярные отчеты о ходе выполнения проекта
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Вносить обоснованные изменения в техническое задание
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Получить исходный код после полной оплаты проекта
                                        </li>
                                    </ul>
                                </div>

                                {/* Обязанности заказчика */}
                                <div>
                                    <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                                        4.4. Обязанности Заказчика:
                                    </h3>
                                    <ul className="space-y-2 text-sm md:text-base text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Своевременно производить оплату в соответствии с договором
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Предоставлять полную и актуальную информацию для выполнения работ
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Своевременно рассматривать и утверждать промежуточные результаты
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                            Не использовать результаты работ с нарушением авторских прав третьих лиц
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 5. Условия оплаты */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">5. Условия оплаты и цены</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Предварительная оценка:</strong> Стоимость, рассчитанная через калькулятор на сайте, является ориентировочной</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Финальная стоимость:</strong> Определяется после детального анализа требований и фиксируется в договоре</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Схема оплаты:</strong> 30% предоплата, 40% по завершении основных работ, 30% при сдаче проекта</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Дополнительные работы:</strong> Изменения, выходящие за рамки ТЗ, оплачиваются отдельно</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 6. Интеллектуальная собственность */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">6. Интеллектуальная собственность</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Исключительные права на разработанный продукт переходят к Заказчику после полной оплаты
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Исполнитель сохраняет право использовать проект в портфолио и для демонстрации возможностей
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Использование сторонних библиотек и фреймворков регулируется их лицензиями
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Заказчик гарантирует законность использования предоставленных им материалов
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 7. Ограничения ответственности */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">7. Ограничения ответственности</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    Исполнитель не несет ответственности за:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Косвенные убытки, упущенную выгоду и моральный вред
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Действия третьих лиц и форс-мажорные обстоятельства
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Нарушения работы проекта по причине неправильной эксплуатации
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Последствия использования незаконного контента, предоставленного Заказчиком
                                    </li>
                                </ul>
                                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6 rounded-lg">
                                    <p className="text-amber-800 text-sm md:text-base">
                                        <strong>Гарантия:</strong> Мы предоставляем гарантию на выполненные работы сроком от 3 до 12 месяцев
                                        в зависимости от типа проекта. Гарантия покрывает исправление ошибок, связанных с качеством нашей работы.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 8. Конфиденциальность */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">8. Конфиденциальность</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    Стороны обязуются сохранять конфиденциальность всей информации, полученной в ходе сотрудничества:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Технические детали проектов и бизнес-процессов
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Коммерческую информацию и условия сделок
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Персональные данные пользователей и сотрудников
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        Любую иную информацию, не предназначенную для публичного использования
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 9. Заключительные положения */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                <span className="break-words">9. Заключительные положения</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Применимое право:</strong> Настоящее Соглашение регулируется законодательством Российской Федерации</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Разрешение споров:</strong> Все споры решаются путем переговоров, при невозможности — в судебном порядке</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Изменения:</strong> Соглашение может быть изменено только с согласия обеих сторон</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#b76ec7] rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong className="text-foreground">Действие:</strong> Соглашение действует с момента начала использования Сайта или заказа услуг</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 10. Контактная информация */}
                        <section className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg">
                            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                                <span className="break-words">10. Контактная информация</span>
                            </h2>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
                                <p>
                                    По всем вопросам, связанным с настоящим Соглашением, обращайтесь к нам:
                                </p>
                                <div className="bg-white/70 p-4 md:p-6 rounded-lg md:rounded-xl border border-gray-200">
                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#b76ec7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="font-medium text-gray-900 text-sm md:text-base">Email:</span>
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
                                                <span className="font-medium text-gray-900 text-sm md:text-base">Telegram:</span>
                                            </div>
                                            <a href="https://t.me/sxdddddddddd" className="text-[#b76ec7] hover:underline break-all text-sm md:text-base" target="_blank" rel="noopener noreferrer">
                                                @sxdddddddddd
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
                                    Мы стремимся к долгосрочному сотрудничеству и готовы обсуждать любые вопросы для достижения взаимовыгодных условий.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};