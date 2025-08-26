import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const benefits = [
    '30-Day Free Trial',
    'No Credit Card Required',
    '24/7 Expert Support',
    'Instant Setup',
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card container */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-primary p-1">
            <div className="relative rounded-3xl bg-background/95 backdrop-blur-xl p-8 md:p-12">
              {/* Content */}
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Ready to Secure Your
                  <span className="block text-gradient mt-2">Digital Assets?</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of companies that trust CybershieldsTechnologies to protect their critical infrastructure and data.
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20"
                    >
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                  >
                    Talk to Sales
                  </Button>
                </div>

                {/* Trust indicator */}
                <p className="text-sm text-muted-foreground mt-6">
                  Trusted by Fortune 500 companies worldwide
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;