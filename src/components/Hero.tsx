import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Project Management Professional";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-background"
    >
      {/* Animated Blobs */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float z-0 opacity-20" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary rounded-full blur-3xl animate-float-delayed z-0 opacity-60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-card border border-border rounded-full text-sm font-semibold text-brand-hover shadow-sm hover:shadow-md transition-shadow cursor-default animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-dark mb-6 tracking-tight animate-fade-in">
          Khushi Bhardwaj
        </h1>

        <div className="h-8 md:h-12 mb-8 animate-fade-in">
          <span className="text-xl md:text-3xl text-accent font-light">
            {displayText}
            <span className="animate-pulse-glow">|</span>
          </span>
        </div>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground animate-fade-in leading-relaxed">
          Bridging strategy and execution through data-driven project management and effective
          stakeholder collaboration.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <a href="#contact">
            <Button
              size="lg"
              className="group relative bg-brand-dark text-primary-foreground rounded-full font-medium overflow-hidden hover:shadow-xl hover:shadow-brand-dark/20 hover:-translate-y-1 transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full font-medium border-border hover:border-primary hover:text-primary transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
