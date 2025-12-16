import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Privacy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-slide-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
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
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  At SureTouchLeads, we collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information (business name, industry, size)</li>
                  <li>Communication preferences and history</li>
                  <li>Information provided through our contact forms</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
                </p>
                <p className="text-muted-foreground">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>256-bit SSL encryption for data in transit</li>
                  <li>Encrypted storage for sensitive data</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Your Rights
                </h2>
                <p className="text-muted-foreground mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access: Request access to your personal data</li>
                  <li>Correction: Request correction of inaccurate data</li>
                  <li>Deletion: Request deletion of your personal data</li>
                  <li>Portability: Request transfer of your data</li>
                  <li>Opt-out: Unsubscribe from marketing communications</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Policy Updates
                </h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none text-muted-foreground space-y-2">
                  <li><strong>Email:</strong> faiyaz@suretouchleads.com</li>
                  <li><strong>Phone:</strong> +1 2482707522</li>
                  <li><strong>Location:</strong> Udyog Vihar 4, Near Airtel, 122015 Gurgaon</li>
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
