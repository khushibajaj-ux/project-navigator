import { Briefcase, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Image Card */}
          <div className="md:col-span-5">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-secondary group shadow-lg border border-border">
              <div className="absolute inset-0 flex items-center justify-center text-accent p-8 text-center">
                <div className="space-y-4">
                  <div className="w-32 h-32 mx-auto bg-primary rounded-full flex items-center justify-center text-primary-foreground text-5xl font-bold shadow-xl">
                    KB
                  </div>
                  <p className="text-sm text-foreground/70">Professional Portrait</p>
                </div>
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content Card */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">About Me</h2>
            <div className="prose prose-lg text-foreground mb-8 space-y-4">
              <p>
                I am a <span className="font-semibold text-primary">Project Management Professional</span> with
                a passion for organization and delivery.
              </p>
              <p>
                My expertise lies in bridging the gap between technical requirements and business goals. With a
                background in Computer Applications and hands-on experience in sales and program management, I
                bring a unique perspective to stakeholder communication and risk mitigation.
              </p>
              <p>
                I thrive in dynamic environments where I can leverage data to make informed decisions and
                coordinate cross-functional teams to deliver value.
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
