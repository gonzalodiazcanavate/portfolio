import { Link } from "react-router-dom";
import { ExternalLink, Github, Folder } from "lucide-react";
import { FeaturedProjects } from "../helpers/projectsHelper";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Cabecera de sección */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-mono text-2xl md:text-3xl font-bold">
              <span className="text-primary">Things I've Built</span> 
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Proyectos */}
          <h3 className="font-mono text-xl text-center mb-8">Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FeaturedProjects.map((project) => (
              <div
                key={project.title}
                className="relative card-gradient p-6 rounded-lg border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* overlay clickable */}
                <Link
                  to={`/project/${project.id}`}
                  className="absolute inset-0 z-0"
                />
                <div className="flex justify-between items-start mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
