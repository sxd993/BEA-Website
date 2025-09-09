export const Stack = () => {
    const techCategories = [
      {
        title: "Frontend",
        icon: "🎨",
        technologies: [
          "React",
          "Next.js", 
          "TypeScript",
          "Tailwind CSS",
          "Vue.js",
          "Angular"
        ]
      },
      {
        title: "Backend", 
        icon: "⚙️",
        technologies: [
          "Node.js",
          "Python",
          "Django", 
          "FastAPI",
          "PostgreSQL",
          "MongoDB"
        ]
      },
      {
        title: "Mobile",
        icon: "📱", 
        technologies: [
          "React Native",
          "Flutter",
          "Swift",
          "Kotlin",
          "Expo"
        ]
      },
      {
        title: "DevOps",
        icon: "🚀",
        technologies: [
          "Docker",
          "AWS", 
          "Vercel",
          "CI/CD",
          "Kubernetes",
          "Nginx"
        ]
      },
      {
        title: "Инструменты",
        icon: "🛠️",
        technologies: [
          "Git",
          "Figma",
          "Jira",
          "Slack",
          "Postman", 
          "VS Code"
        ]
      },
      {
        title: "Тестирование", 
        icon: "✅",
        technologies: [
          "Jest",
          "Cypress",
          "Playwright",
          "pytest",
          "Selenium"
        ]
      }
    ];
  
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Наш технологический стек
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Используем проверенные и современные технологии для создания надежных решений
            </p>
          </div>
  
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-8">
              {techCategories.map((category, index) => (
                <div 
                  key={`${category.title}-${index}`}
                  className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Иконка и заголовок */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-2xl group-hover:scale-130 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
  
                  {/* Технологии */}
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <span 
                        key={`${tech}-${techIndex}`}
                        className="px-3 py-2 bg-muted text-foreground text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
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