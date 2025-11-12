import { useEffect } from 'react';
import { Search } from 'lucide-react';
import { PROJECTS } from '../shared/lib/project';
import { useProjectsFilter } from '../features/project-filter/useProjectsFilter';
import { EmptyState } from '../shared/ui/states/EmptyState';
import ProjectCard from '../widgets/projects/ProjectCard';

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
                        <EmptyState 
                            title="Проекты не найдены"
                            description="Попробуйте изменить поисковый запрос или выбрать другую категорию"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};