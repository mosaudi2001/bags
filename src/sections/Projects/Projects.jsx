import { useNavigate } from "react-router-dom";
import projects from "../../data/projects";
import "./Projects.css";
import { motion } from "framer-motion";

export default function Projects() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="collection" className="projects-section">
      <div className="projects-container">

        {/* TITLE */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Signature Collection
        </motion.h2>

        {/* GRID */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {projects.map((p) => (
            <motion.div
              key={p.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/project/${p.id}`)}
            >

              <div className="img-wrapper">
                <img src={p.images[0]} alt={p.name} />
              </div>

              <div className="project-info">
                <h5>{p.name}</h5>
                <p>{p.description}</p>

                <div className="bottom">
                  <span className="price">${p.price}</span>
                  <span className="view">Discover →</span>
                </div>
              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}