import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div
        className={`max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-card/80 backdrop-blur-xl shadow-[var(--shadow-elevated)] border border-border"
            : "bg-transparent"
        }`}
      >
        {/* Logo - unique pill shape */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-primary blob-shape" />
            <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-display font-extrabold text-lg">
              S
            </span>
          </div>
          <span className="font-display font-bold text-xl text-foreground tracking-tight">
            Sociolites
          </span>
        </Link>

        {/* Desktop Links - pill-shaped hover */}
        <div className="hidden md:flex items-center gap-1 bg-muted/60 rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(link.href)
                  ? "text-foreground bg-card"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA - unique shape */}
        <Link
          to="/contact"
          className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
        >
          Let's Talk 🚀
        </Link>

        {/* Mobile Toggle - coral blob */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu - unique shape */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="max-w-6xl mx-auto mt-3 bg-card rounded-3xl p-6 shadow-[var(--shadow-elevated)] border border-border md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3.5 rounded-2xl font-semibold text-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-peach text-coral"
                      : "text-foreground hover:bg-peach"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 block px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-center text-lg hover:scale-105 transition-transform"
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
