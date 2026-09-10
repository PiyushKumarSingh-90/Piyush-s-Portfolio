import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { themeConfig } from '../data/themeConfig';

const AudioContext = createContext(null);

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  const fadeIntervalRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
    }
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  const fadeIn = React.useCallback(() => {
    if (!audioRef.current) return;
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
        setHasStarted(true);
        audioRef.current.volume = themeConfig.audio.defaultVolume;
      }).catch(e => {
        console.error('Audio play error:', e);
        setIsPlaying(false);
      });
    }
  }, []);

  const fadeOut = React.useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const startAudio = React.useCallback(() => {
    fadeIn();
  }, [fadeIn]);

  const toggleMute = React.useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      fadeOut();
    } else {
      setIsPlaying(true);
      fadeIn();
    }
  }, [isPlaying, fadeOut, fadeIn]);

  const setStartedWithoutAudio = React.useCallback(() => {
    setHasStarted(true);
  }, []);

  const handlePlay = React.useCallback(() => {
    setIsPlaying(true);
    setHasStarted(true);
  }, []);

  const handlePause = React.useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <AudioContext.Provider value={{ isPlaying, toggleMute, startAudio, hasStarted, setStartedWithoutAudio }}>
      <audio 
        ref={audioRef} 
        src="/audio/background-theme.mp3" 
        loop 
        preload="auto"
        onPlay={handlePlay}
        onPause={handlePause}
      />
      {children}
    </AudioContext.Provider>
  );
};
