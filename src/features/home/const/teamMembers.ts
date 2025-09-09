import Vova1 from "../../../assets/Vova1.jpg";
import Jeka from "../../../assets/Jeka.jpg";
import Artem from "../../../assets/Artem.jpg";
import Artur from "../../../assets/Artur.jpg";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  experience: string;
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
    role: "Lead Frontend Developer",
    description: "Специализируется на создании современных интерфейсов с использованием React и TypeScript",
    experience: "7 лет опыта",
    skills: ["React", "TypeScript", "Next.js"],
    social: {
      github: "https://github.com/alexey-petrov",
      linkedin: "https://linkedin.com/in/alexey-petrov",
      email: "alexey@bagstack.dev"
    },
    photo: Vova1 // Временная заглушка
  },
  {
    name: "Евгений Бухмиллер",
    role: "Senior Backend Developer",
    description: "Эксперт по архитектуре серверных приложений и оптимизации баз данных, любит чистый код",
    experience: "6 лет опыта",
    skills: ["Python", "Django", "PostgreSQL"],
    social: {
      github: "https://github.com/maria-ivanova",
      linkedin: "https://linkedin.com/in/maria-ivanova",
      email: "maria@bagstack.dev"
    },
    photo: Jeka // Временная заглушка
  },
  {
    name: "Сафонов Артем",
    role: "Mobile Developer",
    description: "Создает нативные и кроссплатформенные мобильные приложения высокого качества",
    experience: "5 лет опыта",
    skills: ["React Native", "Flutter", "Swift"],
    social: {
      github: "https://github.com/dmitry-sidorov",
      linkedin: "https://linkedin.com/in/dmitry-sidorov",
      email: "dmitry@bagstack.dev"
    },
    photo: Artem // Временная заглушка
  },
  {
    name: "Алеев Артур",
    role: "UI/UX Designer",
    description: "Создает интуитивные пользовательские интерфейсы и проводит UX-исследования",
    experience: "4 года опыта",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    social: {
      linkedin: "https://linkedin.com/in/anna-kozlova",
      email: "anna@bagstack.dev"
    },
    photo: Artur // Временная заглушка
  }
];