import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Search } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const articles = [
    {
      id: 1,
      title:
        "The Psychology Behind Viral Content: What Makes Videos Go Viral in 2026",
      excerpt:
        "Learn the science behind viral content. We break down the psychological triggers that make people want to share, engage, and talk about content.",
      category: "Content Strategy",
      author: "Sarah Johnson",
      date: "February 10, 2026",
      readTime: "8 min read",
      image: "bg-gradient-to-br from-coral to-pink-400",
    },
    {
      id: 2,
      title: "TikTok Algorithm Deep Dive: How to Get Your Content on the FYP",
      excerpt:
        "Understanding the TikTok algorithm is crucial for success. In this guide, we explain how the algorithm works and how you can optimize your content.",
      category: "Platform Guides",
      author: "Marcus Chen",
      date: "February 8, 2026",
      readTime: "12 min read",
      image: "bg-gradient-to-br from-ocean to-cyan-400",
    },
    {
      id: 3,
      title: "2026 Social Media Trends: What Every Brand Should Know",
      excerpt:
        "From short-form video dominance to the rise of community-focused features, discover the trends that will shape social media in 2026.",
      category: "Trends",
      author: "Emily Rodriguez",
      date: "February 5, 2026",
      readTime: "10 min read",
      image: "bg-gradient-to-br from-lime to-green-400",
    },
    {
      id: 4,
      title: "How to Build an Authentic Community on Social Media",
      excerpt:
        "Community is the new currency. Learn how to build a genuine, engaged community that actually cares about your brand.",
      category: "Community Management",
      author: "David Thompson",
      date: "January 30, 2026",
      readTime: "9 min read",
      image: "bg-gradient-to-br from-lavender to-purple-400",
    },
    {
      id: 5,
      title: "ROI Hacks: How to Calculate and Improve Your Social Media ROI",
      excerpt:
        "Not sure if your social media efforts are paying off? We show you exactly how to measure ROI and where to optimize for better results.",
      category: "Analytics",
      author: "Sarah Johnson",
      date: "January 25, 2026",
      readTime: "11 min read",
      image: "bg-gradient-to-br from-sky to-blue-400",
    },
    {
      id: 6,
      title: "The Complete Guide to Influencer Marketing",
      excerpt:
        "From finding the right influencers to negotiating contracts, this complete guide covers everything you need to know about influencer partnerships.",
      category: "Influencer Marketing",
      author: "Marcus Chen",
      date: "January 20, 2026",
      readTime: "15 min read",
      image: "bg-gradient-to-br from-peach to-orange-400",
    },
    {
      id: 7,
      title: "Content Calendars That Actually Work: Planning for Success",
      excerpt:
        "A well-planned content calendar is the foundation of consistent posting. Learn how to create a calendar that keeps you organized and on-brand.",
      category: "Content Strategy",
      author: "Emily Rodriguez",
      date: "January 15, 2026",
      readTime: "7 min read",
      image: "bg-gradient-to-br from-mint to-teal-400",
    },
    {
      id: 8,
      title:
        "Video Content Dominates: How to Leverage Reels, Shorts, and TikToks",
      excerpt:
        "Video is king. Discover strategies for creating compelling short-form video content that drives engagement and grows your audience.",
      category: "Content Strategy",
      author: "David Thompson",
      date: "January 10, 2026",
      readTime: "10 min read",
      image: "bg-gradient-to-br from-coral to-red-400",
    },
  ];

  const categories = [
    "All",
    "Content Strategy",
    "Platform Guides",
    "Trends",
    "Community Management",
    "Analytics",
    "Influencer Marketing",
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
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
                Blog & Insights
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-display font-extrabold leading-tight mb-6"
            >
              Stories, Strategies, and{" "}
              <span className="text-gradient-coral">Secrets to Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              Stay up-to-date with the latest social media trends, strategies,
              and insights from our team of experts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background sticky top-20 z-30">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-card border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                />
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative py-20 bg-background">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-6xl mx-auto">
            {filteredArticles.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-lg text-muted-foreground">
                  No articles found. Try adjusting your search or filters.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="card-elevated overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group cursor-pointer"
                  >
                    {/* Image */}
                    <div
                      className={`${article.image} h-48 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-primary bg-peach px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-xs text-muted-foreground flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {article.date}
                          </span>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-primary group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-20 bg-card">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-transparent to-ocean/10" />
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter for weekly insights, tips, and
                strategies delivered to your inbox.
              </p>

              <form className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-6 py-3 rounded-full bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
