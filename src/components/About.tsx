import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import teamCollaboration from '@/assets/team-collaboration.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              We Are Digital
              <br />
              <span className="text-gradient">Innovation Experts</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              With over 10 years of experience in the digital industry, we've helped hundreds of businesses transform their online presence and achieve remarkable growth.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Our team of creative professionals combines cutting-edge technology with innovative design to deliver solutions that not only look great but also drive real business results. We believe in creating digital experiences that inspire, engage, and convert.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">98%</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">50+</div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary-dark group">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={teamCollaboration}
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-xl p-6 max-w-[200px]">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;