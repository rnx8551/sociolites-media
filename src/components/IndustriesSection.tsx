import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShoppingBag,
  Building2,
  Stethoscope,
  Rocket,
  Laptop,
  GraduationCap,
  Diamond,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-Commerce & D2C",
    description:
      "Scaling online stores through performance ads, CRO, and retention-focused campaigns.",
    gradient: "from-coral to-pink-500",
  },
  {
    icon: Building2,
    title: "Real Estate & Finance",
    description:
      "High-intent lead generation strategies with compliance-first messaging.",
    gradient: "from-sky to-ocean",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    description:
      "Trust-driven branding and patient acquisition with ethical marketing.",
    gradient: "from-mint to-green-500",
  },
  {
    icon: Rocket,
    title: "Startups & SaaS",
    description:
      "From MVP launches to scale-ups with growth loops and demand generation.",
    gradient: "from-lavender to-purple-500",
  },
  {
    icon: Diamond,
    title: "Jewellery Brands",
    description:
      "We position your brand as premium and desirable. Our content builds emotional connection that turns viewers into confident buyers.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    description:
      "Enrollment growth through storytelling, funnels, and community building.",
    gradient: "from-fuchsia-500 to-rose-500",
  },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Decorative blobs */}
      <div className="absolute top-16 left-12 w-40 h-40 bg-primary/10 blob-shape" />
      <div className="absolute bottom-16 right-12 w-56 h-56 bg-secondary/10 blob-shape-2" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="pill-badge bg-muted text-primary mb-4">
            🌍 Industries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground tracking-tight mt-4">
            Industries We{" "}
            <span className="text-gradient-coral">Support</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            We don’t believe in one-size-fits-all marketing. Every industry
            demands a unique growth strategy — and we deliver exactly that.
          </p>
        </motion.div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card)]">
                {/* Gradient glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-white mb-6 shadow-md`}
                >
                  <industry.icon size={26} />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
