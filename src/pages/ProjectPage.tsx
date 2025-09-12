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
            <div className="min-h-screen py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-card rounded-xl p-12 border border-border shadow-lg max-w-md mx-auto">
                        <h1 className="text-2xl font-bold text-foreground mb-4">
                            Проект не найден
                        </h1>
                        <p className="text-muted-foreground mb-6">
                            Запрашиваемый проект не существует или был удален
                        </p>
                        <button
                            onClick={() => navigate('/projects')}
                            className="bg-[#b76ec7] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#b76ec7]/80 transition-colors duration-200"
                        >
                            Вернуться к проектам
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Кнопка назад */}
                <button
                    onClick={() => navigate('/projects')}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                    Вернуться к проектам
                </button>

                <div className="max-w-6xl mx-auto">
                    {/* Заголовок проекта */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
                                {project.name}
                            </h1>
                            {project.featured && (
                                <span className="bg-[#b76ec7] text-white text-sm font-medium px-3 py-1 rounded-full">
                                    Рекомендуемый
                                </span>
                            )}
                        </div>
                        
                        {project.organization && (
                            <p className="text-xl text-[#b76ec7] font-semibold mb-4">
                                {project.organization}
                            </p>
                        )}
                        
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Изображение проекта */}
                    <div className="mb-12">
                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                            {project.image ? (
                                <img 
                                    src={project.image} 
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-[#b76ec7] to-[#b76ec7]/70 flex items-center justify-center">
                                    <div className="text-white text-6xl font-bold">
                                        {project.name.charAt(0)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Основная информация */}
                        <div className="lg:col-span-2">
                            {/* Описание */}
                            <div className="bg-card p-8 rounded-xl border border-border shadow-lg mb-8">
                                <h2 className="text-2xl font-bold text-foreground mb-6">
                                    О проекте
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {project.details}
                                </p>
                            </div>

                            {/* Функционал */}
                            {project.features && project.features.length > 0 && (
                                <div className="bg-card p-8 rounded-xl border border-border shadow-lg mb-8">
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

                            {/* Вызовы и решения */}
                            {project.challenges && (
                                <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
                                    <h2 className="text-2xl font-bold text-foreground mb-6">
                                        Технические вызовы
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Боковая панель */}
                        <div className="space-y-8">
                            {/* Информация о проекте */}
                            <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
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
                            <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Технологии
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-muted text-foreground text-sm font-medium px-3 py-2 rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Действия */}
                            <div className="bg-card p-6 rounded-xl border border-border shadow-lg">
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Ссылки
                                </h3>
                                <div className="space-y-3">
                                    {project.github && (
                                        <button
                                            onClick={() => window.open(project.github, '_blank')}
                                            className="w-full flex items-center justify-center gap-3 bg-foreground text-background py-3 px-4 rounded-lg font-medium hover:bg-foreground/90 transition-colors duration-200"
                                        >
                                            <Github className="w-5 h-5" />
                                            Исходный код
                                        </button>
                                    )}
                                    {project.demo && (
                                        <button
                                            onClick={() => window.open(project.demo, '_blank')}
                                            className="w-full flex items-center justify-center gap-3 bg-[#b76ec7] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#b76ec7]/80 transition-colors duration-200"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Демо версия
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-[#b76ec7]/10 to-[#b76ec7]/5 p-6 rounded-xl border border-[#b76ec7]/20">
                                <h3 className="text-lg font-semibold text-foreground mb-3">
                                    Понравился проект?
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    Свяжитесь с нами, чтобы обсудить создание похожего решения для вашего бизнеса
                                </p>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('contact');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="w-full bg-[#b76ec7] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#b76ec7]/80 transition-colors duration-200"
                                >
                                    Обсудить проект
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};