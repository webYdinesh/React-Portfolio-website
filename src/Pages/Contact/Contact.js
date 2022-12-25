import React from "react";
import ContactCard from "../../Components/Contact Card/ContactCard";
import ContactData from "../../Components/Contact Card/ContactData";
import "./Contact.css";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div id="contact" className="container">
      <section className="contact-section">
        <div className="contact-title flex">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Get In Touch
          </motion.p>
          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Contact Me
          </motion.h3>
        </div>
        <div className="contact-grid">
          <div className="contact-via-social">
            <motion.h4
              initial={{ y: -50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Talk To Me
            </motion.h4>
            <div className="contact-card-container flex">
              {ContactData.map(({ socialIcon, social, socialId, link }, i) => {
                return (
                  <ContactCard
                    key={i}
                    socialIcon={socialIcon}
                    social={social}
                    socialId={socialId}
                    link={link}
                  />
                );
              })}
            </div>
          </div>
          <div className="contact-via-form">
            <motion.h4
              initial={{ y: -50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Write Me Your Project
            </motion.h4>
            <form action="https://formspree.io/f/xayzwapp" method="POST">
              <motion.div
                className="client-name form-contact flex"
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Name"
                  required
                  autoComplete="off"
                />
              </motion.div>
              <motion.div
                className="client-email form-contact flex"
                initial={{ y: 70, opacity: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="E-mail"
                  required
                  autoComplete="off"
                />
              </motion.div>
              <motion.div
                className="client-message form-contact flex"
                initial={{ y: 70, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                <textarea
                  name="Message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                  required
                  autoComplete="off"
                />
              </motion.div>
              <motion.button
                type="submit"
                id="submit"
                initial={{ y: 70, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
