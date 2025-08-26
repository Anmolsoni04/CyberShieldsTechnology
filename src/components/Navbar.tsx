import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'Threat Detection', description: 'Advanced AI-powered threat monitoring', href: '#' },
    { title: 'Security Audits', description: 'Comprehensive security assessments', href: '#' },
    { title: 'Incident Response', description: '24/7 emergency response team', href: '#' },
    { title: 'Cloud Security', description: 'Protect your cloud infrastructure', href: '#' },
  ];

  const solutions = [
    { title: 'Enterprise', description: 'Complete security for large organizations', href: '#' },
    { title: 'Small Business', description: 'Affordable protection for SMBs', href: '#' },
    { title: 'Government', description: 'Compliance-focused security solutions', href: '#' },
    { title: 'Healthcare', description: 'HIPAA-compliant security services', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary animate-glow-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CybershieldsTech
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 data-[state=open]:bg-primary/10">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 data-[state=open]:bg-primary/10">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {solutions.map((solution) => (
                        <li key={solution.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={solution.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                            >
                              <div className="text-sm font-medium leading-none">
                                {solution.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {solution.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a
                    href="#about"
                    className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    About
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a
                    href="#pricing"
                    className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Pricing
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a
                    href="#contact"
                    className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Contact
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
              variant="default" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="px-4 py-2 text-sm font-medium hover:text-primary">
                Services
              </a>
              <a href="#solutions" className="px-4 py-2 text-sm font-medium hover:text-primary">
                Solutions
              </a>
              <a href="#about" className="px-4 py-2 text-sm font-medium hover:text-primary">
                About
              </a>
              <a href="#pricing" className="px-4 py-2 text-sm font-medium hover:text-primary">
                Pricing
              </a>
              <a href="#contact" className="px-4 py-2 text-sm font-medium hover:text-primary">
                Contact
              </a>
              <Button className="w-full bg-gradient-primary">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;