import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Professional workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Dynamic Greeting */}
          <div className="animate-fade-in-up mb-6">
            <p className="text-primary-glow font-medium text-lg mb-2">
              👋 Hello, I'm
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Ashay Sune</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-6">
              <span className="inline-block animate-slide-in-right">IT Student</span>
              <span className="mx-2 text-primary">|</span>
              <span className="inline-block animate-slide-in-right" style={{animationDelay: '0.2s'}}>Java Developer</span>
              <span className="mx-2 text-primary">|</span>
              <span className="inline-block animate-slide-in-right" style={{animationDelay: '0.4s'}}>Problem Solver</span>
            </div>
          </div>

          {/* Bio */}
          <div className="animate-fade-in-up mb-8" style={{animationDelay: '0.6s'}}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Creating innovative solutions that enhance user engagement and solve real-world problems. 
              Currently pursuing B.E. in Information Technology from Amravati, Maharashtra.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up mb-12 flex flex-col sm:flex-row gap-4 justify-center" style={{animationDelay: '0.8s'}}>
            <Button variant="hero" size="lg" className="animate-pulse-glow group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="animated-border">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up flex justify-center space-x-6" style={{animationDelay: '1s'}}>
            <a 
              href="https://github.com/ashaysune" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-icon p-3 rounded-full hover:text-primary-glow transition-all"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/ashaysune" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-icon p-3 rounded-full hover:text-primary-glow transition-all"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:ashaysune16@gmail.com" 
              className="tech-icon p-3 rounded-full hover:text-primary-glow transition-all"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-glow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-glow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;