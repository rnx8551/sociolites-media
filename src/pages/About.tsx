import { motion, useReducedMotion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

const About = () => {
  const prefersReducedMotion = useReducedMotion();
  const animY = prefersReducedMotion ? 0 : 30;
  const animYSm = prefersReducedMotion ? 0 : 10;
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
      image: "/akku-original.jpeg",
      gradient: "",
    },
    {
      name: "Arbaz Khan",
      role: "Co-Founder & Graphics Lead",
      exp: "8+ years in Graphics Designing & organic scale",
      image: "/arbaz-profile.jpg",
      gradient: "",
    },
    {
      name: "Vanshika Agarwal",
      role: "Social Media Manager",
      exp: "Content strategy & community growth",
      image: "/vanshika-agrawal.jpeg",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      name: "Ruturaj Sakunde",
      role: "Video Editor",
      exp: "Post-production & motion graphics",
      image: "",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      name: "Manish Bopche",
      role: "Photographer",
      exp: "Visual storytelling & brand shoots",
      image: "/manish-bopche.png",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      name: "Ankita Shrivastava",
      role: "Web Developer",
      exp: "Full-stack development & modern web experiences",
      image: "/ankita-shrivastava.jpeg",
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      name: "Gunjan",
      role: "Graphic Designer",
      exp: "Brand identity & creative design",
      image: "",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  useEffect(() => {
    document.title = "About Us | Sociolites — Our Story & Team";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sociolites",
            foundingDate: "2024",
            description:
              "Performance-driven digital marketing agency helping brands scale visibility, trust, and revenue.",
            url: "https://sociolites.com",
          }),
        }}
      />

      {/* HERO */}
      <section className="relative pt-16 md:pt-20">
        <div className="w-full pt-8 section-padding">
          <div className="max-w-6xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: animY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="pill-badge bg-peach text-coral inline-block">
                Our Story
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: animY }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-display font-extrabold leading-tight mb-6"
            >
              Central India's Bridge to{" "}
              <span className="text-gradient-coral">Digital Excellence.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-16"
            >
              Sociolites is a startup-born agency with a mission to decentralize
              high-end marketing. While our office is in Gondia, our impact spans
              across Maharashtra and Madhya Pradesh. We recognized a gap: brands
              needed the speed of a startup but the stability of a big agency. We
              are that{" "}
              <span className="font-bold text-foreground">"Neat Fit."</span>
            </motion.p>

            {/* Legacy + Playbook Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  tag: "Legacy & Launch",
                  title: "20+ brands. One new mission.",
                  body: "We launched Sociolites in 2024, but our team brings a combined history of working with 20+ brands. From crores in media spend to millions of organic sessions — we've done the heavy lifting for others. Now we're doing it for the Sociolites family.",
                  pills: ["Launched 2024", "20+ Brand History", "7 Active Clients"],
                },
                {
                  tag: "Gold-Standard Playbook",
                  title: "Same strategy, now under our name.",
                  body: "We currently manage 7 high-growth clients under the Sociolites banner, applying the same gold-standard strategies that fueled our previous 20+ successes. Proven frameworks, not experiments.",
                  pills: ["Crores in Media Spend", "Millions of Organic Sessions"],
                },
              ].map((card, i) => (
                <motion.div
                  key={card.tag}
                  initial={{ opacity: 0, y: animY }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                  className="card-elevated p-7 border-t-2 border-t-coral rounded-2xl relative overflow-hidden"
                >
                  <p className="text-xs font-semibold tracking-widest uppercase text-coral mb-2">
                    {card.tag}
                  </p>
                  <h3 className="text-xl font-display font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {card.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.pills.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-semibold bg-peach text-coral rounded-full px-3 py-1"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Vision 2028 Strip */}
            <motion.div
              initial={{ opacity: 0, y: animYSm }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-2xl p-10 flex items-center gap-8 flex-wrap"
              style={{
                background: "linear-gradient(135deg, #E8593C 0%, #C44E26 50%, #F2A623 100%)",
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                {/* clock/target icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-2">
                  Our Vision 2028
                </p>
                <p className="text-lg font-bold text-white leading-snug max-w-xl">
                  To be the most preferred growth partner in Central India —
                  empowering talent and businesses through Performance-Oriented
                  Creativity and AI-Native SOPs.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="bg-card border-y border-border">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">

            {/* Quote Row */}
            <div className="pb-6 mb-6 border-b border-border">
              <p className="text-base md:text-lg leading-relaxed text-foreground max-w-3xl">
                Our core team has previously delivered results for{" "}
                <span className="text-coral font-semibold">20+ brands</span> across
                E-commerce, Real Estate, and IT sectors. Now, we are bringing that
                same excellence to the{" "}
                <span className="text-coral font-semibold">Sociolites family.</span>
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
              {[
                { value: "7", label: "Active Clients" },
                { value: "320%", label: "Avg. Growth" },
                { value: "20+", label: "Brands History" },
                { value: "100%", label: "Transparency" },
              ].map((stat) => (
                <div key={stat.label} className="text-center py-6 md:py-0 md:px-6">
                  <p className="text-4xl font-display font-extrabold text-gradient-coral">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

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
                    initial={{ opacity: 0, y: animY }}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="rounded-2xl overflow-hidden mb-4 shadow-md">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={400}
                        className="w-full h-72 object-cover"
                      />
                    ) : (
                      <div
                        className={`w-full h-72 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
                      >
                        <span className="text-5xl font-display font-extrabold text-white/90">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
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
      <WhatsAppButton />
    </div>
  );
};

export default About;
