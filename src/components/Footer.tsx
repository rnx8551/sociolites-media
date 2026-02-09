import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 pt-16 pb-8 relative overflow-hidden">
      {/* Top wave shape */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-muted/50 wave-top" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand - takes more space */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-primary blob-shape" />
                <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-display font-extrabold text-xl">S</span>
              </div>
              <span className="font-display font-bold text-2xl text-foreground tracking-tight">
                Sociolites
              </span>
            </div>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Your digital growth partner. Crafting viral moments and building brands that people can't stop talking about.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, bg: "bg-peach hover:bg-primary" },
                { Icon: Twitter, bg: "bg-sky hover:bg-ocean" },
                { Icon: Linkedin, bg: "bg-mint hover:bg-secondary" },
                { Icon: Youtube, bg: "bg-lavender hover:bg-primary" },
              ].map(({ Icon, bg }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-11 h-11 rounded-2xl ${bg} flex items-center justify-center text-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-3">
              {["About Us", "Careers", "Blog", "Contact"].map((link) => (
                <a key={link} href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-3">
              {["SEO", "Social Media", "PPC Ads", "Branding"].map((link) => (
                <a key={link} href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">Get weekly marketing tips and insights.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full bg-muted border-none text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-105 transition-transform">
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
              <a key={link} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
