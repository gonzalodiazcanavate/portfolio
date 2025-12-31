interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    image?: string;
}

export const featuredProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, payment processing with Stripe, and an admin dashboard. Built with modern technologies for optimal performance.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application featuring real-time updates, team workspaces, and detailed analytics. Includes drag-and-drop functionality and smart notifications.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps marketers create blog posts, social media content, and marketing copy using OpenAI's GPT models.",
    tech: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Weather Dashboard",
    description: "A beautiful weather app with 7-day forecasts, location search, and animated weather icons.",
    tech: ["React", "Weather API", "Chart.js"],
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers with dark mode and animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Markdown Editor",
    description: "A live markdown editor with preview, syntax highlighting, and export options.",
    tech: ["React", "CodeMirror", "Marked"],
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with rooms, direct messages, and file sharing capabilities.",
    tech: ["React", "Socket.io", "Express"],
  },
  {
    title: "Budget Tracker",
    description: "Personal finance app with expense tracking, budgets, and visual reports.",
    tech: ["React", "D3.js", "Firebase"],
  },
  {
    title: "URL Shortener",
    description: "A URL shortening service with analytics, custom slugs, and QR code generation.",
    tech: ["Node.js", "Redis", "PostgreSQL"],
  },
];