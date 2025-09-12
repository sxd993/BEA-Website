import { Search } from 'lucide-react';

interface SearchInputProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
    searchTerm, 
    setSearchTerm, 
    placeholder = "Поиск..." 
}) => {
    return (
        <div className="mb-8">
            <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#b76ec7]/20 focus:border-[#b76ec7] transition-all duration-300 shadow-sm"
                />
            </div>
        </div>
    );
};

export default SearchInput;