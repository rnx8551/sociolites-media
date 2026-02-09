import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "200+", label: "Happy Clients", suffix: "" },
  { value: "$5M+", label: "Revenue Generated", suffix: "" },
  { value: "98%", label: "Client Retention", suffix: "" },
  { value: "50+", label: "Awards Won", suffix: "" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card glow-border rounded-3xl p-10 md:p-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-display font-extrabold text-gradient">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Why Brands Choose <span className="text-gradient">Sociolites</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We're not just another agency. We're growth partners who obsess over your success. 
              Our data-first approach combined with creative excellence ensures every dollar 
              you invest delivers maximum impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
