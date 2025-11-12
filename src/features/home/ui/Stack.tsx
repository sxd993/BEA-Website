import { Code, Server, CheckSquare } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Code,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: ["Node.js", "Nest.js","Python", "Django", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Тестирование",
    icon: CheckSquare,
    technologies: ["Jest", "Cypress", "Playwright"],
  },
];

export const Stack = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl shadow-gray-200/20 p-8 md:p-12 hover:shadow-3xl hover:shadow-gray-300/30 transition-all duration-500">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent">Наш технологический стек</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Используем проверенные и современные технологии для создания надежных решений
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 hover:bg-gradient-to-br hover:from-[#b76ec7]/5 hover:to-white transition-all duration-500 group hover:-translate-y-2 hover:border-[#b76ec7]/30"
              >
                <div className="relative mb-6">
                  <div className="w-15 h-15 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#8e24aa] transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={`${tech}-${techIndex}`}
                        className="px-3 py-1.5 bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 text-[#b76ec7] text-xs rounded-full border border-[#b76ec7]/20 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {category.technologies.length > 6 && (
                      <span className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-xs rounded-full border border-gray-300/50 shadow-sm">
                        +{category.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
