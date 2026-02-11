import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-10"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-peach blob-shape float-slow opacity-70" />
      <div className="absolute top-40 left-[5%] w-40 h-40 bg-sky blob-shape-2 float-medium opacity-60" />
      <div className="absolute bottom-20 right-[20%] w-32 h-32 bg-mint blob-shape-3 float-fast opacity-50" />
      <div className="absolute bottom-40 left-[15%] w-20 h-20 bg-lavender rounded-full float-medium opacity-70" />

      {/* Decorative circles */}
      <div className="absolute top-1/3 right-[5%] w-96 h-96 border-2 border-border rounded-full spin-slow opacity-30" />
      <div
        className="absolute top-1/3 right-[5%] w-80 h-80 border border-primary/20 rounded-full spin-slow opacity-20"
        style={{ animationDirection: "reverse" }}
      />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pill-badge bg-peach text-coral mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Digital Marketing Experts
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] tracking-tight mb-6"
            >
              We Make
              <br />
              Brands{" "}
              <span className="text-gradient-coral relative">
                Go Viral
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
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              Sociolites crafts scroll-stopping content, data-driven campaigns,
              and unforgettable brand experiences that dominate social feeds.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
              >
                Start Growing
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-card border-2 border-border text-foreground font-bold text-lg hover:border-primary/30 hover:shadow-[var(--shadow-soft)] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center">
                  <Play
                    size={14}
                    className="text-secondary-foreground ml-0.5"
                  />
                </div>
                See Our Work
              </Link>
            </motion.div>

            {/* Trusted by */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {["bg-primary", "bg-ocean", "bg-lime", "bg-secondary"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full ${color} border-2 border-card flex items-center justify-center text-xs font-bold text-primary-foreground`}
                    >
                      {["JD", "AK", "SR", "MN"][i]}
                    </div>
                  ),
                )}
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">
                  200+ Happy Clients
                </div>
                <div className="text-muted-foreground text-xs">
                  ⭐⭐⭐⭐⭐ 4.9/5 rating
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Hero image with unique shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image with blob shape */}
              <div className="blob-shape overflow-hidden w-full aspect-square">
                <img
                  src={heroBg}
                  alt="Vibrant 3D shapes representing creative digital marketing"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-8 card-elevated px-5 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-peach flex items-center justify-center text-lg">
                  📈
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">+340%</div>
                  <div className="text-muted-foreground text-xs">
                    Growth Rate
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 card-elevated px-5 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-sky flex items-center justify-center text-lg">
                  🎯
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">98%</div>
                  <div className="text-muted-foreground text-xs">
                    Success Rate
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
