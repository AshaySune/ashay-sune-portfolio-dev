import { Card } from "@/components/ui/card";
import { Briefcase, FolderOpen, Code2, GraduationCap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "3+",
      label: "Months Internship",
      description: "Backend Development",
    },
    {
      icon: FolderOpen,
      value: "2+",
      label: "Projects",
      description: "Full-Stack Applications",
    },
    {
      icon: Code2,
      value: "8+",
      label: "Technologies",
      description: "Modern Tech Stack",
    },
    {
      icon: GraduationCap,
      value: "7.58",
      label: "CGPA",
      description: "Academic Excellence",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Quick <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my journey and achievements in technology and academia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={stat.label}
                className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary-glow" />
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="text-3xl font-bold gradient-text">
                    {stat.value}
                  </h3>
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {stat.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;