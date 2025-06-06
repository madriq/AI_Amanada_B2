import React, { useEffect } from 'react';
import '../css/style.css'; // Ensure your CSS file is imported
// import './AnimatedText.css'; // Make sure to create this CSS file

const AnimatedText = ({onAnimationEnd}) => {
  useEffect(() => {
    const h2 = document.querySelector('h2');
    const initial = h2.querySelector('.initial');
    const underlay = h2.querySelector('.underlay');
    const final = h2.querySelector('.final');

    setTimeout(() => {
      // Initial animations for h2
      h2.classList.add('zoom');
      initial.classList.add('transInStart');
      underlay.classList.add('show');

      setTimeout(() => {
        initial.classList.remove('transInStart');
        underlay.classList.remove('show');
      }, 50);

      setTimeout(() => {
        initial.classList.remove('transInStart');
        initial.classList.add('transInMid');
        underlay.classList.add('show');
      }, 125);

      setTimeout(() => {
        initial.classList.remove('transInMid');
        initial.classList.add('transInFin');
        underlay.classList.remove('show');
      }, 175);

      // Hide initial text before showing final text
      setTimeout(() => {
        initial.classList.add('transOutStart');
        underlay.classList.remove('show');
      }, 5550);

      setTimeout(() => {
        initial.classList.remove('transOutStart');
        initial.classList.add('transOutFin');
      }, 3500);

      // Ensure initial text is completely hidden
      setTimeout(() => {
        initial.style.display = 'none';
      }, 3500);

      // Final animations for h2
      setTimeout(() => {
        final.classList.add('transInStart');
        underlay.classList.add('show');
      }, 3550);

      setTimeout(() => {
        final.classList.remove('transInStart');
        underlay.classList.remove('show');
      }, 3600);

      setTimeout(() => {
        final.classList.add('transInStepOne');
        underlay.classList.add('show');
      }, 3700);

      setTimeout(() => {
        final.classList.remove('transInStepOne');
        final.classList.add('transInStepTwo');
        underlay.classList.remove('show');
      }, 3800);

      setTimeout(() => {
        final.classList.remove('transInStepTwo');
        final.classList.add('transInStepThree');
        final.querySelector('span').classList.add('show');
      }, 3950);

      setTimeout(() => {
        final.classList.remove('transInStepThree');
        underlay.classList.add('show');
      }, 4025);

      setTimeout(() => {
        final.classList.remove('transInStepThree');
        // final.querySelector('span:nth-child(2)').classList.add('show');
        underlay.classList.remove('show');
      }, 4100);

    }, 1000);
    const annimationDuration = 5000; // Adjust this duration as needed
  }, []);

  return (
    <div className="background z-50">
      <h2>
        <div className="underlay"></div>
        <span className="initial">
          <span>No   </span>
          <span>solo</span>
          <span>ves </span>
          <span>una </span>
          <span>página </span>
          
        </span>
        <span className="final">
          <span>𝑬𝒔𝒕𝒂𝒔 𝒄𝓻𝓾𝒛𝒂𝒏𝒅𝓸 𝒖𝒏 𝒫𝒪𝑅𝒯𝒶𝓁</span>
        </span>
      </h2>
    </div>
  );
};

export default AnimatedText;