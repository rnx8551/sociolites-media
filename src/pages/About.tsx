import { motion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Everything we do is focused on delivering measurable results and ROI for our clients.",
    },
    {
      icon: Zap,
      title: "Creative Excellence",
      description:
        "We push creative boundaries to make your brand stand out and capture attention.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with your team as an extension of your business, not just vendors.",
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description:
        "We stay ahead of trends and constantly evolve our strategies to keep you competitive.",
    },
  ];

  const team = [
    {
      name: "Akanksha Shrivastava",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Marcus Chen",
      role: "Head of Strategy",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Lead",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "David Thompson",
      role: "Analytics & Data",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-peach blob-shape float-slow opacity-70" />
        <div className="absolute top-40 left-[5%] w-40 h-40 bg-sky blob-shape-2 float-medium opacity-60" />
        <div className="absolute bottom-20 right-[20%] w-32 h-32 bg-mint blob-shape-3 float-fast opacity-50" />

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
                Our Story
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-display font-extrabold leading-tight mb-6"
            >
              We're on a mission to make your brand{" "}
              <span className="text-gradient-coral">unforgettable</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Founded in 2018, Sociolites has grown from a small team of social
              media enthusiasts to a full-service digital marketing agency
              trusted by over 150 brands across industries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative bg-card">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left - Story Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-display font-bold mb-6">
                  The Sociolites Story
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  What started as a passion project to help local businesses
                  shine on social media has evolved into something much bigger.
                  Our founder Sarah noticed that most brands weren't leveraging
                  social media effectively, and decided to change that.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  We began with a simple philosophy: treat every client's brand
                  like it's our own. That meant staying late, testing new
                  strategies, and celebrating wins as if they were ours. It
                  still does.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Today, we're proud to work with brands of all sizes, from
                  emerging startups to established companies. Each day, our team
                  is focused on creating content that resonates, campaigns that
                  convert, and strategies that drive real business growth.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "6+", label: "Years" },
                    { number: "150+", label: "Brands" },
                    { number: "2.5B+", label: "Impressions" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-primary">
                        {stat.number}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="rounded-3xl h-96 overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                  alt="Sociolites Office"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape our culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    viewport={{ once: true }}
                    className="card-elevated p-8 hover:shadow-[var(--shadow-card)] transition-all group relative overflow-hidden border-2 border-transparent hover:border-primary/30"
                  >
                    {/* Decorative accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-coral flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative  bg-card">
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
                Meet the Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Creative minds working together to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="card-elevated p-4 mb-4 border-2 border-transparent group-hover:border-primary/30 transition-all relative overflow-hidden">
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="rounded-2xl w-full h-56 mb-4 relative overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg font-display font-bold mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative bg-background">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Why Choose Sociolites?
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "Proven Track Record",
                  desc: "6+ years of delivering results across hundreds of campaigns and brands.",
                },
                {
                  title: "Expert Team",
                  desc: "Each team member is a specialist in their field with years of experience.",
                },
                {
                  title: "Custom Strategies",
                  desc: "No cookie-cutter approaches. We develop strategies tailored to your unique needs.",
                },
                {
                  title: "Transparent Reporting",
                  desc: "Clear, detailed analytics and regular updates so you always know what's working.",
                },
                {
                  title: "24/7 Support",
                  desc: "Your success is our priority. We're always available when you need us.",
                },
                {
                  title: "Latest Tools & Trends",
                  desc: "We use cutting-edge tools and stay ahead of platform updates and algorithm changes.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="card-elevated p-6 flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-card">
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
              Let's build something amazing together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              Ready to partner with a team that cares about your success as much
              as you do?
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
