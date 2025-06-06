import React, { useEffect, useRef, useState } from 'react';
import imagesLoaded from 'imagesloaded';

import backgroundIMG from "../images/banner.png"
// Import your CSS styles here
import '../css/custom.css'; // Adjust the path as necessary

const Slideshow = () => {
  const slideshowRef = useRef(null);
  // const [slides, setSlides] = useState([
  //   {
  //     title: 'Monachopsis',
  //     meta: 'by Andrew Moore on 2/21',
  //     description: 'Thoughts in time and out of season.',
  //     figures: ,
  //     contentColor: '#e88655',
  //   },
  //   // Add more slides as necessary
  // ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Preload all images
  
    // Handle cursor effect and any additional initialization if necessary
    const cursorEffect = () => {
      // Cursor effect logic here...
      console.log('Cursor effects initialized');
    };

    cursorEffect();
  }, []);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + 1) % 3);
  };

  return (
    <div className="slideshow" ref={slideshowRef}>
     
        <div className={`slide  "slide--current" }`}  style={{backgroundColor: "#e88655"}}>
          <div className="slide__figure slide__figure--main" data-sort={3}>
            <div className="slide__figure-img" style={{ backgroundImage: `url(${backgroundIMG})` }}></div>
          </div>
          
          <h2 className="slide__title">CHARLITRON</h2>
          <div className="slide__text slide__text--right">
            <p className="slide__text-description">AAAA</p>
            <a className="slide__text-link" href="#">+</a>
          </div>
          <button className="slide__back" onClick={handlePrevSlide}>Previous</button>
          <button className="slide__back" onClick={handleNextSlide}>Next</button>
          <div className="slide__content">
            <p>Your slide content goes here...</p>
          </div>
        </div>
      
      <nav className="nav">
        <div className="nav__arrows">
          <button className="nav__arrow nav__arrow--prev" onClick={handlePrevSlide}>Previous</button>
          <button className="nav__arrow nav__arrow--next" onClick={handleNextSlide}>Next</button>
        </div>
        <div className="nav__counter">
          <span>{currentSlideIndex + 1}</span>/1
        </div>
      </nav>
    </div>
  );
};

export default Slideshow;