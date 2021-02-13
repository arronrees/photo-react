import { motion } from 'framer-motion';

import PhotoGrid from '../components/PhotoGrid';

import '../styles/work.css';

const Work = () => {
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
      className='work'
      variants={exitVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <PhotoGrid />
    </motion.section>
  );
};

export default Work;
