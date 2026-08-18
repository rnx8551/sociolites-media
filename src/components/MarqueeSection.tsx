import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "Google", emoji: "🔍", color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 border-blue-100 dark:border-blue-900" },
  { name: "Meta", emoji: "📘", color: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 border-indigo-100 dark:border-indigo-900" },
  { name: "Instagram", emoji: "📸", color: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 border-pink-100 dark:border-pink-900" },
  { name: "Shopify", emoji: "🛍️", color: "bg-green-50 dark:bg-green-950/40 text-green-600 border-green-100 dark:border-green-900" },
  { name: "YouTube", emoji: "🎬", color: "bg-red-50 dark:bg-red-950/40 text-red-600 border-red-100 dark:border-red-900" },
  { name: "WhatsApp", emoji: "💬", color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border-emerald-100 dark:border-emerald-900" },
  { name: "LinkedIn", emoji: "💼", color: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 border-sky-100 dark:border-sky-900" },
  { name: "Google Ads", emoji: "📢", color: "bg-yellow-50 dark:bg-yellow-950/40 text-yellow-700 border-yellow-100 dark:border-yellow-900" },
  { name: "Canva", emoji: "🎨", color: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 border-violet-100 dark:border-violet-900" },
  { name: "Analytics", emoji: "📊", color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 border-orange-100 dark:border-orange-900" },
];

const MarqueeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      aria-label="Platform partnerships and tools"
      className="relative py-12 overflow-hidden border-y border-border bg-background"
    >
      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Label */}
        <p className="text-center text-xs sm:text-sm text-muted-foreground font-semibold uppercase tracking-[0.3em] mb-8">
          Platforms & tools we master
        </p>

        {/* Marquee row 1 — left to right */}
        <div className="relative overflow-hidden mb-4">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-semibold shrink-0 transition-transform hover:scale-105 cursor-default ${logo.color}`}
              >
                <span className="text-base" aria-hidden="true">{logo.emoji}</span>
                {logo.name}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee row 2 — right to left (reversed) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[...logos.slice(5), ...logos.slice(0, 5), ...logos.slice(5), ...logos.slice(0, 5)].map((logo, i) => (
              <div
                key={i}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-semibold shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-default ${logo.color}`}
              >
                <span className="text-base" aria-hidden="true">{logo.emoji}</span>
                {logo.name}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
