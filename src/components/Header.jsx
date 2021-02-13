import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../styles/header.css';

const Header = ({ navOpen, setNavOpen }) => {
  const handleOpenNav = () => {
    setNavOpen(false);
  };

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
    <motion.header className='header' variants={exitVariants} animate='visible'>
      <h1 className='title'>
        <Link onClick={handleOpenNav} to='/'>
          AR Photo
        </Link>
      </h1>

      <nav>
        <ul className={navOpen ? 'nav-menu nav-open' : 'nav-menu'}>
          <li className={navOpen ? 'nav-item nav-open' : 'nav-item'}>
            <Link onClick={handleOpenNav} to='/'>
              Home
            </Link>
          </li>
          <li className={navOpen ? 'nav-item nav-open' : 'nav-item'}>
            <Link onClick={handleOpenNav} to='/work'>
              Work
            </Link>
          </li>
          <li className={navOpen ? 'nav-item nav-open' : 'nav-item'}>
            <Link onClick={handleOpenNav} to='/about'>
              About
            </Link>
          </li>
          <li className={navOpen ? 'nav-item nav-open' : 'nav-item'}>
            <Link onClick={handleOpenNav} to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className='burger'
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        <div className={navOpen ? 'line line1 nav-open' : 'line line1'}></div>
        <div className={navOpen ? 'line line2 nav-open' : 'line line2'}></div>
        <div className={navOpen ? 'line line3 nav-open' : 'line line3'}></div>
      </div>
    </motion.header>
  );
};

export default Header;
