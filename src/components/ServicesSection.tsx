import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Megaphone,
  Palette,
  Search,
  BarChart3,
  Video,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description:
      "Data-backed social media strategies and viral campaigns that build authority, engagement, and conversions.",
    bgClass: "card-coral",
    iconBg: "bg-primary",
    emoji: "📱",
  },
  {
    icon: Search,
    title: "SEO & Organic Growth",
    description:
      "Search engine optimization that helps your brand rank higher, attract qualified traffic, and scale sustainably.",
    bgClass: "card-sky",
    iconBg: "bg-ocean",
    emoji: "🔍",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising (PPC)",
    description:
      "High-ROI paid media campaigns across Google, Meta, and social platforms — optimized for performance.",
    bgClass: "card-mint",
    iconBg: "bg-lime",
    emoji: "📢",
  },
  {
    icon: Palette,
    title: "Brand Identity & Design",
    description:
      "Distinctive brand systems and visual identities that make your business instantly recognizable.",
    bgClass: "card-lavender",
    iconBg: "bg-secondary",
    emoji: "🎨",
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth Strategy",
    description:
      "Advanced analytics, dashboards, and insights that turn raw data into actionable growth decisions.",
    bgClass: "card-coral",
    iconBg: "bg-primary",
    emoji: "📊",
  },
  {
    icon: Video,
    title: "Content & Video Production",
    description:
      "Scroll-stopping visuals, reels, and videos engineered to capture attention and drive engagement.",
    bgClass: "card-sky",
    iconBg: "bg-ocean",
    emoji: "🎬",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      aria-label="Digital marketing services"
      className="relative section-padding overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-peach blob-shape opacity-40 blur-2xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky blob-shape-2 opacity-30 blur-2xl" />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="pill-badge bg-sky text-ocean mb-4">
            ✨ Our Digital Marketing Services
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mt-4 tracking-tight">
            Growth-Focused{" "}
            <span className="text-gradient-ocean">Marketing Solutions</span>
          </h2>

          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg leading-relaxed">
            We deliver full-service digital marketing solutions designed to increase
            visibility, engagement, and revenue for modern brands.
          </p>

          {/* Hidden SEO support */}
          <p className="sr-only">
            Our services include SEO, social media marketing, paid advertising,
            branding, content creation, analytics, and growth strategy for businesses
            looking to scale online.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className={`group relative ${service.bgClass} p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:shadow-[var(--shadow-elevated)] ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <service.icon size={24} className="text-primary-foreground" />
                  </div>
                  <span className="text-3xl transition-transform duration-300 group-hover:scale-125">
                    {service.emoji}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Learn more
                  <span className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center text-xs">
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
