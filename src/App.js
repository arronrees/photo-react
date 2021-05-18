import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  const location = useLocation();

  const [navOpen, setNavOpen] = useState(false);
  const [onHome, setOnHome] = useState(true);

  useEffect(() => {
    if (location.pathname !== '/') {
      setOnHome(false);
    } else {
      setTimeout(() => {
        setOnHome(true);
      }, 800);
    }
  }, [location.pathname]);

  return (
    <div className={navOpen ? 'App nav-open' : 'App'}>
      {!onHome && <Header navOpen={navOpen} setNavOpen={setNavOpen} />}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/work'>
            <Work />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route path='*'>
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
