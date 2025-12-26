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

/* ===== CONTENT FROM index.html (EXACT TEXT) ===== */

const stats = [
  { value: "↓ 40–60%", label: "From carrier mix + AMD tuning" },
  { value: "2–4m", label: "Average on-bridge duration" },
  { value: "24/7", label: "with failover regions" },
  { value: "Real-time", label: "Power BI + warehouse" },
];

const services = [
  {
    icon: Headphones,
    title: "Voice Agent Implementation",
    description:
      "Design & build agents on Retell, Vapi, or LiveKit with SIP (Twilio/Plivo). Includes prompts, state, tool use, evals, and guardrails.",
  },
  {
    icon: Phone,
    title: "Warm Transfer Pipelines",
    description:
      "Bridge to human reps with context pass-through (CRM notes, lead source, last intent). Smart on-hold filler to keep customers engaged.",
  },
  {
    icon: TrendingUp,
    title: "Carrier Optimization",
    description:
      "Blend carrier routes to cut costs without hurting quality. Automatic retrial logic and short-call suppression to reduce waste.",
  },
  {
    icon: BarChart3,
    title: "Power BI Dashboards",
    description:
      "Live dashboards over your warehouse. Conversion funnels, agent KPIs, DID health, cost per qualified transfer.",
  },
  {
    icon: Shield,
    title: "Infra & DevOps",
    description:
      "Provision servers, APIs, and databases. Observability, incident response, and IaC.",
  },
  {
    icon: Target,
    title: "Quality & Compliance",
    description:
      "TCPA-aware dial strategies, opt-out management, PII redaction, audit-ready recordings.",
  },
];

const reasons = [
  "Warm transfers that keep the customer on the line 2+ minutes with smart bridging & context pass-through.",
  "Cost controls: Carrier selection, cacheable LLM prompts, short-call suppression, redial policy, concurrency caps, smart integration AI Agent.",
  "Compliance & reliability: TCPA-aware dial strategies, call recording gates, SIP failover, health checks.",
];

const pricing = [
  {
    plan: "Starter",
    price: "$2,500",
    desc: "Agent MVP for a single use case (2 weeks).",
    points: ["2 voice agent + cold transfer", "Inbound OR outbound", "Basic AMD", "Email support"],
  },
  {
    plan: "Growth",
    price: "$5,500 / month",
    desc: "Ongoing ops & iteration (min 3 months).",
    points: [
      "5 agents + warm transfer",
      "Carrier optimization",
      "Power BI dashboard",
      "Priority support",
    ],
  },
  {
    plan: "Scale",
    price: "Custom",
    desc: "Complex routing, high volume, strict SLAs.",
    points: [
      "Multi-region failover",
      "24/7 on-call",
      "Custom evals & QA",
      "Dedicated PM",
    ],
  },
];

const offers = [
  {
    title: "Free Audit",
    desc: "Cost & quality audit of your current setup (carriers, AMD, prompt, flows). 60–90 minutes. Deliverable: punchlist.",
  },
  {
    title: "Pilot Credit",
    desc: "$500 usage credit on your first month when you sign a 3-month Growth plan.",
  },
  {
    title: "Migration Help",
    desc: "No-cost migration from single carrier to another (Plivo to Twilio, Any) – under Growth plan",
  },
];

const stack = [
  "Retell, Vapi, custom LiveKit (SIP/WebRTC)",
  "Twilio, Plivo, BYOC SIP trunks",
  "GPT/Claude, local (whisperX, faster-whisper, NeMo TTS)",
  "Power BI, dbt, Postgres, MongoDb-preferred",
  "Node/TS, Python, Docker, Terraform",
  "Grafana, Prometheus, OpenTelemetry",
  "DNC, consent capture, PII redaction",
  "Runbooks, SLOs, on-call 24/7 (Scale)",
];

