import React from "react";
import { motion } from "framer-motion";
import TopNav from "../../Components/TopNav/TopNav";
import { IoMdGitNetwork } from "react-icons/io";
import { TbMessageCode } from "react-icons/tb";
import heroImg from '../../Images/profile.png'
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="container">
      <TopNav />
      <main>
        <div className="home-section flex">
          <div className="intro-text flex">
            <motion.h4
              initial={{ x: -30, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              Hello I'm
            </motion.h4>
            <motion.h3
              initial={{ x: 30, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              Dinesh Singh Bisht
            </motion.h3>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              A MERN Stack Developer
            </motion.p>
          </div>
          <div className="profile-image flex">
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              src={heroImg}
              alt="profile"
            />
          </div>
          <div className="profile-info-link flex">
            <motion.a
              initial={{ x: -30, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              href="#projects"
              className="flex"
            >
              My Work <IoMdGitNetwork />
            </motion.a>
            <motion.a
              initial={{ x: 30, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              href="#contact"
              className="flex"
            >
              Let's Talk <TbMessageCode fontSize={20} />{" "}
            </motion.a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
