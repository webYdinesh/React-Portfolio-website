import React from "react";
import "./ContactCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
const ContactCard = ({socialIcon,social,socialId,link}) => {
  return (
    <motion.div className="contact-card flex" initial={{ y: 70, opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{ y: 0, opacity: 1 }}>
      <div className="social-icon">
       {socialIcon}
      </div>
      <div className="social-detail">
        <h6>{social}</h6>
        <p>{socialId}</p>
       
          <a
            className="flex contact-link"
            href={link} target='_blank'
          >
            Write Me <FaLongArrowAltRight className="arrow-icon" />
          </a>
      
      </div>
    </motion.div>
  );
};

export default ContactCard;
