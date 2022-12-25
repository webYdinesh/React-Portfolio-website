import React from "react";
import { FaAward } from "react-icons/fa";
import { IoMdGitNetwork } from "react-icons/io";
import { motion } from "framer-motion";
import "./AboutCard.css";
const AboutCard = () => {
  return (
    <>
      <motion.div className="about-card flex" initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }} > 
        <FaAward fontSize={30} />
        <h5>Experience</h5>
        <p>0-1 Year</p>
      </motion.div>
      <motion.div className="about-card flex" initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}>
        <IoMdGitNetwork fontSize={30} />
        <h5>Projects</h5>
        <p>15+</p>
      </motion.div>
      <motion.div className="about-card flex" initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1.4 }}
              whileInView={{ y: 0, opacity: 1 }}>
        <FaAward fontSize={30} />
        <h5>Enthusiastic</h5>
        <p>100%</p>
      </motion.div>
    </>
  );
};

export default AboutCard;
