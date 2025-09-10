const SearchInput = ({ searchTerm, setSearchTerm, placeholder = "Поиск..." }) => {
    return (
        <div className="mb-8">
            <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-[5px] border border-black/10 rounded-2xl text-black placeholder-gray-400 focus:outline-none focus:border-[#AB47BC] transition-all duration-300"
                />
            </div>
        </div>
    );
};

export default SearchInput;