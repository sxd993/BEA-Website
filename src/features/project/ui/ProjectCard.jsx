import { NavLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="w-full md:w-[calc(50%-16px)] max-w-[500px] bg-white/2 backdrop-saturate-300 backdrop-blur-[5px] rounded-2xl overflow-hidden border border-black/10 hover:border-[#AB47BC] transition-all duration-300 group shadow-lg hover:shadow-xl">
            {/* Изображение проекта */}
            <div className="relative h-48 bg-gradient-to-br from-[#AB47BC] to-purple-600 overflow-hidden">
                {project.image ? (
                    <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#AB47BC] to-purple-600 flex items-center justify-center">
                        <div className="text-black text-4xl font-bold">
                            {project.name.charAt(0)}
                        </div>
                    </div>
                )}
                
                {/* Метка "Рекомендуемый" */}
                {project.featured && (
                    <div className="absolute top-4 left-4">
                        <span className="bg-black/10 backdrop-blur-[5px] text-black text-xs px-3 py-1 rounded-full">
                            Рекомендуемый
                        </span>
                    </div>
                )}
            </div>

            {/* Контент карточки */}
            <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-black group-hover:text-purple-400 transition-colors duration-300">
                        {project.name}
                    </h3>
                </div>
                
                {project.organization && (
                    <div className="text-purple-400 text-lg font-bold mb-3">
                        {project.organization}
                    </div>
                )}
                
                {project.description && (
                    <p className="text-black mb-4 text-sm leading-relaxed">
                        {project.description}
                    </p>
                )}

                {/* Технологии */}
                {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="bg-[#AB47BC] text-black text-xs font-semibold px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Кнопка "Подробнее" */}
                <NavLink
                    to={`/projects/${project.id}`}
                    className="block w-full bg-black/5 backdrop-blur-[5px] text-black text-center py-3 rounded-xl font-medium hover:bg-[#AB47BC] hover:text-black hover:shadow-lg transition-all duration-300 border border-black/10"
                >
                    Подробнее
                </NavLink>
            </div>
        </div>
    );
};

export default ProjectCard;