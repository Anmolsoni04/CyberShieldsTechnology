import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
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

  const homePages = [
    { title: 'Home One', description: 'Modern agency layout', href: '#' },
    { title: 'Home Two', description: 'Creative studio design', href: '#' },
    { title: 'Home Three', description: 'Business consultancy', href: '#' },
    { title: 'Home Four', description: 'Tech startup theme', href: '#' },
  ];

  const allPages = [
    { title: 'About Us', description: 'Learn about our story', href: '#about' },
    { title: 'Services', description: 'What we offer', href: '#services' },
    { title: 'Portfolio', description: 'Our best work', href: '#portfolio' },
    { title: 'Team', description: 'Meet our experts', href: '#team' },
    { title: 'FAQ', description: 'Common questions', href: '#faq' },
    { title: 'Case Studies', description: 'Success stories', href: '#' },
  ];

  const pricingOptions = [
    { title: 'Basic Plan', description: 'For small teams', href: '#' },
    { title: 'Professional', description: 'For growing businesses', href: '#' },
    { title: 'Enterprise', description: 'Custom solutions', href: '#' },
  ];

  const blogCategories = [
    { title: 'Design', description: 'UI/UX insights', href: '#' },
    { title: 'Development', description: 'Tech tutorials', href: '#' },
    { title: 'Marketing', description: 'Growth strategies', href: '#' },
    { title: 'Business', description: 'Industry trends', href: '#' },
  ];

  const contactOptions = [
    { title: 'Contact Us', description: 'Get in touch', href: '#contact' },
    { title: 'Support Center', description: '24/7 help desk', href: '#' },
    { title: 'Request Quote', description: 'Get pricing', href: '#' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          <span>🎉 Limited Offer: Signup and receive 30% bonus on checkout</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border'
            : 'bg-background border-b border-border/50'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-primary">Cyber</span>
                <span className="text-secondary">shields</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Home Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-muted data-[state=open]:bg-muted">
                      Home
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-popover">
                        {homePages.map((page) => (
                          <li key={page.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={page.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {page.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {page.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* All Pages Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-muted data-[state=open]:bg-muted">
                      All Pages
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 bg-popover">
                        {allPages.map((page) => (
                          <li key={page.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={page.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {page.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {page.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Pricing Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-muted data-[state=open]:bg-muted">
                      Pricing
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-popover">
                        {pricingOptions.map((option) => (
                          <li key={option.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={option.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {option.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {option.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Blog Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-muted data-[state=open]:bg-muted">
                      Blog
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-popover">
                        {blogCategories.map((category) => (
                          <li key={category.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={category.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {category.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {category.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Contact Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-muted data-[state=open]:bg-muted">
                      Contact
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-popover">
                        {contactOptions.map((option) => (
                          <li key={option.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={option.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {option.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {option.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button 
                className="ml-8 bg-foreground text-background hover:bg-foreground/90"
              >
                Get In Touch
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
            <div className="lg:hidden py-4 animate-fade-in border-t border-border">
              <div className="flex flex-col space-y-4">
                <details className="group">
                  <summary className="flex items-center justify-between px-4 py-2 cursor-pointer">
                    Home
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-6 space-y-2 mt-2">
                    {homePages.map(page => (
                      <a key={page.title} href={page.href} className="block py-1 text-sm text-muted-foreground hover:text-primary">
                        {page.title}
                      </a>
                    ))}
                  </div>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between px-4 py-2 cursor-pointer">
                    All Pages
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-6 space-y-2 mt-2">
                    {allPages.map(page => (
                      <a key={page.title} href={page.href} className="block py-1 text-sm text-muted-foreground hover:text-primary">
                        {page.title}
                      </a>
                    ))}
                  </div>
                </details>

                <a href="#pricing" className="px-4 py-2 text-sm font-medium hover:text-primary">
                  Pricing
                </a>
                <a href="#blog" className="px-4 py-2 text-sm font-medium hover:text-primary">
                  Blog
                </a>
                <a href="#contact" className="px-4 py-2 text-sm font-medium hover:text-primary">
                  Contact
                </a>
                <Button className="w-full bg-foreground text-background">Get In Touch</Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;