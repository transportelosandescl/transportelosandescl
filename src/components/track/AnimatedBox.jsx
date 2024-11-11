import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css'; // Asegúrate de incluir tu archivo CSS

gsap.registerPlugin(ScrollTrigger);

const AnimatedBox = () => {
  const textRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    gsap.from(boxRef.current, {
      rotate: 360,
      duration: 2,
      scrollTrigger: {
        onEnter: () => {
          text.innerText = 'onEnter';
        },
        onLeave: () => {
          text.innerText = 'onLeave';
        },
        onEnterBack: () => {
          text.innerText = 'onEnterBack';
        },
        onLeaveBack: () => {
          text.innerText = 'onLeaveBack';
        },
        toggleActions: "play pause reverse reset",
        markers: true,
        start: 'top center',
        end: 'bottom 60%',
        trigger: boxRef.current,
      }
    });
  }, []);

  return (
    <div className="animation-container">
      <div className="box" ref={boxRef}></div>
      <div id="content">
        <h1 id="text" ref={textRef}>ToggleActions demo</h1>
        <p>scroll down</p>
      </div>
    </div>
  );
};

export default AnimatedBox;
