import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  title?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  title = "Категории"
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-black text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#AB47BC] text-black shadow-lg"
                : "bg-white/5 backdrop-blur-[5px] text-black hover:bg-white/10 hover:text-black border border-black/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
