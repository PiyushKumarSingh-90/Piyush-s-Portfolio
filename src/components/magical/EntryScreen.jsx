import React from 'react';
import { useAudio } from '../../audio/AudioController';
import './EntryScreen.css';

const EntryScreen = ({ onComplete }) => {
  const { startAudio, setStartedWithoutAudio } = useAudio();

  const handleEnterWithSound = () => {
    startAudio();
    onComplete();
  };

  const handleEnterSilently = () => {
    setStartedWithoutAudio();
    onComplete();
  };

  return (
    <div className="entry-screen">
      <div className="entry-content">
        <h1 className="entry-title animate-fade-in">ENTER THE PORTFOLIO</h1>
        <div className="entry-actions animate-fade-in" style={{ animationDelay: '1s' }}>
          <button 
            className="entry-btn interactive" 
            onClick={handleEnterWithSound}
            data-hover="SOUND ON"
          >
            ENTER WITH SOUND
          </button>
          <div className="entry-divider"></div>
          <button 
            className="entry-btn interactive" 
            onClick={handleEnterSilently}
            data-hover="SILENT"
          >
            ENTER SILENTLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryScreen;
