import { Briefcase, MapPin } from "lucide-react";
import profilePhoto from "@/assets/photo.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Image Card */}
          <div className="md:col-span-5">
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-secondary group shadow-lg border border-border">
              <img 
                src={profilePhoto} 
                alt="Khushi Bhardwaj Professional Portrait" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content Card */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">About Me</h2>
            <div className="prose prose-lg text-foreground mb-8 space-y-4">
              <p>
                I am a <span className="font-semibold text-primary">project-management professional</span> with 
                a strong foundation in stakeholder communication, requirement mapping, and execution support.
              </p>
              <p>
                With experience managing client-focused workflows, analyzing data for decision-making, and 
                coordinating tasks across teams, I bring a unique blend of technical knowledge and business acumen 
                to every project. My background in Computer Applications, Mathematics, and Electronics provides 
                a strong analytical foundation that I leverage in my project management approach.
              </p>
              <p>
                Currently pursuing my MSc in Project Management at UCD Michael Smurfit Graduate Business School, 
                I am developing advanced PM capabilities to grow into project and business management roles with 
                confidence and clarity. I thrive in dynamic environments where I can bridge the gap between 
                technical requirements and business goals, using data-driven insights to drive successful outcomes.
              </p>
              <p>
                My experience spans program advisory, inside sales, and team leadership, where I've consistently 
                demonstrated the ability to build trust with stakeholders, optimize processes, and deliver results 
                that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                <Briefcase className="text-primary mb-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-brand-dark">Experience</h3>
                <p className="text-sm text-foreground mt-1">2+ Years Professional</p>
              </div>
              <div className="p-5 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                <MapPin className="text-primary mb-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-brand-dark">Location</h3>
                <p className="text-sm text-foreground mt-1">Dublin, Ireland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
