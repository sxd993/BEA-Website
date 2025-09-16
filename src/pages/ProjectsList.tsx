import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../features/project/const/project';
import useProjectsFilter from '../features/project/hooks/useProjectsFilter';
import type { Project } from '../shared/types';

export const ProjectsList = () => {
    const {
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        filteredProjects
    } = useProjectsFilter(PROJECTS);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Получаем уникальные категории
    const categories = ['Все', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

    return (
        <section className="min-h-screen py-10 bg-background">
            <div className="container mx-auto px-4">
                {/* Заголовок */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                        Наши проекты
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Портфолио наших лучших работ в области веб-разработки и цифровых решений
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Поиск */}
                    <div className="mb-8">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <input
                                type="text"
                                placeholder="Поиск проектов..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#b76ec7]/20 focus:border-[#b76ec7] transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Фильтр категорий */}
                    <div className="mb-8">
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${selectedCategory === category
                                            ? "bg-[#b76ec7] text-white shadow-lg hover:bg-[#b76ec7]/80"
                                            : "bg-card text-foreground border border-border hover:bg-[#b76ec7] hover:text-white hover:border-[#b76ec7]"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Счетчик проектов */}
                    <div className="mb-8 text-center">
                        <p className="text-muted-foreground">
                            <span className="font-semibold text-foreground">{filteredProjects.length}</span> из {PROJECTS.length} проектов
                        </p>
                    </div>

                    {/* Сетка проектов */}
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <EmptyStateCard />
                    )}
                </div>
            </div>
        </section>
    );
};

// Компонент карточки проекта
interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/projects/${project.id}`);
    };

    return (
        <div className="bg-card rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
            {/* Изображение проекта */}
            <div className="relative h-48 overflow-hidden">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#b76ec7] to-[#b76ec7]/70 flex items-center justify-center">
                        <div className="text-white text-4xl font-bold">
                            {project.name.charAt(0)}
                        </div>
                    </div>
                )}

                {/* Метка "Рекомендуемый" */}
                {project.featured && (
                    <div className="absolute top-4 left-4">
                        <span className="bg-[#b76ec7] text-white text-xs font-medium px-3 py-1 rounded-full">
                            Рекомендуемый
                        </span>
                    </div>
                )}

                {/* Категория */}
                <div className="absolute top-4 right-4">
                    <span className="bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full border border-border/50">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Контент карточки */}
            <div className="p-6">
                <div className="mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-[#b76ec7] transition-colors duration-300 mb-2">
                        {project.name}
                    </h3>

                    {project.organization && (
                        <div className="text-[#b76ec7] font-medium text-sm mb-2">
                            {project.organization}
                        </div>
                    )}
                </div>

                {project.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                    </p>
                )}

                {/* Статус проекта */}
                <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {project.status}
                    </span>
                </div>

                {/* Технологии */}
                {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tech, index) => (
                            <span
                                key={`${tech}-${index}`}
                                className="bg-muted text-foreground text-xs font-medium px-3 py-1 rounded-lg"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 4 && (
                            <span className="text-muted-foreground text-xs font-medium px-3 py-1">
                                +{project.tech.length - 4} еще
                            </span>
                        )}
                    </div>
                )}

                {/* Кнопки действий */}
                <div className="flex gap-3">
                    <button
                        onClick={handleViewDetails}
                        className="flex-1 bg-[#b76ec7] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#b76ec7]/80 transition-colors duration-200"
                    >
                        Подробнее
                    </button>
                    {project.github && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github, '_blank');
                            }}
                            className="px-4 py-3 bg-card border border-border rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
                            title="Открыть GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </button>
                    )}
                    {project.demo && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.demo, '_blank');
                            }}
                            className="px-4 py-3 bg-card border border-border rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
                            title="Открыть демо"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

// Компонент пустого состояния
const EmptyStateCard = () => {
    return (
        <div className="col-span-full">
            <div className="text-center py-16">
                <div className="bg-card rounded-xl p-12 border border-border shadow-lg max-w-md mx-auto">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                        Проекты не найдены
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Попробуйте изменить поисковый запрос или выбрать другую категорию
                    </p>
                </div>
            </div>
        </div>
    );
};