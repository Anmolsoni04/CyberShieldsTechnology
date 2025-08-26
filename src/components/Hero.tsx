import { ArrowRight, Shield, Lock, Eye, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              Trusted by 5000+ Companies Worldwide
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Protecting Your
            <span className="block text-gradient mt-2">Digital Future</span>
            With Advanced Security
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            CybershieldsTechnologies delivers enterprise-grade cybersecurity solutions that protect your critical assets from evolving threats. Stay secure, stay ahead.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 group"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 hover:border-primary"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Feature icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">End-to-End Encryption</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-sm font-medium">24/7 Monitoring</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium">Instant Response</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">AI Protection</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;