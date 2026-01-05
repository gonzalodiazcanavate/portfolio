import {Code2, Coffee, Rocket} from 'lucide-react';
import {useLanguage} from '@/context/LanguageContext';

const About = () => {
  const {t} = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Cabecera de sección */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-mono text-2xl md:text-3xl font-bold">
              <span className="text-primary">{t.about.title}</span> 
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 xl:ml-[5%] gap-12 items-start">
            {/* Descripción */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t.about.para1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.para2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.para3}{' '}
                <span className="text-primary">startup</span>, {t.about.para3_2}{' '}
                <span className="text-primary"><a href="https://www.energetikos.com/">Energetikos</a></span>, {t.about.para3_3}{' '}
                <span className="text-primary"><a href="http://www.rejimetal.com/">Rejimetal</a></span>. {t.about.para3_3}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-mono">2+</div>
                  <div className="text-sm text-muted-foreground">{t.about.stats_experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-mono">5+</div>
                  <div className="text-sm text-muted-foreground">{t.about.stats_projects}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-mono">10+</div>
                  <div className="text-sm text-muted-foreground">{t.about.stats_clients}</div>
                </div>
              </div>
            </div>

            {/* Cards con cualidades */}
            <div className="space-y-4">
              <div className="card-gradient p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <Code2 className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono font-semibold mb-2">{t.about.clean_code}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.about.clean_code_desc}
                </p>
              </div>
              <div className="card-gradient p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <Rocket className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono font-semibold mb-2">{t.about.fast_optimized}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.about.fast_optimized_desc}
                </p>
              </div>
              <div className="card-gradient p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group">
                <Coffee className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-mono font-semibold mb-2">{t.about.always_learning}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.about.always_learning_desc}
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
