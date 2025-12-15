import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every interaction is crafted with meticulous attention to detail, ensuring optimal outcomes for our clients.",
  },
  {
    icon: Heart,
    title: "Customer-First",
    description: "We place your customers at the heart of everything we do, building relationships that last.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every call, every campaign, and every partnership we form.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, aligning our goals with yours for mutual success.",
  },
];

const milestones = [
  { year: "Founded", title: "Company Established", description: "SureTouchLeads was founded with a vision to transform business communication." },
  { year: "Growth", title: "Rapid Expansion", description: "Expanded our team and capabilities to serve clients across multiple industries." },
  { year: "Innovation", title: "Technology Integration", description: "Implemented VICIdial and advanced CRM integrations for enhanced performance." },
  { year: "Today", title: "Industry Leader", description: "Recognized as a trusted partner for performance-driven communication services." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-slide-up">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Where Communication{" "}
              <span className="text-accent">Meets Precision</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              SureTouchLeads is a leading force in the call center industry, delivering innovative and tailored solutions for businesses seeking excellence in customer communication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Redefining Industry Benchmarks
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Welcome to SureTouchLeads, where communication meets precision. As a leading force in the call center industry, we deliver innovative and tailored solutions for businesses seeking excellence in customer service, lead generation, and sales support.
              </p>
              <p className="text-muted-foreground mb-6">
                Our commitment goes beyond interactions — we architect seamless communication experiences. Using advanced technology and customer-first strategies, we empower businesses to connect, convert, and grow.
              </p>
              <p className="text-muted-foreground mb-8">
                We have built SureTouchLeads to redefine industry benchmarks and become a trusted partner in performance-driven communication services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" asChild>
                  <Link to="/services">
                    Our Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    index % 2 === 0 ? "bg-card shadow-custom-md" : "bg-primary text-primary-foreground"
                  } ${index === 1 ? "mt-8" : ""}`}
                >
                  <span className={`text-sm font-medium ${index % 2 === 0 ? "text-accent" : "text-accent"}`}>
                    {milestone.year}
                  </span>
                  <h4 className={`font-display font-semibold mt-2 mb-2 ${
                    index % 2 === 0 ? "text-foreground" : ""
                  }`}>
                    {milestone.title}
                  </h4>
                  <p className={`text-sm ${
                    index % 2 === 0 ? "text-muted-foreground" : "text-primary-foreground/80"
                  }`}>
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card rounded-2xl shadow-custom-md animate-slide-up">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To empower businesses with innovative communication solutions that drive growth, enhance customer relationships, and deliver measurable results. We are committed to being the trusted partner that helps our clients succeed in their markets.
              </p>
            </div>
            
            <div className="p-8 bg-primary rounded-2xl text-primary-foreground animate-slide-up animation-delay-200">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/80 text-lg">
                To be the global leader in performance-driven call center services, recognized for our innovation, reliability, and unwavering commitment to client success. We envision a world where every business has access to world-class communication solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values shape every interaction and decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 shadow-custom-sm hover:shadow-custom-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Commitment
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Success Is Our Priority
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Dedicated account management for personalized service",
                "Transparent reporting and real-time analytics",
                "Continuous training and development for our agents",
                "Flexible scaling to meet your business demands",
                "Strict quality assurance protocols",
                "Compliance with industry regulations and standards",
                "Regular performance reviews and optimization",
                "Proactive communication and support",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Partner With Us Today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Experience the SureTouchLeads difference. Let us help you transform your customer communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
