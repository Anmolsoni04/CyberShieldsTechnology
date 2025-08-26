import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const categories = ['All', 'Web Design', 'Development', 'Branding', 'Marketing'];
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Development',
      description: 'Modern e-commerce solution with advanced features',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity for tech startup',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      tags: ['Logo', 'Guidelines', 'Marketing'],
    },
    {
      id: 3,
      title: 'Mobile App UI',
      category: 'Web Design',
      description: 'Intuitive mobile app interface design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      tags: ['UI/UX', 'Mobile', 'Figma'],
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'Marketing',
      description: 'Successful social media marketing campaign',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['Social Media', 'SEO', 'Content'],
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      category: 'Development',
      description: 'Analytics dashboard for SaaS platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Dashboard', 'Analytics', 'Vue.js'],
    },
    {
      id: 6,
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Modern corporate website with CMS',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      tags: ['WordPress', 'Responsive', 'CMS'],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Our Recent
            <br />
            <span className="text-gradient">Creative Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest projects and see how we've helped businesses succeed
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1 bg-muted rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-background text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <button className="p-2 bg-background rounded-lg hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-background rounded-lg hover:bg-primary hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Badge variant="outline" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;