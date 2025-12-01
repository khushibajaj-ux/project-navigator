import { CheckCircle2 } from "lucide-react";
import ikanLogo from "@/assets/ikan-logo.jpeg";
import projectproLogo from "@/assets/projectpro-logo.jpeg";
import simplilearnLogo from "@/assets/simplilearn-logo.jpeg";
import groupPhoto from "@/assets/group-photo.jpeg";

const experiences = [
  {
    id: 1,
    title: "Program Advisor",
    company: "Ikan Uplevel Technologies",
    year: "2025",
    logo: ikanLogo,
    responsibilities: [
      "Advised professionals on FAANG hiring trends.",
      "Improved enrolment efficiency using data tools.",
    ],
  },
  {
    id: 2,
    title: "Inside Sales Representative",
    company: "Project Pro (Iconiq Inc)",
    year: "2024 - 2025",
    logo: projectproLogo,
    responsibilities: [
      "Optimized sales funnels with data-driven solutions.",
      "Mentored junior sales team members.",
    ],
  },
  {
    id: 3,
    title: "Inside Sales Manager",
    company: "Simplilearn Solutions",
    year: "2023 - 2024",
    logo: simplilearnLogo,
    responsibilities: [
      "Surpassed monthly sales targets by 30%.",
      "Managed post-sale client communications.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 w-64 h-64 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Career Path</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Professional Experience</h2>
        </div>

        {/* Team Photo Section */}
        <div className="mb-16 animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-card group">
            <img 
              src={groupPhoto} 
              alt="Team collaboration at work" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-medium">Collaborative team environment fostering growth and innovation</p>
            </div>
          </div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center justify-between md:justify-normal ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } group animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Logo Circle */}
              <div
                className={`w-24 h-24 rounded-full border-4 border-card shadow-md shadow-secondary bg-background shrink-0 md:order-1 ${
                  index % 2 === 1 ? "md:-translate-x-1/2" : "md:translate-x-1/2"
                } z-10 overflow-hidden p-2 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-[calc(100%-4.5rem)] md:w-[calc(50%-3rem)] bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:shadow-secondary/50 hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark">{exp.title}</h3>
                    <p className="text-primary font-medium text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs font-semibold text-brand-hover bg-background border border-border px-2 py-1 rounded">
                    {exp.year}
                  </span>
                </div>
                <ul className="space-y-2 mt-4 text-sm text-foreground">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
