import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-slide-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-muted-foreground">
                  By accessing or using the services provided by SureTouchLeads, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services. These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. Services Description
                </h2>
                <p className="text-muted-foreground mb-4">
                  SureTouchLeads provides call center services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Lead generation and qualification</li>
                  <li>Inbound and outbound calling services</li>
                  <li>Customer support solutions</li>
                  <li>Sales outsourcing services</li>
                  <li>Live call transfer services</li>
                  <li>VICIdial-based operations</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. User Responsibilities
                </h2>
                <p className="text-muted-foreground mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Use services only for lawful purposes</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not interfere with the proper functioning of our services</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Payment Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms for our services include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Payment is due according to the agreed-upon schedule in your service contract</li>
                  <li>All fees are non-refundable unless otherwise stated in writing</li>
                  <li>Late payments may incur additional fees and service suspension</li>
                  <li>We reserve the right to modify pricing with 30 days notice</li>
                  <li>All prices are in US Dollars unless otherwise specified</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Limitation of Liability
                </h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by applicable law, SureTouchLeads shall not be liable for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                  <li>Damages resulting from unauthorized access to your data</li>
                  <li>Any interruption or cessation of transmission to or from our services</li>
                  <li>Any bugs, viruses, or other harmful code transmitted through our services</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-muted-foreground">
                  The service and its original content, features, and functionality are and will remain the exclusive property of SureTouchLeads. Our services are protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Service Termination
                </h2>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Breach of these Terms and Conditions</li>
                  <li>Non-payment of fees</li>
                  <li>Conduct that may harm our business or reputation</li>
                  <li>Upon request by you</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  8. Governing Law
                </h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  10. Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <ul className="list-none text-muted-foreground space-y-2">
                  <li><strong>Email:</strong> connect@suretouchleads.net</li>
                  <li><strong>Phone:</strong> +1 (570) 560-6921</li>
                  <li><strong>Location:</strong> United States</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="default" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
