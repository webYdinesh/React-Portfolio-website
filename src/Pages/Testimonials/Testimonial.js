import React from "react";
import TestimonialSlider from "../../Components/Testimonial Card/TestimonialSlider";
import TweetMockup from "../../Components/Testimonial Card/TweetMockup";
import "./Testimonial.css";
import { motion } from "framer-motion";
const Testimonial = () => {
  return (
    <div id="testimonials" className="container">
      <section className="testimonial-section">
        <div className="testimonial-title flex">
          <motion.p initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>What Clients Says</motion.p>
          <motion.h3 initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}> Testimonials</motion.h3>
        </div>
        <div className="mockup-container">
          <div className="mockup-inner-box"></div>
          <TweetMockup />
        </div>
        <div className="card-slider-container flex">
      <TestimonialSlider/>

        </div>
      </section>
    </div>
  );
};

export default Testimonial;
