import { motion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768;

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Outcome First",
      description:
        "Every strategy is reverse-engineered from real business goals, not vanity metrics.",
    },
    {
      icon: Zap,
      title: "Creative With Accountability",
      description:
        "Bold ideas backed by data, experimentation, and continuous optimization.",
    },
    {
      icon: Users,
      title: "True Partnership",
      description:
        "We operate like an in-house growth team, fully aligned with your KPIs.",
    },
    {
      icon: Award,
      title: "Relentless Improvement",
      description:
        "We test, learn, iterate, and compound results — never set and forget.",
    },
  ];

  const team = [
    {
      name: "Akanksha Shrivastava",
      role: "CEO & Founder",
      exp: "10+ years in growth & branding",
      image:
        "/akanksha-profile.png",
    },
    {
      name: "Arbaz Khan",
      role: "Co-Founder & Graphics Lead",
      exp: "8+ years in Graphics Designing & organic scale",
      image:
        "/arbaz-profile.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sociolites",
            foundingDate: "2018",
            description:
              "Performance-driven digital marketing agency helping brands scale visibility, trust, and revenue.",
            url: "https://sociolites.com",
          }),
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="pill-badge bg-peach text-coral inline-block">
                Our Story
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-display font-extrabold leading-tight mb-6"
            >
              We don’t chase attention.{" "}
              <span className="text-gradient-coral">We engineer it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Sociolites is a performance-driven growth partner helping ambitious
              brands scale visibility, trust, and revenue through strategy-led
              marketing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="bg-card border-y border-border">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "6+", label: "Years in Market" },
              { value: "150+", label: "Brands Scaled" },
              { value: "2.5B+", label: "Impressions Generated" },
              { value: "94%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-display font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-background">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Principles that drive execution, not just inspiration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-elevated p-8 border-2 border-transparent hover:border-primary/30"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-coral flex items-center justify-center mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-card">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                Leadership & Specialists
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Senior operators, not juniors learning on your budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="rounded-2xl overflow-hidden mb-4 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <h3 className="font-display font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member.exp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="section-padding text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Ready to scale with confidence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let’s build predictable, compounding growth together.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
