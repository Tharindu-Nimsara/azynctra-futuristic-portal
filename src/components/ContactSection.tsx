
import { Facebook, Linkedin, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formState);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://web.facebook.com/azynctra",
      icon: Facebook
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/azynctra",
      icon: Linkedin
    }
  ];

  const contactInfo = [
    {
      type: "Email",
      value: "info@azynctra.com",
      icon: Mail
    },
    {
      type: "Phone",
      value: "+94-72163 2131",
      icon: Phone
    },
    {
      type: "Address",
      value: "Colombo, Sri Lanka",
      icon: MapPin
    },
    {
      type: "Schedule Call",
      value: "Book a consultation",
      icon: Calendar
    }
  ];

  return (
    <section id="contact" className="py-24 bg-azynctra-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Have a question or want to work together? Reach out to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="p-6 border-border/40">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 rounded-lg bg-azynctra-primary/20 text-primary mr-4">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{item.type}</p>
                      <p className="text-foreground/70">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-foreground/60 mb-3">FOLLOW US</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Card className="p-6 border-border/40">
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
