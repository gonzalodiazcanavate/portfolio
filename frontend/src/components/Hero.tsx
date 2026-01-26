import {ArrowDown, Github, Linkedin, Mail} from 'lucide-react';
import {Button} from './ul/Button';
import {useLanguage} from '@/context/LanguageContext';

const Hero = () => {
  const {t} = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center xl:justify-start overflow-hidden">
      {/* background de celdas */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Efecto Gradiente */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{background: 'var(--gradient-hero)'}}
      />

      {/* Efecto orbe azul pulsante */}
      <div className="absolute top-1/4 right-1/4 2xl:right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />

      {/* Contenido */}
      <div className="container relative z-10 px-6 xl:pr-10 xl:pl-0 2xl:ml-[10%]">
        <div className="max-w-4xl mx-auto">
          {/* Saludo */}
          <p className="font-mono text-primary mb-4 text-lg animate-fade-up" style={{animationDelay: '0.1s'}}>
            {t.hero.greeting}
          </p>

          {/* Nombre */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up"
            style={{animationDelay: '0.2s'}}
          >
            {t.hero.name}<span className="text-primary">.</span>
          </h1>

          {/* Profesión */}
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8 animate-fade-up"
            style={{animationDelay: '0.3s'}}
          >
            {t.hero.title}
          </h2>

          {/* Descripcion */}
          <p 
            className="text-lg text-center md:text-xl mx-auto text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-up"
            style={{animationDelay: '0.4s'}}
          >
            {t.hero.description}
          </p>

          {/* Botones Proyectos/Curriculum */}
          <div 
            className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-up"
            style={{animationDelay: '0.5s'}}
          >
            <a href="#projects">
              <Button size="lg" className="font-mono glow hover:glow-strong transition-shadow duration-300 cursor-pointer">
                {t.hero.viewWork}
              </Button>
            </a>
            
            <a target="_blank" href="/Curriculum-V6.pdf">
              <Button size="lg" variant="outline" className="font-mono border-primary/50 hover:bg-primary/10 cursor-pointer">
                {t.hero.downloadCV}
              </Button>
            </a>
          </div>

          {/* Links */}
          <div 
            className="flex gap-6 animate-fade-up"
            style={{animationDelay: '0.6s'}}
          >
            <a 
              href="https://github.com/gonzalodiazcanavate" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gonzalo-díaz-cañavate-5884912aa" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:gonzalodiazca@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Icono Flecha */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;