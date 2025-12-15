import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  Phone,
  TrendingUp,
  Users,
  Zap,
  Target,
  RefreshCw,
  Settings,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Inbound Customer Support",
    description: "Professional customer service representatives handling inquiries, complaints, and support requests with empathy and efficiency.",
    features: [
      "24/7 availability for uninterrupted support",
      "Multi-channel support (voice, email, chat)",
      "First-call resolution focused",
      "Customer satisfaction tracking",
      "Escalation management protocols",
    ],
  },
  {
    icon: Phone,
    title: "Outbound Sales Calling",
    description: "Strategic outbound campaigns designed to generate qualified leads and close sales for your business.",
    features: [
      "Targeted prospect outreach",
      "Cold calling campaigns",
      "Appointment setting services",
      "Follow-up call campaigns",
      "Sales script optimization",
    ],
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Comprehensive lead generation services that fill your pipeline with high-quality prospects ready to convert.",
    features: [
      "B2B and B2C lead generation",
      "Lead qualification and scoring",
      "Database building and enrichment",
      "Multi-touch campaigns",
      "Real-time lead delivery",
    ],
  },
  {
    icon: RefreshCw,
    title: "Live Call Transfers",
    description: "Real-time warm transfers connecting pre-qualified prospects directly with your sales team for immediate engagement.",
    features: [
      "Pre-qualified prospect verification",
      "Warm transfer protocols",
      "Real-time availability matching",
      "Custom qualification criteria",
      "Transfer success tracking",
    ],
  },
  {
    icon: Users,
    title: "B2B & B2C Campaigns",
    description: "Tailored calling campaigns for both business and consumer markets, optimized for your specific industry.",
    features: [
      "Industry-specific scripting",
      "Decision-maker targeting",
      "Consumer outreach programs",
      "Cross-sell and upsell campaigns",
      "Market research calls",
    ],
  },
  {
    icon: Zap,
    title: "VICIdial Solutions",
    description: "Advanced predictive dialing technology maximizing agent productivity and campaign efficiency.",
    features: [
      "Predictive, preview, and manual dialing",
      "Real-time campaign monitoring",
      "Agent performance dashboards",
      "Call recording and quality assurance",
      "Custom reporting and analytics",
    ],
  },
  {
    icon: Target,
    title: "Multi-Outbound Dialing",
    description: "High-volume outbound solutions capable of handling large-scale campaigns with precision and consistency.",
    features: [
      "Scalable dialing capacity",
      "Multiple campaign management",
      "List management and scrubbing",
      "DNC compliance",
      "Campaign A/B testing",
    ],
  },
  {
    icon: Settings,
    title: "Custom Campaign Support",
    description: "Bespoke solutions tailored to your unique business requirements and communication objectives.",
    features: [
      "Custom script development",
      "Dedicated campaign managers",
      "Performance optimization",
      "Flexible engagement models",
      "Integration support",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-slide-up">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Call Center{" "}
              <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From lead generation to customer support, we deliver end-to-end communication services that drive measurable results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-slide-up`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-accent-foreground" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="default" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`p-8 rounded-2xl ${
                    index % 2 === 0 ? "bg-secondary" : "bg-primary text-primary-foreground"
                  }`}>
                    <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <service.icon className={`w-24 h-24 ${
                        index % 2 === 0 ? "text-primary/30" : "text-primary-foreground/30"
                      }`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Deliver Results
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology that ensures success for every campaign.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "We analyze your business needs and define clear objectives" },
              { step: "02", title: "Strategy", description: "Custom campaign design tailored to your target audience" },
              { step: "03", title: "Execution", description: "Launch with trained agents and optimized scripts" },
              { step: "04", title: "Optimize", description: "Continuous improvement based on real-time data" },
            ].map((item, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl font-bold text-accent-foreground">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
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
