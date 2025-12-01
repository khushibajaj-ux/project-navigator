import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-background via-card to-secondary/20"
    >
      {/* Geometric Background Pattern inspired by modern design */}
      <div className="absolute inset-0 z-0 opacity-30">
        {/* Large circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent/40 to-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/60 to-accent/30 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border-4 border-primary/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-accent/10 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border-4 border-accent/15 rotate-45 animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-primary/10 rounded-lg rotate-12 animate-float-delayed" />
        
        {/* Small accent dots */}
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
        <div className="absolute top-1/4 right-1/2 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-card border border-border rounded-full text-sm font-semibold text-brand-hover shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-default animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for Opportunities
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-brand-dark mb-8 tracking-tight animate-fade-in hover:scale-105 transition-transform duration-500">
          Khushi Bhardwaj
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-xl md:text-2xl text-accent font-light animate-fade-in">
          Project Management Professional
        </p>

        <div className="mt-16 animate-fade-in">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-primary hover:text-accent transition-all group">
            <span className="text-sm font-medium group-hover:scale-110 transition-transform">Learn More</span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
