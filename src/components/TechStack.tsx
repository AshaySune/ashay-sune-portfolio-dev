import { Coffee, Database, Globe, Code, Server, Smartphone, Zap, Terminal } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "Java", icon: Coffee, delay: "0s" },
    { name: "Spring Boot", icon: Server, delay: "0.5s" },
    { name: "Python", icon: Code, delay: "1s" },
    { name: "HTML/CSS", icon: Globe, delay: "1.5s" },
    { name: "JavaScript", icon: Terminal, delay: "2s" },
    { name: "MySQL", icon: Database, delay: "2.5s" },
    { name: "Android", icon: Smartphone, delay: "3s" },
    { name: "Web Dev", icon: Zap, delay: "3.5s" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Tech Stack & Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack development
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            const floatClass = index % 3 === 0 ? "float" : index % 3 === 1 ? "float-delayed" : "float-delayed-2";
            
            return (
              <div
                key={tech.name}
                className={`tech-icon p-6 rounded-2xl text-center group cursor-pointer ${floatClass}`}
                style={{ animationDelay: tech.delay }}
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent className="h-8 w-8 text-primary-glow group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-medium text-sm text-foreground group-hover:text-primary-glow transition-colors">
                  {tech.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary-glow rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full opacity-30 float"></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-primary-glow rounded-full opacity-25 float-delayed"></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary rounded-full opacity-20 float-delayed-2"></div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;