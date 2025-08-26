import { Shield, Lock, Globe, Cloud, Smartphone, Server, Eye, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Real-time threat detection and prevention using AI-powered algorithms to keep your systems secure.',
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'Military-grade encryption protocols to protect your sensitive data at rest and in transit.',
      gradient: 'from-secondary to-secondary-light',
    },
    {
      icon: Globe,
      title: 'Network Security',
      description: 'Comprehensive network monitoring and firewall management to prevent unauthorized access.',
      gradient: 'from-accent to-accent-light',
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure with advanced security measures and compliance tools.',
      gradient: 'from-primary-dark to-primary',
    },
    {
      icon: Smartphone,
      title: 'Mobile Security',
      description: 'Protect your mobile devices and applications from malware and unauthorized access.',
      gradient: 'from-secondary-dark to-secondary',
    },
    {
      icon: Server,
      title: 'Infrastructure Protection',
      description: 'Safeguard your IT infrastructure with comprehensive security solutions and monitoring.',
      gradient: 'from-accent-dark to-accent',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Eye className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Security Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive cybersecurity solutions designed to protect your business from evolving digital threats
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="p-6 relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <Zap className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom security solution?
          </p>
          <button className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;