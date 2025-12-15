import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does SureTouchLeads offer?",
        answer: "SureTouchLeads offers a comprehensive range of call center services including inbound customer support, outbound sales calling, lead generation, live call transfers, B2B & B2C campaigns, VICIdial solutions, and custom campaign support.",
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including real estate, insurance, healthcare, e-commerce, financial services, education, marketing agencies, and solar & home services. We also offer custom solutions for industries not listed.",
      },
      {
        question: "Where is SureTouchLeads located?",
        answer: "SureTouchLeads is headquartered in the United States and provides services nationwide. We also support remote operations for many positions.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        question: "How quickly can you start a campaign?",
        answer: "Most campaigns can be launched within 1-2 weeks of contract signing. This includes time for agent training, script development, and system setup. Complex campaigns may require additional time.",
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, we offer 24/7 support options. We can customize operational hours to match your business needs, whether that's standard business hours, extended hours, or round-the-clock coverage.",
      },
      {
        question: "What technology platform do you use?",
        answer: "We primarily use VICIdial, an enterprise-grade predictive dialer platform. We also integrate with major CRM systems including Salesforce, HubSpot, Zoho, and custom solutions via API.",
      },
      {
        question: "Can you integrate with our existing CRM?",
        answer: "Yes, we can integrate with most major CRM platforms including Salesforce, HubSpot, Zoho, Pipedrive, and Microsoft Dynamics. We also support custom API integrations for proprietary systems.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    questions: [
      {
        question: "How is pricing structured?",
        answer: "Our pricing is customized based on your specific needs, including call volume, complexity, and service requirements. We offer various models including per-call, per-hour, and performance-based pricing. Contact us for a custom quote.",
      },
      {
        question: "What is the minimum contract length?",
        answer: "Contract terms vary based on the service and scope. We offer flexible arrangements from month-to-month to longer-term commitments. Longer commitments often come with more favorable pricing.",
      },
      {
        question: "Are there any setup fees?",
        answer: "Setup fees may apply depending on the complexity of your campaign, integration requirements, and customization needs. These are discussed transparently during the proposal process.",
      },
    ],
  },
  {
    category: "Quality & Compliance",
    questions: [
      {
        question: "How do you ensure call quality?",
        answer: "We maintain quality through comprehensive agent training, real-time monitoring, call recording and review, automated quality scoring, and continuous coaching. Regular performance reviews ensure consistent improvement.",
      },
      {
        question: "Are you compliant with TCPA and DNC regulations?",
        answer: "Yes, we strictly adhere to TCPA regulations and maintain updated DNC (Do Not Call) lists. Our systems automatically scrub lists against federal and state DNC registries before dialing.",
      },
      {
        question: "Is my data secure with SureTouchLeads?",
        answer: "Absolutely. We implement enterprise-grade security including 256-bit SSL encryption, PCI-DSS compliance, and optional HIPAA compliance. Regular security audits and strict access controls protect your data.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-card hover:bg-secondary/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 bg-secondary/30 text-muted-foreground">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-slide-up">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              FAQ
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="text-accent">Questions</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Find answers to common questions about our services, technology, pricing, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={category.category} className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
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
              Still Have Questions?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Our team is ready to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
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
