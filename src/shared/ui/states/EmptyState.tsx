import { Search } from 'lucide-react';

interface EmptyStateProps {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
    title = "Ничего не найдено", 
    description = "Попробуйте изменить поисковый запрос или выбрать другую категорию",
    icon
}) => {
    return (
        <div className="col-span-full">
            <div className="text-center py-16">
                <div className="bg-card rounded-xl p-12 border border-border shadow-lg max-w-4xl mx-auto">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                        {icon || <Search className="w-8 h-8 text-muted-foreground" />}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                        {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};