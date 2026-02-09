import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 w-full section-padding pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              #1 Digital Marketing Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.95] tracking-tight mb-8"
          >
            We Build
            <br />
            <span className="text-gradient glow-text">Digital</span>{" "}
            <span className="text-gradient-accent">Empires</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            Sociolites transforms brands into digital powerhouses through 
            data-driven strategies, creative storytelling, and cutting-edge technology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover-glow hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl glass-card text-foreground font-bold text-lg hover:bg-muted/30 transition-all duration-300"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "200+", label: "Clients" },
              { value: "98%", label: "Retention" },
              { value: "5M+", label: "Revenue Generated" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
