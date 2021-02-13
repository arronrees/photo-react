import { motion } from 'framer-motion';

import ContactForm from '../components/ContactForm';

const Contact = () => {
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
      className='contact'
      variants={exitVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <ContactForm />
    </motion.section>
  );
};

export default Contact;
