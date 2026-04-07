import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Performance-Driven Creativity",
    description:
      "We blend creative storytelling with performance strategy — so every campaign doesn’t just look good, it converts.",
    bg: "bg-peach",
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused Execution",
    description:
      "Every decision is backed by numbers. We continuously test, analyze, and optimize to maximize returns on every rupee spent.",
    bg: "bg-sky",
  },
  {
    icon: ShieldCheck,
    title: "⁠Complete Transparency",
    description:
      "No confusing reports, no hidden metrics. Just clear communication, honest insights, and measurable progress.",
    bg: "bg-mint",
  },
  {
    icon: Zap,
    title: "Fast, Adaptive, Market-Ready",
    description:
      "Digital moves fast — and so do we. We adapt quickly to trends, algorithm shifts, and consumer behavior.",
    bg: "bg-lavender",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 blob-shape" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blob-shape-2" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="pill-badge bg-muted text-primary mb-4">
              ⭐ Why Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground tracking-tight mt-4">
              Sociolites Earns Trust  
              <span className="text-gradient-coral block">
                & Delivers Results
              </span>
            </h2>

            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-xl">
              We don’t just run campaigns — we build partnerships.
Every strategy we create is backed by data, driven by intent, and designed to deliver consistent, scalable growth.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Strategy before execution",
                "Senior-level talent only",
                "Clear KPIs & measurable impact",
                "Long-term brand & revenue focus",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-card rounded-3xl p-7 hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${reason.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <reason.icon size={22} />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
