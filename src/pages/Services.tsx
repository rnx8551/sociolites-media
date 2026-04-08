import { motion, useReducedMotion } from "framer-motion";
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

      {/* Redesigned HERO - Services Theme */}
      <header className="relative min-h-screen flex items-center overflow-hidden pt-14">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-50/50 to-background/80" />
        
        {/* Decorative blobs */}
        <div className="absolute top-32 right-[10%] w-72 h-72 bg-gradient-to-r from-peach to-coral blob-shape opacity-60 blur-xl animate-float" />
        <div className="absolute top-52 left-[5%] w-52 h-52 bg-gradient-to-r from-sky to-ocean blob-shape-2 opacity-50 blur-lg animate-float delay-1000" />
        <div className="absolute bottom-32 right-[20%] w-44 h-44 bg-lime/40 rounded-3xl opacity-60 blur-md animate-pulse" />
        <div className="absolute bottom-52 left-[15%] w-32 h-32 bg-gradient-to-r from-mint to-lime rounded-full opacity-70 animate-bounce" />

        <div className="relative z-20 section-padding w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="lg:pr-12"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-8">
                <span className="pill-badge bg-gradient-to-r from-peach to-coral text-primary-foreground inline-flex items-center gap-2 shadow-lg">
                  <Zap className="w-4 h-4" />
                  Our Core Services
                </span>
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] mb-6"
              >
                Comprehensive Services for{" "}
                <br className="hidden lg:block" />
                <span className="text-gradient-coral bg-clip-text relative inline-block">
                  Media & Social Growth
                  <svg className="absolute -bottom-4 left-0 w-full h-2" viewBox="0 0 200 12" fill="none">
                    <path d="M0 8C40 2 100 10 160 4C190 1 200 6 200 6" stroke="hsl(12 90% 62%)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
              >
                From social media mastery and content creation to performance ads and CRM automation. 
                Complete growth systems for ambitious media brands.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="#services"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-coral text-primary-foreground font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-card/80 backdrop-blur border-2 border-border font-bold text-lg hover:border-primary/50 hover:shadow-2xl transition-all"
                >
                  <PlayCircle size={20} className="text-primary ml-0.5" />
                  Book Free Call
                </a>
              </motion.div>

              {/* Social Proof Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-card/60 backdrop-blur">
                  <div className="w-12 h-12 rounded-xl bg-peach flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">8+</div>
                    <div className="text-sm text-muted-foreground">Services</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-card/60 backdrop-blur">
                  <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center">
                    <Film className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">500+</div>
                    <div className="text-sm text-muted-foreground">Campaigns</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-card/60 backdrop-blur">
                  <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">98%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Visual Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="blob-shape-3 overflow-hidden w-full aspect-[4/3] shadow-2xl rounded-3xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-peach/20 via-sky/10 to-ocean/20" />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-coral to-peach rounded-3xl flex items-center justify-center mb-6 shadow-2xl mx-auto">
                      <Smartphone className="w-16 h-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-4 text-3xl mb-4">
                        <Monitor className="text-sky" />
                        <PlayCircle className="text-lime w-12 h-12 animate-spin-slow" />
                        <TrendingUp className="text-coral" />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
                        Full-Stack Growth
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating service icons */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-ocean to-sky rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-12 left-12 w-16 h-16 bg-lime rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <Users className="w-7 h-7 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </header>

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
    </div>
  );
};

export default Services;
