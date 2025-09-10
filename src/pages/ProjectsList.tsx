import { useEffect } from 'react';

import { PROJECTS } from '../features/project/const/project.js';

import SectionTitle from '../shared/ui/SectionTitle.js';
import SearchInput from '../shared/ui/SearchInput.js';

import useProjectsFilter from '../features/project/hooks/useProjectsFilter.js';
import RevealOnScroll from '../shared/utils/ScrollLogic/RevealOnScroll.js';

import ProjectCounter from '../features/project/ui/ProjectCounter.jsx';
import ProjectGrid from '../features/project/ui/ProjectGrid.jsx';
import CategoryFilter from '../features/project/ui/CategoryFilter.js';

import { EmptyState } from '../shared/ui/states/EmptyState.js';

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

    return (
        <section className="min-h-screen mt-[3%] mb-[3%] flex flex-col items-center px-4">
            <SectionTitle className='!mt-0'>Наши проекты</SectionTitle>

            <RevealOnScroll>
                <div className="w-full max-w-7xl mx-auto">
                    {/* Поиск */}
                    <SearchInput
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        placeholder="Поиск проектов..."
                    />

                    {/* Фильтр по категориям */}
                    <CategoryFilter
                        categories={[...new Set(PROJECTS.map(p => p.category))]}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                    {/* Счетчик проектов */}
                    <ProjectCounter
                        filteredCount={filteredProjects.length}
                        totalCount={PROJECTS.length}
                    />

                    {/* Сетка проектов или пустое состояние */}
                    {filteredProjects.length > 0 ? (
                        <ProjectGrid projects={filteredProjects} />
                    ) : (
                        <EmptyState
                            title="Проекты не найдены"
                            description="Попробуйте изменить поисковый запрос или выбрать другую категорию"
                        />
                    )}
                </div>
            </RevealOnScroll>
        </section>
    );
};
