import type {Project} from '@/types/common';

const transferbasketES: Project = {
  id: 0,
  title: 'Transferbasket',
  description: `Una aplicación web full-stack que muestra información detallada sobre jugadores,
     clubes y traspasos de la Euroliga. Construida con Next.js y node, contiene
      datos interesantes representados gráficamente, una interfaz amigable, un diseño responsivo
       ¡e incluso un juego!`,
  architecture: `La aplicación sigue una arquitectura full-stack clásica de frontend-backend-db construida con tecnologías modernas
y buenas prácticas. El frontend está desarrollado usando React con Vite como herramienta de compilación,
proporcionando una experiencia de desarrollo rápida y builds de producción optimizadas. La interfaz
de usuario combina componentes de Material-UI (MUI) con Tailwind CSS para estilos, creando un sistema de
diseño visualmente cohesivo y altamente personalizable. El diseño sigue un enfoque mobile-first, asegurando
que la aplicación sea totalmente responsiva y proporcione una excelente experiencia de usuario en todos
los tamaños de dispositivo.

El backend está impulsado por Node.js, utilizando Express.js para enrutamiento de API y manejo de solicitudes.
Prisma ORM sirve como capa de abstracción de la base de datos, habilitando consultas type-safe y migraciones
 sin fricciones. La aplicación se basa en una base de datos PostgreSQL robusta con un esquema
bien estructurado que consta de 14 tablas interconectadas, asegurando integridad de datos y rendimiento óptimo.

La seguridad es una preocupación principal, con autenticación JWT (JSON Web Tokens) implementada para
autenticación y autorización de usuarios seguras. Esto permite a los usuarios registrarse, iniciar sesión
de forma segura y mantener sesiones autenticadas en toda la aplicación.

La aplicación está containerizada usando Docker, proporcionando tres builds
distintas: entorno de desarrollo local para iteración rápida y pruebas, entorno de producción local para
validación previa a la implementación, y entorno de producción en la nube para implementación en vivo.
Esta configuración Docker de múltiples etapas asegura consistencia entre diferentes entornos y simplifica
el pipeline de implementación.

La aplicación fue desplegada anteriormente en un VPS (Servidor Privado Virtual) pero actualmente no
está operativa. La arquitectura sigue estando lista para producción y puede ser redesplegada en cualquier
momento con la configuración adecuada.

El código sigue las mejores prácticas de la industria incluyendo manejo adecuado de errores, validación de
entrada, organización del código y separación de responsabilidades entre las capas frontend, backend y datos.`,
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
};

const transferbasketEN: Project = {
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
};

const convertiyES: Project = {
  id: 1,
  title: 'Convertiu',
  description: `Un conversor de unidades moderno construido con Astro que genera dinámicamente páginas estáticas
     para cada conversor. Cada conversor tiene su propia URL sin necesidad de crear archivos manuales,
     ofreciendo una interfaz limpia, responsiva e intuitiva.`,
  architecture: `La aplicación utiliza Astro para generar un sitio estático de alto rendimiento. La generación
dinámica de rutas se logra mediante archivos [slug].astro que leen configuraciones de conversores y generan
automáticamente todas las páginas en tiempo de compilación. Esto garantiza que cada conversor tenga su propia
URL sin requerir creación manual de archivos.

Esta arquitectura permite maximizar el SEO significativamente, ya que cada conversor obtiene su propia URL,
mejorando la indexación y clasificación en motores de búsqueda. La arquitectura completamente estática
proporciona excelente rendimiento, seguridad inherente y facilidad de despliegue sin necesidad de servidor
backend complejo, permitiendo alojar en servicios estáticos como Netlify, Vercel o GitHub Pages.

El diseño es mobile-first y completamente responsivo, asegurando una excelente experiencia de usuario
en todos los dispositivos. La interfaz es intuitiva y fácil de usar, con cálculos precisos y conversiones
instantáneas entre diferentes sistemas de unidades.

El código mantiene una separación clara entre datos (definiciones de conversores) y lógica de presentación,
facilitando la adición de nuevos conversores simplemente agregando nuevos objetos de configuración.`,
  tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Static Generation', 'React'],
  github: 'https://github.com/Daniumy/Convertiu',
  live: 'https://convertiu.vercel.app',
  coverImage: '/projects/convertiu/Convertiu-Home.png',
  images: [
    '/projects/convertiu/Convertiu-Home.png',
    '/projects/convertiu/Convertiu-Conversor.png',
    '/projects/convertiu/Convertiu-Conversor-2.png',
  ],
};

const convertiyEN: Project = {
  id: 1,
  title: 'Convertiu',
  description: `A modern unit converter built with Astro that dynamically generates static pages for each converter.
     Each converter has its own URL without requiring manual file creation, offering a clean, responsive
     and intuitive interface.`,
  architecture: `The application uses Astro to generate a high-performance static site. Dynamic route generation
is achieved through [slug].astro files that read converter configurations and automatically generate all
pages at build time. This ensures each converter has its own URL without requiring manual file creation.

This architecture maximizes SEO significantly, as each converter gets its own URL, improving search engine
indexing and ranking. The completely static architecture provides excellent performance, inherent security,
and ease of deployment without requiring a complex backend server, allowing hosting on static services
such as Netlify, Vercel, or GitHub Pages.

The design is mobile-first and fully responsive, ensuring an excellent user experience across all
devices. The interface is intuitive and easy to use, with precise calculations and instant conversions
between different unit systems.

The code maintains a clear separation between data (converter definitions) and presentation logic,
making it easy to add new converters by simply adding new configuration objects.`,
  tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Static Generation', 'React'],
  github: 'https://github.com/Daniumy/Convertiu',
  live: 'https://convertiu.vercel.app',
  coverImage: '/projects/convertiu/Convertiu-Home.png',
  images: [
    '/projects/convertiu/Convertiu-Home.png',
    '/projects/convertiu/Convertiu-Conversor.png',
    '/projects/convertiu/Convertiu-Conversor-2.png',
  ],
};

export const FeaturedProjectsES: Project[] = [transferbasketES, convertiyES];
export const FeaturedProjectsEN: Project[] = [transferbasketEN, convertiyEN];