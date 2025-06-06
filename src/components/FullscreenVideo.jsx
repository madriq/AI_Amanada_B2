import React, { useEffect, useRef } from 'react';
import Opening from "../images/opening.mp4"
const FullscreenVideo = ({onVideoEnd}) => {
    const videoRef = useRef(null);

    const requestFullscreen = (element) => {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    };

    useEffect(() => {
        const handlePlay = () => {
            if (videoRef.current) {
                videoRef.current.play();
                requestFullscreen(videoRef.current);
            }
        };

        const handleEnd = () => {
            if (onVideoEnd) {
                onVideoEnd(); // Call the end handler
            }
        };

        const timeoutId = setTimeout(handlePlay, 1000); // Delay to ensure user interaction

        // Adding event listener for video end
        if (videoRef.current) {
            videoRef.current.addEventListener('ended', handleEnd);
        }

        return () => {
            clearTimeout(timeoutId); // Cleanup timeout

            // Only remove the event listener if the videoRef is assigned
            if (videoRef.current) {
                videoRef.current.removeEventListener('ended', handleEnd); // Cleanup event listener
            }
        };
    }, [onVideoEnd]);

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                
                muted
                loop ={false}
            >
                <source src={Opening} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default FullscreenVideo;