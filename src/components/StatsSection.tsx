import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Rocket } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
    bg: "card-coral",
    emoji: "🤝",
  },
  {
    icon: Target,
    value: "$5M+",
    label: "Revenue Generated",
    bg: "card-sky",
    emoji: "💰",
  },
  {
    icon: Award,
    value: "50+",
    label: "Awards Won",
    bg: "card-mint",
    emoji: "🏆",
  },
  {
    icon: Rocket,
    value: "98%",
    label: "Client Retention",
    bg: "card-lavender",
    emoji: "🚀",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-lavender blob-shape opacity-40" />
      <div className="absolute bottom-10 left-10 w-36 h-36 bg-mint blob-shape-2 opacity-30" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${stat.bg} p-6 md:p-8 text-center group hover:scale-105 transition-transform duration-300 cursor-default`}
            >
              <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">
                {stat.emoji}
              </span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm mt-1 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* About content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - unique stacked shapes */}
          <div className="relative h-80 md:h-96">
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-primary rounded-3xl rotate-3 opacity-90" />
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-ocean rounded-3xl -rotate-3 opacity-90" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card rounded-3xl shadow-[var(--shadow-elevated)] p-8 w-3/4 text-center z-10">
              <div className="text-5xl mb-3">⚡</div>
              <div className="text-2xl font-display font-extrabold text-foreground">
                Since 2018
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                Building digital empires
              </div>
            </div>
          </div>

          {/* Right - text */}
          <div>
            <span className="pill-badge bg-peach text-coral mb-4">
              💡 Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mt-4 tracking-tight">
              Not Just An Agency,{" "}
              <span className="text-gradient-coral">Your Growth Partner</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              We're a team of creative misfits, data nerds, and strategy
              obsessives who believe every brand has an untold story worth
              sharing with the world.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              From startups to Fortune 500s, we've helped brands of all sizes
              break through the noise and connect with audiences that matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Data-Driven",
                "Creative First",
                "ROI Focused",
                "Always On",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-muted text-foreground font-semibold text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
