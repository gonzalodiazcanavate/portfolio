import { skills, technologies } from "@/helpers/skillsHelper";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Cabecera de sección */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-mono text-2xl md:text-3xl font-bold">
              Skills & Technologies
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Barritas con el nivel en cada habilidad */}
            <div className="space-y-6">
              <h3 className="font-mono text-lg text-primary mb-6">Proficiency</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-mono">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                  <div className="text-muted-foreground">
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                    <p><span className="text-primary">+{skill.experience} years</span>  experience</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tecnologías */}
            <div>
              <h3 className="font-mono text-lg text-primary mb-6">Technologies I Work With</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 text-sm text-muted-foreground group"
                  >
                    <span className="text-primary group-hover:translate-x-1 transition-transform">▹</span>
                    <span className="group-hover:text-foreground transition-colors">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;