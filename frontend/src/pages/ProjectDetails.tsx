import {useParams} from 'react-router-dom';
import {Github, ExternalLink} from 'lucide-react';
import {useState} from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageModal from '@/components/ImageModal';
import {FeaturedProjects} from '../helpers/projectsHelper';

const ProjectDetails = () => {
  const {id} = useParams<{ id: string }>();
  const projectId = parseInt(id || '0');
  const project = FeaturedProjects.find(p => p.id == projectId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div key={project.title} className="space-y-8">
            <div className="text-center space-y-6">
              <p className="font-mono text-primary text-sm">Featured Project</p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <h3 className="text-4xl font-bold hover:text-primary transition-colors">
                  <a href={project.live}>{project.title}</a>
                </h3>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="text-center space-y-6">
              <div className="card-gradient p-6 rounded-lg border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center font-mono text-sm text-muted-foreground">
                {project.tech.map((t: string) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* Arquitectura */}
            <div className="text-center space-y-6">
              <h4 className="text-2xl text-primary font-bold">Architecture</h4>
              <div className="card-gradient p-6 rounded-lg border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            </div>

            {/* Imagenes Adicionales */}
            <div className="text-center space-y-6">
              <h4 className="text-2xl text-primary font-bold">Other Images</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images?.map((image: string, index: number) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Enlaces finales */}
            <div className="flex gap-4 justify-center pt-8 border-t border-border">
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

      <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />

      <Footer />
    </div>
  );
};
export default ProjectDetails;