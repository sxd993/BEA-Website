export const EmptyState = ({ 
    icon = "🔍", 
    title = "Ничего не найдено", 
    description = "Попробуйте изменить поисковый запрос или выбрать другую категорию" 
}) => {
    return (
        <div className="text-center py-12">
            <div className="bg-white/5 backdrop-blur-[5px] rounded-2xl p-8 border border-black/10">
                <div className="text-gray-400 text-6xl mb-4">{icon}</div>
                <h3 className="text-black text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
};