import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Big decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-peach blob-shape opacity-50" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-sky blob-shape-2 opacity-40" />

      <div className="relative max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-foreground rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Inner decorative shapes */}
          <div className="absolute top-6 left-6 w-24 h-24 border-2 border-background/10 rounded-full" />
          <div className="absolute bottom-6 right-6 w-32 h-32 border-2 border-background/10 blob-shape" />
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/20 rounded-full blur-xl" />

          <span className="text-5xl block mb-6">🚀</span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-background tracking-tight">
            Ready to Go{" "}
            <span className="text-gradient-coral">Viral?</span>
          </h2>
          <p className="text-background/60 mt-4 text-lg max-w-lg mx-auto">
            Book a free 30-minute strategy call. Let's map out your path to digital domination.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@sociolites.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
            >
              <Mail size={20} />
              Book a Free Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-background/20 text-background font-bold text-lg hover:bg-background/10 transition-all duration-300"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>

          {/* Contact info pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Mail, text: "hello@sociolites.com" },
              { icon: Phone, text: "+1 (234) 567-890" },
              { icon: MapPin, text: "New York, NY" },
            ].map((item) => (
              <div key={item.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 text-background/70 text-sm">
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
