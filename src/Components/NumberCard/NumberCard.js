import React, { useState } from "react";
import "./NumberCard.css";
import { motion } from "framer-motion";
import { AiFillFire } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const NumberCard = () => {
  const [onView, setOnView] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setOnView(true)}
        onExit={() => setOnView(false)}
      >
        <div className="animated flex">
          <motion.div className="animated-card flex" initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>
            <AiFillFire fontSize={40} fill={"#D73502"} />
            {onView && <CountUp end={15} suffix={"+"} />}

            <p>Projects</p>
          </motion.div>
          <motion.div className="animated-card flex" initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>
            <BsPeopleFill fontSize={40} fill={"#5E00FB"} />
            {onView && <CountUp end={12} suffix={"+"} />}

            <p>Clients Served</p>
          </motion.div>
          <motion.div className="animated-card flex" initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>
            <FaGraduationCap fontSize={40} fill={"#40E0D0"} />
            {onView && <CountUp end={1} suffix={"Years"} />}

            <p>Experience</p>
          </motion.div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default NumberCard;
