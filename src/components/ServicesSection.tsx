import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Megaphone, Palette, Search, BarChart3, Zap } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description: "Strategic campaigns across all major platforms that drive engagement and conversions.",
    accent: "from-primary to-cyan-400",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with data-driven SEO strategies that deliver lasting results.",
    accent: "from-secondary to-fuchsia-500",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "High-ROI PPC campaigns on Google, Meta, and emerging platforms.",
    accent: "from-primary to-emerald-400",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Craft memorable brand experiences that resonate with your target audience.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Transform raw data into actionable insights that fuel growth decisions.",
    accent: "from-primary to-blue-400",
  },
  {
    icon: Zap,
    title: "Content Strategy",
    description: "Compelling content that tells your brand story and drives measurable engagement.",
    accent: "from-secondary to-pink-500",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative glass-card p-8 hover-glow cursor-pointer overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
        <service.icon size={24} className="text-primary-foreground" />
      </div>

      <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-gradient transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed text-sm">
        {service.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Learn More
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mt-4">
            Services That <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            End-to-end digital marketing solutions designed to accelerate your growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
