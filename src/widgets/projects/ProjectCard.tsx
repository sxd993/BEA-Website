import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../shared/types';
import { useProjectCard } from '../../shared/hooks/useProjectCard';
import { PROJECT_CARD_CONFIG } from '../../shared/lib/projectCardConfig';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { handleViewDetails, handleOpenLink } = useProjectCard(project.id);

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
                        {project.tech.slice(0, PROJECT_CARD_CONFIG.techLimit).map((tech: string, index: number) => (
                            <span
                                key={`${tech}-${index}`}
                                className="px-3 py-1.5 bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 text-[#b76ec7] text-xs rounded-full border border-[#b76ec7]/20 shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > PROJECT_CARD_CONFIG.techLimit && (
                            <span className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-xs rounded-full border border-gray-300/50 shadow-sm">
                                +{project.tech.length - PROJECT_CARD_CONFIG.techLimit} еще
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
                                handleOpenLink(project.github!);
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
                                handleOpenLink(project.demo!);
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

export default ProjectCard;