import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Deep Research",
    description:
      "We analyze your brand, competitors, and audience psychology to uncover growth opportunities others miss.",
    color: "bg-peach",
    number: "01",
  },
  {
    icon: PenTool,
    title: "Creative Strategy",
    description:
      "Scroll-stopping ideas backed by data. Every concept is engineered for attention and engagement.",
    color: "bg-sky",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We test, optimize, and scale what works across platforms to maximize reach and ROI.",
    color: "bg-mint",
    number: "03",
  },
  {
    icon: BarChart3,
    title: "Measure & Optimize",
    description:
      "Weekly insights, clear metrics, and continuous improvement to compound results.",
    color: "bg-lavender",
    number: "04",
  },
];

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 blob-shape" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blob-shape-2" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="pill-badge bg-muted text-primary mb-4">
            🧠 Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground tracking-tight mt-4">
            A Proven <span className="text-gradient-coral">Growth Playbook</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            We don’t guess. We follow a battle-tested system that blends
            creativity, strategy, and performance to deliver consistent growth.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card rounded-3xl p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute top-6 right-6 text-5xl font-display font-extrabold text-muted-foreground/10">
                {step.number}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <step.icon size={26} className="text-foreground" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
