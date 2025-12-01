import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-background via-card to-secondary/20"
    >
      {/* Animated Blobs */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float z-0 opacity-20" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary rounded-full blur-3xl animate-float-delayed z-0 opacity-60" />
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 animate-float" />
      <div className="absolute bottom-1/3 right-20 w-16 h-16 border-2 border-accent/20 rounded-full animate-float-delayed" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-card border border-border rounded-full text-sm font-semibold text-brand-hover shadow-sm hover:shadow-md transition-shadow cursor-default animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for Opportunities
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-brand-dark mb-8 tracking-tight animate-fade-in">
          Khushi Bhardwaj
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-xl md:text-2xl text-accent font-light animate-fade-in">
          Project Management Professional
        </p>

        <div className="mt-16 animate-fade-in">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-primary hover:text-accent transition-colors group">
            <span className="text-sm font-medium">Learn More</span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
