import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Database,
  Shield,
  BarChart3,
  Headphones,
  Settings,
  Cloud,
  Lock,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";

const technologies = [
  {
    icon: Zap,
    title: "VICIdial Platform",
    description: "Enterprise-grade predictive dialer platform that maximizes agent productivity and campaign performance.",
    features: [
      "Predictive, progressive, and preview dialing modes",
      "Inbound/outbound/blended campaign support",
      "Real-time agent monitoring and coaching",
      "Customizable disposition codes",
      "Automated call distribution (ACD)",
    ],
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "Seamless integration with leading CRM platforms to streamline workflows and enhance data management.",
    features: [
      "Salesforce, HubSpot, Zoho integration",
      "Real-time data synchronization",
      "Custom API integrations",
      "Automatic lead population",
      "Activity logging and tracking",
    ],
  },
  {
    icon: Settings,
    title: "Advanced Dialing Tools",
    description: "Sophisticated dialing technology that increases contact rates and reduces idle time.",
    features: [
      "Smart call routing algorithms",
      "Local presence dialing",
      "Answering machine detection",
      "Call scheduling and callbacks",
      "Multi-line dialing capabilities",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance Systems",
    description: "Comprehensive QA tools to maintain high standards and continuously improve performance.",
    features: [
      "Call recording and playback",
      "Live call monitoring",
      "Automated scoring systems",
      "Agent performance analytics",
      "Training and coaching tools",
    ],
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description: "Enterprise-level security protecting your data and ensuring compliance with industry standards.",
    features: [
      "256-bit SSL encryption",
      "PCI-DSS compliance",
      "HIPAA compliant options",
      "Redundant data centers",
      "Regular security audits",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Real-time dashboards and detailed reports providing actionable insights for optimization.",
    features: [
      "Real-time campaign dashboards",
      "Custom report generation",
      "KPI tracking and alerts",
      "Historical trend analysis",
      "ROI measurement tools",
    ],
  },
];

const integrations = [
  "Salesforce",
  "HubSpot",
  "Zoho CRM",
  "Pipedrive",
  "Microsoft Dynamics",
  "Freshsales",
  "Close.com",
  "Custom APIs",
];

export default function Technology() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-slide-up">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Our Technology
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Powered by{" "}
              <span className="text-accent">Advanced Technology</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We leverage cutting-edge call center technology to deliver superior performance, security, and insights for your campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Technology Stack
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              Our technology infrastructure is built for reliability, scalability, and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.title}
                className="p-6 bg-card rounded-xl border border-border shadow-custom-sm hover:shadow-custom-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <tech.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {tech.description}
                </p>
                <ul className="space-y-2">
                  {tech.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VICIdial Feature */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                VICIdial Experts
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Industry-Leading{" "}
                <span className="text-primary">Dialing Technology</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                VICIdial is an open-source contact center solution that powers millions of calls worldwide. Our expert team has optimized this platform to deliver exceptional performance for our clients.
              </p>
              <p className="text-muted-foreground mb-8">
                With predictive dialing, real-time monitoring, and comprehensive reporting, VICIdial enables us to maximize contact rates while maintaining the highest quality standards.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "300%", label: "Increase in productivity" },
                  { value: "50%", label: "Reduction in idle time" },
                  { value: "99.9%", label: "System uptime" },
                  { value: "Real-time", label: "Campaign monitoring" },
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg shadow-custom-sm">
                    <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="p-8 bg-primary rounded-2xl text-primary-foreground">
                <Zap className="w-16 h-16 mb-6 text-accent" />
                <h3 className="font-display text-2xl font-bold mb-4">VICIdial Features</h3>
                <ul className="space-y-3">
                  {[
                    "Predictive, progressive, and preview dialing",
                    "Inbound queue management with skills-based routing",
                    "Real-time agent and campaign monitoring",
                    "Automated call recording and quality scoring",
                    "Comprehensive reporting and analytics",
                    "DNC list management and compliance tools",
                    "CRM integration capabilities",
                    "Multi-tenant architecture for security",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Integrations
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seamless CRM Integration
            </h2>
            <p className="text-muted-foreground text-lg">
              We integrate with the tools you already use to ensure smooth workflows and data synchronization.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <div
                key={integration}
                className="px-6 py-3 bg-card rounded-lg border border-border shadow-custom-sm hover:shadow-custom-md hover:border-primary/30 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium text-foreground">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Security & Compliance
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Data, Protected
              </h2>
              <p className="text-muted-foreground text-lg">
                We take security seriously with enterprise-grade protection and compliance measures.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lock,
                  title: "Data Encryption",
                  description: "256-bit SSL encryption for all data in transit and at rest",
                },
                {
                  icon: Shield,
                  title: "Compliance",
                  description: "PCI-DSS, HIPAA, and TCPA compliant operations",
                },
                {
                  icon: Cloud,
                  title: "Redundancy",
                  description: "Multiple data centers with automatic failover",
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-xl shadow-custom-md text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
              Experience Our Technology in Action
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Schedule a demo to see how our advanced technology can transform your campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+15705606921">
                  <Phone className="w-5 h-5" />
                  +1 (570) 560-6921
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
