import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  "Google",
  "Meta",
  "Shopify",
  "Stripe",
  "Notion",
  "Figma",
  "Slack",
];

const MarqueeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      aria-label="Trusted by leading global brands"
      className="relative py-10 overflow-hidden border-y border-border bg-background"
    >
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <p className="text-center text-xs sm:text-sm text-muted-foreground font-semibold uppercase tracking-[0.3em] mb-8">
          Trusted by global brands & fast-growing startups
        </p>

        {/* Marquee */}
        <div className="relative">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="mx-10 md:mx-14 flex items-center justify-center"
              >
                <span className="text-2xl md:text-3xl font-display font-extrabold text-muted-foreground/30 hover:text-foreground transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)] cursor-default">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
