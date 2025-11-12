import { Code, Server, CheckSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TechCategory {
  title: string;
  icon: LucideIcon;
  technologies: string[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: ["Node.js", "Nest.js", "Python", "Django", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Тестирование",
    icon: CheckSquare,
    technologies: ["Jest", "Cypress", "Playwright"],
  },
];

