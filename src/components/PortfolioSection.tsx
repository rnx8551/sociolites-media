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
    category: "Social Media Marketing",
    result: "+340% engagement",
    color: "bg-primary",
    slug: "social-buzz-campaign",
  },
  {
    image: portfolio2,
    title: "Creative Studio Rebrand",
    category: "Brand Identity",
    result: "2x brand recall",
    color: "bg-ocean",
    slug: "creative-studio-rebrand",
  },
  {
    image: portfolio3,
    title: "FinTech Web Launch",
    category: "Web Design & CRO",
    result: "150% more leads",
    color: "bg-secondary",
    slug: "fintech-web-launch",
  },
  {
    image: portfolio4,
    title: "Viral Video Series",
    category: "Content Creation",
    result: "5M+ views",
    color: "bg-lime",
    slug: "viral-video-series",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      aria-label="Digital marketing case studies"
      className="relative overflow-hidden"
    >
      {/* Diagonal dark band */}
      <div className="diagonal-cut bg-foreground py-32 md:py-40 px-6 md:px-12 lg:px-20">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          >
            <div>
              <span className="pill-badge bg-primary/20 text-primary mb-4">
                🔥 Our Work
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-background tracking-tight mt-4">
                High-Impact <br />
                <span className="text-gradient-coral">
                  Marketing Case Studies
                </span>
              </h2>

              {/* SEO support */}
              <p className="sr-only">
                Explore our digital marketing case studies including social media
                campaigns, branding projects, web design launches, and viral content
                creation delivering measurable growth.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-background/20 text-background font-bold hover:bg-background/10 transition-colors self-start md:self-auto"
            >
              View All Projects
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {projects.map((project, i) => (
              <Link
                key={project.title}
                to={`/portfolio/${project.slug}`}
                aria-label={`View case study: ${project.title}`}
                className={`group relative rounded-3xl overflow-hidden ${
                  i === 0
                    ? "md:col-span-7 md:row-span-2"
                    : i === 1
                    ? "md:col-span-5"
                    : i === 2
                    ? "md:col-span-5"
                    : "md:col-span-12"
                }`}
              >
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="relative h-full cursor-pointer"
                >
                  {/* Image */}
                  <div
                    className={`${
                      i === 0
                        ? "aspect-[4/5] md:aspect-auto md:h-full"
                        : i === 3
                        ? "aspect-[16/7]"
                        : "aspect-square"
                    } overflow-hidden`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} – ${project.category} case study with ${project.result}`}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/40 to-transparent backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
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

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-background">
                      View Case Study
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>

                  {/* Floating arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight size={18} className="text-foreground" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
