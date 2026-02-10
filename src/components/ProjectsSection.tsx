import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, MessageSquare, Globe, Database, Server, Users, Eye, FileCode } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Unified Teacher Guardian Platform",
      description: "Developed and implemented a unified teacher-guardian platform to enhance communication and collaboration between educators and guardians",
      image: "/placeholder.svg",
      technologies: ["Java"],
      features: [
        { icon: MessageSquare, text: "Real-time updates on student progress" },
        { icon: Users, text: "Streamlined information sharing" },
        { icon: MessageSquare, text: "Increased parental involvement" },
        { icon: Server, text: "Enhanced communication tools" }
      ],
      githubUrl: "https://github.com/ashaysune",
      liveUrl: null,
      category: "Backend"
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "Created a responsive personal portfolio website to showcase diverse projects and skills",
      image: "/placeholder.svg",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        { icon: Eye, text: "Intuitive user interface design" },
        { icon: Globe, text: "Responsive design for all devices" },
        { icon: FileCode, text: "SEO optimization implementation" },
        { icon: Globe, text: "Cross-browser compatibility" }
      ],
      githubUrl: "https://github.com/ashaysune",
      liveUrl: "#",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Sneh Constructions",
      description: "Built a professional website for Sneh Constructions to showcase their construction services, projects portfolio, and company information",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: [
        { icon: Globe, text: "Professional business landing page" },
        { icon: Eye, text: "Project gallery showcase" },
        { icon: Users, text: "Client testimonials section" },
        { icon: MessageSquare, text: "Contact & inquiry forms" }
      ],
      githubUrl: "https://github.com/ashaysune",
      liveUrl: null,
      category: "Frontend"
    },
    {
      id: 4,
      title: "Khao2Khilao",
      description: "Developed a food-related web application connecting food lovers with local cuisines and dining experiences",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: [
        { icon: Globe, text: "Browse local food options" },
        { icon: Eye, text: "Attractive food listings UI" },
        { icon: Database, text: "Menu & restaurant management" },
        { icon: Users, text: "User-friendly ordering flow" }
      ],
      githubUrl: "https://github.com/ashaysune",
      liveUrl: null,
      category: "Full-Stack"
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Full-Stack"];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Showcasing my development work and technical expertise through real-world applications
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-primary/10 h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary-glow transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <IconComponent className="h-4 w-4 text-primary-glow flex-shrink-0" />
                          <span>{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Teaser */}
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileCode className="h-8 w-8 text-primary-glow" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">More Projects Coming Soon</h3>
                <p className="text-sm text-muted-foreground">
                  Currently working on exciting new projects that will be showcased here
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                View All on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;