import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's Work
              <br />
              <span className="text-gradient">Together</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@cybershields.com</p>
                  <p className="text-muted-foreground">support@cybershields.com</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 Business Ave, Suite 100</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button className="w-full bg-gradient-primary hover:shadow-glow group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;