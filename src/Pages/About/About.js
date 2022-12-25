import React from "react";
import AboutCard from "../../Components/About Card/AboutCard";
import { BsPeople } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import AboutImage from '../../Images/about-image.jpg'
import { motion } from "framer-motion";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="container">
      <section className="about-section">
        <div className="about-title flex">
          <motion.p initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>Introduction</motion.p>
          <motion.h3 initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}>About Me</motion.h3>
        </div>
        <div className="about-container">
          <div className="grid-image-side flex">
            <motion.div initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }} className="about-image">
              <img src={AboutImage} alt="" />
            </motion.div>
          </div>
          <div className="grid-about-side">
            <div className="card-section flex ">
              <AboutCard />
            </div>
            <div className="text-section">
              <motion.p initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}>
                Hello, I'm a MERN Stack Developer. I Develop Both Frontend &
                Backend Of Website With Attractive User-Interface. I Have Years
                Of Experience And Many Happy Clients With The Projects Carried
                Out. You Can Check Testimonials Below. If You Have Any Question
                or Query Regarding Website, Please Don't Hesitate To Contact
                Us.Thanks For Visiting Our Site.
              </motion.p>
            </div>
            <div className="about-button flex">
              <motion.a href="#contact" className="flex" initial={{ y: 50, opacity: 0 }}
              transition={{ duration: .8 }}
              whileInView={{ y: 0, opacity: 1 }}>
                Contact Me <FaRegAddressCard className="address" fontSize={20} />
              </motion.a>
              <motion.a href="#testimonials" className="flex" initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>
                Testimonial <BsPeople fontSize={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
