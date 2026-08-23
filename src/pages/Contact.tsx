import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brand: "",
    goal: "",
    challenge: "",
  });

  useEffect(() => {
    document.title = "Contact | Sociolites — Get a Free Strategy Call";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const body = `Brand / Startup: ${formData.brand}\nGoal: ${formData.goal}\n\nBiggest Challenge:\n${formData.challenge}`;
    // Open mailto in new tab so user stays on page
    window.open(
      `mailto:thesociolites@gmail.com?subject=New Strategy Inquiry&body=${encodeURIComponent(body)}`,
      "_blank"
    );
    setTimeout(() => {
      setFormData({ brand: "", goal: "", challenge: "" });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const fadeUp = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20 text-center section-padding bg-gradient-to-r from-coral/5 to-ocean/5">
        <motion.h1
          {...fadeUp}
          className="text-5xl sm:text-6xl font-display font-extrabold max-w-4xl mx-auto"
        >
          Your Journey is{" "}
          <span className="text-gradient-coral">Our Journey.</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          We don’t believe in “one size fits all.” Tell us your pain
          points, and let’s design a{" "}
          <span className="font-semibold text-foreground">
            custom growth plan
          </span>{" "}
          together.
        </motion.p>
      </section>

      {/* MAIN SECTION */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <motion.div {...fadeUp} className="space-y-8">
            <span className="pill-badge bg-peach text-coral">
              Let’s Talk Business
            </span>

            <h2 className="text-4xl font-display font-bold leading-tight">
              Growth isn’t random.<br />
              <span className="text-gradient-coral">
                It’s engineered.
              </span>
            </h2>

            <p className="text-muted-foreground text-lg">
              Whether you're struggling with visibility, leads, or
              conversions — we’ll break it down and give you a clear
              path forward.
            </p>

            <ul className="space-y-4 text-sm">
              {[
                "Custom strategy tailored to your brand",
                "Clear growth roadmap from day one",
                "Zero-pressure, zero-jargon conversation",
                "Available for global projects",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-coral" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground">
              ⚡ Average response time: <strong>&lt; 24 hours</strong>
            </p>
          </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-elevated p-8 md:p-10 flex flex-col items-center text-center gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">Message Sent! 🎉</h3>
                  <p className="text-muted-foreground">
                    Your email client opened with your inquiry. We typically respond within 24 hours.
                  </p>
                </div>
                <a
                  href={`https://wa.me/917020698446?text=${encodeURIComponent('Hi Sociolites! I just sent an email inquiry and would love to chat.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  Also ping us on WhatsApp <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                {...fadeUp}
                onSubmit={handleSubmit}
                className="card-elevated p-8 md:p-10 space-y-6"
              >
            <h3 className="text-2xl font-display font-bold">
              Tell us about{" "}
              <span className="text-gradient-coral">your brand</span>
            </h3>

            {/* Brand */}
            <div className="input-wrapper">
              <input
                name="brand"
                placeholder=" "
                required
                value={formData.brand}
                onChange={handleChange}
                className="input-field"
              />
              <label className="input-label">
                Name of Brand / Startup
              </label>
            </div>

            {/* Goal */}
            <div className="input-wrapper">
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                className="input-field appearance-none"
              >
                <option value="" disabled hidden />
                <option>SEO & Local Visibility</option>
                <option>Lead Generation</option>
                <option>Branding & Identity</option>
                <option>Social Media Growth</option>
                <option>Performance Ads</option>
                <option>Full Growth Strategy</option>
              </select>
              <label className="input-label">Your Goal</label>
            </div>

            {/* Challenge */}
            <div className="input-wrapper">
              <textarea
                name="challenge"
                placeholder=" "
                rows={5}
                required
                value={formData.challenge}
                onChange={handleChange}
                className="input-field resize-none"
              />
              <label className="input-label">
                What’s your biggest challenge right now?
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition"
            >
              {isSubmitting ? "Sending…" : "Let’s Build Together"}
              <Send size={18} />
            </button>

                <p className="text-xs text-muted-foreground text-center">
                  🔒 Your details stay private. No spam, ever.
                </p>
              </motion.form>
            )}
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:thesociolites@gmail.com"
            className="card-elevated p-6 rounded-2xl hover:shadow-lg transition"
          >
            <Mail className="text-coral mb-3" />
            <p className="font-semibold">Email</p>
            <p className="text-sm text-muted-foreground">
              thesociolites@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+917020698446"
            className="card-elevated p-6 rounded-2xl hover:shadow-lg transition"
          >
            <Phone className="text-coral mb-3" />
            <p className="font-semibold">Call / WhatsApp</p>
            <p className="text-sm text-muted-foreground">
              +91 70206 98446
            </p>
          </a>

          {/* Location */}
          <div className="card-elevated p-6 rounded-2xl">
            <MapPin className="text-coral mb-3" />
            <p className="font-semibold">Location</p>
            <p className="text-sm text-muted-foreground">
              Gondia, Maharashtra <br />
              (Available for Global Projects)
            </p>
          </div>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-4 mt-10">
          {[Instagram, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-primary transition"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="section-padding">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden card-elevated h-96">
          <iframe
            loading="lazy"
            src="https://www.google.com/maps?q=Gondia%20Maharashtra&output=embed"
            className="w-full h-full border-0"
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;