const caseStudies = [
  {
    title: "Home Warranty – Outbound warm transfers",
    result:
      "2.8m avg warm hold, +19% HA%, -22% telco cost in 5 weeks by AMD tuning + route mix.",
  },
  {
    title: "eCom Support – 24/7 voice concierge",
    result:
      "Resolution rate +14%, AHT -17% with agent assist + summaries.",
  },
  {
    title: "B2B SaaS – Inbound triage",
    result:
      "Cut missed calls by 41% with queue awareness + callback promises.",
  },
];

export default function AiProduct() {
  return (
    <Layout>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-primary text-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12">

          <div>
            <span className="bg-accent text-black px-3 py-1 rounded-full">
              Realtime voice agents • Warm transfers • Analytics
            </span>

            <h1 className="text-5xl font-bold mt-6">
              Ship production-ready AI agents that callers love — and finance approves.
            </h1>

            <p className="mt-4 text-white/80 max-w-xl">
              Custom voice agents with Retell/Vapi/LiveKit, SIP via Twilio & Plivo, AMD & voicemail,
              accent softening, warm transfers to humans, plus Power BI for true business visibility,
              track all KPIs Metric.
            </p>

            <div className="mt-6 flex gap-4">
              <Button variant="hero" asChild>
                <Link to="/contact">Start a Project <ArrowRight /></Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <a
                  href="#pricingSection"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById('pricingSection');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  See Pricing
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-4 mt-10 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl text-accent font-bold">{s.value}</div>
                  <div className="text-xs text-white/70">{s.label}</div>
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
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center text-4xl font-bold mb-12">
            Services
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-6 rounded-xl shadow">
                <s.icon className="text-primary w-10 h-10 mb-4" />
                <h3 className="font-semibold text-xl">{s.title}</h3>
                <p className="text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHY */}
      <section className="section-padding bg-secondary">
        <div className="container-custom grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose AiGen</h2>

            {reasons.map((r, i) => (
              <div key={i} className="flex gap-2 mb-3">
                <CheckCircle className="text-accent" />
                <p>{r}</p>
              </div>
            ))}
          </div>
          <div className="bg-card p-8 rounded-xl shadow">
            <Users className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold">Enterprise Infrastructure</h3>
            <p className="text-muted-foreground">Failover architecture and uptime guarantees.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-padding" id="pricingSection">
        <div className="container-custom text-center mb-12">
          <h2 className="text-4xl font-bold">Pricing</h2>
          <p className="text-muted-foreground">
            Straightforward, project-based or monthly. Cancel anytime.
          </p>
        </div>

        <div className="container-custom grid md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div key={p.plan} className="bg-card p-6 shadow rounded-xl">
              <h3 className="text-2xl font-bold">{p.plan}</h3>
              <div className="text-primary text-3xl mt-2">{p.price}</div>
              <p className="mt-2">{p.desc}</p>
              <ul className="mt-4 list-disc pl-5 text-muted-foreground">
                {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center mb-10">
          <h2 className="text-4xl font-bold">Current Offers</h2>
        </div>
        <div className="container-custom grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <div key={i} className="p-6 bg-card shadow rounded-xl">
              <h3 className="font-semibold">{o.title}</h3>
              <p className="text-muted-foreground mt-2">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="section-padding">
        <div className="container-custom text-center mb-10">
          <h2 className="text-4xl font-bold">Preferred Stack</h2>
        </div>
        <div className="container-custom grid md:grid-cols-4 gap-4">
          {stack.map((t, i) => (
            <div key={i} className="bg-muted rounded-full px-4 py-2 text-center">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center mb-10">
          <h2 className="text-4xl font-bold">Case Studies</h2>
        </div>
        <div className="container-custom grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <div key={i} className="p-6 bg-card shadow rounded-xl">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-accent mt-3">{c.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold">
          Ready to ship your AI voice system?
        </h2>
        <p className="mt-4 text-white/70">
          Tell me a bit about your use case. I’ll respond within one business day.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="hero" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
          <Button variant="heroOutline" asChild>
            <a href="tel:+1234567890">Call Now</a>
          </Button>
        </div>
      </section>

    </Layout>
  );
}
