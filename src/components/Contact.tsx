import { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I will get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark text-primary-foreground relative overflow-hidden">
      {/* Abstract Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[128px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Let's build something together</h2>
              <p className="text-secondary mb-8 leading-relaxed">
                Open for Project Management opportunities in Dublin. Whether you have a question or just want to
                say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:khushi.bhardwaj@ucdconnect.ie"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary-foreground group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      khushi.bhardwaj@ucdconnect.ie
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary-foreground group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">+353 858069609</p>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/khushi-bhardwaj-ucd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary-foreground group-hover:bg-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary">Social</p>
                    <p className="font-medium group-hover:text-primary transition-colors">LinkedIn Profile</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Form */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5">
              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">Name</label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-brand-dark/50 border-brand-dark text-primary-foreground placeholder:text-accent focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">Email</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-brand-dark/50 border-brand-dark text-primary-foreground placeholder:text-accent focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1.5">Message</label>
                <Textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-brand-dark/50 border-brand-dark text-primary-foreground placeholder:text-accent focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold hover:bg-brand-hover transition-all shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
