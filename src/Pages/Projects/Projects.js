import React from "react";
import NumberCard from "../../Components/NumberCard/NumberCard";
import Slider from "../../Components/Slider/Slider";
import "./Project.css";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div id="projects" className="container">
      <section className="project-section">
        <div className="project-title flex">
          <motion.p initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>My Portfolio</motion.p>
          <motion.h3 initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>Awesome Work</motion.h3>
        </div>

   
        <NumberCard/>
  
        <motion.div className="project-container" initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>
          <Slider />
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
