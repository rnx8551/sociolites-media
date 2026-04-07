import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-14"
      aria-label="Digital Marketing Agency Hero Section"
    >
      {/* Background noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-24 right-[12%] w-72 h-72 bg-peach blob-shape float-slow opacity-70 blur-xl" />
      <div className="absolute top-44 left-[6%] w-44 h-44 bg-sky blob-shape-2 float-medium opacity-60 blur-lg" />
      <div className="absolute bottom-24 right-[22%] w-36 h-36 bg-mint blob-shape-3 float-fast opacity-50 blur-lg" />
      <div className="absolute bottom-44 left-[18%] w-24 h-24 bg-lavender rounded-full float-medium opacity-70 blur-md" />

      {/* Rotating rings */}
      <div className="absolute top-1/3 right-[6%] w-[26rem] h-[26rem] border border-border rounded-full spin-slow opacity-30" />
      <div
        className="absolute top-1/3 right-[6%] w-[20rem] h-[20rem] border border-primary/20 rounded-full spin-slow opacity-20"
        style={{ animationDirection: "reverse" }}
      />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="pill-badge bg-peach text-coral mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Digital Marketing Company
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="relative text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] tracking-tight mb-6"
            >
              ROI-Driven
              <br />
              <span className="text-gradient-coral relative inline-block">
                Digital Marketing
                <span className="absolute inset-0 blur-3xl bg-primary/30 -z-10" />
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="hsl(12 90% 62%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              That Scales Brands
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              We help startups and enterprises grow with SEO, performance marketing,
              social media strategy, and conversion-focused campaigns that drive
              measurable results.
            </motion.p>

            {/* Hidden SEO content */}
            <p className="sr-only">
              We are a full-service digital marketing agency offering SEO services,
              social media marketing, PPC advertising, branding, and growth marketing
              solutions for businesses worldwide.
            </p>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
              >
                Get Free Strategy Call
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
                <span className="absolute inset-0 rounded-full animate-pulse bg-primary/20 -z-10" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-card/80 backdrop-blur border-2 border-border text-foreground font-bold text-lg transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="w-9 h-9 rounded-full bg-ocean flex items-center justify-center">
                  <Play size={14} className="text-secondary-foreground ml-0.5" />
                </div>
                View Case Studies
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-14 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {["JD", "AK", "SR", "MN"].map((t, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary border-2 border-card flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {t}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-bold text-sm">Trusted by 30+ Brands</div>
                <div className="text-muted-foreground text-xs">
                  ⭐⭐⭐⭐⭐ Rated 4.9/5 by clients
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="blob-shape overflow-hidden w-full aspect-square shadow-2xl"
            >
              <img
                src={heroBg}
                alt="Digital marketing team creating high-performance growth campaigns"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Stat cards */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-10 px-5 py-4 rounded-2xl bg-card/80 backdrop-blur shadow-xl flex gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-peach flex items-center justify-center">
                📈
              </div>
              <div>
                <div className="font-bold text-sm">+340%</div>
                <div className="text-xs text-muted-foreground">Organic Growth</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 px-5 py-4 rounded-2xl bg-card/80 backdrop-blur shadow-xl flex gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-sky flex items-center justify-center">
                🎯
              </div>
              <div>
                <div className="font-bold text-sm">98%</div>
                <div className="text-xs text-muted-foreground">Client Success</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
