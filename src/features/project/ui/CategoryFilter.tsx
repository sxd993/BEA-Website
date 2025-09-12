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
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-[#b76ec7] text-white shadow-lg hover:bg-[#b76ec7]/80"
                  : "bg-card text-foreground border border-border hover:bg-[#b76ec7] hover:text-white hover:border-[#b76ec7] shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;