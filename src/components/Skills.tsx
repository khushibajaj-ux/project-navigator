import { MessageCircle, BarChart2, Code2 } from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Communication",
    description: "Building strong relationships and aligning diverse stakeholders through clear, strategic communication.",
    skills: [
      { 
        name: "Stakeholder Management", 
        detail: "Expert in engaging cross-functional teams, managing expectations, and building consensus across technical and business stakeholders."
      },
      { 
        name: "Requirements Gathering", 
        detail: "Skilled at eliciting, documenting, and validating requirements through interviews, workshops, and collaborative sessions."
      },
      { 
        name: "Client Relations", 
        detail: "Proven track record in building trust, managing client communications, and maintaining long-term professional relationships."
      },
    ],
  },
  {
    id: 2,
    icon: BarChart2,
    title: "Planning & Execution",
    description: "Strategic planning expertise with a focus on risk mitigation, resource optimization, and timely delivery.",
    skills: [
      { 
        name: "Risk Management", 
        detail: "Proactive identification, assessment, and mitigation of project risks using data-driven decision-making frameworks."
      },
      { 
        name: "WBS & Scheduling", 
        detail: "Experience creating detailed work breakdown structures and managing project timelines to ensure on-time delivery."
      },
      { 
        name: "Milestone Tracking", 
        detail: "Systematic monitoring of project milestones with regular status updates and course corrections as needed."
      },
    ],
  },
  {
    id: 3,
    icon: Code2,
    title: "Technical Skills",
    description: "Technical proficiency that bridges the gap between business requirements and technical implementation.",
    skills: [
      { 
        name: "Python", 
        detail: "Programming experience in Python for data analysis, automation, and process optimization tasks."
      },
      { 
        name: "Salesforce", 
        detail: "Hands-on experience with Salesforce CRM for managing client relationships and sales workflows."
      },
      { 
        name: "MS Office Suite", 
        detail: "Advanced proficiency in Excel, PowerPoint, and Word for data analysis, presentations, and documentation."
      },
    ],
  },
];

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Skills & Competencies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-card p-8 rounded-3xl border border-border hover:border-primary hover:shadow-xl hover:shadow-secondary/50 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="w-14 h-14 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                
                <div className="space-y-3">
                  {category.skills.map((skill, index) => {
                    const skillKey = `${category.id}-${index}`;
                    const isExpanded = expandedSkill === skillKey;
                    
                    return (
                      <div
                        key={index}
                        className="bg-background border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50"
                      >
                        <button
                          onClick={() => setExpandedSkill(isExpanded ? null : skillKey)}
                          className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors group/button"
                        >
                          <span className="text-sm font-medium text-foreground group-hover/button:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <span className={`text-primary transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>
                        
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <p className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed">
                            {skill.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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
