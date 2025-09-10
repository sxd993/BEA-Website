import { useState, useMemo } from 'react';
import type { Project } from '../../../shared/types';

export const useProjectsFilter = (projects: Project[]) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Все');

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.organization?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'Все' || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [projects, searchTerm, selectedCategory]);

    return {
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        filteredProjects
    };
};

export default useProjectsFilter;