import Vova1 from "../../../assets/Vladimir.jpg";
import Jeka from "../../../assets/Evgeniy.jpg";
import Artem from "../../../assets/Artem.jpg";
import Artur from "../../../assets/Artur.jpg";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  photo?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Владимир Гурбанович",
    role: "Fullstack Developer",
    description: "Создаю современные и масштабируемые веб-приложения от идеи до релиза. В работе использую React, TypeScript, Next.js, Node.js и Python. Более 3 лет опыта в разработке решений, которые работают быстро, стабильно и приносят пользу.",
    skills: ["React", "TypeScript", "Next.js", "Node.js", "Python"],
    social: {
      github: "https://github.com/alexey-petrov",
      email: "alexey@bagstack.dev"
    },
    photo: Vova1 // Временная заглушка
  },
  {
    name: "Евгений Бухмиллер",
    role: "Frontend Developer",
    description: "Создаю современные и отзывчивые интерфейсы с акцентом на удобство и скорость. В работе использую React, TypeScript и Next.js. Более 3 лет опыта в разработке UI, которые радуют пользователей.",
    skills: ["React", "TypeScript", "Next.js"],
    social: {
      github: "https://github.com/maria-ivanova",
      email: "maria@bagstack.dev"
    },
    photo: Jeka // Временная заглушка
  },
  {
    name: "Сафонов Артем",
    role: "Frontend Developer",
    description: "Создаю быстрые и стильные интерфейсы с упором на дизайн и адаптивность. В работе использую React, TypeScript и Tailwind CSS, чтобы проекты выглядели современно и работали плавно на всех устройствах.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    social: {
      github: "https://github.com/dmitry-sidorov",
      email: "dmitry@bagstack.dev"
    },
    photo: Artem // Временная заглушка
  },
  {
    name: "Алеев Артур",
    role: "Backend Developer",
    description: "Создаю надёжные серверные системы и API от архитектуры до деплоя. Уверенно работаю с Java, Node.js и JavaScript. Более 3 лет опыта в построении решений, которые выдерживают нагрузку и растут вместе с бизнесом.",
    skills: ["Java", "Node.js", "JavaScript"],
    social: {
      github: "https://github.com/artur-aleev",
      email: "arturdudarev60@gmail.com"
    },
    photo: Artur // Временная заглушка
  }
];