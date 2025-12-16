import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Shield,
  Heart,
  ShoppingCart,
  DollarSign,
  GraduationCap,
  Megaphone,
  Sun,
  ArrowRight,
  Phone,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Generate qualified buyer and seller leads, schedule property viewings, and nurture prospects through the sales funnel.",
    services: ["Lead generation", "Appointment setting", "Follow-up calls", "Market surveys"],
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Connect with potential policyholders, generate insurance leads, and support customer retention campaigns.",
    services: ["Policy renewals", "Claims support", "Lead qualification", "Cross-selling"],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Patient outreach, appointment reminders, health surveys, and compassionate customer support services.",
    services: ["Appointment scheduling", "Patient follow-ups", "Satisfaction surveys", "Care coordination"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Customer support, order inquiries, product information, and proactive outreach for online retailers.",
    services: ["Order support", "Product inquiries", "Returns processing", "Customer retention"],
  },
  {
    icon: DollarSign,
    title: "Financial Services",
    description: "Lead generation for financial products, customer verification, and account management support.",
    services: ["Account services", "Loan inquiries", "Payment reminders", "Fraud prevention"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Student enrollment support, information requests, and alumni engagement campaigns.",
    services: ["Enrollment calls", "Information sessions", "Student support", "Alumni outreach"],
  },
  {
    icon: Megaphone,
    title: "Marketing Agencies",
    description: "White-label call center services to extend your agency's capabilities and deliver results for clients.",
    services: ["Lead generation", "Survey campaigns", "Telemarketing", "Data collection"],
  },
  {
    icon: Sun,
    title: "Solar & Home Services",
    description: "Generate qualified leads for solar installations, home improvement, and service appointments.",
    services: ["Lead generation", "Appointment setting", "Customer follow-ups", "Quote requests"],
  },
];

export default function Industries() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-slide-up">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Industries We Serve
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Industry-Specific{" "}
              <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We understand the unique challenges of different industries and deliver tailored call center solutions that address your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 shadow-custom-sm hover:shadow-custom-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.services.map((service, i) => (
                    <span
                      key={i}
                      className="inline-block mr-2 mb-2 px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Industry Expertise
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Industry-Specific{" "}
                <span className="text-primary">Call Center Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Generic call center services often fall short of delivering optimal results. Our industry-focused approach ensures agents understand your market, speak your language, and deliver outcomes that matter.
              </p>
              
              <div className="space-y-4">
                {[
                  "Agents trained in industry terminology and best practices",
                  "Compliance with industry-specific regulations",
                  "Scripts optimized for your target audience",
                  "KPIs aligned with industry benchmarks",
                  "Integration with industry-standard tools and CRMs",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent-foreground text-sm font-bold">✓</span>
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              <div className="p-6 bg-card rounded-xl shadow-custom-md">
                <div className="text-4xl font-display font-bold text-primary mb-2">8+</div>
                <p className="text-muted-foreground">Industries Served</p>
              </div>
              <div className="p-6 bg-primary rounded-xl text-primary-foreground">
                <div className="text-4xl font-display font-bold mb-2">500+</div>
                <p className="text-primary-foreground/80">Happy Clients</p>
              </div>
              <div className="p-6 bg-accent rounded-xl text-accent-foreground">
                <div className="text-4xl font-display font-bold mb-2">99%</div>
                <p className="text-accent-foreground/80">Satisfaction Rate</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-custom-md">
                <div className="text-4xl font-display font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We work with businesses across all sectors. Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Discuss Your Needs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+15705606921">
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
