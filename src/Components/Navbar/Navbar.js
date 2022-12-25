import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineMenuUnfold } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { RiCodeSSlashLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { motion } from "framer-motion";
import navImg from "../../Images/nav-img.png"
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isNavActive, setIsNavActive] = useState("#");
  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const changeNavWidth = {
    true: {
      width: "260px",
    },
    false: {
      width: "90px",
    },
  };
  const changeButtonPlace = {
    false: {
      width: "60px",
    },
  };
  const changeImgWidth = {
    false: {
      width: "6rem",
    },
  };
  const changeTextWidth = {
    false: {
      fontSize: "0px",
    },
  };
  const changeSpanWidth = {
    false: {
      display: "none",
    },
  };

  return (
    <motion.header
      animate={{ x: "9.5vw" }}
      initial={{ x: "-20vw" }}
      transition={{ delay: 2, duration: 4, type: "spring" }}
    >
      <motion.div
        data-open={isActive}
        animate={`${isActive}`}
        variants={changeNavWidth}
        className="navbar"
      >
        <div className="menu-btn flex">
          <motion.button
            animate={`${isActive}`}
            variants={changeButtonPlace}
            whileHover={{ rotate: 180, scale: 1.2 }}
            className="menu-toggle"
            onClick={toggleNav}
          >
            <AiOutlineMenuUnfold color="#" fontSize={"30px"} />
          </motion.button>
        </div>

        <div className="nav-contents">
          <div className="profile-section flex">
            <motion.div
              animate={`${isActive}`}
              variants={changeImgWidth}
              className="nav-profile-image flex"
            >
              <img
                src={navImg}
                alt="ProfileImage"
              />
            </motion.div>
            <div className="profile-name">
              <motion.h5 animate={`${isActive}`} variants={changeTextWidth}>
                Dinesh Bisht
              </motion.h5>
            </div>
            <div className="stack">
              <motion.h6 animate={`${isActive}`} variants={changeTextWidth}>
                MERN Stack Developer
              </motion.h6>
            </div>
          </div>
          <nav>
            <ul className="nav-items flex">
              <li>
                <motion.a
                  className={`flex link ${isNavActive === "#" ? "active" : ""}`}
                  onClick={() => {
                    setIsActive(false) 
                    setIsNavActive("#")}}
                  href="#"
                  animate={`${isActive}`}
                >
                  <AiOutlineHome fontSize={"35"} />
                  <motion.span
                    animate={`${isActive}`}
                    variants={changeSpanWidth}
                  >
                    Home
                  </motion.span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  onClick={() =>{
                    setIsActive(false)
                   setIsNavActive("#about")}}
                  className={`flex link ${
                    isNavActive === "#about" ? "active" : ""
                  }`}
                  href="#about"
                  animate={`${isActive}`}
                >
                  <BsQuestionCircle fontSize={"35"} />
                  <motion.span
                    animate={`${isActive}`}
                    variants={changeSpanWidth}
                  >
                    About
                  </motion.span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  onClick={() => {setIsNavActive("#projects")
                  setIsActive(false)}}
                  className={`flex link ${
                    isNavActive === "#projects" ? "active" : ""
                  }`}
                  href="#projects"
                  animate={`${isActive}`}
                >
                  <RiCodeSSlashLine fontSize={"35"} />
                  <motion.span
                    animate={`${isActive}`}
                    variants={changeSpanWidth}
                  >
                    Projects
                  </motion.span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  onClick={() => {setIsNavActive("#testimonials")
                  setIsActive(false)}}
                  className={`flex link ${
                    isNavActive === "#testimonials" ? "active" : ""
                  }`}
                  href="#testimonials"
                  animate={`${isActive}`}
                >
                  <BsPeople fontSize={"35"} />
                  <motion.span
                    animate={`${isActive}`}
                    variants={changeSpanWidth}
                  >
                    Testimonials
                  </motion.span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  onClick={() => {setIsNavActive("#contact")
                  setIsActive(false)}}
                  className={`flex link ${
                    isNavActive === "#contact" ? "active" : ""
                  }`}
                  href="#contact"
                  animate={`${isActive}`}
                >
                  <FaRegAddressCard fontSize={"35"} />
                  <motion.span
                    animate={`${isActive}`}
                    variants={changeSpanWidth}
                  >
                    Contact
                  </motion.span>
                </motion.a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
