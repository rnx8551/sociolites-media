import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/sociolites_marketing_agency",
    label: "Instagram",
    bg: "bg-peach hover:bg-primary",
  },
  {
    Icon: Twitter,
    href: "https://twitter.com/sociolites",
    label: "Twitter / X",
    bg: "bg-sky hover:bg-ocean",
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com/company/sociolites",
    label: "LinkedIn",
    bg: "bg-mint hover:bg-secondary",
  },
  {
    Icon: Youtube,
    href: "https://youtube.com/@sociolites",
    label: "YouTube",
    bg: "bg-lavender hover:bg-primary",
  },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Social Media Marketing", to: "/services" },
  { label: "SEO & Organic Growth", to: "/services" },
  { label: "Paid Advertising", to: "/services" },
  { label: "Brand Identity & Design", to: "/services" },
  { label: "Content Creation", to: "/services" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Cookies", to: "/cookies" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-muted/30 border-t border-border" aria-label="Footer">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-muted/50 wave-top pointer-events-none" />

      <div className="w-full section-padding pt-16 pb-8 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

            {/* Brand */}
            <div className="md:col-span-4">
              <div className="flex items-center mb-5">
                <img
                  src="/logo-sociolites.png"
                  alt="Sociolites"
                  className="h-12 w-auto object-contain dark:brightness-0 dark:invert"
                  draggable={false}
                />
              </div>

              <p className="text-muted-foreground/90 max-w-xs leading-relaxed text-sm">
                Your digital growth partner. Crafting viral moments and building
                brands people can't stop talking about.
              </p>

              <div className="flex flex-col gap-2 mt-4 text-sm text-muted-foreground">
                <a href="mailto:ashrivastava201819@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={13} /> ashrivastava201819@gmail.com
                </a>
                <a href="tel:+917020698446" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={13} /> +91 70206 98446
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={13} /> Gondia, Maharashtra, India
                </span>
              </div>

              {/* Socials */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map(({ Icon, href, label, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 rounded-2xl ${bg}
                      flex items-center justify-center
                      text-foreground hover:text-primary-foreground
                      hover:scale-110 hover:rotate-6
                      hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                      transition-all duration-300`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                Company
              </h4>
              <div className="flex flex-col gap-3">
                {companyLinks.map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="hover-underline text-muted-foreground text-sm font-medium hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                Services
              </h4>
              <div className="flex flex-col gap-3">
                {serviceLinks.map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="hover-underline text-muted-foreground text-sm font-medium hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-3">
              <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                Stay Updated
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Get weekly growth tips and digital marketing insights.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = (e.target as HTMLFormElement).querySelector('input') as HTMLInputElement;
                  if (input.value) {
                    window.location.href = `mailto:ashrivastava201819@gmail.com?subject=Newsletter Signup&body=Please subscribe me: ${input.value}`;
                  }
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  aria-label="Email address for newsletter"
                  required
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-full bg-muted text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary border border-border"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-4 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 transition-transform"
                >
                  <ArrowUpRight size={16} />
                </button>
              </form>

              <p className="text-xs text-muted-foreground mt-3">
                🔒 No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Sociolites. Crafted with ❤️ in Gondia, India
            </p>
            <div className="flex gap-6">
              {legalLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
