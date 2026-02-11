import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Social Buzz Campaign",
    category: "Social Media",
    result: "+340% engagement",
    color: "bg-primary",
  },
  {
    image: portfolio2,
    title: "Creative Studio Rebrand",
    category: "Branding",
    result: "2x brand recall",
    color: "bg-ocean",
  },
  {
    image: portfolio3,
    title: "FineTech Web Launch",
    category: "Web Design",
    result: "150% more leads",
    color: "bg-secondary",
  },
  {
    image: portfolio4,
    title: "Viral Video Series",
    category: "Content Creation",
    result: "5M+ views",
    color: "bg-lime",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="relative overflow-hidden">
      {/* Diagonal colored band */}
      <div className="diagonal-cut bg-foreground py-32 md:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6"
          >
            <div>
              <span className="pill-badge bg-primary/20 text-primary mb-4">
                🔥 Our Work
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-background tracking-tight mt-4">
                Projects That <br />
                <span className="text-gradient-coral">Speak Loud</span>
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-background/20 text-background font-bold hover:bg-background/10 transition-colors self-start md:self-auto"
            >
              View All Projects
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* Asymmetric portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                  i === 0
                    ? "md:col-span-7 md:row-span-2"
                    : i === 1
                      ? "md:col-span-5"
                      : i === 2
                        ? "md:col-span-5"
                        : "md:col-span-12"
                }`}
              >
                <div
                  className={`${i === 0 ? "aspect-[4/5] md:aspect-auto md:h-full" : i === 3 ? "aspect-[16/7]" : "aspect-square"} overflow-hidden`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                  <div
                    className={`pill-badge ${project.color} text-primary-foreground text-xs w-fit mb-3`}
                  >
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-background">
                    {project.title}
                  </h3>
                  <p className="text-background/70 text-sm mt-1 font-medium">
                    {project.result}
                  </p>
                </div>

                {/* Arrow button */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
