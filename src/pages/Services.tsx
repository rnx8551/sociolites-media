import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Film,
  MessageSquare,
  PlayCircle,
  Smartphone,
  Monitor,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

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

  useEffect(() => {
    document.title = "Services | Sociolites — Digital Marketing Solutions";
  }, []);

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
      <ScrollProgress />
      <Navbar />

      {/* SEO SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Sociolites",
          url: "https://sociolites.in/services",
          areaServed: ["Maharashtra", "Madhya Pradesh", "India", "Worldwide"],
          serviceType: "Digital Marketing",
          description: "Full-service digital marketing including SEO, paid ads, social media, content creation, branding and growth strategy.",
        })}
      </script>

      {<header className="relative min-h-screen flex items-center overflow-hidden pt-14">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-50/50 to-background/80" />

  {/* Glow blobs */}
  <div className="absolute top-32 right-[10%] w-72 h-72 bg-gradient-to-r from-peach to-coral blob-shape opacity-60 blur-xl animate-float" />
  <div className="absolute top-52 left-[5%] w-52 h-52 bg-gradient-to-r from-sky to-ocean blob-shape-2 opacity-50 blur-lg animate-float delay-1000" />

  <div className="relative z-20 section-padding w-full">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >

        {/* Badge */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <span className="pill-badge bg-gradient-to-r from-peach to-coral text-white shadow-lg">
            🚀 Growth-Focused Digital Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] mt-6 mb-6"
        >
          From Clicks to Clients —{" "}
          <span className="text-gradient-coral">
            We Build Your Growth Engine
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          className="text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed"
        >
          We combine SEO, paid ads, and content systems to turn your brand into a{" "}
          <span className="text-foreground font-semibold">
            predictable revenue machine
          </span>{" "}
          — not just likes and impressions.
        </motion.p>

        {/* Micro trust */}
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-sm text-muted-foreground mb-8"
        >
          Helping brands scale across Maharashtra & beyond • No long-term contracts
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-coral text-primary-foreground font-bold text-lg shadow-xl hover:scale-105 transition-all"
          >
            Get Free Growth Plan
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-card/80 backdrop-blur border-2 border-border font-semibold text-lg hover:border-primary/50 hover:shadow-xl transition-all"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-6"
        >
          {[
            { value: "3.2x ROI", label: "Avg Growth" },
            { value: "120+", label: "Brands Scaled" },
            { value: "< 90 Days", label: "Results" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-2xl bg-card/60 backdrop-blur">
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT - DASHBOARD UI */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        <div className="rounded-3xl bg-card border border-border shadow-2xl p-6 space-y-6">

          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold">Growth Dashboard</p>
              <p className="text-xs text-muted-foreground">Live Performance</p>
            </div>
            <span className="text-xs bg-green-500/10 text-green-500 px-3 py-1 rounded-full">
              ● Live
            </span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Traffic", value: "+240%" },
              { label: "Leads", value: "+180%" },
              { label: "Revenue", value: "+320%" },
            ].map((m) => (
              <div key={m.label} className="bg-background p-4 rounded-xl text-center">
                <div className="text-lg font-bold">{m.value}</div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Graph fake */}
          <div className="h-24 bg-gradient-to-r from-coral/20 via-ocean/20 to-lime/20 rounded-xl flex items-end px-2">
            <div className="w-2 h-6 bg-coral rounded mr-1" />
            <div className="w-2 h-10 bg-ocean rounded mr-1" />
            <div className="w-2 h-14 bg-lime rounded mr-1" />
            <div className="w-2 h-16 bg-coral rounded mr-1" />
            <div className="w-2 h-20 bg-ocean rounded" />
          </div>

          {/* Funnel */}
          <div className="text-xs text-muted-foreground text-center">
            Traffic → Leads → Customers
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-ocean rounded-xl flex items-center justify-center text-white shadow-lg animate-float">
          <TrendingUp />
        </div>

        <div className="absolute -bottom-6 left-10 w-14 h-14 bg-lime rounded-xl flex items-center justify-center text-white shadow-lg animate-bounce">
          <Users />
        </div>
      </motion.div>

    </div>
  </div>
</header>}

      {/* SOCIOLITES APPROACH */}
      <section className="section-padding bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto">

          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-coral mb-3">
              The Sociolites Approach
            </p>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Built for <span className="text-gradient-coral">Real Growth</span>, Not Vanity Metrics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every service is designed to drive measurable results — from visibility to revenue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Custom SEO Solutions",
                desc: "We dominate local and national search. Rank your brand for high-intent keywords across MH, MP & beyond.",
                img: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc",
              },
              {
                title: "Performance Marketing",
                desc: "Precision-targeted Meta & Google Ads optimized for results — not impressions.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
              },
              {
                title: "Social Media & Branding",
                desc: "High-impact content that converts casual users into loyal followers.",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              },
              {
                title: "IT & Digital Experience",
                desc: "UI/UX and tech solutions that act as your 24/7 digital salesman.",
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
              },
              {
                title: "Business Strategy",
                desc: "End-to-end consulting to build your marketing engine from scratch.",
                img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
              },
              {
                title: "Custom Targeting",
                desc: "We find your exact audience — metro cities or fast-growing markets.",
                img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden card-elevated"
              >
                {/* IMAGE */}
                <div className="absolute inset-0">
                  <img
                    src={`${item.img}?auto=format&fit=crop&w=600&q=75`}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <h2 id="services" className="text-4xl sm:text-5xl font-display font-bold mb-6">
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
      <WhatsAppButton />
    </div>
  );
};

export default Services;
