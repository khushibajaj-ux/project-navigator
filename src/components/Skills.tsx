import { MessageCircle, BarChart2, Code2 } from "lucide-react";

const skillCategories = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Communication",
    skills: ["Stakeholder Mgmt", "Requirements", "Client Relations"],
  },
  {
    id: 2,
    icon: BarChart2,
    title: "Planning",
    skills: ["Risk Mgmt", "WBS & Schedule", "Milestones"],
  },
  {
    id: 3,
    icon: Code2,
    title: "Technical",
    skills: ["Python", "SalesForce", "MS Office"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Skills & Competencies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-card p-8 rounded-3xl border border-border hover:border-primary hover:shadow-xl hover:shadow-secondary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
