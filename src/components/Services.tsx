import { Sparkles, Palette, Code, Megaphone, Video, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually stunning user interfaces that delight your customers.',
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and high-performance websites using cutting-edge technologies.',
      gradient: 'from-secondary to-secondary-light',
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Crafting unique brand identities that resonate with your target audience.',
      gradient: 'from-accent to-accent-light',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that drive growth and increase your online presence.',
      gradient: 'from-primary-dark to-primary',
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video content that tells your story and engages your audience.',
      gradient: 'from-secondary-dark to-secondary',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improving your search rankings to drive organic traffic and visibility.',
      gradient: 'from-accent-dark to-accent',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            We Provide The Best
            <br />
            <span className="text-gradient">Digital Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border bg-card p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;