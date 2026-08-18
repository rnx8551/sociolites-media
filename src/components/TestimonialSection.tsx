import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ar. Sandeep Baghele",
    role: "Architect & Interior Designer, Nagpur",
    image: "bg-gradient-to-br from-coral to-pink-500",
    initial: "SB",
    quote:
      "Sociolites completely transformed how my practice looks online. My Instagram grew from near-zero to a highly engaged audience of real clients. The quality of leads we now get from social media is exceptional — several major projects have come directly through our profile.",
    rating: 5,
  },
  {
    name: "Ramayana Hospital",
    role: "Multi-Speciality Hospital, Gondia",
    image: "bg-gradient-to-br from-ocean to-cyan-500",
    initial: "RH",
    quote:
      "We partnered with Sociolites to grow our patient inquiries online and the results speak for themselves. Our Google visibility improved dramatically and the WhatsApp-based campaign they ran brought in consistent appointment bookings every week. Truly a result-driven team.",
    rating: 5,
  },
  {
    name: "Netrasetu Eye Hospital",
    role: "Eye Care Specialist, Gondia",
    image: "bg-gradient-to-br from-lime to-green-500",
    initial: "NE",
    quote:
      "Sociolites understood our niche perfectly. They created awareness campaigns for cataract and LASIK that reached exactly the right audience in and around Gondia. Our consultation bookings saw a significant rise within the first 60 days. Highly professional team.",
    rating: 5,
  },
  {
    name: "Bliss International Resort",
    role: "Luxury Resort & Event Destination, Gondia",
    image: "bg-gradient-to-br from-lavender to-purple-500",
    initial: "BR",
    quote:
      "Partnering with Sociolites gave our resort incredible digital reach across Central India. From destination wedding inquiries to weekend staycation bookings, their creative campaigns and visual storytelling brought in high-value guests consistently. They truly know how to showcase hospitality.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-labelledby="testimonials-heading"
      className="relative py-20 overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-ocean/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Client Testimonials
          </span>

          <h2
            id="testimonials-heading"
            className="text-5xl md:text-6xl font-display font-extrabold mb-6"
          >
            Trusted by <span className="text-gradient-coral">Growing Brands</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real businesses that trusted Sociolites to scale
            their growth.
          </p>
        </motion.header>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              itemScope
              itemType="https://schema.org/Review"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl p-8 bg-card/90 backdrop-blur border border-border hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
                {/* Decorative quote */}
                <Quote className="absolute -top-6 -left-4 w-14 h-14 text-primary/10" />

                {/* Hidden SEO heading */}
                <h3 className="sr-only">
                  Review by {t.name}, {t.role}
                </h3>

                {/* Rating */}
                <div
                  className="flex gap-1 mb-6"
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-primary text-primary"
                    />
                  ))}
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                </div>

                {/* Quote */}
                <blockquote
                  itemProp="reviewBody"
                  className="text-base md:text-lg text-foreground leading-relaxed italic mb-8"
                >
                  “{t.quote}”
                </blockquote>

                {/* Author */}
                <footer className="flex items-center gap-4 pt-6 border-t border-border">
                  <div
                    className={`w-14 h-14 rounded-full ${t.image} shadow-md flex items-center justify-center`}
                    aria-hidden
                  >
                    <span className="text-white font-display font-extrabold text-lg">
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <cite
                      itemProp="author"
                      className="not-italic font-bold text-foreground"
                    >
                      {t.name}
                    </cite>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </footer>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
        >
          {[
            { number: "4.9/5", label: "Average Client Rating" },
            { number: "20+", label: "Businesses Scaled" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-display font-extrabold text-gradient-coral mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
