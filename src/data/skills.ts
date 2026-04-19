export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Node.js", level: 88, category: "backend" },
  { name: "PostgreSQL", level: 82, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 78, category: "tools" },
  { name: "AWS", level: 75, category: "tools" }
];