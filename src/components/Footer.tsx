import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/sociolites_marketing_agency?igsh=MXJtanBwenV2OWQ2bQ==",
    label: "Instagram",
    bg: "bg-peach hover:bg-primary",
  },
  {
    Icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
    bg: "bg-sky hover:bg-ocean",
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    bg: "bg-mint hover:bg-secondary",
  },
  {
    Icon: Youtube,
    href: "https://youtube.com",
    label: "YouTube",
    bg: "bg-lavender hover:bg-primary",
  },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  "Search Growth",
  "Social Virality",
  "Paid Acquisition",
  "Brand Identity",
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-muted/30 border-t border-border">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-muted/50 wave-top" />

      <div className="w-full section-padding pt-16 pb-8 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-primary blob-shape blur-lg opacity-70" />
                  <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-display font-extrabold text-xl">
                    S
                  </span>
                </div>
                <span className="font-display font-bold text-2xl text-foreground tracking-tight">
                  Sociolites
                </span>
              </div>

              <p className="text-muted-foreground/90 max-w-xs leading-relaxed">
                Your digital growth partner. Crafting viral moments and building
                brands people can’t stop talking about.
              </p>

              <p className="text-xs text-muted-foreground mt-3">
                🌍 Serving clients worldwide
              </p>

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
                    className="relative text-muted-foreground text-sm font-medium hover:text-primary transition-colors
                    after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                Services
              </h4>
              <div className="flex flex-col gap-3">
                {serviceLinks.map((service) => (
                  <span
                    key={service}
                    className="text-muted-foreground text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-3">
              <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                Stay Updated
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Join 5,000+ founders getting weekly growth hacks.
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  aria-label="Email address"
                  required
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-full bg-muted text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  aria-label="Subscribe"
                  className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 transition-transform"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Sociolites. Crafted with ❤️
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link}
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
