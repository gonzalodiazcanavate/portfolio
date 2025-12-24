import {Code2, Coffee, Rocket} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-mono text-2xl md:text-3xl font-bold">
              <span className="text-primary">About Me</span> 
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 xl:ml-[5%] gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Gonzalo, a passionate web developer based in Murcia, Spain. I started creating software in 2023
                and I've been involved in different projects since. I'm alaways opened to new challenges and I love Learning
                from experiencedd developers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey into web development started back in 2023 when I started my studies Web Apllication's development. I've 
                been accumalitingexperience and improving my skills since then and I hope to keep doing so in the future.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fast-forward to today, and I've had the privilege of working at a{' '}
                <span className="text-primary">startup</span>, specialiced in solar energy called{' '}
                <span className="text-primary"><a href="https://www.energetikos.com/">Energetikos</a></span>, and a{' '}
                <span className="text-primary">large company</span> called {' '}
                <span className="text-primary"><a href="http://www.rejimetal.com/"></a>Rejimetal</span>. My main focus these days is 
                building Open Source Application that can serve as a base for bigger products.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-mono">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-mono">5+</div>
                  <div className="text-sm text-muted-foreground">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-mono">10+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Visual Cards */}
            <div className="space-y-4">
              <div className="card-gradient p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <Code2 className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  I write code that is maintainable, scalable, and follows best practices.
                </p>
              </div>
              <div className="card-gradient p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <Rocket className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono font-semibold mb-2">Fast & Optimized</h3>
                <p className="text-sm text-muted-foreground">
                  Performance is key. I build blazing fast websites with optimal loading times.
                </p>
              </div>
              <div className="card-gradient p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <Coffee className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono font-semibold mb-2">Always Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Technology evolves. I stay current with the latest trends and tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
