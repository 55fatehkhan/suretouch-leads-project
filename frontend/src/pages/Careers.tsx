import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Clock,
  Award,
  ArrowRight,
  MapPin,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career paths with continuous learning and development programs.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive team environment.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive benefits package including health insurance options.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Various shift options to support work-life balance.",
  },
  {
    icon: Award,
    title: "Recognition Programs",
    description: "Performance bonuses and employee recognition initiatives.",
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    description: "Training programs and certifications to advance your career.",
  },
];

const openings = [
  {
    title: "Customer Service Representative",
    department: "Operations",
    location: "Remote / USA",
    type: "Full-time",
    description: "Handle inbound customer inquiries and provide exceptional support.",
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote / USA",
    type: "Full-time",
    description: "Generate qualified leads through outbound calling campaigns.",
  },
  {
    title: "Team Lead",
    department: "Operations",
    location: "Remote / USA",
    type: "Full-time",
    description: "Lead and mentor a team of customer service representatives.",
  },
  {
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "Remote / USA",
    type: "Full-time",
    description: "Monitor calls and ensure quality standards are maintained.",
  },
];

export default function Careers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-slide-up">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Careers
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Join Our{" "}
              <span className="text-accent">Growing Team</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Build your career with SureTouchLeads. We're looking for talented individuals who are passionate about delivering exceptional customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Join Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits of Working at SureTouchLeads
            </h2>
            <p className="text-muted-foreground text-lg">
              We invest in our team members because we know that great employees create exceptional customer experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 bg-card rounded-xl border border-border shadow-custom-sm hover:shadow-custom-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Open Positions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Opportunities
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our current openings and find the perfect role for you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border shadow-custom-sm hover:shadow-custom-md hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        <Briefcase className="w-3 h-3" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="default" asChild>
                    <Link to="/contact">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
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
              Don't See the Right Position?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Submit Your Resume
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
