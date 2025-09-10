const ProjectCounter = ({ filteredCount, totalCount, title = "Проекты" }) => {
    return (
        <div className="mb-6">
            <p className="text-black text-lg">
                <span className="font-semibold">{title}</span>
                <span className="text-gray-400 ml-2">{filteredCount} из {totalCount}</span>
            </p>
        </div>
    );
};

export default ProjectCounter;