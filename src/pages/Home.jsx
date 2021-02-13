import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import bgImg from '../img/bg.jpg';
import chevron from '../icons/chevron.svg';
import '../styles/home.css';

const Home = () => {
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
      className='home'
      style={{
        backgroundImage: `url('${bgImg}')`,
      }}
      variants={exitVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='home-header'>
        <h1>AR</h1>
        <h2>Photo</h2>
      </div>
      <main className='home-main'>
        <img className='chevron' src={chevron} alt='#' />
        <nav>
          <ul className='home-nav-menu'>
            <li className='home-nav-item'>
              <Link to='/about'>About</Link>
            </li>
            <li className='home-nav-item'>
              <Link to='/work'>Work</Link>
            </li>
            <li className='home-nav-item'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </main>
    </motion.section>
  );
};

export default Home;
