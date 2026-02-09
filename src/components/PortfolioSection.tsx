import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    image: portfolio1,
    title: "NexGen Analytics",
    category: "Social Media Campaign",
    description: "300% increase in social engagement through targeted content strategy.",
  },
  {
    image: portfolio2,
    title: "MAGK Studios",
    category: "Brand Identity",
    description: "Complete brand overhaul resulting in 2x brand recognition.",
  },
  {
    image: portfolio3,
    title: "DataFlow Pro",
    category: "SEO & Analytics",
    description: "First page Google rankings for 50+ competitive keywords.",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mt-4">
            Our <span className="text-gradient-accent">Best Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">{project.category}</span>
                <h3 className="text-xl font-display font-bold text-foreground mt-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
                <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                  View Case Study <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
