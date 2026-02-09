import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ready to Grow?</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold mt-4 leading-tight">
            Let's Create Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg max-w-lg mx-auto">
            Get a free strategy consultation and discover how we can 10x your digital presence.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@sociolites.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover-glow hover:scale-105 transition-all duration-300"
            >
              <Mail size={20} />
              Book a Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass-card text-foreground font-bold text-lg hover:bg-muted/30 transition-all duration-300"
            >
              <Phone size={20} />
              +1 (234) 567-890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
