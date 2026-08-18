import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Zap, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    tagline: "For new businesses ready to establish an online presence",
    price: "Custom",
    highlight: false,
    color: "bg-sky",
    iconColor: "text-ocean",
    features: [
      "Social media management (2 platforms)",
      "15 posts/month with captions",
      "Basic graphic design",
      "Monthly performance report",
      "WhatsApp support (business hours)",
      "1 paid ad campaign/month",
    ],
    cta: "Get Started",
    badge: null,
  },
  {
    icon: Star,
    name: "Growth",
    tagline: "For scaling brands ready to generate consistent leads",
    price: "Custom",
    highlight: true,
    color: "bg-primary",
    iconColor: "text-primary-foreground",
    features: [
      "Social media management (4 platforms)",
      "30 posts/month + reels/video content",
      "Advanced graphic design & branding",
      "SEO optimization",
      "3 paid ad campaigns/month",
      "Weekly performance calls",
      "Priority WhatsApp support",
      "Landing page + CRO",
    ],
    cta: "Most Popular – Let's Talk",
    badge: "⭐ Most Popular",
  },
  {
    icon: Crown,
    name: "Scale",
    tagline: "Full-service growth partnership for ambitious brands",
    price: "Custom",
    highlight: false,
    color: "bg-lavender",
    iconColor: "text-secondary",
    features: [
      "All Growth plan features",
      "Dedicated account manager",
      "Influencer collaboration",
      "Video production & editing",
      "Unlimited ad campaigns",
      "CRM setup & automation",
      "Monthly strategy workshops",
      "Priority 24/7 support",
    ],
    cta: "Book a Call",
    badge: null,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-padding relative overflow-hidden bg-muted/20"
      ref={ref}
    >
      {/* Background accents */}
      <div className="absolute -top-32 left-0 w-80 h-80 bg-primary/10 blob-shape opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-80 h-80 bg-ocean/10 blob-shape-2 opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="pill-badge bg-peach text-coral mb-4">
            💰 Pricing & Packages
          </span>
          <h2
            id="pricing-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mt-4 tracking-tight"
          >
            Transparent, Results-Focused{" "}
            <span className="text-gradient-coral">Pricing</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            No hidden fees, no lock-in contracts. Every plan is tailored to your goals — and we only grow when you grow.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative rounded-3xl flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? "bg-foreground text-background shadow-[var(--shadow-elevated)] scale-105 border-2 border-primary/30"
                    : "card-elevated hover:shadow-[var(--shadow-elevated)] hover:-translate-y-2"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        plan.highlight ? "bg-primary/20" : plan.color
                      }`}
                    >
                      <Icon
                        size={22}
                        className={plan.highlight ? "text-primary-foreground" : plan.iconColor}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-display font-extrabold ${
                          plan.highlight ? "text-background" : "text-foreground"
                        }`}
                      >
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      plan.highlight ? "text-background/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <span
                      className={`text-3xl font-display font-extrabold ${
                        plan.highlight ? "text-background" : "text-foreground"
                      }`}
                    >
                      Custom Pricing
                    </span>
                    <p
                      className={`text-xs mt-1 ${
                        plan.highlight ? "text-background/60" : "text-muted-foreground"
                      }`}
                    >
                      Tailored to your goals & budget
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2
                          size={16}
                          className={`mt-0.5 shrink-0 ${
                            plan.highlight ? "text-primary" : "text-primary"
                          }`}
                        />
                        <span
                          className={
                            plan.highlight ? "text-background/90" : "text-foreground/80"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`w-full text-center py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      plan.highlight
                        ? "bg-primary text-primary-foreground hover:opacity-90 hover:scale-105"
                        : "border-2 border-border hover:border-primary/50 text-foreground hover:shadow-md"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust strip */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          ✅ No lock-in contracts &nbsp;·&nbsp; ✅ Cancel anytime &nbsp;·&nbsp; ✅ Free strategy call included
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
