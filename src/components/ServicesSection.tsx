import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Megaphone, Palette, Search, BarChart3, Video } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description: "Viral campaigns that make your brand the talk of every feed.",
    bgClass: "card-coral",
    iconBg: "bg-primary",
    emoji: "📱",
  },
  {
    icon: Search,
    title: "SEO Domination",
    description: "Own page one of Google with strategies that compound growth.",
    bgClass: "card-sky",
    iconBg: "bg-ocean",
    emoji: "🔍",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "Every dollar works harder with our precision-targeted campaigns.",
    bgClass: "card-mint",
    iconBg: "bg-lime",
    emoji: "📢",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Unforgettable visual identities that stop thumbs mid-scroll.",
    bgClass: "card-lavender",
    iconBg: "bg-secondary",
    emoji: "🎨",
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth",
    description: "Turn raw data into your competitive advantage.",
    bgClass: "card-coral",
    iconBg: "bg-primary",
    emoji: "📊",
  },
  {
    icon: Video,
    title: "Content Creation",
    description: "Thumb-stopping visuals and videos that audiences can't ignore.",
    bgClass: "card-sky",
    iconBg: "bg-ocean",
    emoji: "🎬",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-peach blob-shape opacity-40" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-sky blob-shape-2 opacity-30" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="pill-badge bg-sky text-ocean mb-4">✨ Our Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mt-4 tracking-tight">
            What We Do{" "}
            <span className="text-gradient-ocean">Best</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-lg">
            Full-spectrum digital marketing that turns brands into cultural moments.
          </p>
        </motion.div>

        {/* Services grid - unique bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group ${service.bgClass} p-7 cursor-pointer hover:scale-[1.02] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{service.emoji}</span>
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                Explore
                <span className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center text-xs">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
