import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "FashionFlow - Campaign Rebrand",
      category: "Social Strategy",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
      stats: [
        { label: "Followers Growth", value: "340%" },
        { label: "Engagement Rate", value: "8.5%" },
        { label: "Sales Increase", value: "230%" },
      ],
      description:
        "Complete social media strategy overhaul for a fashion e-commerce brand. We repositioned their brand voice, created viral content series, and grew their TikTok following from 45K to 200K in 6 months.",
      results: [
        "Content strategy",
        "Brand repositioning",
        "Influencer partnerships",
        "Paid ads management",
      ],
    },
    {
      id: 2,
      title: "TechStart - Product Launch",
      category: "Paid Advertising",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      stats: [
        { label: "Ad Spend ROI", value: "720%" },
        { label: "Conversion Rate", value: "12.3%" },
        { label: "Cost Per Acquisition", value: "↓67%" },
      ],
      description:
        "Strategic paid advertising campaign for a B2B SaaS product launch. We targeted decision-makers across LinkedIn, Google, and Meta, achieving their best customer acquisition numbers.",
      results: [
        "Campaign strategy",
        "Audience targeting",
        "Creative testing",
        "Performance optimization",
      ],
    },
    {
      id: 3,
      title: "FoodieHub - Community Growth",
      category: "Community Management",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
      stats: [
        { label: "Community Size", value: "125K" },
        { label: "Daily Active Users", value: "15K+" },
        { label: "Content Performance", value: "4.2% avg" },
      ],
      description:
        "Built a thriving community for a food delivery app. We managed daily engagement, created viral challenges, and turned users into brand ambassadors.",
      results: [
        "Community building",
        "Content calendar",
        "User retention",
        "Community events",
      ],
    },
    {
      id: 4,
      title: "WellnessWave - Content Series",
      category: "Content Creation",
      image:
        "https://images.unsplash.com/photo-1544367567-0d6fcffe7f1f?w=800&h=400&fit=crop",
      stats: [
        { label: "Video Views", value: "2.4M+" },
        { label: "Video Completion Rate", value: "68%" },
        { label: "Share Rate", value: "12.5%" },
      ],
      description:
        "Created a successful content series for a wellness brand covering yoga, nutrition, and mental health. The series went viral with over 2.4M views in the first month.",
      results: [
        "Video production",
        "Scripting",
        "Editing",
        "Distribution strategy",
      ],
    },
    {
      id: 5,
      title: "GamingGear - Influencer Campaign",
      category: "Influencer Partnerships",
      image:
        "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=400&fit=crop",
      stats: [
        { label: "Influencers Engaged", value: "45" },
        { label: "Total Impressions", value: "8.5M" },
        { label: "UGC Content Created", value: "200+" },
      ],
      description:
        "Orchestrated influencer partnership program with 45 content creators. Generated authentic user-generated content and drove significant brand awareness.",
      results: [
        "Creator vetting",
        "Campaign management",
        "Content negotiation",
        "Performance tracking",
      ],
    },
    {
      id: 6,
      title: "LocalJobs - Analytics & Growth",
      category: "Performance Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      stats: [
        { label: "User Acquisition", value: "450%" },
        { label: "Weekly Active Users", value: "89K" },
        { label: "Data-driven Optimization", value: "120%" },
      ],
      description:
        "Comprehensive analytics and optimization strategy for a job marketplace. Data analysis revealed key growth opportunities that we exploited for significant user growth.",
      results: [
        "Analytics setup",
        "A/B testing",
        "User journey analysis",
        "Growth recommendations",
      ],
    },
  ];

  const categories = [
    "All",
    "Social Strategy",
    "Content Creation",
    "Paid Advertising",
    "Influencer Partnerships",
    "Community Management",
    "Performance Analytics",
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-coral blob-shape float-slow opacity-70" />
        <div className="absolute bottom-20 left-[10%] w-40 h-40 bg-mint blob-shape-2 float-medium opacity-60" />

        <div className="relative z-10 w-full section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="pill-badge bg-peach text-coral inline-block">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Case Studies
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-display font-extrabold leading-tight mb-6"
            >
              Our Best <span className="text-gradient-coral">Work Speaks</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              From viral campaigns to measurable business growth, here's what
              we've accomplished for our clients.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative bg-background">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative bg-background">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from brands we've transformed
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  {/* Image */}
                  <div className="rounded-3xl w-full h-64 mb-6 overflow-hidden relative group/img">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={48} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="card-elevated p-8 border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm font-bold text-primary mb-2">
                            {project.category}
                          </p>
                          <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                        {project.stats.map((stat) => (
                          <div key={stat.label}>
                            <p className="font-bold text-primary text-lg">
                              {stat.value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.results.map((result) => (
                          <span
                            key={result}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-transparent text-muted-foreground text-xs font-medium border border-primary/20 group-hover:border-primary/50 transition-colors"
                          >
                            {result}
                          </span>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary/10 to-transparent text-primary font-bold text-sm hover:from-primary/20 hover:to-primary/5 group/btn hover:gap-3 transition-all duration-300 border border-primary/20 hover:border-primary/50">
                        View Case Study
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-card overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-ocean/5 rounded-full blur-3xl" />

        <div className="relative z-10 w-full section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                Our Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proven results across hundreds of campaigns and brands.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Campaigns Created" },
                { number: "2.5B+", label: "Total Impressions" },
                { number: "95%", label: "Client Satisfaction" },
                { number: "150+", label: "Brands Transformed" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="group relative text-center p-8 card-elevated border-2 border-transparent hover:border-primary/30 transition-all duration-300 rounded-2xl overflow-hidden"
                >
                  {/* Decorative corner shape */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <p className="text-5xl font-display font-bold text-gradient-coral mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-transparent to-ocean/10" />
        {/* Decorative shapes */}
        <div className="absolute top-0 left-10 w-64 h-64 bg-peach/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky/5 rounded-full blur-3xl" />

        <div className="relative z-10 w-full section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-display font-bold mb-6"
            >
              Ready for your next success story?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              Let's discuss how we can help your brand achieve similar results.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-110 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
            >
              Start Your Project
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
