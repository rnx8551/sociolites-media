import { motion } from "framer-motion";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
};

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Sociolites — Case Studies & Results";
  }, []);
  const projects = [
    {
      id: 1,
      title: "Real Estate Lead Gen – Performance Marketing",
      category: "Performance Marketing",
      image: "https://blog.skyad.com/hubfs/RE%20Digital%20marketing%20blog%20post.jpg",
      problem: "High CPL (Cost per Lead) with low-quality inquiries.",
      strategy: "Implemented a multi-stage funnel with WhatsApp automation.",
      stats: [
        { label: "Increase in Qualified Leads", value: "320%" },
        { label: "Timeline", value: "60 Days" },
        { label: "Cost Per Lead Reduction", value: "40%" },
      ],
      results: [
        "Multi-Stage Funnel",
        "WhatsApp Automation",
        "Meta Ads",
        "Lead Quality",
      ],
    },
    {
      id: 2,
      title: "E-commerce Brand Growth – Social Media & Ads",
      category: "Social Media & Ads",
      image: "https://cdn.dribbble.com/userupload/41509826/file/original-b51e65c5ae30ea0b3848b41e990d44ba.jpg?resize=2048x1448&vertical=center",
      problem: "Stagnant sales and poor brand recall.",
      strategy: "Revamped UI/UX and launched an influencer-led campaign.",
      stats: [
        { label: "ROAS Achieved", value: "4.5X" },
        { label: "Organic Reach", value: "1M+" },
        { label: "Engagement Growth", value: "2.5x" },
      ],
      results: [
        "Influencer Campaign",
        "UI/UX Revamp",
        "Paid Ads",
        "Brand Recall",
      ],
    },
    {
      id: 3,
      title: "Local Business SEO – Gondia Based",
      category: "SEO & Local Marketing",
      image: "https://www.re-thinkingthefuture.com/wp-content/uploads/2022/09/A7986-Marketing-in-Architecture-10-Tips-you-should-follow-Image-1.jpg",
      problem: "Zero visibility on Google for local keywords.",
      strategy: "GMB optimization and localized content strategy.",
      stats: [
        { label: "Google Ranking", value: "#1" },
        { label: "Timeline", value: "4 Months" },
        { label: "Local Visibility", value: "10x" },
      ],
      results: [
        "GMB Optimization",
        "Local SEO",
        "Content Strategy",
        "Keyword Ranking",
      ],
    },
    {
      id: 4,
      title: "Clinic Marketing – Patient Lead Generation",
      category: "Performance Marketing",
      image: "https://ontimehealthcare.com/wp-content/uploads/2025/02/Healthcare-Digital-Marketing-Agency.jpg",
      problem: "Low appointment bookings despite local presence.",
      strategy: "Designed location-based ad campaigns to attract nearby patients.",
      stats: [
        { label: "Patient Leads", value: "80+" },
        { label: "Increase in Appointments", value: "35%" },
        { label: "Cost Per Lead", value: "Lower" },
      ],
      results: [
        "Google Ads",
        "Local Targeting",
        "Conversion Optimization",
        "Lead Generation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative pt-16 pb-8 md:pt-20 md:pb-10 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-coral blob-shape opacity-70" />
          <div className="absolute bottom-10 left-[8%] w-40 h-40 bg-mint blob-shape-2 opacity-60" />

          <div className="relative section-padding max-w-6xl mx-auto">
            <motion.div {...fadeUp} className="pill-badge bg-peach text-coral mb-6">
              Case Studies
            </motion.div>

            <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl font-display font-extrabold mb-6">
              Our Work. <span className="text-gradient-coral">Your Proof.</span>
            </motion.h1>

            <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mb-10">
              We've helped 30+ brands find their voice. Here is a glimpse of the results we delivered while working with diverse industry leaders.
            </motion.p>

            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "30+", label: "Brands Scaled" },
                { value: "4.5X", label: "Avg. ROAS" },
                { value: "320%", label: "Lead Growth" },
                { value: "#1", label: "Local Rankings" },
              ].map((s) => (
                <div key={s.label} className="card-elevated rounded-2xl px-5 py-4 border border-primary/10">
                  <p className="text-2xl font-display font-extrabold text-gradient-coral">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SEO INTRO */}
        <section className="section-padding bg-card">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-display font-bold">
              Digital Marketing Case Studies That Drive Revenue
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As a performance-focused digital marketing agency, we partner with ambitious brands to design scalable growth systems across social media, paid advertising, content marketing, and analytics.
            </p>
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                {...fadeUp}
                transition={{ delay: i * 0.12 }}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden mb-6 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                  <ExternalLink className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 text-white" size={44} />
                </div>

                <div className="card-elevated p-8">
                  <p className="text-sm font-bold text-primary mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {project.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <div className="flex gap-2 text-sm">
                      <span className="font-semibold text-foreground shrink-0">Problem:</span>
                      <span className="text-muted-foreground">{project.problem}</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="font-semibold text-foreground shrink-0">Strategy:</span>
                      <span className="text-muted-foreground">{project.strategy}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-y py-5 mb-6">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <p className="text-lg font-bold text-primary">{s.value}</p>
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.results.map((r) => (
                      <span
                        key={r}
                        className="flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-primary/20"
                      >
                        <CheckCircle size={14} />
                        {r}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-3 font-bold text-primary hover:gap-4 transition-all">
                    View Case Study
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY US */}
<section className="section-padding bg-card">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
        Why Brands Choose Us
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        We don't just run campaigns — we build systems that compound.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          num: "01",
          title: "ROI Obsessed",
          desc: "Every campaign is optimized for revenue, not vanity metrics.",
        },
        {
          num: "02",
          title: "Creative + Data",
          desc: "Scroll-stopping creative backed by deep analytics.",
        },
        {
          num: "03",
          title: "Founder-Level Attention",
          desc: "No juniors. No outsourcing. Only experts.",
        },
      ].map((item) => (
        <div
          key={item.num}
          className="p-7 bg-background rounded-r-2xl border-l-4 border-coral"
        >
          <p className="text-4xl font-display font-extrabold text-gradient-coral leading-none mb-3">
            {item.num}
          </p>
          <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* CTA */}
        <section className="section-padding text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-coral/10 to-ocean/10" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-6">
              Want Results Like These?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's build a predictable growth engine for your brand.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-all duration-300"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
