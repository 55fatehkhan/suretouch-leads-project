import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  TabletSmartphone,
  Apple,
  Cpu,
  Link2,
  Layers,
  Heart,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Play,
  Users,
  Zap,
  Code2,
  Shield,
  Clock,
  Headphones,
  ArrowRight,
  Phone,
} from "lucide-react";
import techHeroImage from "@/assets/tech-hero-developers.jpg";

const services = [
  {
    icon: Smartphone,
    title: "React Native Development",
    description: "Build cross-platform mobile apps with native performance using React Native framework for iOS and Android.",
  },
  {
    icon: TabletSmartphone,
    title: "Android App Development",
    description: "Custom Android applications built with Kotlin and Java, optimized for all device sizes and versions.",
  },
  {
    icon: Apple,
    title: "iPhone (iOS) App Development",
    description: "Native iOS applications using Swift, designed for seamless user experiences on iPhone and iPad.",
  },
  {
    icon: Cpu,
    title: "IoT App Development",
    description: "Connected device solutions that bridge hardware and software for smart homes, industries, and wearables.",
  },
  {
    icon: Link2,
    title: "Blockchain App Development",
    description: "Decentralized applications, smart contracts, and Web3 solutions built on leading blockchain platforms.",
  },
  {
    icon: Layers,
    title: "Flutter App Development",
    description: "Beautiful, natively compiled applications from a single codebase using Google's Flutter framework.",
  },
];

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant medical apps and health management systems",
  },
  {
    icon: DollarSign,
    title: "Fintech",
    description: "Secure financial applications and digital banking solutions",
  },
  {
    icon: ShoppingCart,
    title: "mCommerce",
    description: "Mobile commerce platforms with seamless payment integration",
  },
  {
    icon: GraduationCap,
    title: "e-Learning",
    description: "Interactive educational platforms and learning management systems",
  },
  {
    icon: Play,
    title: "OTT Platforms",
    description: "Video streaming and media delivery applications",
  },
  {
    icon: Users,
    title: "Social Networking",
    description: "Community-driven social platforms and networking apps",
  },
  {
    icon: Zap,
    title: "On-Demand Solutions",
    description: "Real-time service delivery and booking applications",
  },
];

const whyChooseUs = [
  {
    icon: Code2,
    title: "Experienced Developers",
    description: "Our team of 50+ senior developers brings expertise across all major platforms and technologies.",
  },
  {
    icon: Zap,
    title: "Agile Development Process",
    description: "Iterative development with sprint cycles ensuring transparency and rapid delivery.",
  },
  {
    icon: Shield,
    title: "Scalable & Secure Solutions",
    description: "Enterprise-grade security and architecture built to scale with your business growth.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% on-time delivery rate with clear milestones and consistent communication.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description: "Dedicated support and maintenance packages to keep your applications running smoothly.",
  },
];

export default function Technology() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={techHeroImage}
            alt="Developers working in modern office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl animate-slide-up">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-accent/30">
              Technology & Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Build Powerful Digital Solutions with Our{" "}
              <span className="text-accent">Technology Expertise</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We design, develop, and scale secure digital products for startups and enterprises worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+15705606921">
                  <Phone className="w-5 h-5" />
                  +1 (570) 560-6921
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Development Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive mobile and web development solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 bg-card rounded-2xl border border-border shadow-custom-sm hover:shadow-custom-lg hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-28 gradient-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
              Industries
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Domain expertise across multiple sectors to deliver industry-specific solutions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="group p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/10 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <industry.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Your Trusted Technology Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We combine technical excellence with business acumen to deliver solutions that drive real results. Our proven track record spans over 500+ successful projects worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Projects Delivered" },
                  { value: "50+", label: "Expert Developers" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "10+", label: "Years Experience" },
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-xl border border-border">
                    <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4 animate-slide-in-right">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 bg-secondary rounded-xl border border-border hover:border-primary/30 hover:shadow-custom-md transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss your project and create a roadmap for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+15705606921">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
