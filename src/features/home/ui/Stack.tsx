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
    technologies: ["Node.js", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Тестирование",
    icon: CheckSquare,
    technologies: ["Jest", "Cypress", "Playwright"],
  },
];

export const Stack = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наш технологический стек</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Используем проверенные и современные технологии для создания надежных решений
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Иконка и заголовок */}
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-purple-500" />
                  <span className="font-semibold text-gray-800 text-base md:text-lg">{category.title}</span>
                </div>

                {/* Технологии */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 md:py-2 bg-gray-100 text-gray-800 text-xs md:text-sm rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
