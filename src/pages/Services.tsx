import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Film,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ----------------------------------
   Motion config (mobile optimized)
----------------------------------- */
const useFadeUp = () => {
  const reduce = useReducedMotion();
  return {
    initial: { opacity: 0, y: reduce ? 10 : 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0.4 : 0.7, ease: "easeOut" },
    viewport: { once: true, margin: "-80px" },
  };
};

const Services = () => {
  const fadeUp = useFadeUp();

  const services = [
    {
      icon: TrendingUp,
      title: "Social Media Management",
      tag: "Authority & Engagement",
      description:
        "We turn social platforms into predictable growth channels — not random posting calendars.",
      features: [
        "Strategic content planning",
        "Community & DM management",
        "Audience growth systems",
        "Monthly performance insights",
      ],
      color: "bg-coral",
      slug: "social-media-management",
    },
    {
      icon: Film,
      title: "Content Creation",
      tag: "Brand Visibility",
      description:
        "Scroll-stopping content engineered for attention, retention, and brand recall.",
      features: [
        "Reels & short-form video",
        "Creative direction",
        "High-conversion hooks",
        "Platform-native formats",
      ],
      color: "bg-ocean",
      slug: "content-creation",
    },
    {
      icon: BarChart3,
      title: "Performance Marketing",
      tag: "Revenue Systems",
      description:
        "Paid media engineered for conversions, scalability, and measurable ROI.",
      features: [
        "High-intent funnels",
        "Creative testing frameworks",
        "Real-time dashboards",
        "Profit-led optimization",
      ],
      color: "bg-lime",
      slug: "performance-marketing",
    },
    {
      icon: Users,
      title: "Lead Generation",
      tag: "Pipeline Growth",
      description:
        "Systems that consistently attract, qualify, and convert high-intent leads.",
      features: [
        "Lead funnels",
        "Landing pages",
        "Conversion optimization",
        "CRM-ready handoff",
      ],
      color: "bg-secondary",
      slug: "lead-generation",
    },
    {
      icon: Zap,
      title: "CRM & Automation",
      tag: "Retention & Scale",
      description:
        "Automated follow-ups and lifecycle systems that increase LTV and retention.",
      features: [
        "CRM setup",
        "Automation workflows",
        "Segmentation logic",
        "Customer journey mapping",
      ],
      color: "bg-peach",
      slug: "crm-automation",
    },
    {
      icon: MessageSquare,
      title: "Google & Meta Ads",
      tag: "Paid Growth",
      description:
        "Conversion-focused advertising across Google & Meta — optimized for efficiency.",
      features: [
        "Search & display ads",
        "Meta campaigns",
        "Conversion tracking",
        "Scaling playbooks",
      ],
      color: "bg-sky",
      slug: "paid-ads",
    },
    {
      icon: TrendingUp,
      title: "SEO & Website Optimization",
      tag: "Organic Growth",
      description:
        "SEO that drives qualified traffic and conversions — not vanity rankings.",
      features: [
        "Search intent mapping",
        "Technical SEO",
        "On-page optimization",
        "UX & CRO improvements",
      ],
      color: "bg-coral",
      slug: "seo-optimization",
    },
    {
      icon: Film,
      title: "Influencer Partnerships",
      tag: "Brand Trust",
      description:
        "Authentic influencer collaborations that convert attention into demand.",
      features: [
        "Creator sourcing",
        "Campaign execution",
        "Content coordination",
        "ROI tracking",
      ],
      color: "bg-ocean",
      slug: "influencer-marketing",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* SEO SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Your Agency Name",
          url: "https://yourdomain.com/services",
          areaServed: "Worldwide",
          serviceType: "Digital Marketing",
        })}
      </script>

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center">
        <div className="absolute top-24 right-[8%] w-64 h-64 bg-peach blob-shape opacity-60" />
        <div className="absolute top-40 left-[6%] w-40 h-40 bg-sky blob-shape-2 opacity-50" />

        <div className="relative z-10 section-padding w-full">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="mb-6">
              <span className="pill-badge bg-peach text-coral inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Services
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="text-5xl sm:text-6xl font-display font-extrabold mb-6"
            >
              Growth Systems for{" "}
              <span className="text-gradient-coral">Ambitious Brands</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              We design, execute, and scale digital marketing systems focused on
              revenue — not vanity metrics. 
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              What We Help You Win At
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modular services designed to scale together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.title}
                  href={`/services/${service.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <div className="card-elevated p-8 h-full border border-border hover:border-primary/40 transition-all relative">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {service.tag}
                    </span>

                    <div
                      className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center my-6 shadow-lg`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-8 text-sm font-medium">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span
                            className={`w-2 h-2 rounded-full ${service.color}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                      Explore Service
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-transparent to-ocean/10" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2 {...fadeUp} className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Let’s Build Your Growth Engine
          </motion.h2>
          <motion.p {...fadeUp} className="text-lg text-muted-foreground mb-8">
            Book a free strategy call to see if we’re the right fit.
          </motion.p>
          <motion.a
            {...fadeUp}
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform"
          >
            Book Strategy Call
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
