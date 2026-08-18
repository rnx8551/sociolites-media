import { motion } from "framer-motion";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col">
      <Navbar />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-peach blob-shape float-slow opacity-50 blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-sky blob-shape-2 float-medium opacity-40 blur-2xl pointer-events-none" />

      <main className="flex-1 flex items-center justify-center section-padding">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Giant 404 */}
            <div className="relative inline-block mb-8">
              <span className="text-[12rem] md:text-[16rem] font-display font-extrabold text-muted/40 leading-none select-none">
                404
              </span>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl"
              >
                🤔
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl font-display font-extrabold mb-4"
            >
              Page Not Found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
            >
              Looks like this page went on a digital vacation. <br />
              Let's get you back on track.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 hover:shadow-[var(--shadow-coral)] transition-all duration-300"
              >
                <Home size={20} />
                Back to Home
              </Link>

              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-border text-foreground font-bold text-lg hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {[
                { label: "Services", to: "/services" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium hover:text-primary hover:bg-muted/80 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
