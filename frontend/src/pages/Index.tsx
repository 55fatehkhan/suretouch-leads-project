import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Users,
  TrendingUp,
  Headphones,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  BarChart3,
} from "lucide-react";
import heroImage from "@/assets/hero-call-center.jpg";

const services = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 inbound support with trained professionals delivering exceptional customer experiences.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Strategic outbound campaigns that convert prospects into qualified leads for your business.",
  },
  {
    icon: Users,
    title: "Sales Outsourcing",
    description: "Expert sales teams driving revenue growth through B2B and B2C calling campaigns.",
  },
  {
    icon: Phone,
    title: "Live Call Transfer",
    description: "Real-time warm transfers connecting prospects directly with your sales team.",
  },
  {
    icon: Zap,
    title: "VICIdial Solutions",
    description: "Advanced predictive dialing technology maximizing agent productivity and call efficiency.",
  },
  {
    icon: Target,
    title: "Multi-Outbound Dialing",
    description: "Scalable outbound solutions handling high-volume campaigns with precision.",
  },
];

const whyChooseUs = [
  {
    title: "AI Voice Agents",
    description: "Human-like conversational AI to handle inbound and outbound calls automatically.",
  },
  {
    title: "Smart Warm Transfers",
    description: "AI transfers high-intent callers to live agents with context in real-time.",
  },
  {
    title: "AI Lead Qualification",
    description: "AI qualifies leads before they reach your sales agents.",
  },
  {
    title: "Conversation Intelligence",
    description: "Real-time analytics for conversations, conversion rate, and customer intent.",
  },
  {
    title: "Compliance Engine",
    description: "Built-in DNC, call recording and consent automation.",
  },
  {
    title: "24/7 AI Operations",
    description: "AI agents operate continuously without downtime.",
  },
];

const stats = [
  { value: "100M+", label: "Calls Handled" },
  { value: "100+", label: "Happy Clients" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const testimonials = [
  {
    name: "Michael Roberts",
    role: "CEO, TechStart Inc",
    content: "SureTouchLeads transformed our lead generation process. Their team consistently delivers high-quality prospects that convert.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, GrowthCo",
    content: "The professionalism and dedication of SureTouchLeads has made them an invaluable partner for our outbound campaigns.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Operations Manager, ServicePro",
    content: "Their customer support team handles our overflow calls seamlessly. Our customer satisfaction scores have never been higher.",
    rating: 5,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional call center team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
                <span className="text-sm font-medium">Performance-Driven Communication</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Where Communication{" "}
                <span className="text-accent">Meets Precision</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Leading force in the call center industry delivering innovative and tailored solutions for businesses seeking excellence in customer communication.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="font-display text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block animate-slide-in-right animation-delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
                <img
                  src={heroImage}
                  alt="Professional call center operations"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Call Center Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From lead generation to customer support, we deliver end-to-end communication services that drive results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 shadow-custom-sm hover:shadow-custom-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Partner in{" "}
                <span className="text-primary">Communication Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We go beyond interactions — we architect seamless communication experiences. Using advanced technology and customer-first strategies, we empower businesses to connect, convert, and grow.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button variant="default" size="lg" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              <div className="space-y-4">
                <div className="p-6 bg-card rounded-xl shadow-custom-md">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-display font-semibold text-foreground mb-2">Secure Operations</h4>
                  <p className="text-sm text-muted-foreground">Enterprise-grade security protecting your data</p>
                </div>
                <div className="p-6 bg-primary rounded-xl text-primary-foreground">
                  <BarChart3 className="w-10 h-10 mb-4" />
                  <h4 className="font-display font-semibold mb-2">Data-Driven Results</h4>
                  <p className="text-sm text-primary-foreground/80">Analytics and reporting for informed decisions</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 bg-accent rounded-xl text-accent-foreground">
                  <Clock className="w-10 h-10 mb-4" />
                  <h4 className="font-display font-semibold mb-2">Always Available</h4>
                  <p className="text-sm text-accent-foreground/80">24/7/365 support for your business</p>
                </div>
                <div className="p-6 bg-card rounded-xl shadow-custom-md">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-display font-semibold text-foreground mb-2">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Trained professionals delivering excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from businesses that have transformed their communication with SureTouchLeads.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border shadow-custom-sm animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Customer Communication?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join hundreds of businesses that trust SureTouchLeads for their call center needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+12482707522">
                  <Phone className="w-5 h-5" />
                  +1 2482707522
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
