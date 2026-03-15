import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we see results?",
    answer:
      "Most clients start seeing measurable traction within 30–60 days. Sustainable growth compounds over time as campaigns are optimized.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer:
      "Both. We work with early-stage startups as well as global brands. Strategy and execution are tailored to your growth stage.",
  },
  {
    question: "What makes Sociolites different from other agencies?",
    answer:
      "We combine creative storytelling with performance marketing. Everything we do is tied directly to revenue and growth — not vanity metrics.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "We typically recommend a 3-month minimum to achieve meaningful results, but we remain flexible based on your needs.",
  },
  {
    question: "Do you provide detailed performance reports?",
    answer:
      "Absolutely. You’ll receive transparent reports with clear KPIs, insights, and next-step recommendations.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Decorative accents */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 blob-shape" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-secondary/10 blob-shape-2" />

      <div className="max-w-4xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="pill-badge bg-muted text-primary mb-4">
            ❓ FAQs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground tracking-tight mt-4">
            Frequently Asked{" "}
            <span className="text-gradient-coral">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg max-w-2xl mx-auto">
            Everything you need to know before working with Sociolites.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-display font-bold text-foreground text-lg">
                    {faq.question}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="px-6 overflow-hidden"
                >
                  <p className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
