import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Film,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Social Media Management",
      description:
        "Complete social media strategy and execution. We handle content creation, scheduling, engagement, and community management across all platforms.",
      features: [
        "Daily posting & scheduling",
        "Audience engagement",
        "Community management",
        "Performance tracking",
      ],
      color: "bg-coral",
    },
    {
      icon: Film,
      title: "Content Creation",
      description:
        "Scroll-stopping videos, reels, and posts that make your brand unmissable. Our creative team produces high-quality content optimized for every platform.",
      features: [
        "Video production",
        "Photography",
        "Graphic design",
        "Copywriting",
      ],
      color: "bg-ocean",
    },
    {
      icon: BarChart3,
      title: "Performance Marketing",
      description:
        "Data-driven marketing focused on measurable results and ROI. We optimize every campaign to drive conversions and maximize your marketing spend.",
      features: [
        "Campaign optimization",
        "Real-time reporting",
        "A/B testing",
        "ROI analysis",
      ],
      color: "bg-lime",
    },
    {
      icon: Users,
      title: "Lead Generation",
      description:
        "Strategic campaigns designed to attract and convert high-quality leads. We use targeted messaging and conversion optimization to fill your sales pipeline.",
      features: [
        "Lead capture strategies",
        "Conversion optimization",
        "Sales funnel design",
        "Lead nurturing",
      ],
      color: "bg-secondary",
    },
    {
      icon: Zap,
      title: "CRM & Customer Management",
      description:
        "Implement and optimize CRM systems to streamline customer relationships. We help you manage interactions, automate workflows, and improve retention.",
      features: [
        "CRM setup & implementation",
        "Workflow automation",
        "Customer segmentation",
        "Retention strategies",
      ],
      color: "bg-peach",
    },
    {
      icon: MessageSquare,
      title: "Google & Meta Ads",
      description:
        "Paid advertising campaigns on Google and Meta platforms. We optimize budgets and targeting to get maximum conversions at minimum cost.",
      features: [
        "Google Ads",
        "Meta ads",
        "Budget optimization",
        "Conversion tracking",
      ],
      color: "bg-sky",
    },
    {
      icon: TrendingUp,
      title: "SEO & Website Optimization",
      description:
        "Comprehensive SEO strategy and website optimization roadmap. We improve search rankings, drive organic traffic, and enhance user experience.",
      features: [
        "Keyword research",
        "On-page SEO",
        "Technical SEO",
        "Website optimization roadmap",
      ],
      color: "bg-coral",
    },
    {
      icon: Film,
      title: "Influencer Partnerships",
      description:
        "Strategic collaborations with the right influencers to amplify your reach. We manage relationships and campaigns end-to-end.",
      features: [
        "Influencer outreach",
        "Campaign management",
        "Performance tracking",
        "Contract negotiation",
      ],
      color: "bg-ocean",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-30 pb-30">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-peach blob-shape float-slow opacity-70" />
        <div className="absolute top-40 left-[5%] w-40 h-40 bg-sky blob-shape-2 float-medium opacity-60" />

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
                Our Expertise
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-display font-extrabold leading-tight mb-6"
            >
              Services That{" "}
              <span className="text-gradient-coral">Deliver Results</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              Comprehensive digital marketing solutions designed to elevate your
              brand and drive meaningful growth across all platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
                Full-Spectrum Digital Marketing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything your brand needs to dominate online
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Background decorative gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                    <motion.div
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      className="card-elevated p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border-2 border-transparent hover:border-primary/30 relative overflow-hidden h-full"
                    >
                      {/* Decorative corner accent */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.12 + 0.3,
                        }}
                        viewport={{ once: true }}
                        className={`absolute top-0 right-0 w-24 h-24 ${service.color} opacity-10 blob-shape-3`}
                      />

                      {/* Icon with enhanced styling */}
                      <motion.div
                        className="relative mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12 + 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                          whileHover={{ rotate: 10, scale: 1.15 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Icon size={40} className="text-white" />
                        </motion.div>
                        <motion.div
                          className={`absolute -bottom-2 -right-2 w-6 h-6 ${service.color} rounded-full opacity-60`}
                        />
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12 + 0.2,
                        }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-3 font-display group-hover:text-primary transition-colors"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12 + 0.3,
                        }}
                        viewport={{ once: true }}
                        className="text-muted-foreground mb-6 leading-relaxed"
                      >
                        {service.description}
                      </motion.p>

                      <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12 + 0.4,
                        }}
                        viewport={{ once: true }}
                        className="space-y-3 mb-8"
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.12 + 0.5 + featureIndex * 0.05,
                            }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-sm font-medium"
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${service.color}`}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>

                      <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12 + 0.6,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn hover:gap-3 transition-all bg-gradient-to-r from-primary/10 to-transparent px-4 py-2 rounded-lg"
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-card">
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
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures every campaign is strategic,
                creative, and results-driven.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Animated connection lines between steps */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
              />
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We learn about your business, goals, and target audience.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "We develop a comprehensive plan tailored to your needs.",
                },
                {
                  step: "03",
                  title: "Execution",
                  desc: "Our team brings the strategy to life with creative excellence.",
                },
                {
                  step: "04",
                  title: "Optimize",
                  desc: "We monitor, measure, and continuously improve results.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.15 + 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4 shadow-lg"
                  >
                    {item.step}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-display font-bold text-lg mb-2 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm transition-colors duration-300">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative ">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-transparent to-ocean/10" />
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-display font-bold mb-6"
            >
              Ready to transform your digital presence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              Let's discuss how our services can help your brand achieve its
              goals.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
            >
              Get Started
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
