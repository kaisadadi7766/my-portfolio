export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "电商平台",
    description: "现代化的全栈电商解决方案，支持实时库存管理和安全支付集成",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://github.com"
  },
  {
    id: 2,
    name: "协作工具",
    description: "团队协作平台，支持实时文档编辑和任务追踪功能",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    techStack: ["TypeScript", "Next.js", "Socket.io", "MongoDB"],
    link: "https://github.com"
  },
  {
    id: 3,
    name: "数据可视化",
    description: "企业级数据分析仪表板，提供深入的业务洞察",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    techStack: ["React", "D3.js", "Python", "AWS"],
    link: "https://github.com"
  },
  {
    id: 4,
    name: "移动应用",
    description: "跨平台移动应用，带来流畅的用户体验",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    techStack: ["React Native", "Firebase", "Redux"],
    link: "https://github.com"
  }
];