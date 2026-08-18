import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-heading"
      ref={ref}
    >
      {/* Decorative background blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-peach blob-shape opacity-40 hidden md:block" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-sky blob-shape-2 opacity-30 hidden md:block" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-foreground rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Inner accents */}
          <div className="absolute top-6 left-6 w-24 h-24 border-2 border-background/10 rounded-full" />
          <div className="absolute bottom-6 right-6 w-32 h-32 border-2 border-background/10 blob-shape" />
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/20 rounded-full blur-xl" />

          {/* Icon */}
          <span className="text-4xl block mb-5 opacity-80">🚀</span>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-background tracking-tight"
          >
            Ready to Scale Your Brand with a{" "}
            <span className="text-gradient-coral">
              Growth Marketing Agency?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-background/65 mt-5 text-lg max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call and get a clear growth roadmap—
            no sales pressure, just actionable insights.
          </p>

          {/* Value bullets */}
          <ul className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-background/80 text-sm font-medium">
            <li>✔ Free growth strategy</li>
            <li>✔ ROI-focused insights</li>
            <li>✔ 24-hour response time</li>
          </ul>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              aria-label="Book a free growth strategy call"
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:scale-105 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
            >
              <Mail size={20} />
              Get My Free Growth Plan
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <a
              href="tel:+917020698446"
              aria-label="Call our marketing team now"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-background/25 text-background font-semibold text-lg hover:bg-background/10 transition-all duration-300"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-6 text-xs text-background/50">
            Trusted by 20+ brands • Avg response time under 24 hours
          </p>

          {/* Contact info pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Mail, text: "ashrivastava201819@gmail.com" },
              { icon: Phone, text: "+91 7020698446" },
              { icon: MapPin, text: "Gondia, Maharastra, India" },
            ].map((item) => (
              <div
                key={item.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 text-background/70 text-sm"
              >
                <item.icon size={14} />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
