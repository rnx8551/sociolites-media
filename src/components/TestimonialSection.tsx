import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "CEO, TechStart",
    image: "bg-gradient-to-br from-coral to-pink-500",
    quote:
      "Sociolites transformed our social media presence. Our engagement went up 340% in just 3 months!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Founder, FashionFlow",
    image: "bg-gradient-to-br from-ocean to-cyan-500",
    quote:
      "The team is incredibly creative and data-driven. They understand our brand and deliver results.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Marketing Director, GlobalBrand",
    image: "bg-gradient-to-br from-lime to-green-500",
    quote:
      "Best investment we made in our marketing. Sociolites consistently exceeds expectations.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Owner, WellnessHub",
    image: "bg-gradient-to-br from-lavender to-purple-500",
    quote:
      "Professional, responsive, and results-oriented. Highly recommend Sociolites to any business.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-10 overflow-hidden bg-background" ref={ref}>
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 blob-shape float-slow opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ocean/5 blob-shape-2 float-medium opacity-40" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-lime/5 blob-shape-3 float-fast opacity-30" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="pill-badge bg-peach text-coral">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Client Love
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold mb-6">
              What Our <span className="text-gradient-coral">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from businesses we've
              transformed.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card with unique shape */}
                <div className="relative bg-card rounded-3xl p-8 border border-border hover:border-primary/50 transition-all duration-300 h-full shadow-md hover:shadow-[var(--shadow-card)]">
                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10 group-hover:from-primary/20 transition-all" />

                  {/* Rating stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-lg font-medium mb-8 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    {/* Avatar with gradient */}
                    <div
                      className={`w-14 h-14 rounded-full ${testimonial.image} flex-shrink-0 shadow-md`}
                    />
                    <div>
                      <h4 className="font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats below testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "4.9/5", label: "Average Rating" },
              { number: "150+", label: "Happy Clients" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-display font-bold text-gradient-coral mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
