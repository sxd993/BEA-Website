export interface Project {
    id: number;
    name: string;
    organization: string
    tech: string[];
    github: string;
    demo: string;
    image: string;
    category: string
    description: string;
    details: string;
    status: string;
    featured: boolean;
    features: string[],
    challenges: string
}