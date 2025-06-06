import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import './index.css'; // Import the CSS file for styling

const TitleCanvas = () => {
    const titleRef = useRef(null);  // Create a reference for the title element

    useEffect(() => {
      // Create a GSAP animation for the title glow effect
      gsap.to(titleRef.current, {
        textShadow: '0 0 10px rgba(255, 0, 255, 1), 0 0 20px rgba(255, 0, 255, 0.5)', // Pink glow
        duration: 1,
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Reverse the animation on repeat for a pulsing effect
        ease: 'power1.inOut', // Smooth animation
      });
    }, []);

  return (
    <div className="container flex-col">
      <h1 className="title items-center align-middle justify-center text-center m-auto " ref={titleRef}>Move the mouse</h1>
      <h2 className="subtitle">See the magic</h2>
    </div>
  );
};

export default TitleCanvas;