import { useEffect, useState } from 'react';
import { Shield, Users, Globe, Award } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    {
      icon: Shield,
      value: '99.9',
      suffix: '%',
      label: 'Uptime Security',
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Users,
      value: '5000',
      suffix: '+',
      label: 'Protected Clients',
      gradient: 'from-secondary to-secondary-light',
    },
    {
      icon: Globe,
      value: '150',
      suffix: '+',
      label: 'Countries Served',
      gradient: 'from-accent to-accent-light',
    },
    {
      icon: Award,
      value: '50',
      suffix: '+',
      label: 'Security Awards',
      gradient: 'from-primary-dark to-primary',
    },
  ];

  const CountUp = ({ end, suffix }: { end: string; suffix: string }) => {
    const [count, setCount] = useState(0);
    const endValue = parseFloat(end);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 50;
      const stepValue = endValue / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [isVisible, endValue]);

    return (
      <span>
        {end.includes('.') ? count.toFixed(1) : Math.floor(count)}
        {suffix}
      </span>
    );
  };

  return (
    <section id="stats-section" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground">
            Our track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                {/* Icon container */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  {isVisible && <CountUp end={stat.value} suffix={stat.suffix} />}
                </div>

                {/* Label */}
                <p className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;