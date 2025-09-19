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
    role: "Lead Fullstack Developer",
    description:
      "Разрабатываю масштабируемые веб-приложения от интерфейса до серверной логики. Использую React, TypeScript, Next.js, Node.js и Python. Более 3 лет создаю решения, которые стабильны, быстры и удобны в поддержке.",
    skills: ["React", "TypeScript", "Next.js", "Node.js", "Python"],
    social: {
      github: "https://github.com/sxd993",
      email: "gurbanovich2014@yandex.ru",
    },
    photo: 'https://s3.twcstorage.ru/dcd39072-64d4703d-c6e7-4803-9e32-dea6459a0f17/images/Portfolio/Team/1758258064-Vladimir.avif',
  },
  {
    name: "Евгений Бухмиллер",
    role: "Frontend Developer",
    description:
      "Специализируюсь на создании удобных и отзывчивых интерфейсов. В работе опираюсь на React, TypeScript и Next.js. Более 3 лет опыта в разработке UI, где красота сочетается с высокой скоростью работы.",
    skills: ["React", "TypeScript", "Next.js"],
    social: {
      github: "https://github.com/shibapc",
      email: "evgbukhmiller@gmail.com",
    },
    photo: 'https://s3.twcstorage.ru/dcd39072-64d4703d-c6e7-4803-9e32-dea6459a0f17/images/Portfolio/Team/1758258065-Evgeniy.avif',
  },
  {
    name: "Артем Сафонов",
    role: "Frontend Developer",
    description:
      "Делаю интерфейсы быстрыми, стильными и адаптивными. Использую React, TypeScript и Tailwind CSS, чтобы сайты и сервисы одинаково хорошо выглядели и работали на всех устройствах.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    social: {
      github: "https://github.com/6ubble",
      email: "bestartiom@yandex.ru",
    },
    photo: 'https://s3.twcstorage.ru/dcd39072-64d4703d-c6e7-4803-9e32-dea6459a0f17/images/Portfolio/Team/1758258064-Artem.avif',
  },
  {
    name: "Артур Алеев",
    role: "Backend Developer",
    description:
      "Строю надёжные серверные системы и API от архитектуры до развёртывания. Владею Java, Node.js и JavaScript. Более 3 лет опыта в создании backend-решений, которые выдерживают нагрузку и легко масштабируются.",
    skills: ["Java", "Node.js", "JavaScript"],
    social: {
      github: "https://github.com/artur-aleev",
      email: "arturdudarev60@gmail.com",
    },
    photo: 'https://s3.twcstorage.ru/dcd39072-64d4703d-c6e7-4803-9e32-dea6459a0f17/images/Portfolio/Team/1758258064-Artur.avif',
  },
];
