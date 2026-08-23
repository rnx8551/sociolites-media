import { motion } from "framer-motion";
import { Shield, Lock, Eye, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Privacy = () => {
  const { pathname } = useLocation();
  const isTerms = pathname === "/terms";
  const isCookies = pathname === "/cookies";

  useEffect(() => {
    const title = isTerms ? "Terms of Service" : isCookies ? "Cookie Policy" : "Privacy Policy";
    document.title = `${title} | Sociolites`;
  }, [pathname, isTerms, isCookies]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-8 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-peach flex items-center justify-center">
                {isCookies ? <Eye size={24} className="text-primary" /> : isTerms ? <Shield size={24} className="text-primary" /> : <Lock size={24} className="text-primary" />}
              </div>
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Legal</span>
                <h1 className="text-3xl font-display font-extrabold">
                  {isTerms ? "Terms of Service" : isCookies ? "Cookie Policy" : "Privacy Policy"}
                </h1>
              </div>
            </div>
            <p className="text-muted-foreground mb-2">Last updated: August 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-4 pb-20">
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card-elevated p-8 md:p-12 space-y-8"
          >
            {!isTerms && !isCookies && (
              <>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    When you contact us through our website or forms, we collect your name, email address, phone number, and business information you provide. We use this information solely to respond to your inquiry and provide our services.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use your information to: communicate with you about our services, send newsletters (only with your consent), improve our website, and fulfill our contractual obligations. We do not sell, rent, or share your personal information with third parties for marketing purposes.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">3. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">4. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, correct, or delete your personal data at any time. Contact us at thesociolites@gmail.com to exercise these rights.
                  </p>
                </div>
              </>
            )}

            {isTerms && (
              <>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Sociolites' website and services, you agree to these Terms of Service. If you do not agree, please do not use our services.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">2. Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sociolites provides digital marketing services including SEO, social media management, paid advertising, brand identity, content creation, and growth strategy. The specific scope of services is defined in individual service agreements.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">3. Client Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Clients are responsible for providing accurate business information, granting necessary access to platforms, and timely feedback and approvals. Delays caused by the client may affect delivery timelines.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">4. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon full payment, clients own all deliverables created for them. Sociolites retains the right to showcase work in portfolios and case studies unless otherwise agreed in writing.
                  </p>
                </div>
              </>
            )}

            {isCookies && (
              <>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">What Are Cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files stored on your device when you visit our website. They help us understand how you use our site and improve your experience.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">How We Use Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies for: analytics (understanding traffic and usage patterns), preferences (remembering your theme choice), and performance (optimizing page load times).
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Managing Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You can control and delete cookies through your browser settings. Disabling cookies may affect some website functionality.
                  </p>
                </div>
              </>
            )}

            <div className="pt-6 border-t border-border">
              <h2 className="text-2xl font-display font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For any questions about this policy, please reach out:
              </p>
              <a
                href="mailto:thesociolites@gmail.com"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <Mail size={16} /> thesociolites@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
