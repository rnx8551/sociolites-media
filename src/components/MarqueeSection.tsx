import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  "Google", "Meta", "Spotify", "Shopify", "Stripe", "Notion", "Figma", "Slack",
];

const MarqueeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 overflow-hidden border-y border-border" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-8">
          Trusted by industry leaders
        </p>
        <div className="relative">
          <div className="flex marquee-track whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-8 md:mx-12"
              >
                <span className="text-2xl md:text-3xl font-display font-extrabold text-muted-foreground/30 hover:text-foreground/50 transition-colors duration-300 cursor-default">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
