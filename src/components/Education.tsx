import ucdLogo from "@/assets/ucd-logo.jpeg";
import christLogo from "@/assets/christ-logo.jpeg";

const educations = [
  {
    id: 1,
    degree: "MSc Project Management",
    institution: "UCD Michael Smurfit Graduate Business School",
    location: "Dublin, Ireland",
    period: "Sep 2025 - Present",
    status: "Current",
    description:
      "Specializing in Management of Projects and Change, focusing on sustainable results, collaboration, and ethical frameworks.",
    logo: ucdLogo,
  },
  {
    id: 2,
    degree: "Bachelor of Science",
    institution: "Christ (Deemed to be University)",
    location: "Bengaluru, India",
    period: "Jun 2020 - Jun 2023",
    status: "Completed",
    description:
      "Major in Computer Applications, Mathematics, and Electronics. Built a strong analytical foundation for technical project management.",
    logo: christLogo,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-card relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">
            Education & Qualifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="group bg-background rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-secondary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-2xl bg-background shadow-sm border border-border shrink-0 overflow-hidden p-2 flex items-center justify-center">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-brand-dark">{edu.degree}</h3>
                    <span className="text-xs bg-secondary text-brand-dark px-3 py-1 rounded-full font-medium mt-2 sm:mt-0 w-fit">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-accent mb-4">
                    {edu.location} | {edu.period}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
