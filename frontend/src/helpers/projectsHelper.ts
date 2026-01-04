import type {Project} from '@/types/common';

export const FeaturedProjects: Project[] = [
  {
    id: 0,
    title: 'Transferbasket',
    description: `A full-stack web application that shows detailed information about players,
     clubs and transfers of the euroleague. Built with Next.js and Prisma, it contains
      interesting data graphically represented, a user-friendly interface, a responsive
       design and even a game!!!`,
    architecture: `The application follows a comprehensive full-stack architecture built with modern 
technologies and best practices. The frontend is developed using React with Vite as the build tool, 
providing fast development experience and optimized production builds. The user interface combines 
Material-UI (MUI) components with Tailwind CSS for styling, creating a visually cohesive and highly 
customizable design system. The design follows a mobile-first approach, ensuring the application is 
fully responsive and provides an excellent user experience across all device sizes.

The backend is powered by Node.js, utilizing Express.js for API routing and request handling. Prisma 
ORM serves as the database abstraction layer, enabling type-safe database queries and seamless database 
migrations. The application relies on a robust PostgreSQL database with a well-structured schema 
consisting of 14 interconnected tables, ensuring data integrity and optimal performance.

Security is a core concern, with JWT (JSON Web Tokens) authentication implemented for secure user 
authentication and authorization. This allows users to securely sign up, log in, and maintain 
authenticated sessions throughout the application.

The entire application is containerized using Docker, providing three distinct deployment modes: local 
development environment for rapid iteration and testing, local production environment for pre-deployment 
validation, and cloud production environment for live deployment. This multi-stage Docker setup ensures 
consistency across different environments and simplifies the deployment pipeline.

The application was previously deployed on a VPS (Virtual Private Server) but is currently not 
operational. The architecture remains production-ready and can be redeployed at any time with proper 
configuration.

The codebase follows industry best practices including proper error handling, input validation, code 
organization, and separation of concerns between frontend and backend layers.`,
    tech: ['Next.js', 'React', 'JavaScript', 'Prisma', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/gonzalodiazcanavate/transferBasket',
    live: '#',
    coverImage: '/projects/transferbasket/Transferbasket-Home.png',
    images: [
      '/projects/transferbasket/Transferbasket-Login.png',
      '/projects/transferbasket/Transferbasket-Equipo.png',
      '/projects/transferbasket/Transferbasket-Player-1.png',
      '/projects/transferbasket/Transferbasket-Player-2.png',
      '/projects/transferbasket/Transferbasket-Player-3.png',
      '/projects/transferbasket/Transferbasket-Transfers.png',
    ],
  },
];