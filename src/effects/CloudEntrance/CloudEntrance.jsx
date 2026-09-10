import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CloudEntrance.css';
import { useAudio } from '../../audio/AudioController';

const CloudEntrance = ({ onComplete }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const { startAudio, isPlaying } = useAudio();
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      video.play().catch(e => {
         console.warn("Autoplay blocked, waiting for interaction", e);
      });

      let fadeStarted = false;
      const handleTimeUpdate = () => {
        if (video.duration && video.currentTime >= video.duration - 1.0 && !fadeStarted) {
          fadeStarted = true;
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }
      };

      const handleEnded = () => {
        if (!fadeStarted) {
          fadeStarted = true;
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [onComplete]);

  const handleSkip = (e) => {
    e.stopPropagation(); // Prevent container click
    if (videoRef.current) {
      videoRef.current.pause(); // Explicitly pause video
    }
    startAudio(); // Start background music when skipped
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
  };

  const handleContainerClick = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      if (videoRef.current) {
        videoRef.current.muted = false; // Unmute video on click
        videoRef.current.play(); // Ensure it is playing
      }
      startAudio();
    }
  };

  return (
    <div className="cloud-entrance-container" ref={containerRef} onClick={handleContainerClick}>
      <video 
        ref={videoRef}
        src="/assets/intro.mp4" 
        className="entrance-video"
        muted={!hasInteracted || !isPlaying}
        playsInline
      />
      <div className="skip-button" onClick={handleSkip}>
        SKIP INTRO
      </div>
    </div>
  );
};

export default CloudEntrance;
