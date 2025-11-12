import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
    return (
        <div className="flex flex-wrap gap-8 justify-center">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectGrid;