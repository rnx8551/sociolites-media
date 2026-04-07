import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Rocket } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "30+",
    label: "Happy Clients",
    sub: "Serving businesses across multiple industries",
    bg: "card-coral",
  },
  {
    icon: Target,
    value: "150+",
    label: "Lead-Focused Campaigns",
    sub: "Strategies designed for enquiries, not just reach",
    bg: "card-sky",
  },
  {
    icon: Award,
    value: "50+",
    label: "Client-Centric Approach",
    sub: "Dedicated support and clear communication",
    bg: "card-mint",
  },
  {
    icon: Rocket,
    value: "98%",
    label: "Growth-Oriented Execution",
    sub: "Focused on long-term brand and business growth",
    bg: "card-lavender",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      aria-labelledby="about-heading"
      ref={ref}
    >
      {/* Decorative shapes (subtle on mobile) */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-lavender blob-shape opacity-30 hidden md:block" />
      <div className="absolute bottom-10 left-10 w-36 h-36 bg-mint blob-shape-2 opacity-20 hidden md:block" />

      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${stat.bg} p-6 md:p-8 rounded-3xl text-center group hover:scale-[1.04] transition-transform duration-300`}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        >
          {/* Left Visual Story */}
          <div className="relative h-80 md:h-96">
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-primary rounded-3xl rotate-3 opacity-90" />
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-ocean rounded-3xl -rotate-3 opacity-90" />

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="bg-card rounded-3xl shadow-[var(--shadow-elevated)] p-8 w-3/4 text-center">
                <div className="text-4xl mb-3">⚡</div>
                <div className="text-2xl font-display font-extrabold text-foreground">
                  Since 2024
                </div>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  Helping brands grow predictably through strategy, creativity,
                  and performance marketing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div>
            <span className="pill-badge bg-peach text-coral mb-4 inline-block">
              💡 Who We Are
            </span>

            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-display font-extrabold text-foreground mt-4 tracking-tight"
            >
              Not Just an Agency,{" "}
              <span className="text-gradient-coral">Your Growth Partner</span>
            </h2>

            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              We’re a team of strategists, creatives, and performance marketers
              helping brands grow predictably, profitably, and at scale.
            </p>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              From early-stage startups to enterprise companies, we design
              systems that attract attention, convert audiences, and deliver
              measurable ROI.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Average client partnership:{" "}
              <strong className="text-foreground">1.4 years</strong>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Data-Driven", "Creative-First", "ROI Focused", "Always On"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-muted text-foreground font-semibold text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Soft CTA */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:underline"
            >
              Learn how we work →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
