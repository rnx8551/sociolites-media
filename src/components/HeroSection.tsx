import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  Zap,
  Building2,
  Stethoscope,
  Hotel,
  ShoppingBag,
  Sliders,
  PhoneCall,
  CheckCircle2,
  Clock,
  Flame,
  BarChart2,
} from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    icon: Stethoscope,
    pill: "🏥 Healthcare",
    proof: "Ramayana Hospital & Netrasetu",
    result: "+80 Patient Leads / Mo",
    roas: "4.8X ROAS",
    highlight: "WhatsApp Funnel + Meta Search",
    color: "from-blue-500/20 to-cyan-500/20 text-blue-500 border-blue-500/30",
  },
  {
    id: "architecture",
    name: "Architecture & Real Estate",
    icon: Building2,
    pill: "🏛️ Real Estate",
    proof: "Ar. Sandeep Baghele, Nagpur",
    result: "+340% Reach Spike",
    roas: "5.2X ROAS",
    highlight: "High-Ticket Project Inquiries",
    color: "from-coral/20 to-amber-500/20 text-coral border-coral/30",
  },
  {
    id: "hospitality",
    name: "Resorts & Hospitality",
    icon: Hotel,
    pill: "🏨 Hospitality",
    proof: "Bliss International Resort",
    result: "+180% Direct Bookings",
    roas: "4.8X ROAS",
    highlight: "Staycation & Wedding Leads",
    color: "from-purple-500/20 to-pink-500/20 text-purple-500 border-purple-500/30",
  },
  {
    id: "ecommerce",
    name: "D2C & Retail Brands",
    icon: ShoppingBag,
    pill: "🛍️ D2C & Retail",
    proof: "Central India Retail Leaders",
    result: "4.5X Average ROAS",
    roas: "4.5X ROAS",
    highlight: "Scalable Meta & Google Ads",
    color: "from-emerald-500/20 to-lime/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  },
];

const budgetTiers = [
  { budget: "₹25k - ₹50k", leads: "40 - 90+", revenue: "₹1.5L - ₹3.5L", multiplier: "3.8X - 4.5X" },
  { budget: "₹50k - ₹1.5L", leads: "120 - 300+", revenue: "₹4.5L - ₹10L+", multiplier: "4.5X - 5.5X" },
  { budget: "₹1.5L+", leads: "400+ Enterprise", revenue: "₹15L+ Scale", multiplier: "5.0X+ Max" },
];

const HeroSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [budgetIndex, setBudgetIndex] = useState(1);

  const activeInd = industries[selectedIndustry];
  const activeCalc = budgetTiers[budgetIndex];

  return (
    <header
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
      aria-label="Sociolites Digital Marketing Agency Hero"
    >
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-background to-background pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-coral/15 via-ocean/15 to-lime/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber-Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        
        {/* TOP STATUS TICKER */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border shadow-sm mb-8"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs sm:text-sm font-bold text-foreground">
            Sociolites Growth Lab
          </span>
          <span className="text-muted-foreground text-xs">•</span>
          <span className="text-xs text-muted-foreground font-semibold">
            Accepting <strong>2 New Growth Partners</strong> for Q3
          </span>
        </motion.div>

        {/* KINETIC HERO TITLE WITH DYNAMIC INTERACTION */}
        <div className="text-center max-w-5xl mx-auto mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-[4.75rem] font-display font-extrabold tracking-tight leading-[1.04]"
          >
            We Turn Digital Attention Into
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-gradient-multi font-black">
                Predictable Revenue.
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-80" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            No fluff. No vanity metrics. Just high-converting funnels, ROI-obsessed Meta & Google 
            ads, and scroll-stopping creative designed to help Indian businesses dominate.
          </motion.p>
        </div>

        {/* INTERACTIVE NICHE SELECTOR PILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 w-full max-w-3xl"
        >
          {industries.map((ind, i) => {
            const isSelected = selectedIndustry === i;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(i)}
                className={`group px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                  isSelected
                    ? "bg-foreground text-background border-foreground shadow-lg scale-105"
                    : "bg-card/80 backdrop-blur border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                <span>{ind.pill}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* HERO BENTO GRID (THE INNOVATIVE INTERACTIVE CORE) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 mb-12"
        >
          
          {/* BENTO CARD 1: LIVE CAMPAIGN PROOF (Selected Industry) */}
          <div className="lg:col-span-7 rounded-3xl bg-card/85 dark:bg-card/70 backdrop-blur-xl border border-border p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[var(--shadow-card)]">
            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${activeInd.color} blur-3xl pointer-events-none opacity-40`} />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-muted text-foreground">
                    <activeInd.icon size={18} className="text-primary" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Verified Client Outcome
                    </p>
                    <p className="text-sm font-extrabold text-foreground">
                      {activeInd.proof}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Flame size={12} /> {activeInd.roas}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInd.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-foreground mb-2">
                    {activeInd.result}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-6">
                    Strategy: <strong className="text-foreground">{activeInd.highlight}</strong>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Live Telemetry Bar */}
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-border/80">
              <div className="p-3 rounded-2xl bg-muted/40">
                <div className="text-[11px] text-muted-foreground font-semibold">Active Clients</div>
                <div className="text-base sm:text-lg font-extrabold text-foreground font-display mt-0.5">
                  7 Retainers
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-muted/40">
                <div className="text-[11px] text-muted-foreground font-semibold">Scaled Brands</div>
                <div className="text-base sm:text-lg font-extrabold text-coral font-display mt-0.5">
                  20+ Total
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-muted/40">
                <div className="text-[11px] text-muted-foreground font-semibold">Satisfaction</div>
                <div className="text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-400 font-display mt-0.5">
                  98% Retention
                </div>
              </div>
            </div>
          </div>

          {/* BENTO CARD 2: INTERACTIVE ROI & LEADS SIMULATOR */}
          <div className="lg:col-span-5 rounded-3xl bg-card/85 dark:bg-card/70 backdrop-blur-xl border border-border p-6 sm:p-8 flex flex-col justify-between shadow-[var(--shadow-card)] relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sliders size={16} className="text-ocean" />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Growth Estimator
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-ocean/10 text-ocean">
                  AI Projected Output
                </span>
              </div>

              <p className="text-xs text-muted-foreground font-medium mb-4">
                Select your monthly ad spend target:
              </p>

              {/* Budget Tier Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {budgetTiers.map((b, idx) => (
                  <button
                    key={b.budget}
                    onClick={() => setBudgetIndex(idx)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition-all ${
                      budgetIndex === idx
                        ? "bg-primary text-primary-foreground shadow-md scale-102"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {b.budget}
                  </button>
                ))}
              </div>

              {/* Simulated Output Display */}
              <div className="p-4 rounded-2xl bg-muted/50 border border-border space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Estimated Inquiries / Month</span>
                  <span className="font-mono font-bold text-foreground text-sm">
                    {activeCalc.leads}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">Target Revenue Velocity</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {activeCalc.revenue}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-border/60">
                  <span className="text-muted-foreground font-medium">Projected Return (ROAS)</span>
                  <span className="font-display font-black text-coral text-base">
                    {activeCalc.multiplier}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <Link
              to="/contact"
              className="w-full py-3.5 px-4 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all duration-300"
            >
              Get Custom Proposal For My Budget <ArrowRight size={14} />
            </Link>
          </div>

        </motion.div>

        {/* ACTION DOCK: MAIN HIGH-IMPACT CTAs & WHATSAPP SPRINT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-primary text-primary-foreground font-extrabold text-base shadow-[var(--shadow-coral)] hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
          >
            <Sparkles size={18} className="animate-pulse" />
            Claim Free Growth Audit & Strategy Call
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <a
            href="https://wa.me/917020698446?text=Hi%20Sociolites!%20I%20want%20to%20scale%20my%20business%20with%20digital%20marketing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-full bg-card hover:bg-muted border border-border text-foreground font-extrabold text-base shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            Instant WhatsApp Chat (under 5 mins)
          </a>
        </motion.div>

        {/* REPUTATION STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-muted-foreground"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-primary" />
            <span>ROI-First Architecture</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-ocean" />
            <span>Dedicated Growth Manager</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-lime" />
            <span>Zero Lock-in Contracts</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-amber-500" />
            <span>100% Attributed Pipeline</span>
          </div>
        </motion.div>

      </div>
    </header>
  );
};

export default HeroSection;
