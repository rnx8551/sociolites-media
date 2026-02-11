import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send email using mailto with form data
    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0ACompany: ${formData.company}%0A%0AMessage:%0A${formData.message}`;
    const subject = "New Contact Form Submission";
    window.location.href = `mailto:ashrivastava201819@gmail.com?subject=${subject}&body=${emailBody}`;
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ashrivastava201819@gmail.com",
      href: "mailto:ashrivastava201819@gmail.com",
      color: "bg-coral",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7020698446",
      href: "tel:+917020698446",
      color: "bg-ocean",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Marartoli, Gondia, Maharashtra, India 441614",
      href: "#",
      color: "bg-lime",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-20">
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
                Get In Touch
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-display font-extrabold leading-tight mb-6"
            >
              Let's Start a{" "}
              <span className="text-gradient-coral">Conversation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mb-12"
            >
              Have a project in mind? Let's discuss how Sociolites can help your
              brand succeed. We're here to answer any questions you have.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-lg max-w-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative  bg-background">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-[5%] w-72 h-72 bg-peach blob-shape opacity-20 float-slow" />
        <div className="absolute bottom-0 right-[10%] w-96 h-96 bg-sky blob-shape-2 opacity-15 float-medium" />

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
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're always excited to discuss new projects and ideas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Background glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${info.color}/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                    />

                    <div className="card-elevated p-8 text-center hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border-2 border-transparent hover:border-primary/30 relative overflow-hidden">
                      {/* Decorative corner shapes */}
                      <div
                        className={`absolute top-0 right-0 w-20 h-20 ${info.color} opacity-10 rounded-full blob-shape`}
                      />
                      <div
                        className={`absolute bottom-0 left-0 w-16 h-16 ${info.color} opacity-5 rounded-full blob-shape-2`}
                      />

                      {/* Icon */}
                      <div className="relative mb-6">
                        <div
                          className={`w-20 h-20 rounded-2xl ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          <Icon size={40} className="text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative bg-card">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="card-elevated p-10 relative overflow-hidden">
              {/* Decorative background shapes */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-coral/5 blob-shape-3 opacity-50" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-ocean/5 blob-shape opacity-40" />

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold mb-3"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-muted border-2 border-border focus:border-primary focus:bg-background focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-muted border-2 border-border focus:border-primary focus:bg-background focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="company"
                    className="block text-sm font-bold mb-3"
                  >
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-muted border-2 border-border focus:border-primary focus:bg-background focus:outline-none transition-all"
                    placeholder="Your company name"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl bg-muted border-2 border-border focus:border-primary focus:bg-background focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="relative  bg-card">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Can't find the answer you're looking for? Feel free to contact
                us directly.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "What is your typical turnaround time for a project?",
                  a: "Most projects take 4-8 weeks depending on scope. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  q: "Do you work with small businesses or startups?",
                  a: "Absolutely! We work with brands of all sizes. We have packages designed specifically for startups and SMBs.",
                },
                {
                  q: "How do you measure success?",
                  a: "We measure success through clear KPIs established before the project begins. This could be engagement, conversions, reach, or revenue growth.",
                },
                {
                  q: "What platforms do you specialize in?",
                  a: "We have expertise across all major platforms including Instagram, TikTok, Facebook, LinkedIn, YouTube, and emerging platforms.",
                },
                {
                  q: "Can you help with influencer partnerships?",
                  a: "Yes! We manage the entire influencer marketing process from identifying the right creators to campaign execution and reporting.",
                },
                {
                  q: "What's included in your ongoing management services?",
                  a: "Our ongoing services include strategy development, content creation, community management, analytics, and optimization.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="card-elevated p-6"
                >
                  <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Response Time Banner */}
      <section className="relative  bg-gradient-to-r from-coral/20 via-ocean/20 to-lime/20">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold text-primary mb-2">
                Quick Response
              </p>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                We typically respond within 24 hours
              </h3>
              <p className="text-muted-foreground">
                Whether you're ready to start or just exploring options, we're
                excited to hear from you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative bg-background">
        <div className="relative z-10 w-full section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                Visit Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find us in the heart of Gondia, Maharashtra. We'd love to meet
                you in person!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-elevated overflow-hidden rounded-3xl h-96"
            >
              <iframe
                title="Marartoli, Gondia, Maharashtra, India Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.8!2d80.1854!3d21.4635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sMarartoli%20Gondia%20441614!2sIndia!5e0!3m2!1sen!2s!4v1707654321098"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Office Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-display font-bold mb-2">
                Sociolites Office
              </h3>
              <p className="text-lg text-muted-foreground">
                Gondia, Maharashtra 441601
              </p>
              <p className="text-lg text-muted-foreground mb-6">India</p>
              <a
                href="https://www.google.com/maps/search/Gondia+Maharashtra+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform"
              >
                <MapPin size={18} />
                View on Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
