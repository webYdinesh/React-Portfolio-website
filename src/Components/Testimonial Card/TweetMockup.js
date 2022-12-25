import React from 'react'
import './TweetMockup.css'
import review1 from '../../Images/review-1.png';
import review2 from '../../Images/review-2.png';
import review3 from '../../Images/review-3.png';
import review4 from '../../Images/review-4.png';
import {motion} from 'framer-motion'
const TweetMockup = () => {
  return (
    <>

    <div className='mockup-group mockup-group-one '>
    <motion.div className="img-box-one" initial={{ y: 100, opacity: 0 }}
              transition={{ duration: .8 }}
              whileInView={{ y: 0, opacity: 1 }}>
    <img src={review1} alt="review1" />
    </motion.div>
    <motion.div className="img-box-one" initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}>
    <img src={review2} alt="review2" />
    </motion.div>
    <motion.div className="img-box-one" initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}>
    <img src={review3} alt="review3" />
    </motion.div>
    <motion.div className="img-box-one" initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1.4 }}
              whileInView={{ y: 0, opacity: 1 }}>
    <img src={review4} alt="revire4" />
    </motion.div>
       
    </div>
    </>
  )
}

export default TweetMockup