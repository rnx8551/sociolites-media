import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Budget: ${formData.budget}

Message:
${formData.message}
`;

    window.location.href = `mailto:ashrivastava201819@gmail.com?subject=New Contact Inquiry&body=${encodeURIComponent(
      body
    )}`;

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 500);
  };

  const fadeUp = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/80 to-background overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-32 section-padding bg-gradient-to-r from-coral/5 to-ocean/5">
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-display font-extrabold max-w-4xl mx-auto text-center mb-6"
        >
          Let’s <span className="text-gradient-coral">grow your brand</span> with strategy and performance.
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto text-center"
        >
          We combine strategy, content, and conversion-focused campaigns to scale your business.
        </motion.p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding max-w-6xl mx-auto">
        <motion.h2
          {...fadeUp}
          className="text-3xl font-display font-bold text-center mb-12"
        >
          Why Choose Sociolites
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Proven campaigns with 3.2x ROI",
            "Dedicated strategy team",
            "Transparent, no-pressure collaboration",
          ].map((text, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: 0.1 * i }}
              className="card-elevated p-8 rounded-2xl text-center hover:shadow-lg transition"
            >
              <Star className="mx-auto mb-4 text-coral" />
              <p className="font-medium">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span>⭐ 4.9/5 Client Satisfaction</span>
          <span>🚀 120+ Campaigns Launched</span>
          <span>📈 Avg 3.2× ROI</span>
        </div>
      </section>

      {/* FORM CTA TEXT */}
      <section className="pb-16">
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg font-semibold">
            Not sure where to start?
          </p>
          <p className="text-muted-foreground mt-2">
            Fill out the form below to receive a <strong>custom growth roadmap</strong> for your business.
          </p>
        </motion.div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative bg-card section-padding">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <motion.div {...fadeUp} className="sticky top-28 space-y-6">
            <span className="pill-badge bg-peach text-coral">Free Strategy Consultation</span>
            <h2 className="text-4xl font-display font-bold leading-tight">
              Let’s map your growth.<br />
              <span className="text-gradient-coral">No guesswork. Just results.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether scaling ads, building brand authority, or optimizing conversions, this starts with clarity.
            </p>
            <ul className="space-y-3 text-sm font-medium">
              <li>✅ Custom strategy review</li>
              <li>✅ Clear growth roadmap</li>
              <li>✅ Zero-pressure conversation</li>
            </ul>
            <p className="text-sm text-muted-foreground">⚡ Average response time: <strong>&lt; 24 hours</strong></p>
          </motion.div>

          {/* FORM */}
          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit}
            className="card-elevated p-8 md:p-10 space-y-8 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-coral/10 blur-3xl rounded-full" />

            {/* STEP 1 */}
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase text-primary">Step 1 · About You</p>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="input-wrapper">
                  <input
                    name="name"
                    placeholder=" "
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                  />
                  <label className="input-label">Full Name</label>
                  <Mail size={18} className="input-icon" />
                </div>
                <div className="input-wrapper">
                  <input
                    name="email"
                    type="email"
                    placeholder=" "
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                  <label className="input-label">Work Email</label>
                  <Mail size={18} className="input-icon" />
                </div>
              </div>
              <div className="input-wrapper">
                <input
                  name="company"
                  placeholder=" "
                  value={formData.company}
                  onChange={handleChange}
                  className="input-field"
                />
                <label className="input-label">Company / Brand</label>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase text-primary">Step 2 · Project Details</p>
              <div className="input-wrapper">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="input-field appearance-none"
                >
                  <option value="" disabled hidden />
                  <option>₹25k – ₹50k</option>
                  <option>₹50k – ₹1L</option>
                  <option>₹1L – ₹3L</option>
                  <option>₹3L+</option>
                </select>
                <label className="input-label">Monthly Budget</label>
              </div>
              <div className="input-wrapper">
                <textarea
                  name="message"
                  placeholder=" "
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field resize-none"
                />
                <label className="input-label">What results are you aiming for?</label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-primary text-primary-foreground
              font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Request Strategy Call"}
              <Send size={18} />
            </button>
            <p className="text-xs text-muted-foreground text-center">🔒 Your details stay private. No spam.</p>
          </motion.form>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="section-padding bg-background">
        <motion.div {...fadeUp} className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-12">What happens after you submit?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "We review your goals & challenges",
              "You get a custom growth plan",
              "We align on next steps — only if it makes sense",
            ].map((text, i) => (
              <div key={i} className="card-elevated p-6 hover:shadow-lg transition rounded-2xl">
                <CheckCircle className="mx-auto mb-4 text-primary" />
                <p className="font-medium">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT CARDS */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Email Us",
              value: "ashrivastava201819@gmail.com",
              icon: <Mail size={22} />,
              link: "mailto:ashrivastava201819@gmail.com",
              color: "from-coral/10",
              cta: "Send Email →",
            },
            {
              title: "Call / WhatsApp",
              value: "+91 70206 98446",
              icon: <Phone size={22} />,
              link: "tel:+917020698446",
              color: "from-ocean/10",
              cta: "Call Now →",
            },
            {
              title: "Office Location",
              value: "Gondia, Maharashtra",
              icon: <MapPin size={22} />,
              link: "#map",
              color: "from-lime/10",
              cta: "View on Map →",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative card-elevated p-8 rounded-3xl group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} to-transparent text-white flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-xl font-display font-extrabold tracking-tight">{item.value}</p>
              <span className="inline-block mt-5 text-sm font-semibold text-primary">{item.cta}</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="section-padding">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden card-elevated h-96">
          <iframe
            loading="lazy"
            title="Sociolites Location"
            src="https://www.google.com/maps?q=Gondia%20Maharashtra&output=embed"
            className="w-full h-full border-0"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
