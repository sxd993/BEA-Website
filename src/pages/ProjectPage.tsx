import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../features/project/const/project';

export const ProjectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = PROJECTS.find(p => p.id === Number(id));

    if (!project) {
        return (
            <div className="min-h-screen py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-gray-200 shadow-lg max-w-4xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Проект не найден
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Запрашиваемый проект не существует или был удален
                        </p>
                        <button
                            onClick={() => navigate('/projects')}
                            className="bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white px-6 py-3 rounded-full font-medium hover:from-[#8e24aa] hover:to-[#b76ec7] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#b76ec7]/25"
                        >
                            Вернуться к проектам
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-4">
                {/* Кнопка назад */}
                <button
                    onClick={() => navigate('/projects')}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#8e24aa] transition-colors duration-300 mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                    Вернуться к проектам
                </button>

                <div className="max-w-6xl mx-auto">
                    {/* Заголовок проекта */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent">
                                {project.name}
                            </h1>
                        </div>

                        {project.organization && (
                            <p className="text-xl text-center text-[#b76ec7] font-semibold mb-4">
                                {project.organization}
                            </p>
                        )}

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Блок с фото + деталями снизу */}
                    <div className="flex flex-col gap-12 mb-12 items-start">
                        {/* Изображение проекта */}
                        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 group transition-transform duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-64 bg-gradient-to-br from-[#b76ec7] to-[#8e24aa] flex items-center justify-center">
                                    <div className="text-white text-6xl font-bold">
                                        {project.name.charAt(0)}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Детали проекта cнизу */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Информация о проекте */}
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg">
                                <h3 className="text-lg font-semibold text-foreground mb-6">
                                    Детали проекта
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Статус</p>
                                            <p className="font-medium text-foreground">{project.status}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                                            <Users className="w-5 h-5 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Категория</p>
                                            <p className="font-medium text-foreground">{project.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Технологии */}
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg">
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Технологии
                                </h3>
                                <div className="flex flex-wrap list-none gap-2">
                                    {project.tech.map((tech, index) => (
                                        <li
                                            key={index}
                                            className="px-3 py-1.5 bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 text-[#b76ec7] text-xs rounded-full border border-[#b76ec7]/20 shadow-sm"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </div>
                            </div>

                            {/* Действия */}
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg">
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Ссылки
                                </h3>
                                <div className="space-y-3">
                                    {project.github && (
                                        <button
                                            onClick={() => window.open(project.github, '_blank')}
                                            className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-3 px-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
                                        >
                                            <Github className="w-5 h-5" />
                                            Исходный код
                                        </button>
                                    )}
                                    {project.demo && (
                                        <button
                                            onClick={() => window.open(project.demo, '_blank')}
                                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white py-3 px-4 rounded-full font-medium hover:from-[#8e24aa] hover:to-[#b76ec7] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#b76ec7]/25"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Демо версия
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Основной контент после фото/деталей */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            {/* Описание */}
                            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg mb-8">
                                <h2 className="text-2xl font-bold text-foreground mb-6">
                                    О проекте
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {project.details}
                                </p>
                            </div>

                            {/* Функционал */}
                            {project.features && project.features.length > 0 && (
                                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg mb-8">
                                    <h2 className="text-2xl font-bold text-foreground mb-6">
                                        Ключевые возможности
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {project.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[#b76ec7] mt-1 flex-shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Вызовы */}
                            {project.challenges && (
                                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg">
                                    <h2 className="text-2xl font-bold text-foreground mb-6">
                                        Технические вызовы
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* CTA справа */}
                        <div>
                            <div className="bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 p-6 rounded-2xl border border-[#b76ec7]/20">
                                <h3 className="text-lg font-semibold text-foreground mb-3">
                                    Понравился проект?
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    Свяжитесь с нами, чтобы обсудить создание похожего решения для вашего бизнеса
                                </p>
                                <a
                                    href="https://t.me/sxdddddddddd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white py-3 px-4 rounded-full font-medium hover:from-[#8e24aa] hover:to-[#b76ec7] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#b76ec7]/25 block text-center"
                                >
                                    Обсудить проект
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};