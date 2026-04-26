import { motion } from "framer-motion";
import "./Hero.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("collection")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="hero" id="home">

      <motion.div
        className="container hero-content text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >

        <motion.h1 variants={item}>
          LUXORA
        </motion.h1>

        <motion.h2 variants={item}>
          Elegance in Every Detail
        </motion.h2>

        <motion.p variants={item}>
          Premium leather bags designed for modern sophistication
        </motion.p>

        <motion.button
          className="hero-btn"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToProjects}
        >
          Explore Collection
        </motion.button>

      </motion.div>

    </section>
  );
}