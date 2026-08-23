import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => {
        const next = isDark ? "light" : "dark";
        setTheme(next);
        sessionStorage.setItem("sociolites-manual-theme", next);
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 rounded-full flex items-center justify-center bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-[var(--shadow-elevated)] border border-border"
          : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Sociolites home">
          <img
            src="/logo-sociolites.png"
            alt="Sociolites"
            className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
            draggable={false}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-muted/60 rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.href)
                ? "text-foreground bg-card shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
          >
            Let's Talk 🚀
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-6xl mx-auto mt-3 bg-card rounded-3xl p-6 shadow-[var(--shadow-elevated)] border border-border md:hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-2xl font-semibold text-base transition-colors ${isActive(link.href)
                      ? "bg-peach text-coral"
                      : "text-foreground hover:bg-muted"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-4 block px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-center text-base hover:scale-105 transition-transform"
            >
              Let's Talk 🚀
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
