import {ArrowDown, Github, Linkedin, Mail} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{background: 'var(--gradient-hero)'}}
      />

      {/* Floating orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p className="font-mono text-primary mb-4 text-lg animate-fade-up" style={{animationDelay: '0.1s'}}>
            Hi, my name is
          </p>

          {/* Name */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up"
            style={{animationDelay: '0.2s'}}
          >
            Alex Chen<span className="text-primary">.</span>
          </h1>

          {/* Tagline */}
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8 animate-fade-up"
            style={{animationDelay: '0.3s'}}
          >
            I build things for the web.
          </h2>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-up"
            style={{animationDelay: '0.4s'}}
          >
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 mb-16 animate-fade-up"
            style={{animationDelay: '0.5s'}}
          >
            <button size="lg" className="font-mono glow hover:glow-strong transition-shadow">
              View My Work
            </button>
            <button size="lg" variant="outline" className="font-mono border-primary/50 hover:bg-primary/10">
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div 
            className="flex gap-6 animate-fade-up"
            style={{animationDelay: '0.6s'}}
          >
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;