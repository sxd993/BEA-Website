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
        <section className="min-h-screen py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200/50">
            <div className="container mx-auto px-4">
                {/* Заголовок */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent">
                        Наши проекты
                    </h1>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Поиск */}
                    <div className="mb-10">
                        <div className="relative max-w-4xl mx-auto">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <input
                                type="text"
                                placeholder="Поиск проектов..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#b76ec7]/20 focus:border-[#b76ec7] transition-all duration-300 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Фильтр категорий */}
                    <div className="mb-10">
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm md:text-base border shadow-sm transition-all duration-300 ${selectedCategory === category
                                            ? "bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white border-[#b76ec7]/0"
                                            : "bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 text-[#8e24aa] border-[#b76ec7]/20 hover:from-[#b76ec7]/20 hover:to-[#8e24aa]/20"
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
            {/* Изображение проекта */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                {project.image ? (
                    <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-gray-100 p-2"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#b76ec7] to-[#8e24aa] flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">
                        {project.name.charAt(0)}
                    </div>
                    </div>
                )}
                </div>

            {/* Контент карточки */}
            <div className="p-6">
                <div className="mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#8e24aa] transition-colors duration-300 mb-2">
                        {project.name}
                    </h3>

                    {project.organization && (
                        <div className="text-[#b76ec7] font-medium text-sm mb-2">
                            {project.organization}
                        </div>
                    )}
                </div>

                {project.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
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
                                className="px-3 py-1.5 bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 text-[#b76ec7] text-xs rounded-full border border-[#b76ec7]/20 shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 4 && (
                            <span className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-xs rounded-full border border-gray-300/50 shadow-sm">
                                +{project.tech.length - 4} еще
                            </span>
                        )}
                    </div>
                )}

                {/* Кнопки действий */}
                <div className="flex gap-3">
                    <button
                        onClick={handleViewDetails}
                        className="flex-1 bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white py-3 px-4 rounded-full font-medium hover:from-[#8e24aa] hover:to-[#b76ec7] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#b76ec7]/25"
                    >
                        Подробнее
                    </button>
                    {project.github && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github, '_blank');
                            }}
                            className="px-4 py-3 bg-white/80 border border-gray-200 rounded-full text-gray-800 hover:bg-gradient-to-r hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 transition-all duration-300"
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
                            className="px-4 py-3 bg-white/80 border border-gray-200 rounded-full text-gray-800 hover:bg-gradient-to-r hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 transition-all duration-300"
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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-gray-200 shadow-lg max-w-4xl mx-auto">
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