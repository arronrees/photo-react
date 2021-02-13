import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import cards from '../components/card';

gsap.registerPlugin(ScrollTrigger);

const PhotoGrid = () => {
  const cardReveal = useRef([]);
  cardReveal.current = [];

  const addToRefs = (el) => {
    if (el && !cardReveal.current.includes(el)) {
      cardReveal.current.push(el);
    }
  };

  useEffect(() => {
    cardReveal.current.forEach((el) => {
      gsap.fromTo(
        el.children,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          duration: 1.5,
          y: 0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className='photo-grid'>
      {cards.map((card) => (
        <figure className={card.class} key={card.name} ref={addToRefs}>
          <img src={card.image} alt='#' />
        </figure>
      ))}
    </div>
  );
};

export default PhotoGrid;
