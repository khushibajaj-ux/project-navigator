import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-lg border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm transform group-hover:rotate-12 transition-transform shadow-lg shadow-primary/40">
              KB
            </div>
            <span className="text-xl font-bold text-brand-dark tracking-tight group-hover:text-primary transition-colors">
              Khushi Bhardwaj
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-brand-dark hover:bg-secondary transition-all px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact">
                <Button className="ml-4 bg-primary text-primary-foreground hover:bg-brand-hover rounded-full shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-primary hover:bg-secondary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block hover:text-primary hover:bg-secondary px-3 py-3 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={handleNavClick}>
              <Button className="w-full mt-4 bg-primary text-primary-foreground rounded-lg">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
