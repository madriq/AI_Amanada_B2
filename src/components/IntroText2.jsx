import React, { useEffect } from 'react';
import '../css/intro.css'; // Ensure your CSS file is imported
// import './AnimatedText.css'; // Make sure to create this CSS file

const IntroText2 = ({onAnimationEnd}) => {
  useEffect(() => {
    const h2 = document.querySelector('h2');
    const initial = h2.querySelector('.initial');
    const underlay = h2.querySelector('.underlay');
    const final = h2.querySelector('.final');
    const h3 = document.querySelector('h3');
    const initial1 = h3.querySelector('.initial1');
    const underlay1 = h3.querySelector('.underlay1');
    const final1 = h3.querySelector('.final1');

    setTimeout(() => {
      // Initial animations for h2
      h3.classList.add('zoom1');
      initial1.classList.add('transInStart1');
      underlay1.classList.add('show1');

      setTimeout(() => {
        initial1.classList.remove('transInStart1');
        underlay1.classList.remove('show1');
      }, 50);

      setTimeout(() => {
        initial1.classList.remove('transInStart1');
        initial1.classList.add('transInMid1');
        underlay1.classList.add('show1');
      }, 125);

      setTimeout(() => {
        initial1.classList.remove('transInMid1');
        initial1.classList.add('transInFin1');
        underlay1.classList.remove('show1');
      }, 175);

      // Hide initial text before showing final text
      setTimeout(() => {
        initial1.classList.add('transOutStart1');
        underlay1.classList.remove('show1');
      }, 5550);

      setTimeout(() => {
        initial1.classList.remove('transOutStart1');
        initial1.classList.add('transOutFin1');
      }, 3500);

      // Ensure initial text is completely hidden
      setTimeout(() => {
        initial1.style.display = 'none';
      }, 3500);

      // Final animations for h2
      setTimeout(() => {
        final1.classList.add('transInStart1');
        underlay1.classList.add('show1');
      }, 3550);

      setTimeout(() => {
        final1.classList.remove('transInStart1');
        underlay1.classList.remove('show1');
      }, 3600);

      setTimeout(() => {
        final1.classList.add('transInStepOne1');
        underlay1.classList.add('show1');
      }, 3700);

      setTimeout(() => {
        final1.classList.remove('transInStepOne1');
        final1.classList.add('transInStepTwo1');
        underlay.classList.remove('show1');
      }, 3800);

      setTimeout(() => {
        final1.classList.remove('transInStepTwo1');
        final1.classList.add('transInStepThree1');
        final1.querySelector('span').classList.add('show1');
      }, 3950);

      setTimeout(() => {
        final1.classList.remove('transInStepThree1');
        underlay1.classList.add('show1');
      }, 4025);

      setTimeout(() => {
        final1.classList.remove('transInStepThree1');
        // final.querySelector('span:nth-child(2)').classList.add('show');
        underlay1.classList.remove('show1');
      }, 4100);

    }, 4000);
    const annimationDuration = 5000; // Adjust this duration as needed
  }, []);

  return (
    <div className="background z-50">
      <h2>
        <div className="underlay1"></div>
        <span className="initial1">
          <span>Has entrado   </span>
          <span>en  </span>
          <span>el Santuario</span>
        </span>
        <span className="final1">
          <span>donde la Inteligencia, la Emoción y el Conocimiento real se fusionan"</span>
        </span>
      </h2>
    </div>
  );
};

export default IntroText2;