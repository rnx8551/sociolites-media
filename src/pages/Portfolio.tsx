import { motion } from "framer-motion";
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
  const projects = [
    {
      id: 1,
      title: "AR Sandeep Baghele & Associates – Brand Visibility & Lead Growth",
      category: "Architecture / Design Marketing",
      image:
        "https://www.re-thinkingthefuture.com/wp-content/uploads/2022/09/A7986-Marketing-in-Architecture-10-Tips-you-should-follow-Image-1.jpg",
      stats: [
        { label: "Increase in Online Enquiries", value: "2x" },
        { label: "Lead Flow Generated", value: "Consistent" },
        { label: "Brand Visibility in Local Market", value: "Improved" },
      ],
      description:
        "We worked on improving digital presence and local visibility for AR Sandeep Baghele & Associates through structured content and targeted campaigns.",
      results: [
        "Brand repositioning",
        "Social Media Strategy",
        "Local Marketing",
        "Lead Generation",
      ],
    },
    {
      id: 2,
      title: "Local Real Estate Project – Lead Generation Campaign",
      category: "Real Estate Marketing",
      image:
        "https://blog.skyad.com/hubfs/RE%20Digital%20marketing%20blog%20post.jpg",
      stats: [
        { label: " Leads Generated", value: "120+" },
        { label: "Conversion Rate", value: "3.5%" },
        { label: "Cost Per Lead Reduction", value: "40%" },
      ],
      description:
        "We created a targeted ad strategy and local marketing funnel to generate quality enquiries for a real estate project.",
      results: [
        "Audience Targeting",
        "Meta Ads",
        "Lead Funnel",
        "Local Campaign",
      ],
    },
    {
      id: 3,
      title: "Jewellery Brand – Instagram Growth & Engagement",
      category: "Social Media Marketing",
      image:
        "https://cdn.dribbble.com/userupload/41509826/file/original-b51e65c5ae30ea0b3848b41e990d44ba.jpg?resize=2048x1448&vertical=center",
      stats: [
        { label: "Engagement Growth", value: "2.5x" },
        { label: "Monthly Reach Increase", value: "3K+" },
        { label: "Enquiries Generated", value: "Consistent" },
      ],
      description:
        "Built consistent content strategy and reel-based growth system to improve brand visibility and engagement.",
      results: [
        "Content Strategy",
        "Reels Growth",
        "Brand Positioning",
        "Organic Marketing",
      ],
    },
    {
      id: 4,
      title: "Clinic Marketing – Patient Lead Generation",
      category: "Performance Marketing",
      image:
        "https://ontimehealthcare.com/wp-content/uploads/2025/02/Healthcare-Digital-Marketing-Agency.jpg",
      stats: [
        { label: "Patient Leads", value: "80+" },
        { label: "Increase in Appointments", value: "35%" },
        { label: "Cost Per Lead", value: "Lower" },
      ],
      description:
        "Designed location-based ad campaigns to attract nearby patients and increase appointment bookings.",
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
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-coral blob-shape opacity-70" />
        <div className="absolute bottom-10 left-[8%] w-40 h-40 bg-mint blob-shape-2 opacity-60" />

        <div className="relative section-padding max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="pill-badge bg-peach text-coral mb-6">
            Case Studies
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-display font-extrabold mb-6"
          >
            Proven Growth Systems,
            <span className="text-gradient-coral"> Not Just Pretty Campaigns</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Explore how our strategy-led digital marketing helped brands scale
            faster, acquire customers profitably, and build long-term authority.
          </motion.p>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-display font-bold">
            Digital Marketing Case Studies That Drive Revenue
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            As a performance-focused digital marketing agency, we partner with
            ambitious brands to design scalable growth systems across social
            media, paid advertising, content marketing, and analytics.
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
                <h3 className="text-2xl font-display font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

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
                      <CheckCircle size={14} /> {r}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-3 font-bold text-primary hover:gap-4 transition-all">
                  View Case Study <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ["ROI Obsessed", "Every campaign is optimized for revenue, not vanity metrics."],
            ["Creative + Data", "Scroll-stopping creative backed by deep analytics."],
            ["Founder-Level Attention", "No juniors. No outsourcing. Only experts."]
          ].map(([title, desc]) => (
            <div key={title} className="p-8 rounded-2xl border bg-background">
              <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
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
            Let’s build a predictable growth engine for your brand.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition"
          >
            Book a Free Strategy Call <ArrowRight />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
