import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        { name: '5 Projects', included: true },
        { name: 'Basic Support', included: true },
        { name: 'Mobile Responsive', included: true },
        { name: 'SEO Optimization', included: true },
        { name: 'Custom Domain', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Advanced Analytics', included: false },
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        { name: '20 Projects', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Mobile Responsive', included: true },
        { name: 'SEO Optimization', included: true },
        { name: 'Custom Domain', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'API Access', included: false },
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with custom needs',
      features: [
        { name: 'Unlimited Projects', included: true },
        { name: '24/7 Support', included: true },
        { name: 'Mobile Responsive', included: true },
        { name: 'SEO Optimization', included: true },
        { name: 'Custom Domain', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'API Access', included: true },
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Choose The Right
            <br />
            <span className="text-gradient">Plan For You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible pricing options to suit businesses of all sizes
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 ${
                plan.popular
                  ? 'border-primary shadow-xl scale-105'
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 mr-3 flex-shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground/50'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-primary hover:shadow-glow'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <a href="#" className="text-primary hover:underline">
            View full feature comparison →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;