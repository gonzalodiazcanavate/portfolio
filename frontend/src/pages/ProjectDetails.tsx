import {useParams} from 'react-router-dom';
import {Github, ExternalLink} from 'lucide-react';
import Navbar from '@/components/Navbar';
import {FeaturedProjects} from '../helpers/projectsHelper';

const ProjectDetails = () => {
  const {id} = useParams<{ id: string }>();
  const projectId = parseInt(id || '0');
  const project = FeaturedProjects.find(p => p.id == projectId);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="space-y-24 mb-24">
        <div
          key={project.title}
          className={'relative grid md:grid-cols-12 gap-4 items-center "md:text-right"'}
        >
          {/* Imagen */}
          <div
            className={'md:col-span-7 md:col-start-6 relative group'}
          >
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contenido */}
          <div
            className={'md:col-span-6 md:row-start-1 md:col-start-1 md:col-start-6relative z-20'}
          >
            <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
            <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
              <a href={project.live}>{project.title}</a>
            </h3>
            <div className="card-gradient p-6 rounded-lg border border-border mb-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            <div
              className="flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground md:justify-end"
            >
              {project.tech.map((t: string) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="flex gap-4 md:justify-end" >
              <a
                href={project.github}
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={project.live}
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;