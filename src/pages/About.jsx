import { motion } from 'framer-motion';

import '../styles/about.css';

import aboutImg from '../img/about-img.jpg';

const About = () => {
  const exitVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className='about'
      variants={exitVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <section className='hero'>
        <div className='hero-desc'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam
            magni blanditiis adipisci minima sunt, natus ex est, non nesciunt
            perspiciatis earum veritatis saepe rem maxime ipsum accusantium
            cupiditate quos aliquid! Minima, dolorem iste? Ad iusto error ipsum
            neque, quasi nostrum itaque, amet eos optio, explicabo omnis nihil
            repudiandae doloribus!
          </p>
        </div>

        <div className='hero-img'>
          <img src={aboutImg} alt='#' />
        </div>
      </section>
    </motion.section>
  );
};

export default About;
