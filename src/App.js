import { AnimatePresence, animations } from 'framer-motion';
import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
// import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import AnimatedText from "./components/AnimatedText.jsx"
// import Chat from "./components/Chat.js";
import { StarsCanvas } from './components/Star-animationi.jsx';
import UseScrollToTop from './hooks/useScrollToTop';
import Chat from './components/Chat.jsx';
import Opening from "./images/opening.mp4";
import IntroText from './components/IntroText.jsx';
const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

function App() {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoPlayed(true);
    setIsAnimationComplete(false);
  };
  const handleSkipVideo = () => {
    setIsVideoPlayed(true);
    setIsAnimationComplete(false);
  };
  // const handleAnimationEnd = () => {
    
  // }

  useEffect(() => {
    !isAnimationComplete&&(
      setTimeout(() => {
        setIsAnimationComplete(true);
      }, 12000)
    )
  }, [isAnimationComplete]);


  console.log(isVideoPlayed);

  return (
    <AnimatePresence>
      {
        !isVideoPlayed ? (
          <div className="video-container relative w-full h-screen overflow-hidden">
            <video
              src={Opening} // Replace with your video file path
              autoPlay
              muted
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            />
            <div className='absolute top-40 justify-center  w-full h-full flex flex-col'>
              <div style={{fontSize: "70px"}} className="text-center text-white font-bold">
                <IntroText />
              </div>
            </div>
            <button
              onClick={handleSkipVideo}
              className="skip-button absolute top-4 right-4 bg-white text-black px-4 py-2 rounded"
            >
              Skip
            </button>
          </div>
        ) :
          !isAnimationComplete ? (
            <AnimatedText />):
          (

            <div>

              

              <div className=" bg-black transition duration-300"
                style={{backgroundColor : 'black'}}
              >
                <Router>
                  <ScrollToTop />
                  <AppHeader />
                  <Suspense fallback={""}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="projects" element={<Projects />} />
                      <Route
                        path="projects/single-project"
                        element={<ProjectSingle />}
                      />

                      <Route path="about" element={<About />} />
                      <Route path="contact" element={<Contact />} />
                    </Routes>
                  </Suspense>
                  
                </Router>
                
                <UseScrollToTop />
                <div className='z-30' style={{zIndex: 30}}>

                {/* <Chat/> */}
                <Chat/>
                </div>
                <StarsCanvas />
              </div>

            </div>
          )}
		</AnimatePresence>
  );
}

export default App;
