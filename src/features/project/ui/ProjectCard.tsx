import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../../shared/types';

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

export default ProjectCard;